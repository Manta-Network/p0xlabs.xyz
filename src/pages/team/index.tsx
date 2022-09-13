import { FC } from 'react';
import Slider from 'react-slick';
import { advisors, contributors, founders } from 'assets/data/data';
import arrowright from 'assets/images/team/arrowright.svg';
import ellipse from 'assets/images/team/ellipse.svg';
import ellipse2 from 'assets/images/team/ellipse2.svg';
import ellipse3 from 'assets/images/team/ellipse3.svg';
import ellipse4 from 'assets/images/team/ellipse4.svg';
import { ReactComponent as Github } from 'assets/images/team/github.svg';
import logo from 'assets/images/team/logo-team.svg';
import menu from 'assets/images/team/menu2.svg';
import quotes from 'assets/images/team/quotes.svg';
import { ReactComponent as Twitter } from 'assets/images/team/twitter.svg';
import vector from 'assets/images/team/vector.svg';
import wave from 'assets/images/team/wave.svg';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} -right-[27px] bottom-0 top-auto flex h-[27px] w-[27px] translate-y-0 items-center justify-center !bg-blue before:hidden`}
      onClick={onClick}
    >
      <img src={arrowright} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} -left-[27px] bottom-0 top-auto flex h-[27px] w-[27px] translate-y-0 items-center justify-center !bg-blue before:hidden`}
      onClick={onClick}
    >
      <img src={arrowright} className="rotate-180" />
    </div>
  );
}

