import Navbar from "/src/Navbar.js";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen">
      <div className=" absolute top-0 w-screen h-screen bg-darkBlue">
        <img
          src={"/assets/home/background-home-desktop.jpg"}
          className=" w-full h-screen fixed"
        ></img>
      </div>
      <div className="  items-center text-center xl:text-left flex-col xl:flex-row flex  absolute  text-white justify-between w-screen xl:px-[10.313rem] top-[7rem] md:top-[12.625rem] xl:top-[24.188rem]">
        <div className=" ">
          <h5 className=" md:text-[1.25rem] font-normal uppercase text-base text-lightBlue font-barlowCondensed xl:text-[1.75rem] tracking-[0.295rem]">
            So, you want to travel to
          </h5>
          <h1 className="font-bellefair uppercase text-[5rem] md:text-[9.375rem]">
            Space
          </h1>
          <p className=" md:px-[9.938rem] xl:px-0 md:text-base xl:w-[27.75rem] xl:text-lg text-[0.938rem] text-lightBlue leading-[1.563] px-[1.5rem] md:leading-[1.75rem]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" relative group cursor-pointer flex justify-center xl:justify-end">
          <div className=" flex items-center justify-center xl:w-[28.125rem] xl:h-[28.125rem] bg-white opacity-0 xl:group-hover:opacity-[0.1] transition-opacity rounded-full"></div>
          <Link href="destination">
            <div className=" absolute top-[5.063rem] xl:left-[5.525rem] xl:bottom-0 xl:top-[5.525rem] w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] xl:w-[17.125rem] xl:h-[17.125rem] bg-white rounded-full uppercase flex items-center justify-center font-bellefair text-darkBlue opacity-100 ">
              <h4>explore</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-lightBlue"></div>
    </div>
  );
}
