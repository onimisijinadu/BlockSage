import { ProjectCard } from '../components/ProjectCard';

export const Projects = () => {
  // const projectDetails = {};
  return (
    <>
      <div id="project" className="px-5 sm:px-15 mb-20">
        <article className="flex gap-5 flex-col justify-center items-center py-20">
          <p className="text-brown text-shadow-brown font-semibold sm:text-xl">
            PORTFOLIO
          </p>
          <p className="font-semibold text-2xl sm:text-5xl lg:text-6xl text-headercolor ">
            Featured Projects
          </p>
          <p className="text-fadedText text-center text-lg sm:w-1/2">
            A selection of projects showcasing technical expertise, scalability,
            and innovative solutions across various domains.
          </p>
        </article>
        <ProjectCard />
      </div>
    </>
  );
};
