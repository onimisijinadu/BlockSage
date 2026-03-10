import { motion } from 'framer-motion';
import {
  Facebook,
  Github,
  Instagram,
  TwitterIcon,
} from 'lucide-react';

import { fadedInOut } from './custom_motion';

export const Connect = () => {
  return (
    <>
      <motion.article
        className="flex flex-col gap-5 bg-black/80 w-full py-8 px-9"
        variants={fadedInOut()}
        initial="hidden"
        whileInView="show"
      >
        <p className="text-slate-400 text-xl font-semibold">Connect</p>
        <div className="flex gap-3">
          <a
            href="https://github.com/onimisijinadu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-trans cursor-pointer p-2 border border-trans transition-colors duration-300"
          >
            <Github className="text-fadedText" />
          </a>
          <a
            href="https://x.com/b_locksage?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-trans cursor-pointer p-2 border border-trans transition-colors duration-300"
          >
            <TwitterIcon className="text-fadedText" />
          </a>
          <a
            href="https://www.facebook.com/jinadu.abdulkareem.2025?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-trans cursor-pointer p-2 border border-trans transition-colors duration-300"
          >
            <Facebook className="text-fadedText" />
          </a>
          <a
            href="https://instagram.com/onimisijinadu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-trans cursor-pointer p-2 border border-trans transition-colors duration-300"
          >
            <Instagram className="text-fadedText" />
          </a>
        </div>
      </motion.article>
    </>
  );
};
