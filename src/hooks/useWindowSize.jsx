import {
  useEffect,
  useState,
} from 'react';

export const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

//   const [isOpen, setIsOpen] = useState(false);
//   const width = useWindowSize();

//   const toggleBtn = () => {
//     setIsOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     if (width >= 1024 && isOpen){
//       setIsOpen(false)
//     }
//      }, [width, isOpen]);
// import { useState, useEffect } from "react";

// export const useWindowSize = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     // Clean up to prevent memory leaks
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return width; // This is what the NavBar will watch
// };
