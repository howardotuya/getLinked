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
import Img2 from "@/public/images/Img2.png";
import Img3 from "@/public/images/Img3.png";
import Img4 from "@/public/images/Img4.png";
import Img5 from "@/public/images/Img5.png";
import Img22 from "@/public/images/Img22.png";
import vector5 from "@/public/images/vector5.png";
import vector6 from "@/public/images/vector6.png";
import curlyArrow from "@/public/images/curly-arrow.png";
import vector12 from "@/public/images/vector12.png";
import vector13 from "@/public/images/vector13.png";
import vector14 from "@/public/images/vector14.png";
import vector15 from "@/public/images/vector15.png";
import vector16 from "@/public/images/vector16.png";
import Img6 from "@/public/images/1st.png";
import Img7 from "@/public/images/2nd.png";
import Img8 from "@/public/images/3rd.png";
import pas1 from "@/public/images/pas1.png";
import pas2 from "@/public/images/pas2.png";
import pas3 from "@/public/images/pas3.png";
import pas4 from "@/public/images/pas4.png";
import pas5 from "@/public/images/pas5.png";
import pas6 from "@/public/images/pas6.png";
import Img6x from "@/public/images/Img6.png";
import vector1z from "@/public/images/vector1z.svg";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <>
      <nav
        id="mobile-sidebar"
        className="fixed hidden top-0 bottom-0 right-0 left-0 bg-[#150e28] z-[9999999]"
      >
        <div className="pt-10 pl-12 pr-[52px] grid">
          <div onClick={popuphandler} className="self-end justify-self-end">
            <Image quality={100} src={cancel} alt="cancel" />
          </div>
          <ul className="grid pt-14 pb-7 font-medium gap-y-5">
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Link className="cta-button1 justify-self-start" href="/register">
            Register
          </Link>
        </div>
      </nav>

      <header className="setbody relative">
        <div>
          <nav className="navbar-main relative z-[9999]">
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
        </div>
        <span className="block w-full">
          <span className="block divider"></span>
        </span>

        <div className="header-body relative">
          <div className="hb-d1 z-50 relative">
            <div className="typewritter">
              <h5>Igniting a Revolution in HR Innovation</h5>
            </div>
            <div>
              <Image quality={100} src={vector3} alt="under-T" />
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
                      <Image
                        quality={100}
                        className="w-full h-auto"
                        src={chain}
                        alt="chain"
                      />
                    </div>
                    <div className="z-50 inline-flex justify-center items-center w-[22px] h-auto">
                      <Image
                        quality={100}
                        className="w-full h-auto"
                        src={spark}
                        alt="spark"
                      />
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
              <Image quality={100} src={LImg1} alt="change" />
            </div>

            {/* Here are absolute Images at the right side - blue and metric asset */}
            <div className="z-20 absolute right-[32px] bottom-[42px] max-w-[337px] lg:max-w-[667px]">
              <Image quality={100} src={LImg2} alt="Blue World Spiral" />
            </div>
            <span className="disx -z-10 absolute right-0 bottom-0">
              <Image quality={100} src={vector4} alt="metric" />
            </span>
          </div>

          {/* SVG's in the header or above the fold */}
          <div>
            <div className="z-50 top-[89px] right-[99px] lg:right-auto lg:top-[152px] lg:left-[644px] absolute inline-flex justify-center items-center w-[18px] h-[26px] lg:w-[53px] lg:h-auto">
              <Image
                quality={100}
                className="w-full h-auto"
                src={bulb}
                alt="bulb"
              />
            </div>
            <div className="z-50 absolute hidden lg:inline-flex top-[299px] lg:left-[706px]">
              <div className="z-50 inline-flex justify-center items-center w-[88px] h-auto">
                <Image
                  quality={100}
                  className="w-full h-auto"
                  src={chain}
                  alt="chain"
                />
              </div>
              <div className="z-50 inline-flex justify-center items-center w-[58px] h-auto">
                <Image
                  quality={100}
                  className="w-full h-auto"
                  src={spark}
                  alt="spark"
                />
              </div>
            </div>
            <div className="z-50 top-[81px] right-[68px] lg:right-auto lg:top-[146px] lg:left-[821px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink"
                src={star}
                alt="star"
              />
            </div>
            <div className="z-50 top-[81px] left-[120px] lg:top-[68px] lg:left-[185px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink delay"
                src={sstar}
                alt="star"
              />
            </div>
            <div className="z-50 top-[275px] lg:top-auto right-[91px] lg:right-auto lg:bottom-[146px] lg:left-[571px] absolute inline-flex justify-center items-center w-[6px] h-[8px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink"
                src={star}
                alt="star"
              />
            </div>
          </div>
        </div>

        {/* Mobile Blur for Left Side  */}
        <span className="inline-flex lg:hidden -z-50 absolute top-[92px] left-0">
          <Image quality={100} src={mpurple} alt="purple blur" />
        </span>

        {/* Desktop Blur for Left Side  */}
        <span className="hidden lg:inline-flex blur1">
          <Image quality={100} src={vector1} alt="purple blur" />
        </span>

        {/* Desktop Blur for Left Side  */}
        <span className="hidden mix-blend-hard-light lg:inline-flex blur2">
          <Image quality={100} src={vector2} alt="purple blur" />
        </span>
      </header>

      <main className="setbody">
        {/* divider */}
        <span className="block w-full">
          <span className="block divider"></span>
        </span>
        <div>
          {/* Big idea Section */}
          <section className="bigIdea">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="left max-w-[264px] lg:max-w-[490px] h-auto w-full"
            >
              <Image quality={100} src={Img1} alt="The Big Idea" />
            </div>
            <div className="bigIdea-right">
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className="heading2 max-w-[249px] lg:max-w-[399px]"
              >
                Introduction to getlinked <span>tech Hackathon 1.0</span>
              </h2>
              <p
                data-aos="fade-down"
                data-aos-delay="200"
                className="pbody w-full max-w-[321px] lg:max-w-[530px]"
              >
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </div>
            <div className="absolute top-[112px] lg:top-[223px] left-[57px] lg:left-[206px] lg:max-w-[21px] max-w-[11px]">
              <Image quality={100} className="blink" src={vector5} alt="star" />
            </div>
            <div className="absolute top-[366px] lg:top-[216px] right-[44px] lg:right-[161px] max-w-[8px] lg:max-w-[30px]">
              <Image
                quality={100}
                className="blink delay"
                src={vector6}
                alt="star"
              />
            </div>
            <div className="absolute top-[296px] lg:top-auto lg:bottom-[61px] left-[181px] lg:left-[715px] max-w-[22px] lg:max-w-[49px]">
              <Image quality={100} src={curlyArrow} alt="curlyArrow" />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* Rules and Regulations Section */}
          <section className="randg">
            <div className="bigIdea-right">
              <h2
                data-aos="fade-down"
                data-aos-delay="100"
                className="heading2 max-w-[107px] lg:max-w-[170px]"
              >
                Rules and <span>Guidelines</span>
              </h2>
              <p
                data-aos="fade-down"
                data-aos-delay="200"
                className="pbody w-full max-w-[321px] lg:max-w-[530px]"
              >
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="max-w-[294px] w-full inline-flex justify-center items-center lg:max-w-[604px]"
            >
              <Image
                quality={100}
                className="hidden lg:block w-full h-auto shrink-0"
                src={Img2}
                alt="Woman sitting"
              />
              <Image
                quality={100}
                className="lg:hidden block w-full h-auto shrink-0"
                src={Img22}
                alt="woman sitting"
              />
            </div>

            <div className="z-50 top-[442px] right-[42px] lg:right-auto lg:top-[116px] lg:left-[439px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink"
                src={star}
                alt="star"
              />
            </div>
            <div className="z-50 top-[185px] left-[43px] lg:top-auto lg:bottom-[167px] lg:left-[741px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto delay blink"
                src={sstar}
                alt="star"
              />
            </div>
            <div className="z-50 bottom-[19px] left-[108px] absolute inline-flex lg:hidden justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink"
                src={sstar}
                alt="star"
              />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* Judging Criteria Key attributes */}
          <section className="jcka">
            <div data-aos="fade-right" data-aos-delay="100" className="left">
              <Image quality={100} src={Img3} alt="Metric" />
            </div>
            <div className="right">
              <div>
                <h2
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className="heading2 max-w-[167px] lg:max-w-[267px]"
                >
                  Judging Criteria <span>Key attributes</span>
                </h2>
                <div
                  data-aos="fade-down"
                  data-aos-delay="200"
                  className="jcka-p"
                >
                  <p>
                    <span>Innovation and Creativity:</span> Evaluate the
                    uniqueness and creativity of the solution. Consider whether
                    it addresses a real-world problem in a novel way or
                    introduces innovative features.
                  </p>
                  <p>
                    <span>Functionality:</span> Assess how well the solution
                    works. Does it perform its intended functions effectively
                    and without major issues? Judges would consider the
                    completeness and robustness of the solution.
                  </p>
                  <p>
                    <span>Impact and Relevance:</span> Determine the potential
                    impact of the solution in the real world. Does it address a
                    significant problem, and is it relevant to the target
                    audience? Judges would assess the potential social,
                    economic, or environmental benefits.
                  </p>
                  <p>
                    <span>Technical Complexity:</span> Evaluate the technical
                    sophistication of the solution. Judges would consider the
                    complexity of the code, the use of advanced technologies or
                    algorithms, and the scalability of the solution.
                  </p>
                  <p>
                    <span>Adherence to Hackathon Rules:</span> Judges will
                    Ensure that the team adhered to the rules and guidelines of
                    the hackathon, including deadlines, use of specific
                    technologies or APIs, and any other competition-specific
                    requirements.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  className="cta-button2 lg:justify-self-start justify-self-center"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="absolute left-[173px] top-[15px] lg:top-[92px] lg:left-[215px] max-w-[13px] lg:max-w-[30px]">
              <Image
                quality={100}
                className="blink delay"
                src={vector6}
                alt="star"
              />
            </div>
            <div className="z-50 top-[221px] left-[212px] lg:top-[470px] lg:left-[421px] absolute inline-flex justify-center items-center w-[12px] h-[14px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink"
                src={star}
                alt="star"
              />
            </div>
            <div className="z-50 bottom-[76px] right-[50px] lg:bottom-[171px] lg:right-0 lg:left-[733px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink delay"
                src={sstar}
                alt="star"
              />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* FAQs */}
          <section className="faqs">
            <div data-aos="fade-down" data-aos-delay="200" className="left">
              <div className="faqtt">
                <h2 className="heading2 max-w-[158px] lg:max-w-[253px]">
                  Frequently Ask <span>Question</span>
                </h2>
                <p className="pbody pbody2 text-xs lg:text-sm max-w-[293px] lg:max-w-[342px]">
                  We got answers to the questions that you might want to ask
                  about getlinked Hackathon 1.0
                </p>
              </div>
              <div className="faqtt2">
                <div>
                  <p>Can I work on a project I started before the hackathon?</p>
                  <p>+</p>
                </div>
                <div>
                  <p>What happens if I need help during the hackathon?</p>
                  <p>+</p>
                </div>
                <div>
                  <p>
                    What happens if I don&apos;t have an idea for a project?
                  </p>
                  <p>+</p>
                </div>
                <div>
                  <p>Can I join a team or do I have to come with one?</p>
                  <p>+</p>
                </div>
                <div>
                  <p>What happens after the hackathon ends</p>
                  <p>+</p>
                </div>
                <div>
                  <p>Can I work on a project I started before the hackathon?</p>
                  <p>+</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="right lg:max-w-[741px]"
            >
              <Image quality={100} src={Img4} alt="Thinking" />
            </div>

            {/* absolute Images */}
            <div className="q q-1">?</div>
            <div className="q q-2">?</div>
            <div className="q q-3">?</div>

            <div className="absolute bottom-[376px] left-[186px] lg:bottom-auto lg:left-auto lg:top-[121px] right-[57px] lg:right-[471px] lg:max-w-[21px] max-w-[11px]">
              <Image
                quality={100}
                className="blink"
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="absolute bottom-[267px] left-[98px] lg:bottom-auto lg:left-auto lg:top-[253px] lg:right-[672px] lg:max-w-[21px] max-w-[11px]">
              <Image
                quality={100}
                className="delay blink"
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="absolute top-[47px] lg:top-[110px] left-[59px] lg:left-[183px] max-w-[18px] lg:max-w-[30px]">
              <Image
                quality={100}
                className="blink"
                e
                src={vector6}
                alt="dark purple star"
              />
            </div>
            <div className="z-50  bottom-[206px] left-[50px] lg:bottom-[398px] lg:left-[720px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto delay blink"
                src={star}
                alt="grey star"
              />
            </div>
            <div className="z-50 bottom-[44px] right-[92px] lg:bottom-[47px] lg:right-[250px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto blink"
                src={sstar}
                alt="white star"
              />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* timeline */}
          <section className="timeline">
            <div data-aos="fade-down" data-aos-delay="100" className="time-s1">
              <h2>Timeline</h2>
              <p>
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="t-cont-cover"
            >
              <div className="t-cont 1">
                <div className="left">
                  <h4 className="t-h4">Hackathon Announcement</h4>
                  <p className="xl:max-w-[436px]">
                    The getlinked tech hackathon 1.0 is formally announced to
                    the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className="t-numb">
                  1
                  <div className="absolute w-1 h-[137px] bottom-[64px] bg-[#a866fd]"></div>
                </div>
                <div className="right justify-self-start">
                  <h4 className="t-h4">November 18, 2023</h4>
                </div>
              </div>

              <div className="t-cont 2">
                <div className="left">
                  <h4 className="t-h4">November 18, 2023</h4>
                </div>
                <div className="t-numb">
                  2
                  <div className="absolute w-1 h-[86px] bottom-[64px] bg-[#a866fd]"></div>
                </div>
                <div className="right justify-self-start">
                  <h4 className="t-h4">Teams Registration begins</h4>
                  <p className="xl:max-w-[436px]">
                    Interested teams can now show their interest in the
                    getlinked tech hackathon 1.0 2023 by proceeding to register
                  </p>
                </div>
              </div>

              <div className="t-cont 3">
                <div className="left">
                  <h4 className="t-h4">Teams Registration ends</h4>
                  <p className="xl:max-w-[389px]">
                    Interested Participants are no longer Allowed to register
                  </p>
                </div>
                <div className="t-numb">
                  3
                  <div className="absolute w-1 h-[86px] bottom-[64px] bg-[#a866fd]"></div>
                </div>
                <div className="right justify-self-start">
                  <h4 className="t-h4">HNovember 18, 2023</h4>
                </div>
              </div>

              <div className="t-cont 4">
                <div className="left">
                  <h4 className="t-h4">November 18, 2023</h4>
                </div>
                <div className="t-numb">
                  4
                  <div className="absolute w-1 h-[86px] bottom-[64px] bg-[#a866fd]"></div>
                </div>
                <div className="right justify-self-start">
                  <h4 className="t-h4">
                    Announcement of the accepted teams and ideas
                  </h4>
                  <p className="xl:max-w-[485px]">
                    All teams whom idea has been accepted into getlinked tech
                    hackathon 1.0 2023 are formally announced
                  </p>
                </div>
              </div>

              <div className="t-cont 5">
                <div className="left">
                  <h4 className="t-h4">
                    Getlinked Hackathon 1.0 Offically Begins
                  </h4>
                  <p className="xl:max-w-[386px]">
                    All teams whom idea has been accepted into getlinked tech
                    hackathon 1.0 2023 are formally announced
                  </p>
                </div>
                <div className="t-numb">
                  5
                  <div className="absolute w-1 h-[86px] bottom-[64px] bg-[#a866fd]"></div>
                </div>
                <div className="right justify-self-start">
                  <h4 className="t-h4">HNovember 18, 2023</h4>
                </div>
              </div>

              <div className="t-cont 6">
                <div className="left">
                  <h4 className="t-h4">November 18, 2023</h4>
                </div>
                <div className="t-numb">
                  6
                  <div className="absolute w-1 h-[86px] bottom-[64px] bg-[#a866fd]"></div>
                </div>
                <div className="right justify-self-start">
                  <h4 className="t-h4">Demo Day</h4>
                  <p className="xl:max-w-[481px]">
                    Teams get the opportunity to pitch their projects to judges.
                    The winner of the hackathon will also be announced on this
                    day
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="t2-cont-cover"
            >
              <div className="t2-cont">
                <div className="left">
                  <div>
                    <div></div>
                  </div>
                  <div>1</div>
                </div>
                <div className="right">
                  <div>
                    <h5>Hackathon Announcement</h5>
                    <p>
                      The getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </p>
                  </div>
                  <h5>November 18, 2023</h5>
                </div>
              </div>
              <div className="t2-cont">
                <div className="left">
                  <div>
                    <div></div>
                  </div>
                  <div>2</div>
                </div>
                <div className="right">
                  <div>
                    <h5>Teams Registration begins</h5>
                    <p>
                      Interested teams can now show their interest in the
                      getlinked tech hackathon 1.0 2023 by proceeding to
                      register
                    </p>
                  </div>
                  <h5>November 18, 2023</h5>
                </div>
              </div>
              <div className="t2-cont">
                <div className="left">
                  <div>
                    <div></div>
                  </div>
                  <div>3</div>
                </div>
                <div className="right">
                  <div>
                    <h5>Teams Registration ends</h5>
                    <p>
                      Interested Participants are no longer Allowed to register
                    </p>
                  </div>
                  <h5>November 18, 2023</h5>
                </div>
              </div>
              <div className="t2-cont">
                <div className="left">
                  <div>
                    <div></div>
                  </div>
                  <div>4</div>
                </div>
                <div className="right">
                  <div>
                    <h5>Announcement of the accepted teams and ideas</h5>
                    <p>
                      All teams whom idea has been accepted into getlinked tech
                      hackathon 1.0 2023 are formally announced
                    </p>
                  </div>
                  <h5>November 18, 2023</h5>
                </div>
              </div>
              <div className="t2-cont">
                <div className="left">
                  <div>
                    <div></div>
                  </div>
                  <div>5</div>
                </div>
                <div className="right">
                  <div>
                    <h5>Getlinked Hackathon 1.0 Offically Begins</h5>
                    <p>
                      Accepted teams can now proceed to build their ground
                      breaking skill driven solutions
                    </p>
                  </div>
                  <h5>November 18, 2023</h5>
                </div>
              </div>
              <div className="t2-cont">
                <div className="left">
                  <div>
                    <div></div>
                  </div>
                  <div>6</div>
                </div>
                <div className="right">
                  <div>
                    <h5>Demo Day</h5>
                    <p>
                      Teams get the opportunity to pitch their projects to
                      judges. The winner of the hackathon will also be announced
                      on this day
                    </p>
                  </div>
                  <h5>November 18, 2023</h5>
                </div>
              </div>
            </div>

            {/* Absolute Images */}
            <div className="absolute top-[182px] left-[88px] lg:top-[266px] lg:left-[338px] lg:max-w-[21px] max-w-[11px]">
              <Image
                quality={100}
                className="blink"
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="z-50  bottom-[37px] left-[22px] lg:bottom-[183px] lg:left-[177px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="delay blink w-full h-auto"
                src={star}
                alt="grey star"
              />
            </div>
            <div className="z-50 top-[528px] right-[95px] lg:top-[734px] lg:right-[266px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="blink w-full h-auto"
                src={sstar}
                alt="white star"
              />
            </div>
          </section>

          {/* Prizes and Rewards */}
          <section className="pag flex flex-col lg:px-[106px] pt-[74px] pb-[89px] lg:pb-[149px] bg-[#110B21]">
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="right-intro z-[30] flex flex-col lg:items-start items-center self-center lg:pr-[164px] lg:self-end"
            >
              <h2 className="heading2 text-center lg:text-left max-w-[109px] lg:max-w-[174px]">
                Prizes and <span>Rewards</span>
              </h2>
              <p className="pbody2 text-center lg:text-left pt-1 lg:pt-4 max-w-[277px] lg:max-w-[401px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="flex relative z-[30] flex-col items-center lg:flex-row pt-10 lg:pt-[34px] lg:gap-[37px]">
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="left max-w-[321px] lg:max-w-none"
              >
                <Image quality={100} src={Img5} alt="Prizes and Rewards" />
              </div>

              <div data-aos="fade-down" data-aos-delay="300" className="right">
                <div className="right-awards flex justify-center items-center gap-[13px] lg:gap-[26px] pt-[113px] lg:pt-[230px]">
                  <div className="frame1 relative">
                    <h4 className="grid text-center">
                      2nd<span>Runner</span>
                    </h4>
                    <h2 class="award-h2">N300,000</h2>
                    <div className="absolute cd inline-flex justify-center items-center w-[75px] lg:w-[179px] bottom-[100px] lg:bottom-[200px]">
                      <Image
                        quality={100}
                        className="w-full h-auto"
                        src={Img7}
                        alt="2nd Place Medal"
                      />
                    </div>
                  </div>
                  <div className="frame12 relative">
                    <h4 className="grid text-center">
                      1st<span>Runner</span>
                    </h4>
                    <h2 class="award-h22">N400,000</h2>

                    <div className="absolute cd inline-flex justify-center items-center w-[125px] lg:w-[296px] bottom-[100px] lg:bottom-[198px]">
                      <Image
                        quality={100}
                        className="w-full h-auto"
                        src={Img6}
                        alt="Medal for 1st"
                      />
                    </div>
                  </div>
                  <div className="frame1 relative">
                    <h4 className="grid text-center">
                      3rd<span>Runner</span>
                    </h4>
                    <h2 class="award-h2">N150,000</h2>
                    <div className="absolute cd inline-flex justify-center items-center w-[75px] lg:w-[179px] bottom-[100px] lg:bottom-[189px]">
                      <Image
                        quality={100}
                        className="w-full h-auto"
                        src={Img8}
                        alt="Medal for 3rd place"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute Assets */}
            <div className="absolute top-[49px] left-[63px] lg:top-[79px] lg:left-[316px] lg:max-w-[21px] max-w-[11px]">
              <Image
                quality={100}
                className="blink delay "
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="z-50  bottom-[31px] right-[137px] lg:bottom-[107px] lg:right-[343px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="blink w-full h-auto"
                src={star}
                alt="grey star"
              />
            </div>
            <div className="z-50 top-[495px] left-[68px] lg:left-auto lg:top-[275px] lg:right-[748px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="blink delay w-full h-auto"
                src={sstar}
                alt="white star"
              />
            </div>
            <div className="z-50 top-[562px] right-[61px] lg:top-[407px] lg:right-[112px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="blink w-full h-auto"
                src={sstar}
                alt="white star"
              />
            </div>
            <div className="z-50 bottom-[528px] left-[95px] lg:bottom-[148px] lg:left-[538px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="blink delay w-full h-auto"
                src={sstar}
                alt="white star"
              />
            </div>
          </section>

          {/* Partners and Sponsors */}
          <section className="pas relative pt-[41px] pb-[104px] lg:pt-[114px] lg:pb-[128px] flex flex-col justify-center items-center gap-10 lg:gap-[65px]">
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="top z-10 flex flex-col justify-center items-center gap-[5px] lg:gap-[22px] text-center leading-[27.5px]"
            >
              <h2 className="clashd font-bold text-[20px] lg:text-[32px]">
                Partners and Sponsors
              </h2>
              <p className="text-[12px] lg:text-[14px] max-w-[286px] lg:max-w-[452px] leading-[20.5px] lg:leading-[27.5px]">
                Getlinked Hackathon 1.0 is honored to have the following major
                companies as its partners and sponsors
              </p>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className=" w-full max-w-[540px] lg:max-w-none px-7 lg:px-16 xl:px-[128px]"
            >
              <div className="grid bpurp px-12 lg:px-16 xl:px-[178px] py-10 lg:py-[144px]">
                <div className="flex flex-row gap-2 lg:gap-8 justify-end">
                  <div className="ab">
                    <div class="w-full h-full inline-flex justify-center items-center">
                      <Image
                        quality={100}
                        className="w-[31px] lg:w-[120px]"
                        src={pas1}
                        alt="Liberty Assured"
                      />
                    </div>
                    <div className="line"></div>
                  </div>

                  <div className="hline"></div>

                  <div className="ab">
                    <div class="w-full h-full inline-flex justify-center items-center">
                      <Image
                        quality={100}
                        className="w-[56px] lg:w-[213px]"
                        src={pas2}
                        alt="Liberty Pay"
                      />
                    </div>
                    <div className="line"></div>
                  </div>

                  <div className="hline"></div>

                  <div className="ab">
                    <div class="w-full h-full inline-flex justify-center items-center">
                      <Image
                        quality={100}
                        className="w-[34px] lg:w-[131px]"
                        src={pas3}
                        alt="Winwise"
                      />
                    </div>
                    <div className="line"></div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 lg:gap-8 justify-end pt-2 lg:pt-5">
                  <div className="ab">
                    <div class="w-full h-full inline-flex justify-center items-center">
                      <Image
                        quality={100}
                        className="w-[39px] lg:w-[147px]"
                        src={pas4}
                        alt="Whisperms"
                      />
                    </div>
                    <div className="linex"></div>
                  </div>

                  <div className="hline"></div>

                  <div className="ab">
                    <div class="w-full h-full inline-flex justify-center items-center">
                      <Image
                        quality={100}
                        className="w-[54px] lg:w-[204px]"
                        src={pas6}
                        alt="paybox"
                      />
                    </div>
                    <div className="linex"></div>
                  </div>

                  <div className="hline"></div>

                  <div className="ab">
                    <div class="w-full h-full inline-flex justify-center items-center">
                      <Image
                        quality={100}
                        className="w-[69px] lg:w-[231px]"
                        src={pas5}
                        alt="visualplus"
                      />
                    </div>
                    <div className="linex"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute Assets */}
            <div className="absolute top-[178px] left-[52px] lg:top-[241px] lg:left-[207px] lg:max-w-[30px] max-w-[11px]">
              <Image
                quality={100}
                className="blink delay"
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="absolute hidden lg:block top-[241px] left-[63px] lg:top-[384px] lg:left-[648px] lg:max-w-[21px] max-w-[11px]">
              <Image
                quality={100}
                className="blink"
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="z-50 bottom-[71px] right-[102px] lg:bottom-[204px] lg:right-[648px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image
                quality={100}
                className="w-full h-auto delay blink"
                src={sstar}
                alt="white star"
              />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* Privacy Policy and Terms */}
          <section className="ppat pb-[83px] px-12 lg:px-0 lg:pb-[161px] relative flex flex-col lg:flex-row lg:items-end gap-[144px] lg:gap-[60px] pt-[71px] lg:pt-[169px] lg:pl-[187px]">
            <div className="left">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                className="left1 grid justify-items-center lg:block text-center lg:text-left"
              >
                <h2 className="heading2 max-w-[188px] lg:max-w-[300px]">
                  Privacy Policy and <span>Terms</span>
                </h2>
                <p className="lg:pt-[17px] text-center lg:text-left text-[12px] lg:text-[14px] leading-[27.5px]">
                  Last updated on September 12, 2023
                </p>
                <h6 className="pt-7 lg:pt-[30px] text-[12px] lg:text-[14px] leading-[188%] max-w-[281px] lg:max-w-[438px]">
                  Below are our privacy & policy, which outline a lot of
                  goodies. it’s our aim to always take of our participant
                </h6>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="left2 pt-[30px] lg:pt-[69px]"
              >
                <div className="pt-[45px] lg:pt-[50px] px-3 lg:px-[72px] bpurp inline-block">
                  <p className="max-w-[425px] text-center lg:text-left text-[12px] lg:text-[14px] leading-[216%]">
                    At getlinked tech Hackathon 1.0, we value your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy outlines how we collect, use, disclose, and
                    safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.
                  </p>
                  <div className="max-w-[425px] pt-5 lg:pt-6">
                    <h5 className="text-[#D434FE] text-[13px] lg:text-base font-bold leading-[216%]">
                      Licensing Policy
                    </h5>
                    <p className=" text-[12px] lg:text-[14px] font-bold leading-[216%]">
                      Here are terms of our Standard License:
                    </p>
                    <div className="pt-5 lg:pt-4">
                      <div className="flex justify-start items-start gap-6 lg:gap-[14px]">
                        <svg
                          className="shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                          <path
                            d="M5 8L7 10.5L13.5 6"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                        <p className="text-[12px] lg:text-[14px] leading-[216%]">
                          The Standard License grants you a non-exclusive right
                          to navigate and register for our event
                        </p>
                      </div>
                      <div className="flex justify-start items-start pt-[18px] gap-[14px]">
                        <svg
                          className="shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                          <path
                            d="M5 8L7 10.5L13.5 6"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                        <p className="text-[12px] lg:text-[14px] leading-[216%]">
                          You are licensed to use the item available at any free
                          source sites, for your project developement
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pt-7 lg:pt-5 pb-[50px] lg:pb-[55px]">
                    <Link className="cta-button2 justify-self-center" href="#">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="right lg:max-w-[559px] max-w-[262px]"
            >
              <Image quality={100} src={Img6x} alt="Security" />
            </div>
            <div className="absolute -z-50 max-w-[249px] lg:max-w-none bottom-[219px] left-[73px] lg:bottom-auto lg:left-auto lg:top-[93px] lg:right-[123px]">
              <Image quality={100} src={vector1z} alt="" />
            </div>

            {/* Absolute Images */}
            <div className="absolute lg:bottom-[497px] top-[232px] lg:top-auto right-[67px] lg:right-[506px] lg:max-w-[21px] max-w-[11px]">
              <Image
                quality={100}
                className="blink"
                src={vector5}
                alt="light purple star"
              />
            </div>
            <div className="absolute top-[726px] lg:top-[274px] left-[22px] lg:left-auto lg:right-[753px] max-w-[18px] lg:max-w-[23px]">
              <Image
                quality={100}
                className="blink delay"
                src={vector6}
                alt="dark purple star"
              />
            </div>
            <div className="absolute bottom-[438px] left-[39px] lg:bottom-[338px] lg:left-[100px] max-w-[18px] lg:max-w-[30px]">
              <Image
                quality={100}
                className="blink"
                src={vector6}
                alt="dark purple star"
              />
            </div>
            <div className="z-50 lg:top-[159px] top-[43px] lg:left-[514px] lg:right-auto right-[102px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[21px] lg:h-8">
              <Image
                quality={100}
                className="blink delay w-full h-auto"
                src={star}
                alt="grey star"
              />
            </div>
            <div className="z-50  bottom-[206px] left-[50px] lg:bottom-[100px] lg:left-[720px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[15px] lg:h-8">
              <Image
                quality={100}
                className="blink w-full h-auto"
                src={star}
                alt="grey star"
              />
            </div>
            <div className="z-50 lg:top-[150px] lg:right-[232px] lg:bottom-auto bottom-[430px] right-[121px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[15px] lg:h-8">
              <Image
                quality={100}
                className="blink delay w-full h-auto"
                src={sstar}
                alt="white star"
              />
            </div>
            <div className="z-50 bottom-[44px] right-[92px] lg:bottom-[47px] lg:right-[250px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[15px] lg:h-8">
              <Image
                quality={100}
                className="blink w-full h-auto"
                src={sstar}
                alt="white star"
              />
            </div>
          </section>
        </div>
      </main>

      <footer
        data-aos="zoom-in-up"
        data-aos-delay="100"
        className="setbody relative bg-[#100B20]"
      >
        <div className="">
          <div className="pb-[41px] pt-[70px] pl-16 pr-14 xl:px-[220px]">
            <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[191px] w-full">
              <div className="left flex flex-col justify-between gap-10 w-full">
                <div className="">
                  <h2 className="heading2">
                    get<span className="#D434FE">linked</span>
                  </h2>
                  <p className="text-[12px] pt-[6px] leading-[172%] max-w-[412px]">
                    Getlinked Tech Hackathon is a technology innovation program
                    established by a group of organizations with the aim of
                    showcasing young and talented individuals in the field of
                    technology
                  </p>
                </div>
                <div className="text-[12px] leading-[172%] flex gap-1">
                  <span>Terms of Use</span>
                  <span className="text-[#D434FE]">|</span>
                  <span>Privacy Policy</span>
                </div>
              </div>
              <div className="right footRight gap-[60px] lg:gap-0 flex flex-col lg:flex-row justify-between w-full">
                <div className="r-left">
                  <h4 className="text-[#D434FE] text-[14px] font-semibold">
                    Useful Links
                  </h4>
                  <div className="fR-left">
                    <p>Overview</p>
                    <p>Timeline</p>
                    <p>FAQs</p>
                    <p>Register</p>
                    <div className="flex items-center gap-4">
                      <p className="text-[#D434FE]">Follow us</p>
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
                <div className="r-right">
                  <h4 className="text-[#D434FE] text-[14px] font-semibold pb-5">
                    Contact Us
                  </h4>
                  <div className="flex gap-[14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z"
                        fill="#F8F8F8"
                      />
                      <path
                        d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                    <p>+234 6707653444</p>
                  </div>
                  <div className="flex gap-[14px] pt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                    >
                      <path
                        d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96793 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96793 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                    <p className="max-w-[94px]">
                      +27,Alara Street Yaba 100012 Lagos State
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-[12px] pt-[56px]">
              All rights reserved. © getlinked Ltd.
            </div>
          </div>
          {/* Absolute Assets */}
          <div className="absolute lg:bottom-20 lg:left-[740px] bottom-[94px] left-[134px] lg:max-w-[15px] max-w-[7px]">
            <Image
              quality={100}
              className="blink"
              src={vector5}
              alt="light purple star"
            />
          </div>
          <div className="z-50 top-[368px] right-[174px] lg:top-[99px] lg:right-[430px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[15px] lg:h-8">
            <Image
              quality={100}
              className="blink delay w-full h-auto"
              src={star}
              alt="grey star"
            />
          </div>
          <div className="z-50 absolute bottom-[190px] right-[77px] lg:bottom-[127px] lg:right-[119px] inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[15px] lg:h-8">
            <Image
              quality={100}
              className="blink w-full h-auto"
              src={sstar}
              alt="white star"
            />
          </div>
          <div className="z-50 top-[128px] left-[36px] lg:left-[105px] lg:top-[107px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[15px] lg:h-8">
            <Image
              quality={100}
              className="blink delay w-full h-auto"
              src={sstar}
              alt="white star"
            />
          </div>
        </div>
      </footer>

      {/* Assets that are positioned based on webpage height */}
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[1319px] left-0 -z-50">
        <Image quality={100} src={vector13} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[1614px] right-0 -z-50">
        <Image quality={100} src={vector12} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[1449px] left-0 right-0 -z-50">
        <Image quality={100} src={vector15} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[2378px] left-[-14px] -z-50">
        <Image quality={100} src={vector15} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[1747px] right-0 -z-50">
        <Image quality={100} src={vector14} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[3041px] right-0 -z-50">
        <Image quality={100} src={vector14} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[2406px] left-[-145px] -z-50">
        <Image quality={100} src={vector13} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block top-[2642px] right-0 -z-50">
        <Image quality={100} src={vector16} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block top-[5900px] right-0 ">
        <Image quality={100} src={vector16} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[5770px] left-0">
        <Image quality={100} src={vector13} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[5935px] right-0 ">
        <Image quality={100} src={vector14} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[5491px] left-[-14px]">
        <Image quality={100} src={vector15} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[6533px] left-[-231px] -z-50">
        <Image quality={100} src={vector13} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block top-[7002px] right-0 ">
        <Image quality={100} src={vector16} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[6555px] right-0 ">
        <Image quality={100} src={vector14} alt="Purple Blur" />
      </div>
    </>
  );
}
