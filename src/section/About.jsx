import { motion } from 'framer-motion';
import {
  Badge,
  Briefcase,
  Code2,
  Users,
} from 'lucide-react';

import lebuy from '../assets/lebuy.png';
import { fadedInOut } from '../components/custom_motion';

export const AboutMe = () => {
  return (
    <>
      <div id="about" className="pb-30 pt-20">
        <div className="flex flex-wrap lg:flex-nowrap py-20 px-15 gap-10 h-4/5">
          <motion.div
            className="relative border-4 border-brown w-full sm:min-h-dvh"
            variants={fadedInOut()}
            initial="hidden"
            whileInView="show"
          >
            <img
              src={lebuy}
              alt="Picture of BlockSage"
              className="bg-hero sm:absolute sm:right-3.5 sm:-top-3.5 sm:h-full sm:w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-5 w-full"
            variants={fadedInOut()}
            initial="hidden"
            whileInView="show"
          >
            <p className="text-brown font-semibold pb-2">ABOUT ME</p>
            <p className="text-headercolor text-xl sm:text-5xl font-semibold sm:w-3/4 headtext">
              Building the Future, One Line at a Time
            </p>
            <p className="text-fadedText w-fit sm:w-11/12">
              I'm a passionate full-stack software developer with over 8 years
              of experience building scalable, performant applications. I
              specialize in modern web technologies and have a proven track
              record of delivering high-quality solutions for startups and
              enterprises alike.
            </p>
            <p className="text-fadedText w-fit sm:w-11/12">
              My approach combines technical excellence with a deep
              understanding of user needs. I believe great software is invisible
              - it just works. From architecture to deployment, I focus on
              creating systems that are both elegant and maintainable.
            </p>
            <p className="text-fadedText w-fit max-w-11/12">
              When I'm not coding, I contribute to open-source projects, mentor
              junior developers, and stay current with emerging technologies to
              deliver cutting-edge solutions.
            </p>
            <div className="pt-4">
              <ul className="grid sm:grid-cols-2 gap-5 text-textcolor list-[square] marker:text-brown px-5.5">
                <li>System Architecture</li>
                <li>API Design</li>
                <li>Performance Optimizaion</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center px-15 gap-3">
          <motion.div
            className="w-full bg-tanary flex flex-col justify-center items-center p-10 gap-2 text-center"
            variants={fadedInOut()}
            initial="hidden"
            whileInView="show"
          >
            <Briefcase className="w-10 h-10 sm:w-13 sm:h-13 text-brown" />
            <p className="text-white text-xl sm:text-3xl font-semibold text-center">
              3+ Years
            </p>
            <p className="text-fadedText">Experience</p>
          </motion.div>
          <motion.div
            className="w-full bg-tanary flex flex-col justify-center items-center p-10 gap-2 text-center"
            variants={fadedInOut()}
            initial="hidden"
            whileInView="show"
          >
            <Code2 className="w-10 h-10 sm:w-13 sm:h-13 text-brown" />
            <p className="text-white text-xl sm:text-3xl font-semibold text-center">
              4+
            </p>
            <p className="text-fadedText">Projects</p>
          </motion.div>
          <motion.div
            className="w-full bg-tanary flex flex-col justify-center items-center p-10 gap-2 text-center"
            variants={fadedInOut()}
            initial="hidden"
            whileInView="show"
          >
            <Users className="w-10 h-10 sm:w-13 sm:h-13 text-brown" />
            <p className="text-white text-xl sm:text-3xl font-semibold text-center">
              5+
            </p>
            <p className="text-fadedText">Clients</p>
          </motion.div>
          <motion.div
            className="w-full bg-tanary flex flex-col justify-center items-center p-10 gap-2 text-center"
            variants={fadedInOut()}
            initial="hidden"
            whileInView="show"
          >
            <Badge className="w-10 h-10 sm:w-13 sm:h-13 text-brown" />
            <p className="text-white text-xl sm:text-3xl font-semibold text-center">
              3+
            </p>
            <p className="text-fadedText">Awards</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
