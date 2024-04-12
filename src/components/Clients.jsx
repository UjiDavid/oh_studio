import { companyLogos } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Clients = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // GSAP animation
    gsap.from('.clients', {
      y: 50,
      repeat: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.4,
      opacity: 0,
      scrollTrigger: '.clients',
      ease: 'ease.inOut',
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <div className="pt-[4rem] my-[4rem] md:my-[2.7rem] mx-auto w-[90vw] md:w-[90vw] lg:w-[70vw] flex flex-col items-center justify-center">
      <div className="clients px-2 mx-1 py-2 bg-ash rounded-[100px] font-bold text-[12px]">
        Clients
      </div>
      <p className="clients mt-[1rem] text-[2rem] leading-[30px] w-[80vw] md:text-[2rem] text-bold text-center md:leading-[40px]">
        Who I've Worked With
      </p>
      <div className="clients mt-[6rem] w-full grid grid-cols-3 md:grid-cols-4 gap-12 gap-y-24">
        {companyLogos.map((logo, idx) => (
          <img src={logo} alt="logo" key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
