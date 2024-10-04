import React, { FC } from "react";
import MyCalendar from "./components/Calendar/MyCalendar";
import Seat from "./components/Seat/Seat";
import User24 from "../../assets/icons/User24.svg";
import Reservation from "./components/Reservation/Reservation";

const DashboardPage: FC<{}> = () => {
  const numberOfSeats = 0;

  return (
    <div className="flex">
      <MyCalendar customClassName="w-[209px] h-[52px] ml-[24px] mt-[20px] border-[1px] border-[#E0E0E0] bg-[#E0E0E0] rounded-[5px]" />
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
      <Reservation />
    </div>
  );
};

export default DashboardPage;
