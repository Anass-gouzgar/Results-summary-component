import React from "react";
import Image from "next/image";
import { data } from "../../../../data/data.js";


const colorMap = {
  "primary-lightRed": "text-primary-lightRed bg-primary-lightRed",
  "primary-orangeyYellow":
    "text-primary-orangeyYellow bg-primary-orangeyYellow",
  "primary-greenTeal": "text-primary-greenTeal bg-primary-greenTeal",
  "primary-cobaltBlue": "text-primary-cobaltBlue bg-primary-cobaltBlue",
};

const Index = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row rounded-3xl md:overflow-hidden md:w-[800px] md:h-[520px] bg-white shadow-2xl">
      {/* first card */}
      <div className="flex flex-col p-4 md:p-0 flex-1 justify-center items-center gap-y-9 md:rounded-3xl rounded-b-3xl bg-gradient-to-b from-gradient-lightSlateBlue to-gradient-lightRoyalBlue">
        <h2 className="text-neutral-lightLavender md:text-2xl text-xl font-bold">
          Your Result
        </h2>
        <div className="flex flex-col justify-center items-center gap-3 rounded-full w-52 aspect-[1/1] bg-gradient-to-b from-gradient-violetBlue">
          <h1 className="text-white text-7xl font-bold">76</h1>
          <p className="text-neutral-lightLavender/60 text-lg font-semibold">
            of 100
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl text-white font-bold">Great</h2>
          <p className="text-center text-neutral-lightLavender text-lg w-[90%] md:w-[65%]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>

      {/* second card */}
      <div className="flex-1">
        <div className="p-6 flex flex-col h-full w-full">
          <h1 className="md:text-3xl text-xl text-black font-semibold">
            Summary
          </h1>

          {data?.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center gap-x-4f mt-4 p-3 rounded-xl bg-opacity-5 ${
                colorMap[item.color]
              } ${item.bgColor}`}
            >
              <div className="flex gap-x-2 items-center">
                <Image
                  src={item.icon}
                  className="w-6 h-10"
                  width={0}
                  height={0}
                  alt="icon"
                />
                <p className={`text-lg ${item.color} font-semibold`}>
                  {item.category}
                </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <p className="text-lg text-black font-bold">{item.score}</p>
                <p className="text-lg text-black/50 font-semibold">/ 100</p>
              </div>
            </div>
          ))}
          {/* <div className="w"> */}
          <button className="bg-black/80 text-white rounded-3xl w-full py-4 mt-10 font-semibold hover:bg-gradient-lightRoyalBlue">
            Continue
          </button>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
