/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TechStack from "../components/TechStack";
import CardNav from "../components/CardNav";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const Page = () => {
  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto mb-3">
      <h1 className="text-xl font-semibold">About Me</h1>
      <h1 className="mt-5">
        I'm Ilham{" "}
        <span className="font-semibold">
          a Web Development Enthusiast from Malang! 🚀
        </span>
      </h1>
      <h1 className="mt-4">
        Currently immersed in my studies at Politeknik Negeri Malang, I've set
        my sights on becoming a skilled web developer, with a particular focus
        on frontend technologies.
      </h1>
      <h1 className="mt-4">
        As you explore this website, you'll come across a collection of my
        projects built using{" "}
        <div className="inline-flex space-x-2 ">
          <Link
            href="https://react.dev/"
            target="_blank"
            className="border bg-[rgb(38,38,38)] flex items-center space-x-2 px-2 rounded "
          >
            <img src="/react.svg" alt="react" width={14} height={14} />
            <h1 className="text-sm">React js</h1>
          </Link>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="border bg-[rgb(38,38,38)] flex items-center space-x-2 px-2 rounded "
          >
            <img
              src="/next-js.svg"
              alt="next-js"
              width={14}
              height={14}
              className="bg-white rounded-full"
            />
            <h1 className="text-sm">Next js</h1>
          </Link>
          <Link
            href="https://laravel.com/"
            target="_blank"
            className="border bg-[rgb(38,38,38)] flex items-center space-x-2 px-2 py-2 rounded "
          >
            <img
              src="/laravel.svg"
              alt="laravel"
              width={20}
              height={20}
              className="bg-white rounded-full"
            />
            <h1 className="text-sm">Laravel</h1>
          </Link>
        </div>
        <span className="ml-1">
          . Each project reflects my commitment to mastering the art of frontend
          and backend development.
        </span>
      </h1>
      <h1 className="mt-4">
        This platform serves as a canvas to share my journey of continuous
        learning. I believe in the power of sharing knowledge, and here, you'll
        find insights into my progress, challenges faced, and the exciting
        discoveries I make along the way. Let's build, create, and learn
        together!
      </h1>

      <TechStack />
      <div className="mt-6 flex flex-col space-y-3 md:flex md:flex-row md:space-y-0 md:space-x-3">
        <CardNav
          title={"Linkedin"}
          icon={<LinkedInIcon />}
          href={"https://www.linkedin.com/in/ilham-maulidin/"}
        />
        <CardNav
          title={"Github"}
          icon={<GitHubIcon />}
          href={"https://github.com/Maulidin-Ilham"}
        />
        <CardNav
          title={"Email"}
          icon={<EmailIcon />}
          href={"mailto:ilhammaulidin73@gmail.com"}
        />
      </div>
    </div>
  );
};

export default Page;
