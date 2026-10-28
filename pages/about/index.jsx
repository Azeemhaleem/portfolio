import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        stage: "Python, Java, JavaScript, C/C++, SQL",
      },
      {
        title: "Machine Learning and AI",
        stage:
          "TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn",
      },
      {
        title: "Web development and Version control",
        stage:
          "Node JS, Express JS, React JS, Flask, Bootstrap, Tailwind, Git",
      },
      {
        title: "Databases",
        stage: "SQL Server, MySQL, Mongo DB ",
      },
      {
        title: "Embedded Systems & IoT",
        stage: "Arduino, ESP32, Raspberry Pi, Sensor Integrations",
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Smart Wearable Health Monitoring System (IoT)",
        stage: "ESP32, MAX30102, MQTT, FIWARE, React, MongoDB",
      },
      {
        title: "Music Recommendation System (Emotion-Based)",
        stage: "TensorFlow, NumPy, Pandas, Mini-Xception",
      },
      {
        title: "Handwritten Digit Classification",
        stage: "TensorFlow, NumPy, Pandas, LeNet",
      },
      {
        title: "Fine Management System",
        stage: "React JS, Laravel, Figma",
      },
      {
        title: "University Event Management System",
        stage: "React JS, Node.js, Express JS, MongoDB",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "AI Engineer Intern - Curve Up FZ LLC",
        stage: "September 2026 – Present",
      },
      {
        title: "Freelance UI UX Designer - Fiverr",
        stage: "2023 - 2024",
      },
      {
        title: "Freelance Mathematics Teacher",
        stage: "2022 - Present",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "BCom(Hons) in Computer Science - Undergraduate",
        stage: "University of Sri Jayawerdanapura",
      },
      {
        title: "BTEC HND in Electrical & Electronic Engineering",
        stage: "Completed",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <div className="max-w-[1100px] max-h-[800px] mx-auto">
        <Circles />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[350px]"
        >
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-5">

          {/* LEFT SECTION (2/5) */}
          <div className="w-full xl:w-1/2 flex flex-col justify-center">
            <div className="xl:pl-8">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2"
              >
                <span className="text-accent">Interested in </span>
              </motion.h2>

              <motion.p
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                animate="show"
                className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-8 px-2 xl:px-0 text-3xl"
              >
                Machine Learning, Embedded Systems & IOT, Robotics, Full Stack
                Development
              </motion.p>
            </div>


            {/* counters */}
            <div className="container mx-auto mt-12 flex justify-center">
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                animate="show"
                className="w-full max-w-[900px]"
              >
                <div className="flex justify-between gap-x-6">

                  {/* Completed Projects */}
                  {/* <div className="relative flex-1 text-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={4} duration={3} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                      Completed Projects
                    </div>
                  </div> */}

                  {/* Technologies */}
                  <div className="relative flex-1 text-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={10} duration={3} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                      Technologies Used
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="relative flex-1 text-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={4} duration={3} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                      Focus Areas
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex-1 text-center">
                    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                      <CountUp start={0} end={3} duration={3} />
                    </div>
                    <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                      Years Learning & Practice
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>

          {/* RIGHT SECTION (3/5) */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:w-1/2 flex flex-col h-[450px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemI) => (
                <div
                  key={itemI}
                  className={`${index === itemI &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemI)}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="py-2 xl:py-6 flex flex-col gap-y-4 w-full">
              {aboutData[index].info.map((item, itemI) => (
                <div
                  key={itemI}
                  className="w-full flex flex-col text-left text-white/70 border-b border-white/10 pb-3"
                >
                  {/* Title */}
                  <div className="font-medium text-white">{item.title}</div>

                  {/* Description */}
                  <div className="text-sm mt-1">{item.stage}</div>

                  {/* Icons (if available) */}
                  <div className="flex gap-x-4 mt-2">
                    {item.icons?.map((Icon, iconI) => (
                      <div key={iconI} className="text-xl text-accent">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* COUNTER SECTION (CENTERED) */}

      </div>
    </div>
  );
};

export default About;