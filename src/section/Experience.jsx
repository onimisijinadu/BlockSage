import { ExperienceCard } from '../components/ExperienceCard';

export const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="flex flex-col sm:px-15 w-full  my-10 bg-hero sm:py-32 gap-3"
      >
        <div>
          <p className="text-brown text-center">CAREER PATH</p>
          <p className="text-white text-center text-xl sm:text-5xl lg:text-6xl font-semibold mb-5">
            Professional Journey
          </p>
        </div>
        <div className="relative my-15 mx-5">
          <div className="absolute hidden lg:block h-full justify-center items-center w-0.5 bg-gray-900 inset-0 left-2/4"></div>
          <ExperienceCard />
        </div>
      </div>
    </>
  );
};
