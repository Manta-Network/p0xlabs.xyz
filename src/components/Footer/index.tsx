import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import footerBg from 'assets/images/home/footer.svg';
import wave2 from 'assets/images/home/wave2.svg';

export const Footer: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <img src={footerBg} className="w-full" />
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-[70px] mb:scale-27">
        <button
          className="relative h-[75px] w-[274px] rounded-[17px] bg-yellow text-blue"
          onClick={() => window.open('https://jobs.lever.co/MantaNetwork')}
        >
          <img src={wave2} className="absolute left-0 bottom-0 h-full" />
          <span className="font-mono text-[30px] font-bold">JOIN US</span>
        </button>
        <button
          className="relative h-[75px] w-[274px] rounded-[17px] bg-yellow text-blue"
          onClick={() => navigate('/team')}
        >
          <img src={wave2} className="absolute left-0 bottom-0 h-full" />
          <span className="font-mono text-[30px] font-bold">Team</span>
        </button>
      </div>
    </div>
  );
};
