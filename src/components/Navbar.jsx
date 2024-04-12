import { useLocation } from 'react-router-dom';
import { navlist } from '../constants';

const Navbar = () => {
  const pathname = useLocation();
  return (
    <div className="z-10 fixed top-7 glassmorphism rounded-[100px] h-[45px] p-1">
      <div className="flex items-center justify-center my-auto w-full h-full">
        {navlist.map((item) => {
          return (
            <a
              className={`flex cursor-pointer w-full h-full items-center justify-center lg:text-[12px] font-semibold ${
                item.url === pathname.pathname
                  ? 'z-2 bg-white'
                  : ''
              } lg:leading-5 lg:hover:text-n-1 px-6 rounded-full`}
              key={item.id}
              href={item.url}
            >
              <p>{item.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
