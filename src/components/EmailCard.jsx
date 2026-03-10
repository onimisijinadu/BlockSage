import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

import { fadedInOut } from './custom_motion';

export const EmailCard = () => {
  return (
    <>
      <motion.div
        className="flex flex-col gap-1 bg-black/80 w-full py-8 px-9 "
        variants={fadedInOut()}
        initial="hidden"
        whileInView="show"
      >
        <Mail className="text-brown w-7 h-7" />
        <p className="text-slate-400 text-xl font-semibold">Email</p>
        <p className="text-slate-100 text-md sm:text-lg w-1/2 sm:w-full">
          jinaduabdulkareem340@gmail.com
        </p>
      </motion.div>
    </>
  );
};
