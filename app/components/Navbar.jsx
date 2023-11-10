import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row space-x-5">
      <Link href={"/"}>
        <h1>home</h1>
      </Link>
      <Link href={"/about"}>
        <h1>about</h1>
      </Link>
      <Link href={"/experience"}>
        <h1>experience</h1>
      </Link>
      <Link href={"/project"}>
        <h1>project</h1>
      </Link>
    </div>
  );
};

export default Navbar;
