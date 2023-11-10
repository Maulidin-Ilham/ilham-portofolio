import React from "react";

import { user } from "../lib/user";

const Bio = async () => {
  const data = await user();
  console.log(user);

  return (
    <>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Maulidin-Ilham"
      >
        <div className="inline-flex gap-[27px] justify-center items-center rounded-lg border border w-[350px] h-[180px] gap-x-6 bg-[#262626] hover:opacity-75 transition duration-300">
          <img
            src={data.avatar_url}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row space-x-2">
              <h1 className="font-semibold">{data.public_repos}</h1>
              <h1>Repos</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="font-semibold">{data.followers}</h1>
              <h1>Followers</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="font-semibold">{data.following}</h1>
              <h1>Following</h1>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Bio;
