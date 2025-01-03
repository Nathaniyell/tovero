"use client";

import Image from "next/image";
import HeroImg from "@/public/images/home/hero_img.png";
import Rean from "@/public/images/home/rean.png";
import SolarImg from "@/public/images/home/solar.png";
import ChooseUs from "@/public/images/home/choose_us.png";
import CustomButton from "../components/button/button";
import { ArrowUpRight } from "lucide-react";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import home_services from "../data_models/home_services";
import chooseUs from "../data_models/why_choose_us";
import upcomingEventsImg from "@/public/images/home/regimg.png";
import { motion } from "framer-motion";
import SponsorsCarousel from "../components/sponsors_carousel/carousel";
import { FaLocationDot } from "react-icons/fa6";
import microsoftLogo from "@/public/images/home/logos_microsoft-teams.png";
import scientific from "@/public/images/home/Scientific_2.png";

export default function Home() {
return (
  <main className="">
    {/* hero section */}
    <br className="lg:hidden" />
    <br className="lg:hidden" />
    <br className="lg:hidden" />
    <br className="lg:hidden" />
    <br className="lg:hidden" />
    <div className="w-[95%] lg:w-full mx-auto md:mx-0 my-0 h-auto lg:h-screen flex-col lg:flex-row flex justify-between">
      <div className="w-full lg:w-1/2 flex flex-col mt-16 justify-center md:px-16">
        <div className="w-full font-header text-4xl mb-2">
          <h1 className="text-center md:text-left">
            Healing<span className="text-ltgreentext"> Earth,</span>
          </h1>
          <h1 className="text-center md:text-left">
            Solving Carbon Problems
          </h1>
        </div>

        <p className="ptag text-center md:text-justify mb-2">
          Tovero Energy has strategically positioned itself as a dependable
          partner as we lead discussions on how we can develop energy systems
          that are both resilient to prevailing climatic conditions, and
          capable to meet the growing demand for energy in ways that are both
          clean and sustainable.
        </p>
        <br />
        <Link href="/aiccees">
          <div className="flex justify-center md:justify-start">
            <CustomButton variant="primary">SEE EVENTS</CustomButton>
          </div>
        </Link>

        <br />
        <div className="flex gap-2 items-center justify-center md:justify-start mt-2 mb-6 lg:mb-0">
          <Image src={Rean} alt="logo" />
          <div>
            <p className="ptag">Tovero Energy Ltd is a member of </p>
            <p className="ptag">Renewable Energy Association of Nigeria</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Image src={HeroImg} alt="Hero Image" loading="lazy" className="" />
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="w-[95%] md:w-[90%] my-0 mx-auto">
      {/* about-us section */}
      <section className="relative h-auto lg:h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between"
        >
          <h3 className="font-header text-center md:text-left text-4xl mb-2 md:mb-0">
            ABOUT US
          </h3>
          <div className="w-full md:w-3/4 ptag ">
            <p className="ptag text-justify">
              At Tovero Energy Ltd, our mission is to empower futures through
              sustainable energy solutions. As international organizations and
              countries seek innovative approaches to transition to cleaner
              and more sustainable energy, Tovero Energy emerges as a striving
              partner. We spearhead discussions and initiatives aimed at
              developing resilient energy systems capable of meeting the
              growing demand for energy while prioritizing cleanliness and
              sustainability.
            </p>
            <br />
            <p className="ptag text-justify">
              As a dedicated participant in the industry, we are committed to
              driving positive change and fostering sustainable development
              through innovative energy technologies and services.
            </p>
          </div>
        </motion.div>
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Image
            src={SolarImg}
            alt="solar image"
            className="hidden md:block"
          />

          <div className="hidden w-1/2 h-[276px] absolute -bottom-20 right-0 bg-cardbg md:flex justify-between p-4 z-10 rounded-md border-white border-4">
            <div className="w-[45%] flex items-end text-[14px]">
              <div>
                <p className="text-redtext font-header text-xl font-bold mb-3">
                  OUR MISSION
                </p>

                <p className="ptag text-justify">
                To empower individuals, communities, and industries by
                delivering tailored and innovative sustainable energy
                solutions that drive positive environmental impact, economic
                growth, and social equity
                </p>
              </div>
            </div>
            <div className="w-[45%] flex justify-end text-[14px]">
              <div>
                <p className="text-prigreentext font-header text-xl font-bold mb-3">
                  OUR VISION
                </p>

                <p className="ptag text-justify">
                  Empowering futures through innovative sustainable energy solutions
                </p>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="bg-cardbg mb-4 text-center px-6 py-4">
              <p className="text-redtext font-header text-xl font-bold mb-3">
                OUR MISSION
              </p>

              <p className="ptag ">
                To empower individuals, communities, and industries by
                delivering tailored and innovative sustainable energy
                solutions that drive positive environmental impact, economic
                growth, and social equity
              </p>
            </div>
            <div className="bg-cardbg text-center px-6 py-4">
              <p className="text-prigreentext font-header text-xl  font-bold mb-3">
                OUR VISION
              </p>

              <p className="ptag">
              Empowering futures through innovative sustainable energy solutions
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
    <br />
    <br />
    <br />
    <br className="hidden lg:block" />
    <br className="hidden lg:block" />

    {/*services section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false }}
      className="bg-drkgreenbg pt-6 md:pt-4 pb-12 px-4"
    >
      <div className="w-full md:w-[90%] mx-auto my-0 flex justify-between items-center">
        <div className="w-full md:w-3/4 text-center md:text-left">
          <h1 className="font-header text-3xl">OUR SERVICES</h1>
          <p className="text-sm">
            We offer a wide range of integrated energy solutions tailored to
            meet the unique requirements of our clients
          </p>
        </div>
        <Link
          href="/services"
          className="text-sm underline hover:text-[#0E5E2E]"
        >
          <div className="hidden md:flex items-center gap-2 hover:text-[#0E5E2E]">
            <div className="flex justify-center items-center w-10 h-10 border-2 border-[#0E5E2E] rounded-[50%]">
              <ArrowUpRight size={18} />
            </div>

            <h1>SEE MORE</h1>
          </div>
        </Link>
      </div>
      <br />
      <br />

      <div className="w-full md:w-[90%] mx-auto my-0 grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 text-white">
        {home_services.map((card) => (
          <div
            key={card.id}
            className="bg-drkgreencard p-3 flex gap-2 rounded"
          >
            <Image
              src={card.image}
              alt="services image 1"
              className="hidden md:block"
            />
            <div className="text-center md:text-left">
              <h1 className="mb-2 font-header text-xl">{card.title}</h1>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    <div className="w-[95%] md:w-[90%] my-0 mx-auto">
      <br />
      <br />

      {/* ?? choose us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        className="relative"
      >
        <h1 className="text-2xl font-header text-center md:text-left">
          WHY CHOOSE US
        </h1>
        <br />

        <div className="w-full lg:w-[80%] bg-redbg grid grid-cols-1 lg:grid-cols-2 text-white py-6 md:py-16 pl-4 pr-0 md:pr-24 relative mb-4 lg:mb-0">
          {chooseUs.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 border-white ${index === 0 ? "border-r-0 lg:border-r border-b" : ""
                }${index === 1 ? "border-l-0 lg:border-l border-b" : ""}${index === 2 ? "lg:border-t lg:border-r" : ""
                }${index === 3 ? "lg:border-l border-t" : ""}`}
            >
              <div className="flex justify-center md:justify-start mb-1">
                <Image src={item.image} alt="choose" />
              </div>

              <h1 className="text-xl font-bold text-center md:text-left mb-1">
                {item.title}
              </h1>
              <p className="text-sm text-center md:text-left mb-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <Image
          src={ChooseUs}
          alt="why choose us image"
          className="hidden lg:block absolute bottom-7 right-0 w-80"
        />
        <Image
          src={ChooseUs}
          alt="why choose us image"
          className="block lg:hidden"
        />
      </motion.div>
      <br />
      <br />
      <br />

      {/* upcoming events */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-header">
              UPCOMING EVENTS
            </h1>
            <p>Join our upcoming events and webinars.</p>
          </div>
          <Link href="#" className="text-sm underline hover:text-[#0E5E2E]">
            <div className="hidden md:flex items-center gap-2 hover:text-[#0E5E2E]">
              <div className="flex justify-center items-center w-10 h-10 border-2 border-[#0E5E2E] rounded-[50%]">
                <ArrowUpRight size={18} />
              </div>

              <h1>SEE MORE</h1>
            </div>
          </Link>
        </div>

        <div className="flex lg:flex-row flex-col justify-between ">
          <div className="w-full lg:w-[48%] mt-0 md:mt-4 order-2 lg:order-1">
            <div className="hidden md:block">
              <Image
                src={upcomingEventsImg}
                alt="Upcoming event"
                className=""
              />
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between py-4 border-b-2 border-gray-400 text-sm">
                <p>
                  Organized by:{" "}
                  <span className="text-red-600">Tovero Energy Ltd.</span>
                </p>
                <div className="flex items-center gap-2 text-sm">
                  {" "}
                  <CalendarDays /> 26th & 27th September 2024
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="text-ltgreentext font-bold">
                Africa International Conference on Clean Energy & Energy
                Storage (AICCEES), 2024
              </p>
              <p>
                In order to achieve the Sustainable Development Goals in
                Africa, effective collaboration between academia and industry
                is necessary to create a sustainable and transformative
                win-win situation for all stakeholders.
              </p>
              <div className="flex flex-col md:flex-row justify-between mt-6 gap-y-1 md:gap-y-0">
                <div className="w-full md:w-[70%] bg-cardbg flex gap-1 items-center p-3 text-sm">
                  <FaLocationDot />
                  <p className="font-bold">
                    University of Port Harcourt, Rivers State
                    Nigeria
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-[25%] bg-cardbg p-3 text-sm">
                  <Image src={microsoftLogo} alt="microsoft logo" />
                  <p>Microsoft Teams</p>
                </div>
              </div>
            </div>
            <Link href="https://forms.office.com/r/3Hxp8z38uA">
              <CustomButton variant="primary" className="w-full md:w-fit mt-4 md:mt-0">
                Register
              </CustomButton>
            </Link>
          </div>
          <div className="w-full md:w-[48%] mt-4 order-1 lg:order-2">
            <div className="block md:hidden">
              <Image
                src={upcomingEventsImg}
                alt="Upcoming event"
                className=""
              />
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between py-4 border-b-2 border-gray-400 text-sm">
                <p>
                  Organized by:{" "}
                  <span className="text-red-600">Tovero Energy Ltd.</span>
                </p>
                <div className="flex items-center gap-2 text-sm">
                  {" "}
                  <CalendarDays /> 26th & 27th September 2024
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-6 md:pt-0 pb-6 border-b border-gray-400">
              <div className="w-[30%] md:w-[20%] bg-prigreentext flex items-center justify-center rounded-md">
                <p className="text-white font-bold text-center">
                  FEBRUARY 1,2024
                </p>
              </div>
              <div className="w-[65%] md:w-[70%]">
                <div className="flex gap-2 items-center mb-1">
                  <p className="text-sm">Publisher:</p>
                  <Image src={scientific} alt="scientific" />
                </div>
                <p className="font-bold mb-2">
                  Abstract/Full Paper Submission
                </p>
                <p className="text-sm">
                  Effective collaboration between academia and industry is
                  necessary to create a sustainable and transformative win-win
                  situation for all stakeholders.
                </p>
                <p className="text-sm">
                  MAKE SUBMISSIONS TO:{" "}
                  <a href="#" className="text-blue-600 underline">
                    aiccees@uniport.edu.ng
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-between py-6 border-b border-gray-400">
              <div className="w-[30%] md:w-[20%] bg-prigreentext flex items-center justify-center rounded-md">
                <p className="text-white font-bold text-center">
                  AUGUST 31,2024
                </p>
              </div>
              <div className="w-[65%] md:w-[70%]">
                <div className="flex gap-2 items-center mb-1">
                  <p className="text-sm">Publisher:</p>
                  <Image src={scientific} alt="scientific" />
                </div>
                <p className="font-bold mb-2">
                  Deadline for Abstract/Full Paper Submission
                </p>
                <p className="text-sm">
                  Effective collaboration between academia and industry is
                  necessary to create a sustainable and transformative win-win
                  situation for all stakeholders.
                </p>
                <p className="text-sm">
                  MAKE SUBMISSIONS TO:{" "}
                  <a href="#" className="text-blue-600 underline">
                    aiccees@uniport.edu.ng
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-between py-6">
              <div className="w-[30%] md:w-[20%] bg-prigreentext flex items-center justify-center rounded-md">
                <p className="text-white font-bold text-center">
                  SEPTEMBER <br /> 26 & 27,
                  <br />
                  2024
                </p>
              </div>
              <div className="w-[65%] md:w-[70%]">
                <div className="flex gap-3 items-center mb-1">
                  <p className="text-sm">Organized by:</p>
                  <p className="text-redtext text-sm font-bold">
                    Tovero Energy Ltd.
                  </p>
                </div>
                <p className="font-bold mb-2">AICCEES Conference</p>
                <p className="text-sm">
                  The conference will feature industry leaders, experts,
                  researchers, government agencies, regulators, multilateral
                  organizations, industry bodies, and more in the field of
                  clean energy and energy storage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />

        
      </motion.div>
      <br />
      <br />
      {/* <br /> */}
    </div>
    {/* our partners */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false }}
    >
      <h1 className="text-2xl font-header text-center md:text-left ml-0 md:ml-16">
        OUR PARTNERS
      </h1>
      <br />
      <div className="bg-cardbg w-full h-[20vh] flex items-center justify-between">
        <div className="w-[90%] mx-auto my-0 flex items-stretch">
          <SponsorsCarousel />
        </div>
      </div>
    </motion.div>
    <br />
    <br />
    <br />
    <br />
  </main>
);
}
