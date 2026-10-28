import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";
import Image from "next/image";

import { MdEmail } from "react-icons/md";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto mt-5 py-42 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[1100px]">

          {/* MAIN HEADING */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <p className="text-xl font-semibold text-center text-gray-300 mb-12" variants={fadeIn("up", 0.3)} initial="hidden" animate="show" exit="hidden">
            Have a question or want to work together?</p>
          {/* TWO COLUMN SECTION */}
          <div className="flex flex-col xl:flex-row gap-16 w-full">

            {/* LEFT SIDE - ABOUT ME */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate="show"
              className="w-full xl:w-1/4 flex flex-col gap-6 text-center xl:text-left"
            >
              <h2 className="text-2xl font-semibold">About Me</h2>

              {/* Profile */}
              <div className="flex items-center gap-x-4 justify-center xl:justify-start mb-2">
                <Image
                  src="/contact_azeem.jpg"
                  alt="contact"
                  width={50}
                  height={50}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
                <p className="text-accent text-lg font-semibold">
                  Mohamed Azeem
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-x-4 justify-center xl:justify-start">
                <MdEmail className="text-accent text-xl" />
                <a
                  href="mailto:azeemhaleem451@gmail.com"
                  className="text-gray-300 hover:text-accent transition"
                >
                  azeemhaleem451@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-x-4 justify-center xl:justify-start">
                <FaPhoneAlt className="text-accent text-lg" />
                <a
                  href="tel:+94772622543"
                  className="text-gray-300 hover:text-accent transition"
                >
                  +94 77 26 22543
                </a>
              </div>

              <div className="flex items-center gap-x-4 justify-center xl:justify-start">
                <FaLocationArrow className="text-accent text-lg" />
                <p className="text-gray-300">
                  Colombo, Sri Lanka
                </p>
              </div>

              {/* CV Button */}
              <a
                href="/cv.pdf"
                download
                className="bg-accent text-white px-6 py-3 rounded-lg w-fit mx-auto xl:mx-0 hover:bg-accent/80 transition"
              >
                Download CV
              </a>
            </motion.div>

            {/* RIGHT SIDE - FORM */}
            <div className="w-full xl:w-3/4">
              <motion.form
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col gap-6 w-full"
                onSubmit={handleSubmit}
                autoComplete="off"
                autoCapitalize="off"
                name="contact"
              >
                <div className="flex gap-x-6 w-full">
                  <input type="hidden" name="form-name" value="contact" />

                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input"
                    disabled={isLoading}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="input"
                    disabled={isLoading}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input"
                  disabled={isLoading}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message..."
                  className="textarea"
                  disabled={isLoading}
                  required
                />

                <button
                  type="submit"
                  className="btn rounded-full border border-white/50 max-w-[170px] px-8 flex items-center justify-center overflow-hidden hover:border-accent group"
                  disabled={isLoading}
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let's talk
                  </span>

                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  />
                </button>
              </motion.form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;