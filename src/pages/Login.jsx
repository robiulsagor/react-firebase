import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  console.log(input);

  return (
    <section className="h-screen flex items-center justify-center font-anta">
      <form className="w-[400px] border flex justify-center flex-col mx-auto p-2 rounded">
        <h2 className="text-2xl text-center font-bold mb-5">Login</h2>

        <div className="w-full  block mx-auto py-1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleChange}
            className="block border w-full px-2 py-1 rounded"
          />
        </div>

        <div className="w-full  block mx-auto py-1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={handleChange}
            className="block border w-full px-2 py-1 rounded"
          />
        </div>

        <div className="mt-5 text-center">
          <button
            type="submit"
            className="bg-slate-400 w-[90%] mx-auto p-1 rounded hover:bg-slate-500 transition"
          >
            Login
          </button>

          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>{" "}
          </p>

          <p className="text-sm mt-3">
            Forgot password?{" "}
            <Link to="/reset" className="underline">
              Reset Password
            </Link>{" "}
          </p>
        </div>
      </form>
    </section>
  );
}
