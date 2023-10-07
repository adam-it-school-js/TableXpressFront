import React, { FC } from "react";
import Calendar from "./components/Calendar/Calendar";
import calendar from "../../assets/icons/calendar52.svg";
import Seat from "./components/Seat/Seat";
import User24 from "../../assets/icons/User24.svg";
import Creat from "../../assets/icons/create.svg";
import CREATE from "../../assets/icons/NewPostcreate.svg";
const DashboardPage: FC<{}> = () => {
  const numberOfSeats = 0;

  return (
    <div className="flex">
      <div className="flex w-[209px] h-[52px] ml-[24px] mt-[20px] border-[1px] border-[#E0E0E0] bg-[#E0E0E0] rounded-[5px]">
        <img
          className="w-[20px] h-[20px] ml-[24px] mt-[15px]"
          src={calendar}
          alt="calendar"
        />
        <Calendar />
      </div>
      <div className="flex-col ml-[259px] mt-[9px] bg-[#F5CEFF] w-[177px] h-[73px] rounded-md">
        <Seat numberOfSeats={numberOfSeats} />
        <div className="flex">
          <div className="flex ml-[12px] mt-[7px] text-[18px] whitespace-nowrap">
            Available seat
          </div>
          <img
            className="w-[24px] h-[24px] ml-[10px] mt-[7px]"
            src={User24}
            alt="User24"
          />
        </div>
      </div>
      <button className="flex w-[182px] h-[54px] ml-[65px] mt-[19px] bg-[#1473E6] rounded-[50px]">
        <img
          className="w-[24px] h-[24px] ml-[28px] mt-[14px]"
          src={Creat}
          alt="Creat"
        />
        <img
          className="w-[83px] h-[25px] ml-[9px] mt-[15px]"
          src={CREATE}
          alt="CREATE"
        />
      </button>
    </div>
  );
};

export default DashboardPage;
