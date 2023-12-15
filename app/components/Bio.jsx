import React from "react";
import { followers, following, repos, user } from "../lib/user";

const Bio = async () => {
  const data = await user();
  const followersData = await followers();
  const followingData = await following();
  const reposData = await repos();
  console.log(reposData);

  return (
    <>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Maulidin-Ilham"
      >
        <div className="flex flex-row space-x-4 items-center justify-center border px-3 py-6 rounded sm:max-w-md lg:max-w-lg sm:justify-center sm:space-x-10 bg-[rgb(38,38,38)] hover:opacity-70 cursor-pointer transition duration-300">
          <img
            src={data.avatar_url}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row space-x-2">
              <h1 className="font-semibold">{reposData.length}</h1>

              <h1>Repos</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="font-semibold">{followersData.length}</h1>
              <h1>Followers</h1>
            </div>
            <div className="flex flex-row space-x-2">
              <h1 className="font-semibold">{followingData.length}</h1>
              <h1>Following</h1>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Bio;
