import React, { FC } from "react";
import Search from "../../assets/icons/search.svg";
import TopIcon from "../../assets/icons/topIcon.svg";
import Avatar from "../../assets/icons/Avatar.svg";
const Header: FC = () => {
  return (
    <div className="flex">
      <div className="ml-[246px] flex w-full h-[98px] bg-[white]">
        <h1 className="text-[38px] px-[0px] w-[465px] h-[54px] ml-[12px] mt-[24px] mb-[20px] mr-[0]  text-[#0A376E] font-size: 40px font-bold font-alegreya">
          RESERVATION SCHEDULE
        </h1>

        <a className="w-[181px] h-[40px] ml-[400px] my-[29px] bg-[white] flex rounded-3xl border-[1px] border-[#F5F5F5]">
          <img
            className="w-[24px] h-[24px] ml-[8px] mt-[8px] mr-[16px]"
            src={Search}
          />
          <input
            type="text"
            className="w-[106px] h-[17px] my-[8px] rounded border border-[white] focus:outline-none focus:border-[white] text-[12px]"
            placeholder="Search everything"
          />
        </a>
        <a className="w-[40px] h-[40px] mr-[114px] bg-[white] flex items-center rounded-3xl border-[1px] border-[#F5F5F5] my-[29px]">
          <img className="w-[40px] h-[40px]" src={TopIcon} />

          <div className="border-r w-[1px] h-[30px] ml-[24px] bg-[#DDDDDD]"></div>
          <img
            className="w-[40px] h-[40px] ml-[24px] mr-[26pxclear]"
            src={Avatar}
          />
        </a>
      </div>
    </div>
  );
};
//<div className="flex w-[317px h-[40px]"></div>

export default Header;
