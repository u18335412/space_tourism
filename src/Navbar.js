import logo from "/images/logo.svg";
import Link from "next/link";
import hamburger from "/assets/shared/icon-hamburger.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const StyledLink = (props) => (
  <Link href={props.link}>
    <button className=" md:text-sm xl:text-base md:mr-[2.313rem] xl:mr-[3rem] inline text-white relative group uppercase">
      <span className=" font-bold pr-[0.75rem]" airia-hidden="true">
        {props.num}
      </span>
      <span className="w-full">{props.children}</span>
      <div className=" w-full h-1 opacity-0 group-focus:opacity-100  group-hover:opacity-50 bg-white  absolute -bottom-9 transition-opacity hidden md:flex"></div>
    </button>
  </Link>
);
const Navbar = () => {
  const [menuShown, setMenuShown] = useState("hidden");

  return (
    <div className="relative">
      <header className="flex  pl-[24px] items-center xl:items-start justify-between xl:justify-start w-full md:h-10 xl:mt-[2.5rem] font-barlowCondensed">
        <div className="bg w-1/2 h-[6rem] flex items-center md:pl-[2.406rem] xl:pl-[3.438rem] bg">
          <Link href="/">
            <div className="cursor-pointer ">
              <img
                src={"/assets/shared/logo.svg"}
                className="w-[40px] md:w-[48px]"
              ></img>
            </div>
          </Link>
          <div className=" relative w-full">
            <span className=" bg-white invisible xl:visible xl:w-full  left-[64px] h-[0.063rem] absolute opacity-25 z-10"></span>
          </div>
        </div>
        <ul className=" hidden md:text-sm md:pl-[3rem] xl:pl-[7.688rem] bb  xl:w-[51.875rem] 2xl:w-[60rem] h-[6rem] text-white right-0 md:flex items-center">
          <li>
            <StyledLink num="00" link="/">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink num="01" link="destination">
              Destination
            </StyledLink>
          </li>
          <li>
            <StyledLink num="02" link="crew">
              Crew
            </StyledLink>
          </li>
          <li>
            <StyledLink num="03" link="technology">
              Technology
            </StyledLink>
          </li>
        </ul>
        <div className="md:hidden pr-[24px]">
          <img
            src={"/assets/shared/icon-hamburger.svg"}
            className=" "
            onClick={() => {
              setMenuShown === "flex"
                ? setMenuShown("hidden")
                : setMenuShown("flex");
            }}
          ></img>
        </div>
      </header>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={menuShown}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`${menuShown} md:hidden flex-col absolute top-0 right-0`}
          >
            <div className="  pl-[32px] items-start flex-col gap-y-[32px] w-[15.875rem]  h-screen  bb  text-white flex font-barlowCondensed">
              <div className=" flex justify-end w-full pt-[2.122rem] pr-[1.653rem]">
                <img
                  src="/assets/shared/icon-close.svg"
                  alt=""
                  onClick={() => {
                    setMenuShown === "hidden"
                      ? setMenuShown("flex")
                      : setMenuShown("hidden");
                  }}
                />
              </div>
              <div className="pt-[7.375rem]">
                <StyledLink num="00" link="/">
                  Home
                </StyledLink>
              </div>
              <StyledLink num="01" link="destination">
                Destination
              </StyledLink>
              <StyledLink num="02" link="crew">
                Crew
              </StyledLink>
              <StyledLink num="03" link="technology">
                Technology
              </StyledLink>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
