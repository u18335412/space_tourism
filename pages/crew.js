import { useState } from "react";
import data from "/data.json";
import crewBackground from "/assets/crew/background-crew-desktop.jpg";
import douglasImage from "/assets/crew/image-douglas-hurley.png";
import anoushehImage from "/assets/crew/image-anousheh-ansari.png";
import markImage from "/assets/crew/image-mark-shuttleworth.png";
import victorImage from "/assets/crew/image-victor-glover.png";
import { motion, AnimatePresence } from "framer-motion";

const CrewTabLink = (props) => {
  return (
    <button
      onClick={() => {
        props.update(props.idx);
      }}
      className=" bg-white rounded-full group relative font-barlowCondensed w-[0.938rem] h-[0.938rem] opacity-[0.17] focus:opacity-100 hover:opacity-50 transition-all"
    ></button>
  );
};

const CrewTab = (props) => {
  return (
    <div className=" flex mt-[2rem] md:mt-[2.5rem] xl:mt-[7.5rem] space-x-[1.5rem] justify-center xl:justify-start">
      {props.crew.map((c, idx) => {
        return (
          <CrewTabLink update={props.update} idx={idx} key={idx}></CrewTabLink>
        );
      })}
    </div>
  );
};

const Crew = () => {
  const [crewMember, setCrewMember] = useState(data.crew[0]);

  const update = (idx) => {
    setCrewMember((c) => data.crew[idx]);
  };
  return (
    <>
      <div className=" absolute top-0 w-full md:h-[80rem] xl:h-screen">
        <img
          src={"/assets/crew/background-crew-desktop.jpg"}
          className=" w-screen h-screen fixed"
        ></img>
      </div>
      <div className=" flex-col xl:flex-row flex absolute text-white text-center md:text-left md:justify-between w-screen px-[1.5rem]  md:px-[2.406rem] xl:px-[10.406rem] top-[5.5rem] md:top-[8.5rem] xl:top-[13.25rem] h-[36rem]">
        <div className=" w-full">
          <p className=" hidden md:block uppercase  md:text-[1.25rem] xl:text-[1.75rem] md:tracking-[0.211rem] xl:tracking-[0.295rem] font-barlowCondensed">
            <span
              aria-hidden
              className=" pr-[16px] md:pr-[1.188rem] xl:pr-[1.75rem] font-bold opacity-25"
            >
              0 2
            </span>
            Meet your crew
          </p>
          <div className="flex flex-col">
            <div className=" order-last md:order-first mt-[2rem] md:mt-[3.75rem] xl:mt-[9.625rem] text-center xl:text-left flex flex-col items-center xl:items-start">
              <h4 className=" uppercase text-[1rem] md:text-[2rem] font-bellefair opacity-25">
                {crewMember.role}
              </h4>
              <h3 className=" line-clamp-1 hover:line-clamp-none text-[1.5rem] md:text-[3.5rem]  uppercase font-bellefair mt-[0.5rem] md:mt-[0.938rem]">
                {crewMember.name}
              </h3>
              <p className=" line-clamp-4 hover:line-clamp-none transition-all  md:leading-[1.75rem] md:text-base text-lightBlue mt-[1rem] md:mt-[1.688rem] text-[0.938rem]  xl:text-lg xl:w-[27.75rem]">
                {crewMember.bio}
              </p>
            </div>
            <CrewTab update={update} crew={data.crew}></CrewTab>
          </div>
        </div>
        <div className="w-full  flex order-first md:order-last justify-center xl:justify-end md:mt-[2.5rem]">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={crewMember.name}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.1 }}
              className=""
            >
              <p className=" uppercase md:hidden  md:text-[1.25rem] xl:text-[1.75rem] md:tracking-[0.211rem] xl:tracking-[0.295rem] font-barlowCondensed">
                <span
                  aria-hidden
                  className=" pr-[16px] md:pr-[1.188rem] xl:pr-[1.75rem] font-bold opacity-25"
                >
                  0 2
                </span>
                Meet your crew
              </p>
              <img
                src={crewMember.images.png}
                alt="crew member image"
                className=" w-[20.438rem] mt-[2rem] md:mt-0 h-[13.938rem] md:w-full md:h-full object-contain"
              />
              <div className="w-full md:hidden bg-lightBlue h-[0.1rem] opacity-20"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Crew;
