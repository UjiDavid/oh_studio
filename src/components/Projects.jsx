import { useGSAP } from '@gsap/react';
import { projects } from '../constants';
import gsap from 'gsap';
import { arrow } from '../assets';

const Projects = () => {
  useGSAP(() => {
    gsap.from('#projects', {
      y: 50,
      repeat: 0,
      duration: 1.5,
      opacity: 0,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <div
      id="projects"
      className="mt-[2rem] mx-[1.5rem] md:mx-[4rem] grid md:grid-cols-2 gap-4 gap-y-10"
    >
      {projects.map((project) => (
        <div
          className="flex flex-col gap-2"
          key={project.id}
        >
          <div className="relative flex group h-full w-full rounded-[12px] overflow-hidden my-3 cursor-pointer">
            <div className="absolute z-1 top-[50%] left-[50%] w-full h-full grid-bg flex opacity-0 md:group-hover:opacity-100 transition ease-in-out justify-between translate-x-[-50%] translate-y-[-50%] duration-100">
              <h3 className="text-white font-semibold m-5">
                {project.title}
              </h3>
              <div className="flex items-center justify-center w-[50px] h-[50px] -translate-x-5 translate-y-5 md:group-hover:translate-x-0 md:group-hover:translate-y-0 bg-white rounded-full mr-5 mt-5 duration-1000">
                <img
                  width={30}
                  height={30}
                  src={arrow}
                  className="rotate-45"
                  alt="arrow"
                />
              </div>
            </div>
            <img className="cover" src={project.coverImg} />
          </div>
          <h4 className="text-black font-semibold text-[14px] md:hidden">
            {project.title}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Projects;
