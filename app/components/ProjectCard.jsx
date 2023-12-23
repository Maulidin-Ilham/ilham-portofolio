import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, imgSrc, desc, link }) => {
  return (
    <>
      <Link
        className="flex flex-col  w-full hover:opacity-80 transition duration-300"
        href={link}
        target="_blank"
      >
        <img src={imgSrc} alt={title} className="  object-cover rounded" />
        <h1 className=" font-semibold mt-2 lg:text-lg">{title}</h1>
        <p className="line-clamp-3">{desc}</p>
      </Link>
    </>
  );
};

export default ProjectCard;
