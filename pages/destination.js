import { motion, AnimatePresence } from "framer-motion";
import data from "/data.json";
import { useEffect, useState } from "react";

const DestinationTabLink = (props) => {
  return (
    <button
      onClick={() => {
        props.update(props.destIdx);
      }}
      className=" flex text-sm md:text-base flex-col uppercase group relative font-barlowCondensed"
    >
      <span>{props.children}</span>
      <span className=" w-full h-[0.188rem] bg-white opacity-0 transition-opacity group-hover:opacity-50 group-focus:opacity-100  bottom-0 "></span>
    </button>
  );
};

const DestinationTab = (props) => {
  return (
    <>
      <div className="h-full xl:left-[52.031rem] top-0 mt-[1.625rem] md:mt-[3.313rem]  xl:w-[27.813rem]">
        <div className="justify-center xl:justify-start flex space-x-[2.25rem] md:w-[35.813rem] ">
          {data.destinations.map((dest, idx) => {
            return (
              <DestinationTabLink update={props.update} destIdx={idx} key={idx}>
                {dest.name}
              </DestinationTabLink>
            );
          })}
        </div>
        <div className="md:w-[35.813rem]">
          <h2 className="uppercase font-bellefair text-[3.5rem] md:text-[5rem] ">
            {props.data.name}
          </h2>
          <p className=" text-lightBlue px-[1.5rem] md:px-[6.125rem] xl:px-0 md:leading-[1.75rem] leading-[1.563rem] text-[0.938rem] md:text-base xl:text-lg xl:w-[27.813rem]">
            {props.data.description}
          </p>
        </div>
        <div className="w-full flex justify-center px-[1.5rem] md:px-[6.063rem] xl:px-0">
          <div className=" bg-lightBlue opacity-25 w-full h-[1px] mt-[54px]"></div>
        </div>
        <div className="  justify-center xl:justify-start flex flex-col md:flex-row mt-[26px]">
          <div className="uppercase flex flex-col">
            <p className=" text-sm md:text-[0.875rem] font-barlowCondensed">
              avg. distance
            </p>
            <h5 className=" font-bellefair">{props.data.distance}</h5>
          </div>
          <div className=" uppercase flex flex-col md:ml-[79px] mt-[2rem] md:mt-0">
            <p className=" text-sm md:text-[0.875rem] font-barlowCondensed">
              est. travel time
            </p>
            <h5 className=" font-bellefair">{props.data.travel}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0]);

  const updateDestination = (val) => {
    setDestination((d) => data.destinations[val]);
  };

  return (
    <div>
      <div className=" absolute top-0 w-full md:h-[63rem] xl:h-screen">
        <img
          src={"/assets/destination/background-destination-desktop.jpg"}
          alt="space image"
          className=" w-full h-full object-fill hidden xl:block fixed"
        ></img>
        <img
          src={"/assets/destination/background-destination-tablet.jpg"}
          alt="space image"
          className=" w-full h-full object-fill hidden md:block xl:hidden fixed"
        ></img>
        <img
          src={"/assets/destination/background-destination-mobile.jpg"}
          alt="space image"
          className=" w-full h-full object-fill md:hidden fixed"
        ></img>
      </div>
      <div className=" flex absolute text-white justify-center md:justify-between w-screen md:px-[2.406rem] xl:px-[10.406rem] top-[5.5rem] md:top-[8.5rem] xl:top-[13.25rem] h-[36rem]">
        <div>
          <p className="  uppercase md:text-[1.25rem] xl:text-[1.75rem] md:tracking-[0.211rem] xl:tracking-[0.295rem] font-barlowCondensed">
            <span className=" pr-[1.125rem] md:pr-[1.188rem] xl:pr-[1.75rem] font-bold opacity-25">
              01
            </span>
            Pick your destination
          </p>
        </div>
      </div>

      <div className=" flex-col xl:flex-row items-center xl:items-start xl:text-left text-center flex absolute top-[8.688rem] md:top-[13.75rem] xl:top-[19.375rem] 2xl xl:pl-[14.375rem] xl:pr-[10.188rem]  text-white w-full justify-between">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={destination.name}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className=" flex items-end w-[10.625rem] md:w-[20.625rem] xl:w-[42.375rem]">
              <img src={destination.images.webp} alt="planet image" />
            </div>
          </motion.div>
        </AnimatePresence>
        <DestinationTab
          update={updateDestination}
          data={destination}
        ></DestinationTab>
      </div>
    </div>
  );
};

export default Destination;
