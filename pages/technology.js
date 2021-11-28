import { useState } from "react";
import data from "/data.json";
import techBackgroundImage from "/assets/technology/background-technology-desktop.jpg";
import { motion, AnimatePresence } from "framer-motion";

const TechTabLink = (props) => {
  return (
    <button
      onClick={() => {
        props.update(props.idx);
      }}
      className=" text-base md:text-[1.5rem] xl:[2rem] hover:ring-opacity-100 focus:bg-white focus:text-darkBlue font-bellefair w-[2.5rem] h-[2.5rem] md:w-[80px] md:h-[80px] mr-[1rem] mb-[32px] block rounded-full ring-[1px] ring-white ring-opacity-20 md:mr-[1rem]"
    >
      {props.children}
    </button>
  );
};

const TechTab = (props) => {
  return (
    <div className=" text-[2rem] text-white flex md:flex-row xl:flex-col ">
      {props.technology.map((tech, idx) => {
        return (
          <TechTabLink idx={idx} update={props.update} key={idx}>
            {idx + 1}
          </TechTabLink>
        );
      })}
    </div>
  );
};

const Tech = () => {
  const [technology, setTechnology] = useState(data.technology[0]);

  const update = (idx) => {
    setTechnology((t) => data.technology[idx]);
  };

  return (
    <div>
      <div className=" absolute top-0 w-screen h-[73rem] xl:h-screen white">
        <Image
          src={techBackgroundImage}
          alt="space image"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className=" flex-col xl:flex-row text-center md:text-left  flex absolute text-white justify-between w-screen  md:px-[0rem]  xl:pl-[10.406rem] 2xl:pr-[8.563rem] top-[5.5rem] md:top-[8.5rem] xl:top-[13.25rem] h-[36rem]">
        <div className="w-full px-[24px] md:px-0">
          <p className="invisible xl:visible uppercase md:text-[1.25rem] xl:text-[1.75rem] md:tracking-[0.211rem] xl:tracking-[0.295rem] font-barlowCondensed">
            <span className="  md:pr-[1.188rem] xl:pr-[1.75rem] font-bold opacity-25">
              03
            </span>
            Space launch 101
          </p>
          <div className="  flex  justify-center xl:justify-between w-full xl:mt-[26px]">
            <div className="flex md:mt-[34px] xl:mt-[137px] flex-col items-center xl:items-start xl:flex-row">
              <TechTab update={update} technology={data.technology}></TechTab>
              <div className=" text-center xl:text-left xl:ml-[80px] ">
                <p className="uppercase font-barlowCondensed text-sm md:text-base">
                  the teminology...
                </p>
                <h3 className="uppercase font-bellefair text-[1.5rem] md:text-[2.5rem] xl:text-[3.5rem]">
                  {technology.name}
                </h3>
                <p className=" mt-[1rem] text-[0.938rem] leading-[1.563rem] xl:text-lg md:px-[155px] xl:px-0 xl:w-[27.75rem] text-lightBlue">
                  {technology.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" order-first xl:order-last">
          <p className="md:px-[2.406rem] md:mb-[3.75rem] md:visible xl:invisible uppercase  md:text-[1.25rem] xl:text-[1.75rem] md:tracking-[0.211rem] xl:tracking-[0.295rem] font-barlowCondensed">
            <span className="pr-[1rem] md:pr-[1.188rem] pr-[1.75rem font-bold opacity-25">
              0 3
            </span>
            Space launch 101
          </p>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={technology.name}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.1 }}
              className=" mt-[2rem] md:mt-0 w-full"
            >
              <img
                src={technology.images.portrait}
                className=" hidden xl:flex w-[32.188rem] h-[32.938rem] 2xl:w-[35.188rem] 2xl:h-[32.938rem] object-contain"
              ></img>
              <img
                src={technology.images.landscape}
                className=" xl:hidden w-full h-full"
              ></img>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tech;
