import { skills } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from('#heroText', {
      y: 50,
      repeat: 0,
      duration: 1,
      opacity: 0,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <div
      id="heroText"
      className="pt-[8rem] my-[4rem] md:my-[2.7rem] mx-auto w-[90vw] md:w-[70vw] lg:w-[50vw] flex flex-col items-center justify-center"
    >
      <h1 className="text-[2rem] leading-[40px] md:text-[3.3rem] text-bold text-center md:leading-[60px]">
        A brand and product designer working with clients
        globally
      </h1>
      <div className="text-xs hidden md:flex items-center justify-center mt-[2.5rem] font-semibold">
        <div className="font-semibold px-2 mx-1">
          Expertise
        </div>
        {skills.map((skill) => (
          <div
            className="px-2 mx-1 py-2 bg-ash rounded-[100px]"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
