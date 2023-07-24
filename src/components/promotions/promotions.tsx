import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect, useState } from "react";
import { getPromotions } from "../../lib/get-promotions";
import dayjs from "dayjs";
export default async function Promotions(props: any) {
  const promotions = [
    {
      name: "ชื่อสินค้าโปรโมชั่น 1",
      dateExp: dayjs().format("DD-MM-YYYY"),
    },
    {
      name: "ชื่อสินค้าโปรโมชั่น 2",
      dateExp: dayjs().format("DD-MM-YYYY"),
    },
    {
      name: "ชื่อสินค้าโปรโมชั่น 3",
      dateExp: dayjs().format("DD-MM-YYYY"),
    },
    {
      name: "ชื่อสินค้าโปรโมชั่น 4",
      dateExp: dayjs().format("DD-MM-YYYY"),
    },
  ];

  return (
    <div className="  w-full mb-4 px-5">
      <div className=" text-base grid grid-cols-4 gap-5">
        {promotions.map((item, i) => {
          return (
            <div key={i} className=" shadow-lg p-5 rounded-sm">
              <div className="w-full  rounded-md bg-gray-100 h-[250px]"></div>
              <div>
                <div className="my-1">{item.name}</div>
                <div className=" font-thin">สิ้นสุด {item.dateExp} - {item.dateExp}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
