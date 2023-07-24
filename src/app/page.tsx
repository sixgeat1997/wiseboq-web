import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Promotions from "@/components/promotions/promotions";
import { useEffect } from "react";
import CoverImage from "../../public/image/cover.jpg";
import CoverImage2 from "../../public/image/cover2.jpg";
import CoverImage3 from "../../public/image/cover3.jpg";

import PromotionSlider from "@/components/promotions/promotion-slider";

export default function Home(props: any) {
  console.log("test");

  return (
    <>
      <div
        className="w-full min-h-full bg-cover bg-center bg-no-repeat mb-8 font-bold flex bg-gray-900 text-gray-50 relative bg-[url('../../public/image/cover.jpg')]"
        id="section-0"
      >
        <div className="w-full my-[280px] ml-40">
          <div className="text-yellow-500 text-9xl">
            <h1>สร้าง BoQ</h1>
          </div>
          <div className=" mt-2 text-7xl">
            <h2>พร้อมจบในที่เดียว</h2>
          </div>
          <div className="p-3 my-12 text-2xl hover:bg-yellow-400 bg-yellow-500 w-fit rounded-md cursor-pointer">
            <Link className=" w-full px-7 " href="/projects">
              เริ่มต้นใช้งาน
            </Link>
          </div>
          <div className=" text-3xl rounded-md">
            WiseBoQ เปลี่ยนต้นทุนที่ซับซ้อน ให้กลายเป็นเรื่องง่ายทุกขั้นตอน
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  text-gray-150">
        <div className=" text-3xl font-bold flex w-full justify-around py-5 items-center">
          {/* <div className=" bg-[url('../../public/image/cover2.jpg') w-[200px] h-full">s</div> */}
          <div>
            <Image
              src={CoverImage3}
              alt="wiseboq"
              className="w-[700px] rounded-3xl"
            />
          </div>
          <div className="text-right">
            <div>
              <p className="">
                สร้าง <span className=" text-yellow-500"> BoQ </span>และ{" "}
                <span className="text-yellow-500">เช็คราคาก่อสร้าง</span>
              </p>
              <div className=" font-thin text-xl">
                <p>WiseBoQ รองรับสำหรับ</p>
                <p>บุคคลธรรมดา ผู้รับเหมา และบริษัท</p>
              </div>
            </div>
            <div className="mt-5">
              <p>
                คำนวณ <span className="text-yellow-500">BoQ ถูกต้อง</span>
              </p>
              <div className="font-thin text-xl">
                <p>อัพเดทราคาวัสดุก่อสร้าง และค่าแรง</p>
                <p>ให้เป็นปัจจุบันตลอดเวลา</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-3xl font-bold flex justify-around py-5 w-full items-center">
          <div className=" text-left">
            <div>
              <p>
                <span className="text-yellow-500">วางแผนต้นทุน</span>เองได้
                โดยไม่ต้องมีความรู้
              </p>
            </div>
            <div className="mt-2 font-thin text-xl">
              <p>
                คุณสามารถวางแผนราคาต้นทุนได้ด้วยตัวเอง <br />{" "}
                แม้ไม่มีพื้นฐานความรู้มาก่อน แค่ใช้ BoQ หรือ <br />{" "}
                สำรวจเทรนด์ราคาที่ต้องการแล้วทำตามที่ WiseBoQ แนะนำ <br />{" "}
                พร้อมดูตัวเลือกผู้รับเหมาที่ถูกคัดมาเพื่อคุณโดยเฉพาะ
              </p>
            </div>
          </div>

          <div>
            <Image
              src={CoverImage2}
              alt="wiseboq"
              className="w-[700px] rounded-3xl ]"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div>
          <PromotionSlider />
        </div>
      </div>
      <div className="px-10">
        <div className="mt-2 text-lg flex justify-between">
          <h2>โปรโมชั่น และดีลส่วนลด</h2>
          <h2>ดูทั้งหมด</h2>
        </div>
        <div className=" text-3xl font-bold w-full">
          <Promotions />
        </div>
      </div>
    </>
  );
}
