import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { animate, motion } from "framer-motion";
import AppWrap from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My creative <span> Portofolio</span>
      </h2>
      <div className="app__work-filter">
        {["Web App", "React JS", "Redux", "Tailwind", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p_text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0, delayChildren: 0.5 }}
        className="app__work-portofolio"
      ></motion.div>
    </>
  );
};

export default Work;
