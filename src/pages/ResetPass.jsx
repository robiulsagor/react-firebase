import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { resetPass } from "../firebase";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function ResetPass() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("error");

  const handleResetPass = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await resetPass(email);
      console.log("try to send");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center font-anta">
      <div className="border w-[400px] p-2">
        <h2 className="text-2xl text-center font-bold mb-5">Reset Password</h2>

        <div className="mt-2 mb-5 text-sm text-center text-white rounded">
          {status === "loading" ? (
            <div className="w-[40%] bg-purple-700  flex justify-center items-center mx-auto p-1 rounded text-white">
              <svg
                className="animate-spin h-5 w-5 mr-3 border-2 border-slate-100 rounded-full border-t-slate-100/50"
                viewBox="0 0 24 24"
              ></svg>
              Loading
            </div>
          ) : status == "success" ? (
            <div className=" bg-green-700/80 py-1 px-2 rounded">
              <div className="mb-2 pt-2 ">
                <FaCheck className=" text-center mx-auto bg-green-800 p-1 w-6 h-6 rounded-full" />
              </div>
              <span>
                An email is sent to your email address. Please follow the
                instructions to reset your password.
              </span>
            </div>
          ) : status == "error" ? (
            <div className=" bg-red-700/60 py-2 px-2 rounded">
              <div className="mb-2 pt-0 ">
                <RxCross2 className=" text-center mx-auto bg-red-800 p-1 w-6 h-6 rounded-full" />
              </div>

              <span>Error sending email. Please try later!</span>
            </div>
          ) : (
            <form className="  flex justify-center flex-col mx-auto p-2 rounded text-sm text-left text-black">
              <div className="w-full  block mx-auto py-1 ">
                <label htmlFor="email">Enter your Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block border w-full px-2 py-1 mt-1 rounded"
                />
              </div>

              <div className="mt-5 text-center">
                <button
                  type="submit"
                  onClick={handleResetPass}
                  className="bg-slate-400 w-[90%] mx-auto p-1 rounded hover:bg-slate-500 transition"
                >
                  Send reset email
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-sm mt-3 text-center">
          <Link to="/login" className="underline">
            Back to Login
          </Link>{" "}
        </p>
      </div>
    </section>
  );
}
