import { Card } from '../components/card';
import {
  MySkills,
  Tools,
} from '../data/data';

export const Skills = () => {
  return (
    <>
      <div
        id="skill"
        className="py-30 px-7 sm:px-10 lg:px-15 bg-tanary items-center text-center"
      >
        <p className="text-brown text-lg sm:text-xl py-4 text-shadow-amber-50">
          TECHNICAL EXPERTISE
        </p>
        <p className="text-gray-100 font-semibold text-3xl sm:text-6xl pb-12 mb-10">
          Skills & Technologies
        </p>
        <div className="grid sm:grid-cols-2 gap-7 lg:gap-12 text-white text-left">
          <Card
            children={
              <>
                <p className="font-semibold text-2xl">Frontend</p>
                <div className="flex flex-wrap gap-5">
                  {MySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="grid grid-cols-1 px-5 py-3 w-fit bg-dark text-slate-300 border border-neutral-800 hover:border-2 hover:border-brown"
                    >
                      <div>{skill.frontEnd}</div>
                    </div>
                  ))}
                </div>
              </>
            }
          />
          <Card
            children={
              <>
                <p className="font-semibold text-2xl">Backend</p>
                <div className="flex flex-wrap gap-5">
                  {MySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="grid grid-cols-1 px-5 py-3 w-fit bg-dark text-slate-300 border border-neutral-800 hover:border-2 hover:border-brown"
                    >
                      <div>{skill.BackEnd}</div>
                    </div>
                  ))}
                </div>
              </>
            }
          />
          <Card
            children={
              <>
                <p className="font-semibold text-2xl">DevOps & Tools</p>
                <div className="flex flex-wrap gap-5">
                  {Tools.map((tool) => (
                    <div
                      key={tool.id}
                      className="grid grid-cols-1 px-5 py-3 w-fit bg-dark text-slate-300 border border-neutral-800 hover:border-2 hover:border-brown"
                    >
                      <div>{tool.DevOps}</div>
                    </div>
                  ))}
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};
