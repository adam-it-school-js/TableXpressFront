import React, { useState } from "react";
import { format } from "date-fns";
import enLocale from "date-fns/locale/en-US";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const renderCell = () => {
    const formattedDate = format(currentDate, "eee dd/MM", {
      locale: enLocale,
    });
    const isToday = currentDate.toDateString() === new Date().toDateString();

    return (
      <div
        className={`calendar-cell ${
          isToday ? "today" : ""
        } flex ml-[8px] mt-[15px] bg-[#E0E0E0] w-[113px] h-[15px] font-semibold`}
        key={currentDate.toISOString()}
      >
        {formattedDate}
      </div>
    );
  };

  return <div className="calendar">{renderCell()}</div>;
};

export default Calendar;
