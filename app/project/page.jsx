import React from "react";
import projects from "../lib/projectList";
import ProjectCard from "../components/ProjectCard";

const page = () => {
  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto mb-3">
      <h1 className="text-xl font-semibold">Projects</h1>
      <h1 className="mt-4">
        These are projects that i have created, hopefully these projects can
        provide inspiration for all of you
      </h1>
      <div className="grid grid-cols-2 mt-8 gap-x-5 gap-y-8 w-full ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default page;