export const Team: FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Header logo={logo} className="text-white" menu={menu} />
      <div className="relative inline-block w-full">
        <div className="absolute left-0 right-0 top-0 max-h-[780px] overflow-hidden mb:max-h-[350px]">
          <img src={ellipse} className="w-full" />
        </div>
        <div className="relative mx-auto mt-[120px] w-[380px] mb:mt-[90px] mb:w-[137px]">
          <div className="absolute bottom-[3px] h-[28px] w-full bg-yellow mb:bottom-[5px] mb:h-[8px]" />
          <div className="relative z-[1] text-center font-manrope text-[60px] font-bold text-white mb:text-[26px]">
            Founders
          </div>
        </div>
        <div className="relative pc:hidden">
          <div className="relative z-[2] mx-auto mt-[18px] w-[295px]">
            <Slider {...settings}>
              {founders.map((v, i) => (
                <div
                  key={i}
                  className="h-[250px] w-[295px] rounded-tl-[50px] rounded-tr-[50px] bg-white px-[11px]"
                >
                  <img src={v.avatar} className="mx-auto mt-[15px] w-[50px] rounded-full" />
                  <div className="mt-[5px] text-center font-mono text-[16px] font-bold text-black2">
                    {v.name}
                  </div>
                  <div className="mt-[2px] scale-83 text-center font-mono text-[12px] font-medium text-black2 opacity-80">
                    {v.job}
                  </div>
                  <Twitter
                    className="mx-auto mt-[2px] h-[11px] cursor-pointer duration-300 hover:text-blue"
                    onClick={() => window.open(v.twitter)}
                  />
                  <div className="mx-auto mt-[10px] text-center text-[12px] text-gray2">
                    {v.intro}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="-mt-[58px] flex w-full items-start mb:-mt-[25px]">
            <div className="relative z-[1] h-[114px] flex-1 bg-gray mb:h-[37px]" />
            <img src={vector} className="-ml-[200px] mb:hidden" />
          </div>
        </div>
        <div className="relative mb:hidden">
          <div className="relative z-[2] mt-[98px] flex w-full justify-center gap-[17px]">
            {founders.map((v, i) => (
              <div key={i} className="h-[558px] w-[370px] rounded-[185px] bg-white">
                <img src={v.avatar} className="mx-auto mt-[36px] rounded-full" />
                <div className="mt-[14px] text-center font-mono text-[40px] font-bold text-black2">
                  {v.name}
                </div>
                <div className="mt-[8px] text-center font-mono text-[20px] font-medium text-black2 opacity-80">
                  {v.job}
                </div>
                <Twitter
                  className="mx-auto mt-[8px] cursor-pointer duration-300 hover:text-blue"
                  onClick={() => window.open(v.twitter)}
                />
                <div className="mx-auto mt-[8px] w-[250px] text-center text-[14px] text-gray2">
                  {v.intro}
                </div>
              </div>
            ))}
          </div>
          <div className="-mt-[58px] flex w-full items-start mb:-mt-[25px]">
            <div className="relative z-[1] h-[114px] flex-1 bg-gray mb:h-[37px]" />
            <img src={vector} className="-ml-[200px] mb:hidden" />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative mt-[68px] flex justify-center font-manrope text-[60px] font-bold mb:mt-[20px] mb:text-[26px]">
          <div className="relative">
            Core Contributors
            <img
              src={wave}
              className="absolute bottom-0 -left-[40px] translate-y-full mb:-left-[20px] mb:h-[10px]"
            />
          </div>
        </div>
        <div className="relative z-[1] mx-auto mt-[82px] flex w-[950px] flex-wrap items-center gap-x-[50px] gap-y-[88px] mb:mt-[50px] mb:w-[350px] mb:gap-[48px]">
          {contributors.map((v, i) => (
            <div
              key={i}
              className="relative inline-block h-[210px] w-[200px] rounded-[10px] bg-gray mb:h-[132px] mb:w-[150px]"
            >
              <img
                src={v.avatar}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full mb:w-[48px]"
              />
              <img src={quotes} className="mx-auto mt-[43px] mb:mt-[30px] mb:w-[13px]" />
              <div className="mt-[12px] text-center font-mono text-[20px] font-bold text-gray3 mb:mt-[7px] mb:text-[14px]">
                {v.name}
              </div>
              <div className="mt-[8px] text-center font-mono text-[20px] font-bold text-blue mb:mt-[4px] mb:text-[14px]">
                {v.job}
              </div>
              <div className="my-[14px] mx-[20px] h-[1px] bg-gray3 opacity-50 mb:my-[6px] mb:mx-[14px]" />
              <div className="flex items-center justify-center gap-[10px]">
                {v.twitter !== '' ? (
                  <Twitter
                    className="cursor-pointer duration-300 hover:text-blue mb:w-[11px]"
                    onClick={() => window.open(v.twitter)}
                  />
                ) : null}
                {v.github !== '' ? (
                  <Github
                    className="cursor-pointer duration-300 hover:text-blue mb:w-[11px]"
                    onClick={() => window.open(v.github)}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <img src={ellipse2} className="absolute right-0 top-[50px] mb:w-[40px]" />
        <div className="absolute left-0 top-[500px] h-[50px] w-[calc((100%-900px)/2)] bg-blue mb:top-[190px] mb:h-[23px] mb:w-[calc((100%-320px)/2)]" />
        <div className="absolute right-0 top-[900px] h-[50px] w-[calc((100%-900px)/2)] bg-yellow mb:top-[374px] mb:h-[23px] mb:w-[calc((100%-320px)/2)]" />
        <img src={ellipse3} className="absolute left-0 top-[950px] mb:top-[522px] mb:w-[40px]" />
      </div>
      <div className="relative mt-[80px] w-full overflow-hidden rounded-tr-[130px] rounded-tl-[130px] bg-gray pb-[70px] mb:mt-[40px] mb:rounded-tl-[50px] mb:rounded-tr-[50px] mb:pb-[40px]">
        <div className="relative mt-[68px] flex justify-center font-manrope text-[60px] font-bold mb:mt-[20px] mb:text-[26px]">
          <div className="relative">
            Advisors
            <img
              src={wave}
              className="absolute bottom-0 -left-[40px] translate-y-full mb:-left-[20px] mb:h-[10px]"
            />
          </div>
        </div>
        <div className="mx-auto mt-[77px] flex w-[950px] flex-wrap items-center justify-center gap-[171px] mb:mt-[50px] mb:w-[350px] mb:gap-[48px]">
          {advisors.map((v, i) => (
            <div
              key={i}
              className="relative inline-block h-[210px] w-[200px] rounded-[10px] bg-white mb:h-[132px] mb:w-[150px]"
            >
              <img
                src={v.avatar}
                className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full mb:w-[48px]"
              />
              <img src={quotes} className="mx-auto mt-[43px] mb:mt-[30px] mb:w-[13px]" />
              <div className="mt-[12px] text-center font-mono text-[18px] font-bold text-gray3 mb:mt-[7px] mb:text-[12px]">
                {v.name}
              </div>
              <div className="mt-[8px] text-center font-mono text-[16px] font-bold text-blue mb:mt-[4px] mb:text-[12px]">
                {v.job}
              </div>
              <div className="my-[14px] mx-[20px] h-[1px] bg-gray3 opacity-50 mb:my-[6px] mb:mx-[14px]" />
              <div className="flex items-center justify-center gap-[10px]">
                {v.twitter !== '' ? (
                  <Twitter
                    className="cursor-pointer duration-300 hover:text-blue mb:w-[11px]"
                    onClick={() => window.open(v.twitter)}
                  />
                ) : null}
                {v.github !== '' ? (
                  <Github
                    className="cursor-pointer duration-300 hover:text-blue mb:w-[11px]"
                    onClick={() => window.open(v.github)}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <img src={ellipse4} className="absolute bottom-0 right-0 translate-y-[80%] mb:w-[90px]" />
      </div>
      <Footer />
    </div>
  );
};
