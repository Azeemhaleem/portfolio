import {
  RxDesktop,
  RxCode,
  RxGear,
  RxDatabase,
} from "react-icons/rx";

import { motion } from "framer-motion";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Default Icons (map by title)
const iconMap = {
  "Front-End Development": RxDesktop,
  "Back-End Development": RxCode,
  "Machine Learning": RxGear,
  "Artificial Intelligence": RxGear,
  "Embedded Systems & IOT": RxGear,
  "Database Ops": RxDatabase,
};

const ServiceSlider = ({ serviceData }) => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
      }}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[300px] sm:h-[365px]"
    >
      {serviceData.map((item, i) => {
        const Icon = iconMap[item.title] || RxDesktop;

        return (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-6 flex flex-col group cursor-pointer hover:bg-[rgba(89,65,169,0.2)] transition-all duration-300"
            >
              {/* Top Section (Icon & Title aligned to top) */}
              <div>
                <div className="text-4xl text-accent mb-3">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold my-5 whitespace-nowrap">
                  {item.title}
                </h3>
              </div>

              {/* Progress & Percentage */}
              <div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div
                    className="bg-accent h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.2 }}
                  />
                </div>
                <p className="text-right text-accent text-sm mb-4">
                  {item.percent}%
                </p>
              </div>

              {/* Skills (mt-auto pushes this to the bottom, keeping everything else aligned!) */}
              <div className="flex flex-wrap gap-2 mt-5">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 border border-accent/40 rounded-full text-accent hover:bg-accent hover:text-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;