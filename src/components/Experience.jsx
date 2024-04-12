import { experiences } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // GSAP animation
    gsap.from('.profileText', {
      y: 50,
      repeat: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.4,
      opacity: 0,
      scrollTrigger: '.profileText',
      ease: 'ease.inOut',
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <div className="pt-[4rem] my-[4rem] md:my-[2.7rem] mx-auto w-[90vw] md:w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center">
      <div className="profileText px-2 mx-1 py-2 bg-ash rounded-[100px] font-bold text-[12px]">
        Experience
      </div>
      <p className="profileText mt-[1rem] text-[2rem] leading-[20px] w-[80vw] md:text-[2rem] text-bold text-center md:leading-[30px]">
        Where I've Worked
      </p>
      <div className="profileText mt-[6rem] w-full grid grid-cols-2 md:grid-cols-3 gap-12">
        {experiences.map((item) => (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={item.id}
          >
            <p className="text-[12px]">{item.duration}</p>
            <h2 className="text-black text-[18px] font-bold">
              {item.company}
            </h2>
            <p className="text-[12px]">{item.title}</p>
            <div className="px-2 mx-1 py-2 bg-ash rounded-[100px] font-bold text-[12px]">
              {item.position}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
