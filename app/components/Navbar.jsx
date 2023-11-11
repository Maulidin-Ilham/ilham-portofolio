import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto">
      <div className="flex flex-row space-x-5">
        <Link
          href={"/"}
          className="opacity-75 hover:opacity-100 transition duration-200"
        >
          <h1>home</h1>
        </Link>
        <Link
          href={"/about"}
          className="opacity-75 hover:opacity-100 transition duration-200"
        >
          <h1>about</h1>
        </Link>
        <Link
          href={"/experience"}
          className="opacity-75 hover:opacity-100 transition duration-200"
        >
          <h1>experience</h1>
        </Link>
        <Link
          href={"/project"}
          className="opacity-75 hover:opacity-100 duration-200 "
        >
          <h1>project</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
