import React, { useState } from "react";

const TimePicker = () => {
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [ampm, setAmPm] = useState("AM");

  const handleStartHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartHour(e.target.value);
  };

  const handleStartMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartMinute(e.target.value);
  };

  const handleEndHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndHour(e.target.value);
  };

  const handleEndMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndMinute(e.target.value);
  };

  const handleAmPmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmPm(e.target.value);
  };

  return (
    <div className="flex ml-[23px] mt-[6px]">
      <input
        type="text"
        className="w-6 text-center border-none text-[18px]"
        placeholder="HH"
        value={startHour}
        onChange={handleStartHourChange}
      />
      <span className="text-center">:</span>
      <input
        type="text"
        className="w-6 text-center border-none text-[18px]"
        placeholder="MM"
        value={startMinute}
        onChange={handleStartMinuteChange}
      />
      <span className="mx-2 text-center">-</span>
      <input
        type="text"
        className="w-6 text-center border-none  text-[18px]"
        placeholder="HH"
        value={endHour}
        onChange={handleEndHourChange}
      />
      <span className="text-center">:</span>
      <input
        type="text"
        className="w-6 text-center border-none text-[18px]"
        placeholder="MM"
        value={endMinute}
        onChange={handleEndMinuteChange}
      />
      <select
        className="w-40 text-[18px] mr-5"
        value={ampm}
        onChange={handleAmPmChange}
        style={{ marginRight: "40px" }}
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

export default TimePicker;
