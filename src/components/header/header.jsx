"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import Image from "next/image";
import CustomButton from "../button/button";
import Link from "next/link";
import { useNavigationContext } from "@/context/navContext";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../../../public/logo.png";
import { Menu } from "lucide-react";
import MobileNavBar from "./mobilenav";

function Header() {
  const { isActive, swiperRef, handleSwiperSlideChange } =
    useNavigationContext();
  const router = useRouter();
  const pathname = usePathname();
  const [showServDropdown, setServShowDropdown] = useState(false);
  const [showConDropdown, setConShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setServShowDropdown(false);
      setConShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (pathname === "/services") {
      window.scrollTo({ top: 580, behavior: "smooth" });
    }
  }, [pathname]);

  const handleNav = (index) => {
    router.push("/services");
    isActive(index);
  };
  const handleSlide = (index) => {
    handleSwiperSlideChange({ activeIndex: index });
  };

  
  return (
    <header
      ref={headerRef}
      className="w-[95%] md:w-[90%] fixed z-50 left-1/2 -translate-x-[50%] top-4 my-0 mx-auto py-2 px-4 rounded-full bg-white shadow-lg"
    >
      <div className="hidden md:flex justify-between items-center text-primarytext text-sm">
        <div className="w-1/3 hidden md:flex items-center justify-between relative">
          <div
            onClick={() => {
              setServShowDropdown(!showServDropdown);
              setConShowDropdown(false);
            }}
            className="flex items-center gap-[2px] cursor-pointer "
          >
            <p>Services</p>
            <ChevronDown size={15} color="#000" />

            {
              <div
                className={`${
                  showServDropdown ? "block" : "hidden"
                } bg-white shadow-md pt-6 pb-10 px-6 absolute top-12 rounded-t-2xl`}
              >
                <div
                  onClick={() => {
                    handleNav(0);
                    handleSlide(0);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Energy Planning & Audit
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(1);
                    handleSlide(1);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Energy Advisory
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(2);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Mini-grid Design
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(3);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Clean Cooking Solutions
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(4);
                  }}
                  className="w-fit group py-2 h-10 mb-2"
                >
                  Energy Systems Design & Development
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>

                <div
                  onClick={() => {
                    handleNav(5);
                  }}
                  className="w-fit group py-2 h-10"
                >
                  Energy Education & Advocacy
                  <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                </div>
              </div>
            }
          </div>
          <div
            onClick={() => {
              setConShowDropdown(!showConDropdown);
              setServShowDropdown(false);
            }}
            className="flex items-center gap-[2px] cursor-pointer"
          >
            <p>Conferences</p>
            <ChevronDown size={15} color="#000" />

            {
              <div
                className={`${
                  showConDropdown ? "block" : "hidden"
                } bg-white shadow-md pt-6 pb-12 px-6 absolute top-12 rounded-t-2xl `}
              >
                <Link href="/aiccess">
                  <div className="w-fit group h-16">
                    Africa International Conference on Clean Energy and Energy
                    Storage (AICCEES){" "}
                    <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                  </div>
                </Link>
                <br />
                <Link href="/tovero">
                  <div className="w-fit group h-10">
                    Tovero Sustainable Talk (TSET){" "}
                    <div className="group-hover:block hidden w-full h-1 bg-prigreentext"></div>
                  </div>
                  <br />
                </Link>
              </div>
            }
          </div>

          <Link href="/publications">
            <p>Publications</p>
          </Link>
          <Link href="/solutions">
            <p>Solutions</p>
          </Link>
        </div>

        <Link href="/" className="flex md:items-center w-1/3">
          <Image src={Logo} alt="Tovero logo" />
        </Link>

        <Link href="/contact-us" className="hidden md:block">
          <CustomButton variant="primary">Contact Us</CustomButton>
        </Link>
      </div>

      <div className="flex justify-between items-center md:hidden relative">
        <Link href="/" className="w-[65%] flex justify-end">
          <Image src={Logo} alt="Tovero logo" className="w-32" />
        </Link>

        {isOpen ? <X onClick={openNav}/> : <Menu onClick={openNav} />}
        <div className="w-full bg-white absolute top-10 px-4">
          {isOpen ? <MobileNavBar /> : ""}
        </div>
        
      </div>
    </header>
  );
}

export default Header;
