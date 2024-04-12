import { useGSAP } from '@gsap/react';
import { sun } from '../assets';
import gsap from 'gsap';

const ShopButton = () => {
  // TODO: Implement the gsap.from() method
  useGSAP(() => {
    gsap.from('#shopButton', {
      y: 70,
      repeat: 0,
      duration: 1,
      opacity: 0,
      delay: 0.3,
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <div
      id="shopButton"
      className="fixed bottom-5 cursor-pointer flex h-[30px] gap-2 px-4 bg-black text-white items-center justify-center rounded-full text-[12px] font-semibold"
    >
      <div>
        <img src={sun} alt="sun" />
      </div>
      Shop
    </div>
  );
};

export default ShopButton;
