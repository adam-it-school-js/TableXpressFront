import React, { useState } from "react";
import { format } from "date-fns";
import enLocale from "date-fns/locale/en-US";
import calendar from "../../../../assets/icons/calendar52.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Modal } from "@mui/material";

interface MyCalendarProps {
  customClassName: string;
  dateTextClassName?: string;
  calendarImageClassName?: string;
  dateFormat?: string;
}

const MyCalendar: React.FC<MyCalendarProps> = ({
  customClassName,
  dateTextClassName,
  calendarImageClassName,
  dateFormat = "eee dd/MM",
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  const formattedDate = format(currentDate, dateFormat, {
    locale: enLocale,
  });

  return (
    <>
      <div
        className={`calendar cursor-pointer ${customClassName}`}
        onClick={() => setOpen(true)}
      >
        <div className="flex">
          <img
            className={`w-[20px] h-[20px] ml-[34px] mt-[15px] ${
              calendarImageClassName || ""
            }`}
            src={calendar}
            alt="calendar"
          />
          <div
            className={`calendar-cell cursor-pointer flex ml-[8px] mt-[15px] bg-[#E0E0E0] w-[113px] h-[15px] font-semibold whitespace-no-wrap 
            ${dateTextClassName || ""}`}
            style={{ fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            {formattedDate}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(0, 0, 0, 0)", // Устанавливаем полностью прозрачный фон
          },
        }}
      >
        <div className="bg-white w-[350px] h-[350px] ml-[250px] mt-[190px] border-blue-500 border-[3px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(e: any) => setCurrentDate(e?.$d)} />
          </LocalizationProvider>
        </div>
      </Modal>
    </>
  );
};

export default MyCalendar;
