import { ArrowRight } from 'lucide-react';

import { Button } from '../components/Button';

export const Hero = () => {
  return (
    <div className="bg-hero w-auto flex flex-col items-center gap-y-10 text-textcolor text-center py-10">
      <p className="text-brown pt-10">FULL-STACK SOFTWARE DEVELOPER</p>
      <p className="text-textcolor text-5xl sm:text-7xl flex flex-col items-center gap-4 font-semibold">
        Crafting Digital <span className="text-brown"> Excellence</span>
      </p>
      <p className="min-w-3/6 sm:w-3/4 lg:w-3/6 text-lg sm:text-2xl gap-1 wraptext">
        Building scalable, high-performance applications with clean code and
        modern technologies. Transforming complex problems into elegant
        solutions.
      </p>
      <div className="flex flex-col items-center">
        <div className="flex gap-3 sm:gap-5 flex-warp sm:flex-nowrap absolute z-10">
          <Button
            text={"View Projects"}
            icon={<ArrowRight />}
            className={`flex justify-center items-center gap-2 bg-brown hover:bg-bhove cursor-pointer text-gray-200 px-5 py-2 font-semibold z-10`}
          />
          <a href="tel:+2348116394666" rel="noopener noreferrer">
            <Button
              text={"Contact Me"}
              className={`flex bg-transparent hover:bg-hoverbtn cursor-pointer text-gray-200 px-5 py-2 font-semibold border border-background`}
            />
          </a>
        </div>
        <div className="animate-bounce [animation-duration:2s] flex justify-center items-center mt-5 h-13 w-6 rounded-full bg-transparent border border-background">
          <div className="h-6 w-3 rounded-full bg-brown"></div>
        </div>
      </div>
    </div>
  );
};
