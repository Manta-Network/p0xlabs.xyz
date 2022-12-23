import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects, useCase } from 'assets/data/data';
import bluePoints from 'assets/images/home/9points-blue.svg';
import grayPoints from 'assets/images/home/9points-gray.svg';
import arrow from 'assets/images/home/arrow.svg';
import arrow2 from 'assets/images/home/arrow2.svg';
import breakLine from 'assets/images/home/break-line.svg';
import breakLine2 from 'assets/images/home/break-line2.svg';
import ellipse1 from 'assets/images/home/ellipse1.svg';
import ellipse2 from 'assets/images/home/ellipse2.svg';
import logoHome from 'assets/images/home/logo-home.svg';
import menu from 'assets/images/home/menu1.svg';
import part1 from 'assets/images/home/part1.svg';
import part2 from 'assets/images/home/part2.svg';
import shadowRec from 'assets/images/home/shadow-rec.svg';
import wave from 'assets/images/home/wave.svg';
import wave1 from 'assets/images/home/wave1.svg';
import wave3 from 'assets/images/home/wave3.svg';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const Index: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header logo={logoHome} className="text-black" menu={menu} />
      <div className="mb:hidden">
        <div id="part1" className="relative pt-[80px]">
          <div className="relative mx-auto flex max-w-[1440px] items-center justify-center">
            <img src={breakLine} className="mt-[120px] self-start" />
            <div className="flex shrink-0 flex-col">
              <div className="relative text-[60px] font-medium">
                <div>
                  BRINGING <span className="text-blue">PRIVACY</span>
                </div>
                <div>TO EVERY WEB3 PROJECT</div>
              </div>
              <div className="mt-[93px] mb-[180px] w-[490px] font-mono text-[20px] text-black2 opacity-80">
                We are p0x labs, the decentralized laboratory for building cutting-edge privacy
                technologies
              </div>
              <div className="font-light text-black opacity-80">
                powered by <span className="font-semibold">zero-knowledge proofs</span>
              </div>
            </div>
            <div className="-ml-[350px] flex-1">
              <img src={part1} className="w-[100%]" />
            </div>
          </div>
          <img src={shadowRec} className="absolute top-0 left-0 z-[-1] h-full" />
        </div>
        <div
          id="part2"
          className="mx-auto mt-[80px] flex max-w-[1440px] items-center justify-center"
        >
          <div className="relative z-[1] mr-[120px] flex-1">
            <img src={part2} className="w-[100%]" />
          </div>
          <div>
            <div className="flex gap-[26px]">
              <div>
                <div className="text-[60px] font-medium">ABOUT</div>
                <img src={wave} />
              </div>
              <div className="flex-1">
                <div className="text-[60px] font-medium text-blue">p0x labs</div>
                <div className="h-[37px] bg-gray" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="my-[40px] w-[635px] text-black2">
                p0x labs is a team of world-class contributors on a mission to enable privacy across
                web3. At p0x labs, we believe privacy is a fundamental human right and we work to
                build and deploy the tools to make it accessible to the world. Powered by
                zero-knowledge proofs, we lead innovation in the cryptography space.
              </div>
              <img src={breakLine2} />
            </div>
            <div className="-ml-[345px] bg-gray pt-[26px] pb-[54px] pl-[345px]">
              <div className="font-bold text-black3">
                Empower a decentralized future with privacy using zero-knowledge proofs
              </div>
              <div className="mt-[42px] flex justify-between">
                <div>
                  <img src={bluePoints} className="h-[22px]" />
                  <div className="mt-[18px] w-[136px] text-[14px] opacity-60">
                    World-class cryptography team with specialized expertise in ZKPs
                  </div>
                </div>
                <div>
                  <img src={grayPoints} className="h-[22px]" />
                  <div className="mt-[18px] w-[136px] text-[14px] opacity-60">
                    The fastest UTXO-based zkAssets protocol with low transaction fees
                  </div>
                </div>
                <div>
                  <img src={bluePoints} className="h-[22px]" />
                  <div className="relative mt-[18px] w-[136px] text-[14px]">
                    <div className="opacity-60">
                      Enabling universal ZKP development through open source abstractions
                    </div>
                    <img src={arrow} className="absolute top-[193px] right-0" />
                  </div>
                </div>
              </div>
              <button
                className="mt-[30px] h-[40px] w-[240px] rounded-[8px] bg-blue text-[20px] text-white"
                onClick={() => navigate('/team')}
              >
                Check out the Team
              </button>
            </div>
          </div>
        </div>
        <div
          id="part3"
          className="relative mt-[68px] inline-block h-[685px] w-[80%] rounded-tr-[130px] bg-gray"
        >
          <img src={ellipse1} className="absolute top-0 left-0 -translate-y-1/2" />
          <div className="absolute -top-[68px] flex w-full items-end">
            <img src={wave1} className="ml-[200px] h-[114px]" />
            <div className="mr-[60px] h-[13px] w-full bg-blue" />
          </div>
          <div className="mt-[55px] ml-[200px] mr-[180px] h-[37px] bg-yellow">
            <div className="text-[60px] font-medium">PROJECTS</div>
          </div>
          <div className="absolute left-[0] right-[0] z-[2] flex w-[100vw] flex-col items-center">
            <div className="mt-[53px] h-[254px] w-[600px] rounded-[17px] bg-white py-[25px] text-center shadow-[0px_5px_34px_rgba(0,0,0,0.06)]">
              <div className="flex h-[50px] items-center justify-center gap-[13px]">
                <span className="text-[30px]">{projects[0].title}</span>
              </div>
              <div className="relative z-[1] mx-auto mt-[10px] w-[85px]">
                <div className="absolute bottom-[3px] z-[-1] h-[5px] w-full bg-yellow" />
                <div className="text-center text-[14px]">{projects[0].subtitle}</div>
              </div>
              <div className="text-[14px] opacity-80">
                <div className="mt-[10px] mb-[30px]">{projects[0].intro}</div>
                <button
                  className="relative mx-auto block h-[48px] w-[377px] rounded-[8px] bg-blue text-white"
                  onClick={() => window.open(projects[0].link)}
                >
                  <img src={wave3} className="absolute left-0 bottom-0" />
                  <span className="text-[20px]">{projects[0].btnText}</span>
                </button>
              </div>
            </div>
            <div className="mt-[90px] flex gap-[40px]">
              <div className="max-w-[514px] rounded-[17px] bg-white px-[20px] py-[25px] shadow-[0px_5px_34px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-center gap-[13px]">
                  <img src={projects[1].iconLeft} className="h-[50px]" />
                  <span className="text-center text-[30px]">{projects[1].title}</span>
                  <img src={projects[1].iconRight} />
                </div>
                <div className="relative z-[1] mx-auto mt-[10px] w-[85px]">
                  <div className="absolute bottom-[3px] z-[-1] h-[5px] w-full bg-yellow" />
                  <div className="text-[14px]">{projects[1].subtitle}</div>
                </div>
                <div className="text-[14px] opacity-80">
                  <div className="mt-[10px] mb-[30px] text-center">{projects[1].intro}</div>
                </div>
                <button
                  className="relative mx-auto block h-[48px] w-[377px] rounded-[8px] bg-blue text-white"
                  onClick={() => window.open(projects[1].link)}
                >
                  <img src={wave3} className="absolute left-0 bottom-0" />
                  <span className="text-[20px]">{projects[1].btnText}</span>
                </button>
              </div>
              <div className="max-w-[514px] rounded-[17px] bg-white px-[20px] py-[25px] shadow-[0px_5px_34px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-center gap-[13px]">
                  <img src={projects[2].iconLeft} className="h-[50px]" />
                  <span className="text-[30px]">{projects[2].title}</span>
                  <img src={projects[2].iconRight} />
                </div>
                <div className="relative z-[1] mx-auto mt-[10px] w-[85px]">
                  <div className="absolute bottom-[3px] z-[-1] h-[5px] w-full bg-yellow" />
                  <div className="text-center text-[14px]">{projects[2].subtitle}</div>
                </div>
                <div className="text-[14px] opacity-80">
                  <div className="mt-[10px] mb-[30px] text-center">{projects[2].intro}</div>
                </div>
                <button
                  className="relative mx-auto block h-[48px] w-[377px] rounded-[8px] bg-blue text-white"
                  onClick={() => window.open(projects[2].link)}
                >
                  <img src={wave3} className="absolute left-0 bottom-0" />
                  <span className="text-[20px]">{projects[2].btnText}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-[1] mt-[67px]">
          <img src={ellipse2} className="absolute bottom-0 right-0 translate-y-1/2" />
        </div>
        <div
          id="part4"
          className="relative mt-[130px] inline-block w-full rounded-tr-[130px] rounded-tl-[130px] bg-gray pb-[77px] shadow-[0px_5px_34px_rgba(0,0,0,0.06)]"
        >
          <img src={arrow2} className="absolute left-[153px] -top-[27px]" />
          <div className="mt-[85px] text-center text-[60px] font-medium text-black1">USE CASE</div>
          <div className="mx-auto mt-[25px] mb-[62px] w-[830px] text-center text-[14px] text-black opacity-80">
            These use cases can be deployed on any network built by p0x labs. If you are interested
            in pursuing a use case further, please reach out to hello@p0xeidon.xyz
          </div>
          <div className="flex justify-center gap-[30px]">
            {useCase.map((v, i) => (
              <div
                key={i}
                className="rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[20px] rounded-br-[20px] bg-white px-[24px] pt-[54px] pb-[34px] shadow-[0px_5px_34px_rgba(0,0,0,0.06)]"
              >
                <img src={v.icon} />
                <div className="h-[62px] text-[30px] font-medium leading-[62px]">{v.title}</div>
                <div className="max-w-[244px] text-[14px] opacity-80">{v.intro}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center pc:hidden">
        <div id="part1-mb">
          <div className="relative pt-[80px] text-[26px] font-medium">
            <div>
              BRINGING <span className="text-blue">PRIVACY</span>
            </div>
            <div>TO EVERY WEB3 PROJECT</div>
          </div>
          <div className="mt-[20px] mb-[16px] w-full px-[37px] font-mono text-[14px] text-black2 opacity-80">
            We are p0x labs, the decentralized laboratory for building cutting-edge privacy
            technologies
          </div>
          <div className="scale-83 text-[12px] font-light text-black opacity-80">
            powered by <span className="font-semibold">zero-knowledge proofs</span>
          </div>
          <div className="mt-[10px] px-[37px]">
            <img src={part1} className="mx-auto w-full max-w-[400px]" />
          </div>
        </div>
        <div id="part2-mb" className="mt-[10px]">
          <div className="relative flex justify-center gap-[6px]">
            <div>
              <div className="text-[26px] font-medium">ABOUT</div>
              <img src={wave} className="w-[35px]" />
            </div>
            <div>
              <div className="text-[26px] font-medium text-blue">p0x labs</div>
            </div>
            <div className="absolute top-[40px] left-1/2 right-0 h-[14px] bg-gray" />
          </div>
          <div className="relative mt-[30px]">
            <div className="px-[35px] text-black2">
              p0x labs is a team of world-class contributors on a mission to enable privacy across
              web3. At p0x labs, we believe privacy is a fundamental human right and we work to
              build and deploy the tools to make it accessible to the world. Powered by
              zero-knowledge proofs, we lead innovation in the cryptography space.
            </div>
            <img src={breakLine2} className="absolute -top-[25px] right-0 w-[90px]" />
          </div>
          <div className="mt-[12px] inline-block w-full bg-gray">
            <div className="mt-[20px] px-[60px] text-[14px] font-bold text-black3">
              Empower a decentralized future with privacy using zero-knowledge proofs
            </div>
            <div className="mt-[27px]">
              <div>
                <img src={bluePoints} className="mx-auto h-[24px]" />
                <div className="mx-auto mt-[11px] w-[150px] text-[12px] opacity-60">
                  World-class cryptography team with specialized expertise in ZKPs
                </div>
              </div>
              <div className="mt-[20px]">
                <img src={grayPoints} className="mx-auto h-[24px]" />
                <div className="mx-auto mt-[11px] w-[150px] text-[12px] opacity-60">
                  The fastest UTXO-based zkAssets protocol with low transaction fees
                </div>
              </div>
              <div className="mt-[20px]">
                <img src={bluePoints} className="mx-auto h-[24px]" />
                <div className="mx-auto mt-[11px] w-[150px] text-[12px] opacity-60">
                  Enabling universal ZKP development through open source abstractions
                </div>
              </div>
            </div>
            <button
              className="mt-[20px] h-[22px] w-[114px] rounded-[4px] bg-blue text-[12px] text-white"
              onClick={() => navigate('/team')}
            >
              <div className="scale-83">Check out the Team</div>
            </button>
            <div className="mt-[20px] px-[100px]">
              <img src={part2} className="mx-auto mb-[16px] w-full max-w-[400px]" />
            </div>
          </div>
        </div>
        <div className="relative my-[40px] inline-block h-[1px] w-full">
          <img src={ellipse1} className="absolute top-0 left-0 z-[1] w-[40px] -translate-y-1/2" />
        </div>
        <div id="part3-mb" className="relative inline-block w-full bg-gray">
          <div className="absolute -top-[40px] flex w-full justify-center">
            <img src={wave1} className="relative w-[130px]" />
            <div className="absolute bottom-0 right-0 h-[6px] w-[50%] bg-blue" />
            <div className="absolute -bottom-[20px] right-0 h-[17px] w-[calc(50%+75px)] bg-yellow" />
          </div>
          <div className="relative z-[1] mt-[13px] text-[26px] font-medium">PROJECTS</div>
          {projects.map((v, i) => (
            <div
              key={i}
              className="mx-auto my-[20px] w-[270px] rounded-[10px] bg-white py-[13px] px-[10px] shadow-[0px_5px_34px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center justify-center gap-[6px]">
                {v.iconLeft !== undefined ? <img src={v.iconLeft} className="h-[25px]" /> : null}
                <span className="text-[16px]">{v.title}</span>
                {v.iconRight !== undefined ? <img src={v.iconRight} className="h-[20px]" /> : null}
              </div>
              <div className="relative z-[1] mx-auto mt-[5px] w-[80px] scale-83">
                <div className="absolute bottom-[3px] z-[-1] h-[4px] w-full bg-yellow" />
                <div className="text-center text-[12px]">{v.subtitle}</div>
              </div>
              <div className="text-[12px] opacity-80">
                <div className="my-[10px]">{v.intro}</div>
              </div>
              {v.link !== undefined ? (
                <button
                  className="relative mx-auto block h-[25px] w-[198px] rounded-[4px] bg-blue text-white"
                  onClick={() => window.open(v.link)}
                >
                  <img src={wave3} className="absolute left-0 bottom-0" />
                  <span className="scale-83 text-[12px]">{v.btnText}</span>
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <div className="relative my-[40px] inline-block h-[1px] w-full">
          <img
            src={ellipse2}
            className="absolute bottom-0 right-0 z-[1] w-[40px] translate-y-1/2"
          />
        </div>
        <div id="part4-mb" className="relative inline-block w-full bg-gray pb-[40px]">
          <div className="mt-[10px] text-center text-[26px] font-medium text-black1">USE CASE</div>
          <div className="mx-[40px] my-[20px] text-center text-[16px] text-black opacity-80">
            These use cases can be deployed on any network built by p0x labs. If you are interested
            in pursuing a use case further, please reach out to hello@p0xeidon.xyz
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            {useCase.map((v, i) => (
              <div
                key={i}
                className="rounded-tr-[70px] rounded-bl-[70px] bg-white p-[20px] shadow-[0px_5px_34px_rgba(0,0,0,0.06)]"
              >
                <img src={v.icon} className="mx-auto" />
                <div className="my-[10px] text-[16px] font-medium">{v.title}</div>
                <div className="w-[200px] text-[12px] opacity-80">{v.intro}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
