import Image from "next/image";
import Link from "next/link";
import menu from "@/public/images/menu.svg";
import vector1 from "@/public/images/vector1.png";
import vector2 from "@/public/images/vectorxxx.png";
import vector3 from "@/public/images/vector3.svg";
import LImg1 from "@/public/images/LImg1.png";
import LImg2 from "@/public/images/vectorxxxx.png";
import star from "@/public/images/star.png";
import sstar from "@/public/images/sstar.png";
import bulb from "@/public/images/bulb.png";
import chain from "@/public/images/chain.png";
import spark from "@/public/images/spark.png";

export default function Home() {
  return (
    <>
      <header className="setbody relative">
        <div>
          <nav className="navbar-main">
            <div className="logo">
              <span>get</span>
              <span>linked</span>
            </div>
            <div>
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
                <h1>
                  Hackathon <span>1.0</span>
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
            </div>
            <div className="relative">
              <div className="relative z-[-9]">
                <Image src={LImg1} alt="change" />
              </div>
              <div className="z-20 absolute bottom-[56px] max-w-[600px]">
                <Image src={LImg2} alt="change" />
              </div>
            </div>
          </div>
          
          <div>
            <div className="top-[152px] left-[644px] absolute inline-flex justify-center items-center w-[53px] h-auto">
              <Image className="w-full h-auto" src={bulb} alt="" />
            </div>
            <div className="absolute inline-flex top-[299px] left-[706px] z-50">
              <div className="inline-flex justify-center items-center w-[88px] h-auto">
                <Image className="w-full h-auto" src={chain} alt="" />
              </div>
              <div className="inline-flex justify-center items-center w-[58px] h-auto">
                <Image className="w-full h-auto" src={spark} alt="" />
              </div>
            </div>
            <div className="top-[146px] left-[821px] absolute inline-flex justify-center items-center w-[26px] h-8">
              <Image className="w-full h-auto" src={star} alt="" />
            </div>
            <div className="top-[68px] left-[185px] absolute inline-flex justify-center items-center w-[26px] h-auto">
              <Image className="w-full h-auto" src={sstar} alt="" />
            </div>
          </div>
        </div>

        <span className="block blur1">
          <Image src={vector1} alt="purple blur" />
        </span>
        <span className="block blur2">
          <Image src={vector2} alt="purple blur" />
        </span>
      </header>
    </>
  );
}
