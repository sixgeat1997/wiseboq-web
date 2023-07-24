import React from "react";
import Image from "next/image";
import wiseboqLogo from "../../../public/image/wiseboq-logo.svg";
import Link from "next/link";

const navbarMenu = () => {
  return (
    <div className="flex justify-around w-full pb-2 ">
      <div className="w-full flex h-full">
        <div>
          <Link href="/">
            <Image src={wiseboqLogo} width={160} alt="Picture of the author" />
          </Link>
        </div>
        <div className="w-full flex text-lg">
          <ul className=" flex justify-end  items-end gap-12 px-1 w-full">
            <li className="grid content-end">
              <Link href={"/projects"}>
                <h1>สร้าง BoQ</h1>
              </Link>
            </li>
            <li>
              <h1>เกี่ยวกับ WiseBoQ</h1>
            </li>
            <li className="grid content-end">
              <h1>รายชื่อร้านวัสดุก่อสร้าง</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbarMenu;
