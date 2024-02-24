import { useState, ref, useRef } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { FaTimesCircle } from "react-icons/fa";
import { listVariants } from "../data/variants";

export default function Home() {
  const navigate = useNavigate();
  const planRef = useRef();

  const [plan, setPlan] = useState("");
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const [allPlans, setAllPlans] = useState(
    JSON.parse(localStorage.getItem("day-plan")) || null
  );

  const addPlan = (e) => {
    const isSavedBefore = JSON.parse(localStorage.getItem("day-plan"));
    const planId = Math.random().toString(36).substr(2, 16);

    const newPlan = {
      id: planId,
      plan,
    };

    const newItems = isSavedBefore ? [...isSavedBefore, newPlan] : [newPlan];

    localStorage.setItem("day-plan", JSON.stringify(newItems));
    setAllPlans(newItems);
    setPlan("");
    planRef.current.focus();
  };

  const removePlan = (id) => {
    const filtered = allPlans.filter((p) => p.id !== id);

    console.log(filtered);
    localStorage.setItem("day-plan", JSON.stringify(filtered));
    setAllPlans(filtered);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <h2>Loading, please wait</h2>;

  return (
    <section>
      <div className="border p-3 w-[400px] font-anta mx-auto mt-5 rounded">
        <h2 className="text-center font-bold text-2xl mb-5 ">
          Hi, {user?.displayName ? user?.displayName : user?.email}, <br />{" "}
          Welcome!
        </h2>
        <p className="text-center mb-1">
          It's a nice and lovely and sunny day! Wish you gain your success!
        </p>

        {allPlans?.length > 0 && (
          <div className="my-3">
            <h3 className="font-bold">Your plans: </h3>

            <motion.ul
              key="dfdf"
              variants={listVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-sm ml-4 list-disc"
            >
              <AnimatePresence>
                {allPlans.map((p, i) => (
                  <motion.li
                    variants={listVariants}
                    initial={{ x: "-10vw" }}
                    animate={{ x: 0 }}
                    // transition={{ duration: 0.8, bounce: 0.7, type: "spring" }}
                    exit={{
                      x: "-12rem",
                      opacity: 0,
                      transition: {
                        staggerChildren: 0.15,
                        staggerDirection: -1,
                        when: "afterChildren",
                      },
                    }}
                    className="list-disc border-b flex items-center justify-between py-1 "
                    key={p.id}
                  >
                    <span> {p.plan}</span>
                    <motion.span
                      whileTap={{ scale: 0.7 }}
                      onClick={() => removePlan(p.id)}
                    >
                      <FaTimesCircle className="hover:text-red-700 cursor-pointer transition-all duration-300" />
                    </motion.span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        )}

        <label htmlFor="plan" className="block mt-5 mb-1">
          What's your plan for today?
        </label>

        <textarea
          className="border rounded p-2 w-full text-sm"
          id="plan"
          ref={planRef}
          placeholder="You can Type your plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        ></textarea>

        <div className="flex flex-col  justify-center items-center gap-3">
          <button
            className="bg-slate-500 w-[60%] mt-3 rounded py-1 "
            type="submit"
            onClick={addPlan}
          >
            Submit
          </button>

          <button
            className="bg-red-800 block w-[60%] p-1 text-white rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
