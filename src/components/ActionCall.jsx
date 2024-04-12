import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ActionCall = () => {
  // Ensure ScrollTrigger is loaded
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // GSAP animation
    gsap.from('.actionText', {
      y: 50,
      repeat: 0,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.4,
      opacity: 0,
      scrollTrigger: '.actionText',
      ease: 'ease.inOut',
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="text-center my-[6rem] flex flex-col text-4xl font-semibold">
      <h2 className="actionText text-black">
        Let's work together.
      </h2>
      <h3 className="actionText text-gray hover:text-gray-200 cursor-pointer">
        Get in touch.
      </h3>
    </div>
  );
};

export default ActionCall;
