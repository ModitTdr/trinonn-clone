"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { AudioLines, Menu, Sun, X } from "lucide-react";
import { socialLinks } from "@/data/sociallinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full px-[6vw] lg:px-[9vw] sticky top-0 left-0 mx-auto z-99 mix-blend-exclusion">
        <nav className="flex w-full justify-between items-center h-[9.6vw] lg:h-[7.2vw]">
          <div className="w-[80px] h-[12px] sm:w-[100px] sm:h-[19px]">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <ul className="flex gap-1 items-center">
            <Button variant="icon" size={"icon-sm"}>
              <Sun />
            </Button>
            <Button variant="icon" size={"icon-sm"}>
              <AudioLines />
            </Button>
          </ul>
          <div className="flex items-center gap-3 lg:gap-4 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
            <p className="tracking-[-0.5px] font-dirtyline mt-1 text-[0.9rem] group-hover:text-primary transition-colors">
              {isOpen ? "close" : "menu"}
            </p>
            <Button variant="icon" size={"icon-xl"}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 h-dvh w-full bg-background z-90 transition-transform duration-500 ease-in-out flex flex-col overflow-y-auto ${isOpen ? 'translate-y-0' : '-translate-y-full'} no-scrollbar`}
      >
        <div className="w-full flex-1 px-[6vw] lg:px-[9vw] mx-auto flex flex-col pt-[calc(9.6vw+4rem)] lg:pt-[calc(7.2vw+4rem)] pb-12 lg:pb-[6vw]">
          <div className="flex-1 flex flex-col lg:flex-row justify-between items-start lg:items-end">
            {/* Left huge links */}
            <div className="flex flex-col gap-0 font-dirtyline text-[14vw] lg:text-[10.5vw] leading-[0.85] tracking-tight">
              {['work', 'about', 'services', 'team', 'contact'].map((item) => (
                <Link key={item} href="#" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors duration-300 w-fit">
                  {item}
                </Link>
              ))}
            </div>

            {/* Right contact text */}
            <div className="flex flex-col gap-6 mt-16 lg:mt-0 items-start lg:items-end text-left lg:text-right font-dmmono text-sm lg:text-[1.05rem]">
              <div className="flex flex-col items-start lg:items-end gap-1">
                <a href="mailto:hello@trionn.com" className="hover:text-primary transition-colors">
                  hello@trionn.com
                </a>
                <a href="tel:+919824182099" className="hover:text-primary transition-colors">
                  +91 98241 82099
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-2 lg:gap-3 mt-4">
                {socialLinks.map(({ name, url }) => (
                  <Link
                    key={name}
                    href={url}
                    className="w-10 h-10 lg:w-[3vw] lg:h-[3vw] min-w-10 min-h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out hover:rotate-[360deg]"
                  >
                    <Image src={`/images/logos/${name}.svg`} alt={name} width={40} height={40} className="w-full h-full object-contain" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
