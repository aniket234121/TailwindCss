import React from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../data";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full  flex xl:flex-row flex-col justify-center max-container gap-10 min-h-screen "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className=" text-xl font-monteserrat text-[#ff6452] ">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-8xl max-md:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Our New Arrival
          </span>
          <br />
          <span className="text-[#ff6452] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-500 text-lg leading-8 mt-6 mb-14">
          Discover stylish nike arrivals quality
        </p>
        <Button msg={"Shop now"} img={arrowRight}></Button>
        <div className="flex justify-start items-startflex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => {
            return (
              <div key={item.label}>
                <p className="text-4xl font-bold">{item.value}</p>
                <p className="leading-7 text-slate-700">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img src={bigShoe1} alt="" height={500} width={610} />
      </div>
    </section>
  );
};

export default Hero;
