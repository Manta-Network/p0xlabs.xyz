import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  logo: string;
  className: string;
  menu: string;
}
export const Header: FC<Props> = ({ logo, className, menu }) => {
  return (
    <div
      className={`gap fixed top-0 left-0 right-0 z-[10] flex h-[80px] items-center backdrop-blur-[10px] ${className}`}
    >
      <RouterLink to="/">
        <img src={logo} className="ml-[75px] cursor-pointer mb:ml-[20px]" />
      </RouterLink>
      <div className="ml-auto flex mb:hidden">
        <div className="mr-[38px] cursor-pointer font-inter text-[16px] font-medium">
          <RouterLink to="/team">Team</RouterLink>
        </div>
        <div className="mr-[75px] cursor-pointer font-inter text-[16px] font-medium">
          <a target="_blank" rel="noopener noreferrer" href="https://jobs.lever.co/MantaNetwork">
            Jobs
          </a>
        </div>
      </div>
      <div className="ml-auto mr-[20px] pc:hidden">
        <img src={menu} />
      </div>
    </div>
  );
};
