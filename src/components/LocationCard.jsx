import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

import { fadedInOut } from './custom_motion';

export const LocationCard = () => {
  return (
    <>
      <motion.article
        className="flex flex-col gap-1 bg-black/80 w-full p-8"
        variants={fadedInOut()}
        initial="hidden"
        whileInView="show"
      >
        <MapPin className="text-brown w-7 h-7" />
        <p className="text-slate-400 text-xl font-semibold ">Location</p>
        <p className="text-slate-100 text-lg">Kano, Nigeria</p>
      </motion.article>
    </>
  );
};
