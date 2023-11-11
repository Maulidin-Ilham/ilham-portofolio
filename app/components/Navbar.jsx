"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto">
      <div className="flex flex-row space-x-5">
        <Link href={"/"}>
          <h1
            className={`  transition duration-200 ${
              pathname === "/" ? "opacity-100" : " opacity-60 hover:opacity-100"
            }`}
          >
            home
          </h1>
        </Link>
        <Link href={"/about"}>
          <h1
            className={`  transition duration-200 ${
              pathname === "/about"
                ? "opacity-100"
                : " opacity-60 hover:opacity-100"
            }`}
          >
            about
          </h1>
        </Link>
        <Link href={"/experience"}>
          <h1
            className={`  transition duration-200 ${
              pathname === "/experience"
                ? "opacity-100"
                : " opacity-60 hover:opacity-100"
            }`}
          >
            experience
          </h1>
        </Link>
        <Link href={"/project"}>
          <h1
            className={`  transition duration-200 ${
              pathname === "/project"
                ? "opacity-100"
                : " opacity-60 hover:opacity-100"
            }`}
          >
            project
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
