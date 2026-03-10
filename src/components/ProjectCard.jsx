import { useState } from 'react';

import {
  ArrowUpRightFromSquare,
  Github,
} from 'lucide-react';

import { Button } from '../components/Button';
import { Card } from '../components/card';
import { ActiveProjects } from '../data/data';

export const ProjectCard = () => {
  const [showAll, setShowAll] = useState(false);

  const [imgLoaded, setImgLoaded] = useState(false);

  const showAllProject = showAll ? ActiveProjects : ActiveProjects.slice(0, 4);

  const handleClick = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 gap-5 text-white">
        {showAllProject.map((project) => (
          <div className="mb-5 break-inside-avoid">
            <Card
              padding="p-0"
              gaps="gap-0"
              children={
                <div className="h-fit">
                  <div className="flex w-full relative bg-trans group overflow-hidden">
                    {!imgLoaded && (
                      <div className="absolute inset-0 bg-dark animate-pulse"></div>
                    )}
                    <img
                      src={project.image}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        setImgLoaded(true);
                      }}
                    />
                    <div className="flex gap-3 w-full items-center justify-center absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRightFromSquare className="text-white border border-slate-400 p-2 w-10 h-10 bg-trans hover:bg-slate-900" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="text-white border border-slate-400 p-2 w-10 h-10 bg-trans hover:bg-slate-900" />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col py-5 px-10 gap-3">
                    <p className="font-semibold text-lg sm:text-2xl">
                      {project.title}
                    </p>
                    <p className="text-fadedText">{project.description}</p>
                    <div className="flex flex-wrap gap-4 w-fit pb-5">
                      {project.languages.map((lang, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-1 w-fit py-2 px-4 bg-dark border border-neutral-800 text-center"
                        >
                          {lang}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
      <Button
        text={`${showAll ? "Show less" : "View All Projects"}`}
        className={`flex bg-brown p-4 rounded-xl text-white font-semibold hover:bg-amber-900 my-5`}
        click={handleClick}
      />
    </>
  );
};
