import { socials } from '../constants';

const Footer = () => {
  return (
    <div className="w-full max-w-[90vw] my-[4rem]">
      <div className="flex flex-col text-bold text-black text-[12px] justify-center items-center md:flex-row md:justify-between">
        <div className="">© Oli Harris 2023 </div>
        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              href="#"
              className="hover:text-gray"
              key={social}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
