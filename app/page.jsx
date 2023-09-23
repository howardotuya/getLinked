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

            {/* Here are absolute Images at the right side - blue and metric asset */}
            <div className="z-20 absolute right-[32px] bottom-[42px] max-w-[337px] lg:max-w-[667px]">
              <Image src={LImg2} alt="Blue World Spiral" />
            </div>
            <span className="disx -z-10 absolute right-0 bottom-0">
              <Image src={vector4} alt="metric" />
            </span>
          </div>

          {/* SVG's in the header or above the fold */}
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
            <div className="z-50 top-[275px] lg:top-auto right-[91px] lg:right-auto lg:bottom-[146px] lg:left-[571px] absolute inline-flex justify-center items-center w-[6px] h-[8px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="" />
            </div>
          </div>
        </div>

        {/* Mobile Blur for Left Side  */}
        <span className="inline-flex lg:hidden -z-50 absolute top-[92px] left-0">
          <Image src={mpurple} alt="purple blur" />
        </span>

        {/* Desktop Blur for Left Side  */}
        <span className="hidden lg:inline-flex blur1">
          <Image src={vector1} alt="purple blur" />
        </span>

        {/* Desktop Blur for Left Side  */}
        <span className="hidden mix-blend-hard-light lg:inline-flex blur2">
          <Image src={vector2} alt="purple blur" />
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
            <div className="left max-w-[264px] lg:max-w-[490px] h-auto w-full">
              <Image src={Img1} alt="The Big Idea" />
            </div>
            <div className="bigIdea-right">
              <h2 className="heading2 max-w-[249px] lg:max-w-[399px]">
                Introduction to getlinked <span>tech Hackathon 1.0</span>
              </h2>
              <p className="pbody w-full max-w-[321px] lg:max-w-[530px]">
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
              <Image src={vector5} alt="" />
            </div>
            <div className="absolute top-[366px] lg:top-[216px] right-[44px] lg:right-[161px] max-w-[8px] lg:max-w-[30px]">
              <Image src={vector6} alt="" />
            </div>
            <div className="absolute top-[296px] lg:top-auto lg:bottom-[61px] left-[181px] lg:left-[715px] max-w-[22px] lg:max-w-[49px]">
              <Image src={curlyArrow} alt="" />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* Rules and Regulations Section */}
          <section className="randg">
            <div className="bigIdea-right">
              <h2 className="heading2 max-w-[107px] lg:max-w-[170px]">
                Rules and <span>Guidelines</span>
              </h2>
              <p className="pbody w-full max-w-[321px] lg:max-w-[530px]">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </p>
            </div>
            <div className="max-w-[294px] w-full inline-flex justify-center items-center lg:max-w-[604px]">
              <Image
                className="hidden lg:block w-full h-auto shrink-0"
                src={Img2}
                alt=""
              />
              <Image
                className="lg:hidden block w-full h-auto shrink-0"
                src={Img22}
                alt=""
              />
            </div>

            <div className="z-50 top-[442px] right-[42px] lg:right-auto lg:top-[116px] lg:left-[439px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="" />
            </div>
            <div className="z-50 top-[185px] left-[43px] lg:top-auto lg:bottom-[167px] lg:left-[741px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="" />
            </div>
            <div className="z-50 bottom-[19px] left-[108px] absolute inline-flex lg:hidden justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="" />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* Judging Criteria Key attributes */}
          <section className="jcka">
            <div className="left">
              <Image src={Img3} alt="" />
            </div>
            <div className="right">
              <div>
                <h2 className="heading2 max-w-[167px] lg:max-w-[267px]">
                  Judging Criteria <span>Key attributes</span>
                </h2>
                <div className="jcka-p">
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
              <Image src={vector6} alt="" />
            </div>
            <div className="z-50 top-[221px] left-[212px] lg:top-[470px] lg:left-[421px] absolute inline-flex justify-center items-center w-[12px] h-[14px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="" />
            </div>
            <div className="z-50 bottom-[76px] right-[50px] lg:bottom-[171px] lg:right-0 lg:left-[733px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="" />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* FAQs */}
          <section className="faqs">
            <div className="left">
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
                  <p>What happens if I don't have an idea for a project?</p>
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
            <div className="right lg:max-w-[741px]">
              <Image src={Img4} alt="" />
            </div>

            {/* absolute Images */}
            <div className="q q-1">?</div>
            <div className="q q-2">?</div>
            <div className="q q-3">?</div>

            <div className="absolute bottom-[376px] left-[186px] lg:bottom-auto lg:left-auto lg:top-[121px] right-[57px] lg:right-[471px] lg:max-w-[21px] max-w-[11px]">
              <Image src={vector5} alt="light purple star" />
            </div>
            <div className="absolute bottom-[267px] left-[98px] lg:bottom-auto lg:left-auto lg:top-[253px] lg:right-[672px] lg:max-w-[21px] max-w-[11px]">
              <Image src={vector5} alt="light purple star" />
            </div>
            <div className="absolute top-[47px] lg:top-[110px] left-[59px] lg:left-[183px] max-w-[18px] lg:max-w-[30px]">
              <Image src={vector6} alt="dark purple star" />
            </div>
            <div className="z-50  bottom-[206px] left-[50px] lg:bottom-[398px] lg:left-[720px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="grey star" />
            </div>
            <div className="z-50 bottom-[44px] right-[92px] lg:bottom-[47px] lg:right-[250px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="white star" />
            </div>
          </section>

          {/* divider */}
          <span className="block w-full">
            <span className="block divider"></span>
          </span>

          {/* timeline */}
          <section className="timeline">
            <div className="time-s1">
              <h2>Timeline</h2>
              <p>
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
              </p>
            </div>
            <div className="t-cont-cover">
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
            <div className="t2-cont-cover">
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
              <Image src={vector5} alt="light purple star" />
            </div>
            <div className="z-50  bottom-[37px] left-[22px] lg:bottom-[183px] lg:left-[177px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="grey star" />
            </div>
            <div className="z-50 top-[528px] right-[95px] lg:top-[734px] lg:right-[266px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="white star" />
            </div>
          </section>

          {/* Prizes and Rewards */}
          <section className="pag flex flex-col lg:px-[106px] pt-[74px] pb-[89px] lg:pb-[149px] bg-[#110B21]">
            <div className="right-intro flex flex-col lg:items-start items-center self-center lg:pr-[164px] lg:self-end">
              <h2 className="heading2 text-center lg:text-left max-w-[109px] lg:max-w-[174px]">
                Prizes and <span>Rewards</span>
              </h2>
              <p className="pbody2 text-center lg:text-left pt-1 lg:pt-4 max-w-[277px] lg:max-w-[401px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="flex flex-col items-center lg:flex-row pt-10 lg:pt-[34px] lg:gap-[37px]">
              <div className="left max-w-[321px] lg:max-w-none">
                <Image src={Img5} alt="" />
              </div>

              <div className="right">
                <div className="right-awards flex justify-center items-center gap-[13px] lg:gap-[26px] pt-[113px] lg:pt-[230px]">
                  <div className="frame1 relative">
                    <h4 className="grid text-center">
                      2nd<span>Runner</span>
                    </h4>
                    <h2 class="award-h2">N300,000</h2>
                    <div className="absolute cd inline-flex justify-center items-center w-[75px] lg:w-[179px] bottom-[100px] lg:bottom-[200px]">
                      <Image className="w-full h-auto" src={Img7} alt="" />
                    </div>
                  </div>
                  <div className="frame12 relative">
                    <h4 className="grid text-center">
                      1st<span>Runner</span>
                    </h4>
                    <h2 class="award-h22">N400,000</h2>

                    <div className="absolute cd inline-flex justify-center items-center w-[125px] lg:w-[296px] bottom-[100px] lg:bottom-[198px]">
                      <Image className="w-full h-auto" src={Img6} alt="" />
                    </div>
                  </div>
                  <div className="frame1 relative">
                    <h4 className="grid text-center">
                      3rd<span>Runner</span>
                    </h4>
                    <h2 class="award-h2">N150,000</h2>
                    <div className="absolute cd inline-flex justify-center items-center w-[75px] lg:w-[179px] bottom-[100px] lg:bottom-[189px]">
                      <Image className="w-full h-auto" src={Img8} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute Assets */}
            <div className="absolute top-[49px] left-[63px] lg:top-[79px] lg:left-[316px] lg:max-w-[21px] max-w-[11px]">
              <Image src={vector5} alt="light purple star" />
            </div>
            <div className="z-50  bottom-[31px] right-[137px] lg:bottom-[107px] lg:right-[343px] absolute inline-flex justify-center items-center w-[10px] h-auto lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={star} alt="grey star" />
            </div>
            <div className="z-50 top-[495px] left-[68px] lg:left-auto lg:top-[275px] lg:right-[748px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="white star" />
            </div>
            <div className="z-50 top-[562px] right-[61px] lg:top-[407px] lg:right-[112px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="white star" />
            </div>
            <div className="z-50 bottom-[528px] left-[95px] lg:bottom-[148px] lg:left-[538px] absolute inline-flex justify-center items-center w-[10px] h-[12px] lg:w-[26px] lg:h-8">
              <Image className="w-full h-auto" src={sstar} alt="white star" />
            </div>
          </section>
        </div>
      </main>

      {/* Assets that are positioned based on webpage height */}
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[1319px] left-0 -z-50">
        <Image src={vector13} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[1614px] right-0 -z-50">
        <Image src={vector12} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[1449px] left-0 right-0 -z-50">
        <Image src={vector15} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[2378px] left-[-14px] -z-50">
        <Image src={vector15} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[1747px] right-0 -z-50">
        <Image src={vector14} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light block lg:hidden top-[3041px] right-0 -z-50">
        <Image src={vector14} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block max-w-[1037px] top-[2406px] left-[-145px] -z-50">
        <Image src={vector13} alt="Purple Blur" />
      </div>
      <div className="absolute mix-blend-hard-light hidden lg:block top-[2642px] right-0 -z-50">
        <Image src={vector16} alt="Purple Blur" />
      </div>
    </>
  );
}
