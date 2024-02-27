"use client";
import React, { useState } from "react";
import "./module.css";
import { motion, useScroll, useSpring } from "framer-motion";

const Page = () => {
  const [ex, setEx] = useState(false);
  const [text, setText] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const btn = () => {
    setEx(true);
    setText(false);
  };

  return (
    <div className="w-screen">
      {ex && <motion.div className="progress-bar" style={{ scaleX }} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 4 }}
        transition={{ duration: 3 }}
        data-aos="fade-up"
        data-aos-duration="2000"
        className="h flex justify-center flex-row-reverse relative top-8 p-8"
      >
        <div className="textanimate">
          <div className="AnimateText">
            <div id="container">
              <h3 className="text-gray-400">
                I'm
                <span className="px-5 text-white">Hammad Hussain</span>
              </h3>
              <div id="flip" className="text-stone-400">
                <div>
                  <div className="w-max">Web developer!</div>
                </div>
                <div>
                  <div className="w-max">Software Engineering Student!</div>
                </div>
                <div>
                  <div className="w-max">
                    Flutter Developer <span>!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text w-screen overflow-hidden overflow-x-hidden min-w-fit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tempore fuga quae ipsum nam dicta recusandae blanditiis, quaerat
            iusto doloribus vel ex ut eum delectus unde consequatur, provident
            laboriosam quo?
          </div>
          {text && (
            <button
              onClick={btn}
              className="text-black border-white bg-white p-2 text-sm relative left-4 cursor-pointer hover:text-white hover:bg-red-600 hover:border-white rounded-sm uppercase"
            >
              Explore More
            </button>
          )}
        </div>
        <div className="imga min-w-screen"></div>
      </motion.div>
      {ex && (
        <>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="5000"
            className="text-gray-400 font-serif text-xs p-10 text-center italic sd"
          >
            Hey there! I'm a passionate undergraduate student majoring in
            software engineering, with a keen interest in crafting seamless
            experiences for users across web and mobile platforms. Over the last
            couple of years, I've immersed myself in the world of web and app
            development, exploring various technologies and methodologies to
            enhance my skills. Whether it's building sleek websites or crafting
            intuitive mobile applications, I've dedicated myself to mastering
            the craft through freelance projects and personal endeavors. Along
            the way, I've had the privilege of collaborating with talented
            teams, learning the importance of effective communication and
            teamwork in delivering top-notch solutions. Now, I'm excited to take
            the next step in my journey by pursuing internship or job
            opportunities where I can learn from experienced developers,
            contribute meaningfully to projects, and continue to grow both
            personally and professionally. With a strong foundation in software
            engineering and a thirst for knowledge, I'm ready to tackle new
            challenges and make a positive impact in the field. Let's connect
            and build something awesome together!
          </div>
          <center>
            {" "}
            <h1 className="text-3xl p-4 text-gray-500 text-6xl font-serif p">
              Projects
            </h1>
          </center>
          <div className="projects p-24 text-gray-500 flex flex-col items-center text-center p">
            <div className="project1 flex flex-col justify-center gap-2 p-4">
              <h1 className="text-gray-400 italic text-2xl p-2">Project1</h1>
              <div
                className="netflix1 border-gray-300 border-4 rounded-lg"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              ></div>
              <div
                className="netflix2 border-gray-300 border-4 rounded-lg"
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              ></div>
            </div>
            <div className="project2 flex flex-col justify-center py-3 gap-2 p-4">
              <h1 className="text-gray-400 italic text-2xl p-2">Project2</h1>
              <div
                className="eco1 border-gray-300 border-4 rounded-lg"
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
              ></div>
              <div
                className="eco2 border-gray-300 border-4 rounded-lg"
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
              ></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
