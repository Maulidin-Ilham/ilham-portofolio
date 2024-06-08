import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <div className="mt-6">
      <h1 className="text-lg font-semibold">Current Tech Stack</h1>
      <div className="flex flex-row space-x-4 mt-2">
        <Image src={"/html-icon.png"} alt="html" width={24} height={24} />
        <Image src={"/css-icon.png"} alt="css" width={24} height={24} />
        <Image src={"/js-icon.png"} alt="js" width={24} height={24} />
        <Image src={"/tailwind-icon.png"} alt="js" width={40} height={22} />
        <Image src={"/react-icon.png"} alt="react" width={30} height={24} />
        <Image
          src={"/next.png"}
          alt="next"
          width={30}
          height={24}
          className=" bg-white rounded-full "
        />
        <Image src={"/laravel.png"} alt="react" width={30} height={24} />
      </div>
    </div>
  );
};

export default TechStack;
