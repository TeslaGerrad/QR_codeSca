import React, { PropsWithChildren, useRef, useState } from "react";
import DownArrow from "@heroicons/react/20/solid/ChevronDownIcon";
import UpArrow from "@heroicons/react/20/solid/ChevronUpIcon";
import { motion, useCycle, Variants } from "framer-motion";
import { AnimateHeight } from "./animation/AnimationHeight";
// import { sidebar } from "./Animation";

// import styles from "./Input.module.css";

type Props = {
  style?: React.CSSProperties | undefined;
  title?: string;
} & PropsWithChildren;

const Input = (props: Props) => {
  const [isOpen, toggleOpen] = useState(true);
  const [isChildOpen, setIsChildOpen] = useState(false);

  const variantsMainDiv: Variants = {
    open: {
      opacity: 1,
      height: "auto",
      x: 0,
      transition: {
        ease: "easeIn",
      },
    },
    collapsed: {
      transition: {
        ease: "easeIn",
      },
      opacity: 1,
      height: "0px",
    },
  };
  const variants = {
    open: {
      opacity: 1,
      height: "100%",
      x: 0,
      transition: {
        ease: "easeIn",
      },
    },
    collapsed: {
      opacity: 1,
      transition: {
        ease: "easeIn",
      },
      height: "100%",
    },
  };

  const inRef = useRef<HTMLDivElement>(null);
  function handleInput(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    console.debug(e.currentTarget.offsetHeight);
    console.debug(inRef.current?.offsetHeight);

    toggleOpen(!isOpen);
  }
  return (
    <AnimateHeight variants={variants} isVisible={isOpen}>
      <motion.div
        onClick={handleInput}
        className="App overflow-hidden rounded-lg flex flex-col p-5 w-[100%]  bg-secondary_light"
        style={props.style}
      >
        <motion.div className={`background flex justify-between`}>
          <div className="text-xs font-bold uppercase">{props.title}</div>
          <div>
            {""}
            {!isOpen ? (
              <DownArrow className={``} color="#fffff" height={14} />
            ) : (
              <UpArrow className={``} color="#fffff" height={14} />
            )}
          </div>
        </motion.div>
        <AnimateHeight variants={variantsMainDiv} isVisible={isOpen}>
          <motion.div ref={inRef}>{props.children}</motion.div>
        </AnimateHeight>

        {/* <motion.div
        animate={isChildOpen ? "open" : "closed"}
        variants={liVariants}
        className="p-1"
      >
        {props.children}
      </motion.div> */}
      </motion.div>
    </AnimateHeight>
  );
};

export default Input;
