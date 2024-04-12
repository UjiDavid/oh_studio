import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { profile1, profile2 } from '../assets';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProfileHero = () => {
  gsap.registerPlugin(ScrollTrigger);

  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from('.profile-image', {
      y: 70,
      repeat: 0,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.7,
      opacity: 0,
      ease: 'ease.inOut',
    });
    gsap.from('#heroText', {
      y: 50,
      repeat: 0,
      duration: 1,
      opacity: 0,
      ease: 'power1.inOut',
    });
    gsap.from('.about', {
      y: 50,
      repeat: 0,
      duration: 1,
      delay: 0.2,
      stagger: 0.4,
      opacity: 0,
      scrollTrigger: '.about',
      ease: 'ease.inOut',
    });
  }, []);
  return (
    <>
      <div
        id="heroText"
        className="pt-[12rem] my-[4rem] md:my-[2.7rem] mx-auto w-[90vw] md:w-[70vw] lg:w-[50vw] flex flex-col items-center justify-center"
      >
        <h1 className="text-[2rem] leading-[40px] md:text-[3rem] text-bold text-center md:leading-[60px]">
          Hey 👋🏼 I'm Oli
        </h1>
      </div>
      <div className="my-[4rem] mx-[2rem] md:mx-[4rem] grid md:grid-cols-2 gap-4">
        <img
          src={profile1}
          alt="profile"
          className="cover profile-image h-full w-full rounded-[12px]"
        />
        <img
          src={profile2}
          alt="profile"
          className="cover profile-image h-full w-full rounded-[12px]"
        />
      </div>
      <div className="pt-[4rem] my-[4rem] md:my-[2.7rem] mx-auto w-[90vw] md:w-[70vw] lg:w-[50vw] flex flex-col items-center justify-center">
        <div className="about px-2 mx-1 py-2 bg-ash rounded-[100px] font-bold text-[12px]">
          About
        </div>
        <p className="about mt-[1rem] text-[2rem] leading-[20px] w-[60vw] md:text-[2rem] text-bold text-center md:leading-[30px]">
          A freelance designer based in the UK. I combine my
          experience in product and brand to solve problems,
          tell stories, and create compelling experiences.
        </p>
      </div>
    </>
  );
};

export default ProfileHero;
