import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-3 mt-12 mx-2 md:max-w-2xl md:mx-auto lg:max-w-3xl lg:mx-auto">
      <h1 className="text-xl font-semibold">Experience</h1>
      <div className="flex flex-col space-y-4 mt-5">
        <div>
          <h1 className="text-gray-400 text-lg">
            2021 <span className="font-semibold text-white">Member</span>{" "}
          </h1>
          <p>Workshop Riset Informatika (Web Developer)</p>
        </div>
        <div>
          <h1 className="text-gray-400 text-lg">
            2022 <span className="font-semibold text-white">Mentor</span>
          </h1>
          <p>Workshop Riset Informatika (Web Developer)</p>
        </div>
        <div>
          <h1 className="text-gray-400 text-lg">
            2022{" "}
            <span className="font-semibold text-white">
              VSGA - Junior Web Developer Graduate (Peserta Terbaik)
            </span>
          </h1>
          <p>Digital Talent Scholarship</p>
        </div>
      </div>
    </div>
  );
};

export default page;
