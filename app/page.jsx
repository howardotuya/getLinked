import Image from "next/image";
import Link from "next/link";
import menu from "@/public/images/menu.svg";
import vector1 from "@/public/images/vector1.png";
import vector2 from "@/public/images/vectorxxx.png";
import vector3 from "@/public/images/vector3.svg";
import vector4 from "@/public/images/vector4.png";
import LImg1 from "@/public/images/man.png";
import LImg2 from "@/public/images/LImg2.png";
import star from "@/public/images/star.png";
import sstar from "@/public/images/sstar.png";
import bulb from "@/public/images/bulb.png";
import chain from "@/public/images/chain.png";
import spark from "@/public/images/spark.png";
import mpurple from "@/public/images/m-purple.png";

export default function Home() {
  return (
    <>
      <header className=" relative">
        <div>
          <nav className="navbar-main">
            <div className="logo">
              <span>get</span>
              <span>linked</span>
            </div>
            <div className="nav-hide">
              <ul>
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
              <Link href="#">Register</Link>
            </div>
            <div id="mobile-Hamburger-menu">
              <Image src={menu} alt="menu" />
            </div>
          </nav>
        </div>
        <span className="block w-full">
          <span className="block divider"></span>
        </span>

        <div className="header-body relative">
          <div className="hb-d1 z-50 relative">
            <h5>Igniting a Revolution in HR Innovation</h5>
            <div>
              <Image src={vector3} alt="under-T" />
            </div>
          </div>

          <div className="hb-body">
            <div className="hbb-12 relative z-20">
              <div className="hb2-h1">
                <h1>getlinked Tech</h1>
                <h1 className="lg:block inline-flex items-center justify-center">
                  Hackathon <span>1.0</span>
                  <div className="z-50 xdis">
                    <div className="z-50 inline-flex justify-center items-center w-8 h-auto">
                      <Image className="w-full h-auto" src={chain} alt="" />
                    </div>
                    <div className="z-50 inline-flex justify-center items-center w-[22px] h-auto">
                      <Image className="w-full h-auto" src={spark} alt="" />
                    </div>
                  </div>
                </h1>
              </div>
              <p>
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <div>
                <Link className="cta-button1" href="#">
                  Register
                </Link>
              </div>
              <div className="unica-cont">
                <h4 className="unica-h4">
                  00<span>H</span> &nbsp;
                </h4>

                <h4 className="unica-h4">
                  00<span>M</span> &nbsp;
                </h4>
                <h4 className="unica-h4">
                  00<span>S</span>
                </h4>
              </div>
            </div>
            <div className="absolute grayscale max-w-[419px] lg:max-w-none right-0 bottom-0 z-[-9]">
              <Image src={LImg1} alt="change" />
            </div>
            <div className="z-20 absolute right-[32px] bottom-[42px] max-w-[337px] lg:max-w-[667px]">
              <Image src={LImg2} alt="change" />
            </div>
            <span className="disx -z-10 absolute right-0 bottom-0">
              <Image src={vector4} alt="spiral" />
            </span>
          </div>

          <div>
            <div className="z-50 top-[89px] right-[99px] lg:right-auto lg:top-[152px] lg:left-[644px] absolute inline-flex justify-center items-center w-[18px] h-[26px] lg:w-[53px] lg:h-auto">
              <Image className="w-full h-auto" src={bulb} alt="" />
            </div>
            <div className="z-50 absolute hidden lg:inline-flex top-[299px] lg:left-[706px]">
              <div className="z-50 inline-flex justify-center items-center w-[88px] h-auto">
                <Image className="w-full h-auto" src={chain} alt="" />
              </div>
              <div className="z-50 inline-flex justify-center items-center w-[58px] h-auto">
                <Image className="w-full h-auto" src={spark} alt="" />
              </div>
            </div>
            <div className="z-50 top-[81px] right-[68px] lg:right-auto lg:top-[146px] lg:left-[821px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="" />
            </div>
            <div className="z-50 top-[81px] left-[120px] lg:top-[68px] lg:left-[185px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="" />
            </div>
            <div className="z-50 bottom-[146px] lg:left-[571px] absolute inline-flex justify-center items-center w-[6px] h-[8px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="" />
            </div>
          </div>
        </div>

        <span className="inline-flex -z-50 absolute top-[92px] left-0">
          <Image src={mpurple} alt="purple blur" />
        </span>

        <span className="hidden lg:inline-flex blur1">
          <Image src={vector1} alt="purple blur" />
        </span>

        <span className="hidden lg:inline-flex blur2"> 
          <Image src={vector2} alt="purple blur" />
        </span>
      </header>

      <span className="block w-full">
        <span className="block divider"></span>
      </span> 
    </>
  );
}
