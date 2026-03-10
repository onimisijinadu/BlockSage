import { useEffect, useState } from "react";

import favi from "/favi.png";
import { Menu, X } from "lucide-react";

import { Button } from "../components/Button";
import { useWindowSize } from "../hooks/useWindowSize";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowSize();

  const toggleBtn = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (width >= 1024) {
      setIsOpen(false);
    }
  }, [width]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1024) {
  //       setIsOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <>
      <div className="flex justify-between bg-transparent text-textcolor items-center lg:gap-80 fixed z-50 w-full p-5 border-b border-b-slate-900 lg:px-15">
        <img src={favi} alt="BlockSagE logo" className="w-10 h-10" />

        <div
          className={`lg:flex gap-5 items-center lg:justify-between lg:gap-65  ${isOpen ? "flex flex-col bg-hero absolute top-20 right-0 p-5" : "hidden"} w-full`}
        >
          <div
            className={`gap-2 lg:gap-10 font-semibold flex lg:justify-between ${isOpen ? "flex flex-col" : ""}`}
          >
            <a href="#about" className="links hover:text-slate-400 ">
              About
            </a>
            <a href="#skill" className="links hover:text-slate-400 ">
              Skills
            </a>
            <a href="#project" className="links hover:text-slate-400 ">
              Projects
            </a>
            <a href="#experience" className="links hover:text-slate-400 ">
              Experience
            </a>
            <a href="#contact" className="links hover:text-slate-400 ">
              Contact
            </a>
          </div>
          <a
            href="https://wa.me/2348116394666?text=Hello%20I%20saw%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <Button
              text={"Let's Talk"}
              className={`bg-brown hover:bg-bhove cursor-pointer text-gray-200 px-5 py-2 font-semibold whitespace-nowrap`}
            />
          </a>
        </div>
        <Menu
          className={`lg:hidden w-6 h-6 left-2 font-bold ${isOpen ? "hidden" : "block"}`}
          onClick={toggleBtn}
        />
        <X
          className={`w-7 h-7 font-bold ${isOpen ? "block" : "hidden"}`}
          onClick={toggleBtn}
        />
      </div>
    </>
  );
};
