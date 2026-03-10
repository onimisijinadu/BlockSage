import { motion } from "framer-motion";

import { Experiences } from "../data/data";

export const ExperienceCard = () => {
  return (
    <>
      {Experiences.map((data) => (
        <motion.div
          key={data.id}
          className={`flex items-center gap-50 w-full mb-20 ${data.id % 2 === 0 ? "justify-end " : "justify-start"}
           `}
          initial={{ y: 100, opacity: 0, scale: 0.96 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={`relative w-full lg:w-2/5  flex gap-3 p-10 bg-dark hover:border hover:border-brown `}
          >
            {/* dot */}
            <div
              className={`absolute hidden lg:block bg-brown w-3 h-3 rounded-full translate-x-6/12 duration-300 ${data.id % 2 === 0 ? "-left-31" : "-right-28"}`}
            ></div>
            <div className="flex flex-col gap-5">
              <p className="text-brown">{data.year}</p>
              <div className="block gap-3">
                <p className="font-semibold text-white text-xl sm:text-2xl cursor-text">
                  {data.role}
                </p>
                <p className="text-fadedText cursor-text">{data.company}</p>
              </div>
              <div className="text-fadedText cursor-text">{data.details}</div>
              <div className="text-fadedText flex flex-wrap gap-5">
                {data.languages.map((lang, index) => (
                  //   <div className="relative flex ">

                  <p
                    key={index}
                    className="py-2 px-4 bg-tanary border border-primary"
                  >
                    {lang}
                  </p>
                  //   </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};
