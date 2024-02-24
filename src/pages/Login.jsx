import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSingIn, githubSignIn, googleSingIn, loginUser } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);

    try {
      const user = await loginUser(input.email, input.password);
      console.log(user);
      navigate("/");
    } catch (error) {
      // console.log(error);
      setErr(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSingIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFBSignIn = async () => {
    try {
      await fbSingIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await githubSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center font-anta">
      <form className="w-[400px] border flex justify-center flex-col mx-auto p-2 rounded text-sm">
        <h2 className="text-2xl text-center font-bold mb-5">Login</h2>

        {err && (
          <span className="text-red-700 font-bold text-center">
            {err?.message}{" "}
          </span>
        )}

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
            onClick={handleLogin}
            disabled={!input.email || !input.password || loading}
            className="flex items-center justify-center bg-slate-400 w-[90%] mx-auto p-1 rounded hover:bg-slate-500 transition disabled:opacity-35 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-2 border-slate-100 rounded-full border-t-slate-100/50"
                  viewBox="0 0 24 24"
                ></svg>
                Loading
              </>
            ) : (
              "Login"
            )}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex items-center gap-4 border border-slate-700 w-[90%] mx-auto p-1 rounded my-2 justify-center hover:bg-amber-400 transition-all"
          >
            <FcGoogle />

            <span>Google Sign In</span>
          </button>

          <button
            type="button"
            onClick={handleFBSignIn}
            className="flex items-center gap-4 border border-slate-700 w-[90%] mx-auto p-1 rounded my-2 justify-center hover:bg-blue-500 transition-all"
          >
            <FaFacebookF />
            <span>Facebook Sign In</span>
          </button>

          <button
            type="button"
            onClick={handleGithubSignIn}
            className="flex items-center gap-4 border border-slate-700 w-[90%] mx-auto p-1 rounded my-2 justify-center hover:bg-slate-800 hover:text-white transition-all"
          >
            <FaGithub />
            <span>Github Sign In</span>
          </button>

          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="underline ">
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
