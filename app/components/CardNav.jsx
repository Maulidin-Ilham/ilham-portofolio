import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const CardNav = ({ title, icon }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center border px-2 py-4 rounded text-white bg-[#262626] hover:opacity-70 cursor-pointer transition duration-300 md:w-1/3">
      <div className="flex flex-row space-x-2">
        {icon}
        <h1>{title}</h1>
      </div>
      <NorthEastIcon />
    </div>
  );
};

export default CardNav;
