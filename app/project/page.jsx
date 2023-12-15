import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto mb-3">
      <h1 className="text-xl font-semibold">Projects</h1>
      <h1 className="mt-4">
        These are projects that i have created, hopefully these projects can
        provide inspiration for all of you
      </h1>
      <div className="grid grid-cols-2 mt-8 gap-x-5 gap-y-8 w-full ">
        <Link
          className="flex flex-col  w-full hover:opacity-80 transition duration-300"
          href={"https://ilham-idcamp-note-app.vercel.app/"}
          target="_blank"
        >
          <img
            src={"/note-app.png"}
            alt="note-app"
            className="  object-cover rounded"
          />
          <h1 className=" font-semibold mt-2 lg:text-lg">Note Taking App</h1>
          <p className="line-clamp-3">
            The Dicoding ID Camp Final Project is an innovative note-taking
            application developed using React.js and styled with Tailwind CSS.
          </p>
        </Link>
        <Link
          className="flex flex-col  w-full hover:opacity-80 transition duration-300"
          href={"https://fake-store-ilham.vercel.app/"}
          target="_blank"
        >
          <img
            src={"/fake-store.png"}
            alt="fake-store"
            className="  object-cover rounded"
          />
          <h1 className=" font-semibold mt-2 lg:text-lg">Fake Store</h1>
          <p className="line-clamp-3">
            Introducing a Next.js-powered fake store, where I leverage data from
            a fake store API to create a dynamic and responsive web application.{" "}
          </p>
        </Link>
        <Link
          className="flex flex-col  w-full hover:opacity-80 transition duration-300"
          href={"https://anime-hub-ilham.vercel.app/"}
          target="_blank"
        >
          <img
            src={"/anime-hub.png"}
            alt="anime-hub"
            className="  object-cover rounded"
          />
          <h1 className=" font-semibold mt-2 lg:text-lg">Anime Hub</h1>
          <p className="line-clamp-3">
            Explore my anime list-inspired web application! Built with Next.js
            and Talwind CSS, it dynamically fetches anime data from the Jikan
            API, offering a user-friendly interface for anime enthusiasts to
            discover and track their favorite shows.
          </p>
        </Link>
        <Link
          className="flex flex-col  w-full hover:opacity-80 transition duration-300"
          href={"https://quote-generator-maulidin-ilham.vercel.app/"}
          target="_blank"
        >
          <img
            src={"/quote-generator.png"}
            alt="quote-generator"
            className="  object-cover rounded"
          />
          <h1 className=" font-semibold mt-2 lg:text-lg">Quote generator</h1>
          <p className="line-clamp-3">
            Unleash inspiration with the Quote Generator! Powered by React.js,
            Tailwind CSS and fueled by the TypeFit API, this web application
            delivers a daily dose of motivation through dynamically fetched
            quotes.{" "}
          </p>
        </Link>
        <Link
          className="flex flex-col  w-full hover:opacity-80 transition duration-300"
          href={"https://link-shorter-by-ilham.vercel.app/"}
          target="_blank"
        >
          <img
            src={"/link-shorter.png"}
            alt="link-shorter"
            className="  object-cover rounded"
          />
          <h1 className=" font-semibold mt-2 lg:text-lg">Link Shorter</h1>
          <p className="line-clamp-3">
            Effortlessly generate concise URLs, enhancing accessibility and
            shareability. Simplify your links, elevate your online experience.
            Built by React js and daisy UI
          </p>
        </Link>

        <Link
          className="flex flex-col  w-full hover:opacity-80 transition duration-300"
          href={"https://github.com/Maulidin-Ilham/pegawai-ku"}
          target="_blank"
        >
          <img
            src={"/pegawaiku.png"}
            alt="pegawaiku"
            className="  object-cover rounded"
          />
          <h1 className=" font-semibold mt-2 lg:text-lg">Pegawai Ku</h1>
          <p className="line-clamp-3">
            Implemented a project utilizing the Decision Support System (DSS)
            with the Evaluation based on Distance from Average Solution (EDAS)
            method for precise and unbiased employee performance assessment
          </p>
        </Link>
      </div>
    </div>
  );
};

export default page;
