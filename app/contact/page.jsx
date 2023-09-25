"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import menu from "@/public/images/menu.svg";
import cancel from "@/public/images/cancel.svg";
import vector17 from "@/public/images/vector17.png";
import vector18 from "@/public/images/vector18.png";
import star from "@/public/images/star.png";
import sstar from "@/public/images/sstar.png";
import vector5 from "@/public/images/vector5.png";
import vector6 from "@/public/images/vector6.png";
import vector15 from "@/public/images/vector15.png";

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
          <nav className="navbar-main w-full relative z-[9999]">
            <div className="logo">
              <Link href="/">
                <span>get</span>
                <span>linked</span>
              </Link>
            </div>
            <div className="nav-hide">
              <ul>
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <Link href="/contact">Contact</Link>
              </ul>
              <Link href="/register">Register</Link>
            </div>
            <div onClick={popuphandler} id="mobile-Hamburger-menu">
              <Image quality={100} src={menu} alt="menu" />
            </div>
          </nav>
        </header>

        <main className="lg:py-[115px]">
          <div className="contact-container flex flex-col lg:flex-row lg:items-center justify-between px-12 lg:pl-[188px] lg:pr-[208px]">
            <div className="left hidden lg:block">
              <div className="left-one">
                <h2 className="clashd text-[#D434FE] text-[32px] font-semibold">
                  Get in touch
                </h2>
                <div className="grid gap-y-[18px] pt-[18px]">
                  <p className="max-w-[96px] ">Contact Information</p>
                  <p className="max-w-[120px] ">
                    27,Alara Street Yaba 100012 Lagos State
                  </p>
                  <p className="max-w-[] ">Call Us : 07067981819</p>
                  <p className="max-w-[274px] ">
                    we are open from Monday-Friday 08:00am - 05:00pm
                  </p>
                </div>
              </div>
              <div className="left-two pt-[36px]">
                <h6 className="text-[#D434FE] ">Share on</h6>
                <div className="flex justify-start items-start gap-4 pt-4">
                  <div className="flex gap-5 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                    >
                      <path
                        d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                    >
                      <path
                        d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="right w-full lg:max-w-[617px]">
              <Link href="/" className="block lg:hidden pt-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <circle
                    cx="11.5"
                    cy="11.5"
                    r="11"
                    stroke="url(#paint0_linear_142_207)"
                  />
                  <path
                    d="M12.2667 9.2002L9.20001 12.2669L12.2667 14.5669"
                    stroke="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_142_207"
                      x1="11.5"
                      y1="0"
                      x2="11.5"
                      y2="23"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#903AFF" />
                      <stop offset="1" stop-color="#FF26B9" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <div className="inner-bg contact-bg py-[41px] lg:py-[75px] px-0 lg:px-[92px]">
                <div className="clashd max-w-[205px] lg:max-w-none grid lg:gap-y-2 font-semibold text-[20px] text-[#D434FE]">
                  <h2>Questions or need assistance?</h2>
                  <h2>Let us know about it!</h2>
                </div>
                <div className="text-sm pt-6 max-w-[280px]">
                  <p className="block lg:hidden ">
                    Email us below to any question related to our event
                  </p>
                </div>
                <form className="pt-8 grid gap-y-6 lg:gap-y-10">
                  <div>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Topic" />
                  </div>
                  <div>
                    <input type="text" placeholder="Mail" />
                  </div>
                  <div>
                    <textarea type="text" placeholder="Message" />
                  </div>
                  <div className="flex justify-center items-center">
                    <button className="cta-button1">Submit</button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col pb-10 justify-center items-center lg:hidden">
                <h6 className="text-xs text-[#D434FE]">Share On</h6>
                <div className="flex justify-start items-start gap-3 pt-2">
                  <div className="flex gap-5 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M5.38137 1.37988H11.1767C13.3845 1.37988 15.1783 3.17368 15.1783 5.38143V11.1768C15.1783 12.2381 14.7567 13.2559 14.0062 14.0063C13.2558 14.7567 12.238 15.1783 11.1767 15.1783H5.38137C3.17362 15.1783 1.37982 13.3845 1.37982 11.1768V5.38143C1.37982 4.32016 1.80141 3.30235 2.55185 2.55191C3.30228 1.80147 4.32009 1.37988 5.38137 1.37988ZM5.24339 2.75973C4.58466 2.75973 3.95292 3.0214 3.48713 3.48719C3.02134 3.95298 2.75967 4.58472 2.75967 5.24345V11.3148C2.75967 12.6877 3.87044 13.7985 5.24339 13.7985H11.3147C11.9734 13.7985 12.6052 13.5368 13.071 13.071C13.5367 12.6052 13.7984 11.9735 13.7984 11.3148V5.24345C13.7984 3.8705 12.6877 2.75973 11.3147 2.75973H5.24339ZM11.9011 3.79461C12.1299 3.79461 12.3492 3.88547 12.511 4.0472C12.6727 4.20894 12.7635 4.42829 12.7635 4.65701C12.7635 4.88574 12.6727 5.10509 12.511 5.26683C12.3492 5.42856 12.1299 5.51942 11.9011 5.51942C11.6724 5.51942 11.4531 5.42856 11.2913 5.26683C11.1296 5.10509 11.0387 4.88574 11.0387 4.65701C11.0387 4.42829 11.1296 4.20894 11.2913 4.0472C11.4531 3.88547 11.6724 3.79461 11.9011 3.79461ZM8.27905 4.8295C9.19394 4.8295 10.0714 5.19294 10.7183 5.83986C11.3652 6.48679 11.7287 7.36421 11.7287 8.27911C11.7287 9.194 11.3652 10.0714 10.7183 10.7184C10.0714 11.3653 9.19394 11.7287 8.27905 11.7287C7.36415 11.7287 6.48673 11.3653 5.8398 10.7184C5.19287 10.0714 4.82943 9.194 4.82943 8.27911C4.82943 7.36421 5.19287 6.48679 5.8398 5.83986C6.48673 5.19294 7.36415 4.8295 8.27905 4.8295ZM8.27905 6.20934C7.73011 6.20934 7.20366 6.4274 6.8155 6.81556C6.42734 7.20372 6.20928 7.73017 6.20928 8.27911C6.20928 8.82804 6.42734 9.3545 6.8155 9.74265C7.20366 10.1308 7.73011 10.3489 8.27905 10.3489C8.82798 10.3489 9.35444 10.1308 9.74259 9.74265C10.1307 9.3545 10.3488 8.82804 10.3488 8.27911C10.3488 7.73017 10.1307 7.20372 9.74259 6.81556C9.35444 6.4274 8.82798 6.20934 8.27905 6.20934Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M4.83758 0.759766H0.666687L5.58834 7.21875L0.934816 12.4884H2.5138L6.32004 8.17874L9.60432 12.4884H13.7752L8.6462 5.75736L13.0602 0.759766H11.4812L7.91451 4.79795L4.83758 0.759766ZM10.2002 11.3156L3.05006 1.93263H4.24174L11.3918 11.3156H10.2002Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                    >
                      <path
                        d="M5.64342 8.00344H7.36823L8.05815 5.24375H5.64342V3.86391C5.64342 3.15329 5.64342 2.48406 7.02327 2.48406H8.05815V0.165925C7.83324 0.136258 6.98394 0.0693359 6.08704 0.0693359C4.2139 0.0693359 2.88373 1.21254 2.88373 3.31197V5.24375H0.813965V8.00344H2.88373V13.8678H5.64342V8.00344Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M5.22997 3.44987C5.22978 3.81583 5.08423 4.16673 4.82533 4.42537C4.56643 4.68401 4.21539 4.82921 3.84943 4.82903C3.48347 4.82884 3.13258 4.68329 2.87394 4.42439C2.61529 4.16549 2.47009 3.81445 2.47028 3.44849C2.47046 3.08253 2.61601 2.73164 2.87491 2.473C3.13381 2.21435 3.48485 2.06915 3.85081 2.06934C4.21677 2.06952 4.56767 2.21507 4.82631 2.47397C5.08495 2.73287 5.23015 3.08391 5.22997 3.44987ZM5.27136 5.8508H2.51167V14.4886H5.27136V5.8508ZM9.63167 5.8508H6.88578V14.4886H9.60407V9.95584C9.60407 7.43072 12.895 7.19615 12.895 9.95584V14.4886H15.6202V9.01755C15.6202 4.76072 10.7493 4.91941 9.60407 7.00987L9.63167 5.8508Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Absolute Purple Blur Images */}
        <div className="absolute hidden lg:block mix-blend-hard-light -z-50 left-0 top-0">
          <Image src={vector17} alt="purple blur" />
        </div>
        <div className="absolute hidden lg:block mix-blend-hard-light -z-50 right-0 bottom-0">
          <Image src={vector18} alt="purple blur" />
        </div>
        <div className="absolute mix-blend-hard-light block lg:hidden top-0 left-0 -z-50">
          <Image quality={100} src={vector15} alt="Purple Blur" />
        </div>

        {/* Star Images */}
        <div className="bottom-[210px] right-[27px] lg:bottom-auto lg:top-[835px] lg:right-[128px] z-50 absolute inline-flex justify-center items-center w-[10px] lg:w-[15px]">
          <Image
            quality={100}
            className="blink w-full h-auto"
            src={sstar}
            alt="white star"
          />
        </div>
        <div className="top-[138px] right-[57px] lg:top-[167px] lg:right-[235px] z-50 absolute inline-flex justify-center items-center w-[16px] lg:w-[26px]">
          <Image
            quality={100}
            className="blink w-full h-auto"
            src={star}
            alt="grey star"
          />
        </div>
        <div className="bottom-[133px] lg:bottom-auto lg:top-[698px] left-[34px] lg:left-auto lg:right-[809px] absolute max-w-[12px] lg:max-w-[30px]">
          <Image
            quality={100}
            className="blink"
            src={vector6}
            alt="dark purple star"
          />
        </div>
        <div className="top-[67px] left-[183px] lg:top-[200px] lg:left-[205px] absolute lg:max-w-[21px] max-w-[11px]">
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
