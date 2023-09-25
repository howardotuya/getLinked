"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import menu from "@/public/images/menu.svg";
import cancel from "@/public/images/cancel.svg";
import register from "@/public/images/register.png";
import mwalk from "@/public/images/mwalk.png";
import fwalk from "@/public/images/fwalk.png";
import line from "@/public/images/line.svg";
import vector19 from "@/public/images/vector19.png";
import vector20 from "@/public/images/vector20.png";
import vector15 from "@/public/images/vector15.png";
import star from "@/public/images/star.png";
import sstar from "@/public/images/sstar.png";
import vector5 from "@/public/images/vector5.png";
import vector6 from "@/public/images/vector6.png";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1200,
      once: false,
    });
  }, []);

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
    <div className="setbody relative">
      <div>
        <nav
          id="mobile-sidebar"
          className="fixed w-full hidden top-0 bottom-0 right-0 left-0 bg-[#150e28] z-[999]"
        >
          <div className="pt-10 pl-12 pr-[52px] grid">
            <div onClick={popuphandler} className="self-end justify-self-end">
              <Image quality={100} src={cancel} alt="cancel" />
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

        <header className="relative w-full disappear">
          <nav className="navbar-main w-full">
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
              <Image quality={100} src={menu} alt="menu" />
            </div>
          </nav>
        </header>

        <main className="lg:pt-[43px] lg:pr-[104px] pb-[56px]">
          <div className="contact-container relative flex flex-col lg:flex-row justify-center items-center lg:justify-end lg:items-end">
            <h1 className="text-[#D434FE] block lg:hidden self-start pl-16 text-[16px] pt-6 pb-8 font-semibold lg:text-[32px] clashd">
              Register
            </h1>
            <div className="left-one lg:absolute top-0 left-0">
              <div className="max-w-[195px] lg:max-w-[717px]">
                <Image src={register} alt="" />
              </div>
            </div>
            <div className="right-one z-50 relative lg:bg-[#150e28] lg:self-end w-full max-w-[740px]">
              <div className="inner-bg register-bg lg:py-[65px] px-16 lg:px-[92px]">
                <div>
                  <h1 className="text-[#D434FE] hidden lg:block font-semibold text-[32px] clashd">
                    Register
                  </h1>
                  <h6 className="pt-12 text-sm lg:text-sm relative">
                    Be part of this movement!
                    {/* man, woman and line */}
                    <div className="absolute left-[239px] bottom-1 w-[30px]">
                      <Image src={mwalk} alt="Man Walking" />
                    </div>
                    <div className="absolute left-[218px] bottom-1 w-[26px]">
                      <Image src={fwalk} alt="Female Walking" />
                    </div>
                    <div className="absolute left-[192px] bottom-1">
                      <Image src={line} alt="Line" />
                    </div>
                  </h6>
                  <h2 className="lg:pt-5 pt-3 text-[20px] lg:text-[24px]">
                    CREATE YOUR ACCOUNT
                  </h2>
                </div>
                <form className="pt-[36px] flex flex-col lg:pt-8">
                  <div className="grid gap-[18px] lg:gap-8">
                    <div className="form-one">
                      <div>
                        <label>Team's Name</label>
                        <input type="text" placeholder="Howard Otuya" />
                      </div>
                      <div>
                        <label>Phone</label>
                        <input type="text" placeholder="Howard Otuya" />
                      </div>
                    </div>
                    <div className="form-one">
                      <div>
                        <label>Email</label>
                        <input type="text" placeholder="Howard Otuya" />
                      </div>
                      <div>
                        <label>Project Topic</label>
                        <input type="text" placeholder="Howard Otuya" />
                      </div>
                    </div>
                    <div className="form-two">
                      <div>
                        <label>Category</label>
                        <select className="select">
                          <option value="select">select your category</option>
                          <option value="select">select your category</option>
                          <option value="select">select your category</option>
                        </select>
                      </div>
                      <div>
                        <label>Group Size</label>
                        <select className="select">
                          <option value="select">select</option>
                          <option value="select">select</option>
                          <option value="select">select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#FF26B9] text-[10px] lg:text-xs italic pt-4 lg:pt-6">
                    Please review your registration details before submitting
                  </p>
                  <div className="flex gap-[10px] pt-4 pb-5 items-center">
                    <input
                      className="larger shrink-0 grow-0"
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      value="agree"
                    />
                    <label
                      className="clabel text-[10px] lg:text-xs"
                      for="agreement"
                    >
                      I agreed with the event terms and conditions and privacy
                      policy
                    </label>
                  </div>
                  <button className="cta-button1 self-center lg:w-full">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Absolute Purple Blur Images */}
        <div className="absolute hidden lg:block mix-blend-hard-light -z-50 left-0 top-0">
          <Image src={vector19} alt="purple blur" />
        </div>
        <div className="absolute hidden lg:block mix-blend-hard-light -z-50 right-0 bottom-0">
          <Image src={vector20} alt="purple blur" />
        </div>
        <div className="absolute mix-blend-hard-light block lg:hidden top-0 left-0 -z-50">
          <Image quality={100} src={vector15} alt="Purple Blur" />
        </div>

        <div className="hidden lg:inline-flex bottom-[46px] right-[204px] z-50 absolute justify-center items-center w-[10px] lg:w-[15px]">
          <Image
            quality={100}
            className="blink w-full h-auto"
            src={sstar}
            alt="white star"
          />
        </div>
        <div className="top-[424px] left-[36px] lg:left-auto lg:top-[203px] lg:right-[212px] z-50 absolute inline-flex justify-center items-center w-[14px] lg:w-[26px]">
          <Image
            quality={100}
            className="blink delay w-full h-auto"
            src={star}
            alt="grey star"
          />
        </div>
        <div className="hidden lg:bottom-[139px] lg:left-[106px] z-50 absolute lg:inline-flex justify-center items-center w-[16px] lg:w-[26px]">
          <Image
            quality={100}
            className="blink w-full h-auto"
            src={star}
            alt="grey star"
          />
        </div>
        <div className="bottom-[220px] left-[596px] hidden lg:block absolute max-w-[12px] lg:max-w-[30px]">
          <Image
            quality={100}
            className="blink delay"
            src={vector6}
            alt="dark purple star"
          />
        </div>
        <div className="top-[161px] right-[57px] lg:right-auto lg:top-[200px] lg:left-[205px] absolute lg:max-w-[21px] max-w-[11px]">
          <Image
            quality={100}
            className="blink"
            src={vector5}
            alt="light purple star"
          />
        </div>
      </div>
    </div>
  );
}
