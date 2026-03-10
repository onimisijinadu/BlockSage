import {motion} from "framer-motion";


export const Card = ({ children, padding, gaps }) => {
  return (
    <>
      <motion.div 
      className={`flex flex-col ${gaps? "":"gap-7 "}${padding? "":"py-9 px-7 "} bg-primarydark hover:border-2 hover:border-brown cursor-pointer`}
      initial={{y:100, opacity:0, scale:0.96}}
      whileInView={{y:0, opacity:1, scale:1}}
      transition={{duration: 0.6}}
      // viewport={{once: true}}
      >
        {children}
      </motion.div>
    </>
  );
};
