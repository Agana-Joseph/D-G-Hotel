import React from "react";
import BestRoomsSlider from "./BestRoomsSlider";

import BorderButton from "./BorderButton";

const OurBestRooms = () => {
  return (
    <div className="bg-bgWhite">
      <div className=" pt-20 px-5 max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div>
          <div className="text-4xl lg:text-6xl text-left w-full font-btnFont text-lightBlackClr pb-5">
          Room & Suites
          </div>
          <div className="text-left text-fontClrGrey font-semibold mb-10 w-full lg:w-3/4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
          piece of classical Latin literature from 45 BC.
          </div>
        </div>
        <BorderButton text="all rooms" link="/" />
      </div>
      <div className="px-5">
        <BestRoomsSlider />
      </div>
    </div>
  );
};

export default OurBestRooms;
