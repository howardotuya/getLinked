"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import menu from "@/public/images/menu.svg";
import vector1 from "@/public/images/vector11.png";
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
import cancel from "@/public/images/cancel.svg";
import Img1 from "@/public/images/Img1.png";
import vector5 from "@/public/images/vector5.png";
import vector6 from "@/public/images/vector6.png";
import curlyArrow from "@/public/images/curly-arrow.png";

export default function Home() {
  useEffect(() => {
    document.getElementById("mobile-sidebar").style.display = "none";
  }, []);

  const popuphandler = () => {
    const popup = document.getElementById("mobile-sidebar");

    if (popup.style.display == "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  };

  return (
    <>
      <nav
        id="mobile-sidebar"
        className="fixed hidden top-0 bottom-0 right-0 left-0 bg-[#150e28] z-[999]"
      >
        <div className="pt-10 pl-12 pr-[52px] grid">
          <div onClick={popuphandler} className="self-end justify-self-end">
            <Image src={cancel} alt="cancel" />
          </div>
          <ul className="grid pt-14 pb-7 font-medium gap-y-5">
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
          <Link className="cta-button1 justify-self-start" href="#">
            Register
          </Link>
        </div>
      </nav>
      <header className="setbody relative">
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
            <div onClick={popuphandler} id="mobile-Hamburger-menu">
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
            <div className="absolute grayscale max-w-[419px] lg:max-w-none right-0 bottom-0 ">
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

      <main className="setbody">
        <div>
          <section className="bigIdea relative">
            <div className="left max-w-[264px] lg:max-w-[490px] h-auto w-full">
              <Image src={Img1} alt="The Big Idea" />
            </div>
            <div className="bigIdea-right">
              <h2 className="heading2 max-w-[249px] lgmax-w-[399px]">
                Introduction to getlinked <span>tech Hackathon 1.0</span>
              </h2>
              <p className="pbody w-full max-w-[321px] lg:max-w-[530px]">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you&apos;re
                a coding genius, a design maverick, or a concept wizard, you&apos;ll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that&apos;s what we&apos;re
                all about!
              </p>
            </div>
            <div className="absolute top-[223px] left-[206px] max-w-[21px]"><Image src={vector5} alt="" /></div>
            <div className="absolute top-[216px] right-[161px] max-w-[30px]"><Image src={vector6} alt="" /></div>
            <div className="absolute rotate-[-70.92deg] top-[296px] lg:top-auto lg:bottom-[61px] left-[181px] lg:left-[715px] max-w-[22px] lg:max-w-[49px]"><Image src={curlyArrow} alt="" /></div>
          </section>
        </div>
      </main>
    </>
  );
}
