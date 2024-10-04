import React, { useState } from "react";
import Creat from "../../../../assets/icons/create.svg";
import CREATE from "../../../../assets/icons/NewPostcreate.svg";
import { Modal } from "@mui/material";
import Dell from "../../../../assets/icons/Dell.svg";
import MyCalendar from "../Calendar/MyCalendar";
import Month from "../../../../assets/icons/Month.svg";
import Time from "../Time/Time";
import RESERVE from "../../../../assets/icons/RESERVE.svg";

const Reservation: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [isOnlineReservation, setIsOnlineReservation] = useState(true);
  const [isOnSiteReservation, setIsOnSiteReservation] = useState(false);

  const switchToOnlineReservation = () => {
    setIsOnlineReservation(true);
    setIsOnSiteReservation(false);
  };

  const switchToOnSiteReservation = () => {
    setIsOnlineReservation(false);
    setIsOnSiteReservation(true);
  };

  return (
    <>
      <div className=" cursor-pointer">
        <button
          className="flex w-[182px] h-[54px] ml-[65px] mt-[19px] bg-[#1473E6] rounded-[50px]"
          onClick={() => setOpen(true)}
        >
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0)",
          },
        }}
      >
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex-col ml-[600px] mt-[190px] bg-white w-[620px] h-[706px]  border-blue-500 border-[3px] z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ overflowY: "auto", maxHeight: "70vh" }}
          >
            <div className="flex flex-nowrap">
              <button
                style={{ marginTop: "39px" }}
                className={`ml-[29px] mt-6 mr-4 text-[18px] ${
                  isOnlineReservation ? "text-black" : "text-gray-400"
                } border-b-[3px] ${
                  isOnlineReservation ? "border-blue-500" : "border-gray-400"
                } w-[201px] font-bold`}
                onClick={switchToOnlineReservation}
              >
                Online Reservation
              </button>

              <button
                style={{ marginTop: "39px" }}
                className={`ml-[-16px] mt-6 mr-4 text-[18px] ${
                  !isOnlineReservation ? "text-black" : "text-gray-400"
                } border-b-[3px] ${
                  !isOnlineReservation ? "border-blue-500" : "border-gray-400"
                } w-[201px] font-bold`}
                onClick={switchToOnSiteReservation}
              >
                On-site Reservation
              </button>

              <img
                className="w-[42px] h-[42px] ml-[88px] mt-[19px] cursor-pointer "
                src={Dell}
                alt="Dell"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
              />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                Full name
              </div>
              <div className="text-[18px] font-bold text-[#E43232] ml-[7px] mt-[32px]">
                *
              </div>
              <input className="w-[298px] h-[38px] ml-[92px] mt-[24px] rounded-[20px] border-[1px] border-gray-300" />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                Phone number
              </div>
              <input className="w-[298px] h-[38px] ml-[65px] mt-[24px] rounded-[20px] border-[1px] border-gray-300" />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                Email
              </div>
              <input className="w-[298px] h-[38px] ml-[145px] mt-[24px] rounded-[20px] border-[1px] border-gray-300" />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                Branch
              </div>
              <div className="text-[18px] font-bold text-[#E43232] ml-[7px] mt-[32px]">
                *
              </div>
              <img
                className="w-[333px] h-[20px] ml-[85px] mt-[19px] cursor-pointer "
                src={Month}
                alt="Month"
              />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                Date
              </div>
              <div className="text-[18px] font-bold text-[#E43232] ml-[7px] mt-[32px]">
                *
              </div>
              <MyCalendar
                customClassName="flex justify-center w-[173px] h-[45px] ml-[150px] mt-[19px] border-[1px] rounded-[20px] border-[#E0E0E0] bg-[#E0E0E0]"
                dateTextClassName="ml-[5px] mt-[9px] "
                calendarImageClassName="ml-[-15px] mt-[9px]"
                dateFormat="eee dd MMMM"
              />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                Time
              </div>
              <div className="text-[18px] font-bold text-[#E43232] ml-[7px] mt-[32px]">
                *
              </div>
              <div className="w-[298px] h-[38px] rounded-[20px] border-[1px] border-gray-300 ml-[134px] mt-[32px]">
                <Time />
              </div>
            </div>
            <div className="flex">
              <div className="ml-[48px] mt-[32px] text-[18px] font-bold">
                people
              </div>
              <div className="text-[18px] font-bold text-[#E43232] ml-[7px] mt-[32px]">
                *
              </div>
              <input className="w-[298px] h-[38px] ml-[120px] mt-[24px] rounded-[20px] border-[1px] border-gray-300" />
            </div>
            <div className="flex">
              <div className="flex ml-[48px] mt-[32px] text-[18px] font-bold">
                Note
              </div>
              <input className="w-[298px] h-[61px] ml-[153px] mt-[12px] rounded-[20px] border-[1px] border-gray-300" />
            </div>
            <div className="flex flex-nowrap">
              <div className="ml-[57px] mt-[12px]">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] border-[5px] border-[#000]"
                />
              </div>
              <div className="ml-[40px] mt-[5px]">
                <span className="text-[18px]" style={{ whiteSpace: "nowrap" }}>
                  Vaccine green passes
                </span>
              </div>
            </div>
            <button
              className="w-[297px] h-[47px] ml-[164px] mt-[52px] mb-[33px] bg-[#1473E6] rounded-[50px]"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              <img
                className="w-[100px] h-[42px] ml-[96px] mt-[5px] cursor-pointer "
                src={RESERVE}
                alt="RESERVE"
              />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Reservation;
