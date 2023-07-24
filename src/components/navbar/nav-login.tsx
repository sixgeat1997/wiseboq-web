import React from "react";
import Image from "next/image";
import wiseboqLogo from "../../../public/image/wiseboq-logo.svg";

const navbarLogin = () => {
  return (
    <div className="flex justify-end pt-5 pr-2">
      {/* <div>
        <Image
          src={wiseboqLogo}
          width={150}
          height={120}
          alt="Picture of the author"
        />
      </div> */}
      <div>
        <button className=" bg-yellow-400 p-2 px-3 rounded-md">Login</button>
      </div>
    </div>
  );
};

export default navbarLogin;
