import React from "react";

interface SeatProps {
  numberOfSeats: number;
  // Другие пропсы, если необходимо
}

const Seat: React.FC<SeatProps> = ({ numberOfSeats }) => {
  return (
    <div className="w-[45px] h-[29px] ml-[71px] mt-[11px] flex-shrink-0 text-black font-roboto text-[30px] font-normal">
      {numberOfSeats}
    </div>
  );
};

export default Seat;
