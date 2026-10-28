import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";

// Skills Data
const skillsData = [
  {
    title: "Front-End Development",
    percent: 85,
    skills: ["React", "Next", "React Native", "HTML", "SCSS", "Tailwind", "Bootstrap"],
  },
  {
    title: "Back-End Development",
    percent: 90,
    skills: ["Node.js", "Express.js", "FastAPI", "Django"],
  },
  {
    title: "Machine Learning",
    percent: 75,
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Artificial Intelligence",
    percent: 90,
    skills: ["Deep Learning", "Computer Vision", "NLP"],
  },
  {
    title: "Embedded Systems & IOT",
    percent: 90,
    skills: ["Arduino", "ESP32", "Raspberry Pi", "Sensor Integration"],
  },
  {
    title: "Database Ops",
    percent: 90,
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-24 flex items-center">
      <Circles />

      <div className="w-[85%] mx-auto max-w-[1500px]">
        {/* <div className="flex flex-col xl:flex-row gap-x-8"> */}
        <div className="">


          {/* LEFT TEXT */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mt-5 mb-14 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="h2 xl:mt-10"
            >
              Technical <span className="text-accent">Skills</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="text-xl font-semibold mx-auto lg:mx-0 lg:pl-40"
            >
              Swipe to explore more →
            </motion.p>
          </div>

          {/* RIGHT SLIDER */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            className="w-[95%] mt-8 mx-auto"
          >
            <ServiceSlider serviceData={skillsData} />
          </motion.div>

        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Services;