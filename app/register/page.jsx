"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import congratulation from "@/public/images/congratulation.png";
import errorCircle from "@/public/images/error-circle.png";
import wink from "@/public/images/wink.png";
import close from "@/public/images/x.png";
import axios from "axios";

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

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [groupSize, setGroupSize] = useState(""); // Integer
  const [projectTopic, setProjectTopic] = useState("");
  const [category, setCategory] = useState(""); // Integer
  const [privacyPolicy, setPrivacyPolicy] = useState(false); // boolean
  const [errorM, setErrorM] = useState("");
  const [successM, setSuccessM] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // URL
  const url = `https://backend.getlinked.ai/hackathon/registration`;

  // Header Definition
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const popuphandler = () => {
    const popup = document.getElementById("mobile-sidebar");

    if (popup.style.display == "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  };

  const body = {
    email: email,
    phone_number: phoneNumber,
    team_name: teamName,
    group_size: groupSize,
    project_topic: projectTopic,
    category,
    privacy_poclicy_accepted: privacyPolicy,
  };

  const registerHandler = (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      axios
        .post(url, body, config)
        .then((res) => {
          console.log(res);
          setIsSubmitting(true);
          setSuccessM("success");
        })
        .catch((e) => {
          setIsSubmitting(false);
          setErrorM(e.response.data.email[0]);
          console.log(e.response.data.email[0]);
        });
    } catch (error) {
      setErrorM("Something went wrong");
    }
  };

  const closeSuccessModal = () => {
    setSuccessM("");
  };

  const closeErrorModal = () => {
    setErrorM("");
  };

  return (
    <>
      {successM && (
        <div
          id="successModal"
          className=" fixed top-0 left-0 right-0 bottom-0 opabg z-[9999999] flex flex-col justify-center items-center"
        >
          <div className="inner-bgx pt-4 lg:pt-8 px-7 lg:px-16 pb-7 lg:pb-[72px] inline-flex flex-col justify-center items-center m-9">
            <div className="max-w-[260px] lg:max-w-[427px]">
              <Image
                src={congratulation}
                alt="Congratulation"
                placeholder="blur"
              />
            </div>
            <div className="text-[16px] pt-[26px] lg:pt-0 lg:text-[32px] max-w-[178px] lg:max-w-none font-semibold lg:leading-[44px] text-center">
              <h2>Congratulations</h2>
              <h2>you have successfully Registered!</h2>
            </div>
            <div className="text-[12px] lg:text-[14px] pt-7 lg:pt-4 flex justify-center items-end font-medium lg:font-semibold text-center">
              <p className="max-w-[260px]">
                Yes, it was easy and you did it! check your mail box for next
                step
              </p>
              <div className="w-5 h-5 inline-flex justify-center items-center">
                <Image src={wink} alt="Wink emoji" />
              </div>
            </div>
            <div className="pt-6 lg:pt-9 flex w-full">
              <button
                onClick={closeSuccessModal}
                className="bg-grad py-4 rounded flex justify-center items-center w-full"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        id="State-Manager"
        className="fixed z-[9999999999999999] max-w-[348px] lg:max-w-none top-16 right-5 lg:right-14 flex flex-col gap-4"
      >
        {errorM && (
          <div
            id="error"
            className="border-l-4 bg-[#FDEFED] border-[#EA5945] p-4 shadow-md flex flex-row gap-14 items-center rounded-[4px] overflow-hidden"
          >
            <div className="flex flex-row gap-2 lg:gap-4 items-center">
              <div className="w-8 h-8 hidden lg:grid grid-cols-1 shrink-0">
                <Image
                  className="w-full h-auto shrink-0"
                  src={errorCircle}
                  alt="Error"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[#121212]">Error</h3>
                <p className="text-sm leading-[150%] lg:leading-[119%] text-[#4d4d4d]">
                  {errorM}
                </p>
              </div>
            </div>
            <div
              onClick={closeErrorModal}
              className="grid grid-cols-1 shrink-0 "
            >
              <Image className="w-5 h-5" src={close} alt="close" />
            </div>
          </div>
        )}
      </div>

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

          <main className="lg:pt-[43px] lg:pr-[104px] pb-[56px]">
            <div className="contact-container relative flex flex-col lg:flex-row justify-center items-center lg:justify-end lg:items-end">
              <h1 className="text-[#D434FE] block lg:hidden self-start pl-16 text-[16px] pt-6 pb-8 font-semibold lg:text-[32px] clashd">
                Register
              </h1>
              <div className="left-one lg:absolute top-0 left-0">
                <div className="max-w-[195px] lg:max-w-[717px]">
                  <Image
                    placeholder="blur"
                    src={register}
                    alt="3d-graphic-designer-showing-thumbs-up-png 1"
                  />
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
                  <form
                    onSubmit={registerHandler}
                    className="pt-[36px] flex flex-col lg:pt-8"
                  >
                    <div className="grid gap-[18px] lg:gap-8">
                      <div className="form-one">
                        <div>
                          <label>Team&apos;s Name</label>
                          <input
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            required
                            placeholder="Enter the name of your group"
                          />
                        </div>
                        <div>
                          <label>Phone</label>
                          <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="form-one">
                        <div>
                          <label>Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email address"
                          />
                        </div>
                        <div>
                          <label>Project Topic</label>
                          <input
                            type="text"
                            value={projectTopic}
                            onChange={(e) => setProjectTopic(e.target.value)}
                            required
                            placeholder="What is your group project topic"
                          />
                        </div>
                      </div>
                      <div className="form-two">
                        <div>
                          <label>Category</label>
                          <select
                            onChange={(e) => setCategory(e.target.value)}
                            className="select"
                            required
                          >
                            <option value="" disabled selected>
                              select your category
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                        <div>
                          <label>Group Size</label>
                          <select
                            onChange={(e) => setGroupSize(e.target.value)}
                            className="select"
                            required
                          >
                            <option value="" disabled selected>
                              select
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
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
                        onClick={() => setPrivacyPolicy(true)}
                        required
                      />
                      <label
                        className="clabel text-[10px] lg:text-xs"
                        for="agreement"
                      >
                        I agreed with the event terms and conditions and privacy
                        policy
                      </label>
                    </div>
                    <button
                      disabled={isSubmitting}
                      className="cta-button1 self-center lg:w-full"
                    >
                      {isSubmitting ? "loading..." : "Submit"}
                    </button>
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
    </>
  );
}
