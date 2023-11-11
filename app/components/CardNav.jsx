import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Link from "next/link";

const CardNav = ({ title, icon, href }) => {
  return (
    <Link
      href={href}
      className="w-full flex flex-row justify-between items-center border px-2 py-4 rounded text-white bg-[rgb(38,38,38)] hover:opacity-70 cursor-pointer transition duration-300 md:w-1/3"
    >
      <div className="flex flex-row space-x-2">
        {icon}
        <h1>{title}</h1>
      </div>
      <NorthEastIcon />
    </Link>
  );
};

export default CardNav;
