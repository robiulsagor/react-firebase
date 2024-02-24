export const listVariants = {
  initial: { x: "-10vw" },
  animate: { x: 0, transition: { staggerChildren: 0.15 } },
  exit: {
    x: "-12rem",
    opacity: 0,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};
