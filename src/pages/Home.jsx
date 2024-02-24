import { useState } from "react";

export default function Home() {
  const [plan, setPlan] = useState("");

  return (
    <section>
      <div className="border p-3 w-[400px] font-anta mx-auto mt-5 rounded">
        <h2 className="text-center font-bold text-2xl mb-5 ">
          Hi, %user%! Welcome
        </h2>
        <p className="text-center">
          It's a nice and lovely and sunny day! Wish you gain your success!
        </p>

        <p className="mt-5">What's your plan for today?</p>

        <textarea
          className="border rounded p-2 w-full"
          name=""
          id=""
          placeholder="You can Type your plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        ></textarea>

        <div className="flex flex-col  justify-center items-center gap-3">
          <button className="bg-slate-500 w-[60%] mt-3 rounded py-1 ">
            Submit
          </button>

          <button className="bg-red-800 block w-[60%] p-1 text-white rounded">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
