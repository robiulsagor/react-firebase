import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPass() {
  const [email, setEmail] = useState("");

  return (
    <section className="h-screen flex items-center justify-center font-anta">
      <form className="w-[400px] border flex justify-center flex-col mx-auto p-2 rounded">
        <h2 className="text-2xl text-center font-bold mb-5">Reset Password</h2>

        <div className="w-full  block mx-auto py-1">
          <label htmlFor="email">Enter your Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={() => setEmail(e.target.value)}
            className="block border w-full px-2 py-1 rounded"
          />
        </div>

        <div className="mt-5 text-center">
          <button
            type="submit"
            className="bg-slate-400 w-[90%] mx-auto p-1 rounded hover:bg-slate-500 transition"
          >
            Send reset email
          </button>

          <p className="text-sm mt-3">
            <Link to="/login" className="underline">
              Back to Login
            </Link>{" "}
          </p>
        </div>
      </form>
    </section>
  );
}
