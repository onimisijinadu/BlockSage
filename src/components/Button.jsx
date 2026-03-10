import {motion} from 'framer-motion';

import {fadedInOut} from './custom_motion';

export const Button = ({ text, icon, className, click, Btntype }) => {
  return (
    <>
      <motion.button onClick={click} className={`${className}`} type={Btntype} variants={fadedInOut()} initial = "hidden" whileInView = "show">
        {text} {icon}
      </motion.button>
    </>
  );
};
