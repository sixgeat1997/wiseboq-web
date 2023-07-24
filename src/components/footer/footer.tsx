import React from "react";
import WiseboqLogo from "../../../public/image/wiseboq-logo.svg";
import Image from "next/image";
import Social from "../social";
import Link from "next/link";

const FooterWiseBoq = () => {
  return (
    <>
      <div className=" py-20 px-36 grid grid-cols-3 bg-gray-100">
        <div className=" flex justify-center">
          <div>
            <Image src={WiseboqLogo} width={150} alt="Picture of the author" />
            <div className="my-4">
              <p className=" font-bold">
                บริษัทไวซ์บีโอคิว (WiseBoQ) จำกัด <br />{" "}
                <span className=" font-thin">
                  54 ม.6 ต.ทุ่งเขาหลวง อ.ทุ่งเขาหลวง จ.ร้อยเอ็ด 45170
                </span>
              </p>
            </div>
            <div className="my-4">
              <Social />
            </div>
            <div>
              <Link href="/" className=" ">
                ตรวจดูข้อมูลนิติบุคล {">"}
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div>
            <div>
              <h2>WiseBoQ</h2>
              <ul>
                <li>สร้าง BoQ</li>
                <li>เทรนด์ราคาสินค้า</li>
                <li>รายชื่อผู้รับเหมา</li>
                <li>รายชื่อร้านวัสดุก่อสร้าง</li>
                <li>บทความเพิ่มเติม</li>
              </ul>
            </div>
            <div>
              <h3>ช่องทางการชำระเงิน</h3>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div>
            <h3>WiseBoQ</h3>
            <div>ทำไมต้อง WiseBoQ</div>
            <div>เกี่ยวกับ WiseBoQ</div>
            <div>นโยบายความเป็นส่วนตัว</div>
          </div>
        </div>
      </div>
      {/* <div className="p-1 w-full flex justify-center">
        <p className="text-xs text-gray-500">
          © 2023. WiseBOQ. All rights reserved.
        </p>
      </div> */}
    </>
  );
};

export default FooterWiseBoq;
