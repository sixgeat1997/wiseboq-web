import React from "react";
import fbIcon from "../../public/image/fb-icon.svg";
import emailIcon from "../../public/image/emil-icon.svg";
import twIcon from "../../public/image/twitter-icon.svg";
import pinterIcon from "../../public/image/pinterest-icon.svg";
import Image from "next/image";

export default function Social() {
  return (
    <div className="flex gap-2">
      <div className=" ">
        <Image
          className=" fill-blue-500"
          src={fbIcon}
          width={30}
          alt="fb-icon"
        />
      </div>
      <div>
        <Image
          className=" fill-blue-500"
          src={twIcon}
          width={30}
          alt="fb-icon"
        />
      </div>
      <div>
        <Image
          className=" fill-blue-500"
          src={pinterIcon}
          width={30}
          alt="fb-icon"
        />
      </div>
      <div>
        <Image
          className=" fill-blue-500"
          src={emailIcon}
          width={30}
          alt="fb-icon"
        />
      </div>
    </div>
  );
}
