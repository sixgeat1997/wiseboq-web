"use client";

import { useProjectStroe } from "@/lib/store";
import React, { useEffect, useState } from "react";
import UseList from "./hook/useList";
import UseCreateProject from "./hook/useModalCreate";
import { useRouter } from "next/navigation";
import cryptojs from "crypto-js";
import { encryptAES } from "@/util/crypto";

export default function Profile({ props }: any) {
  const router = useRouter();
  const [isOpenCreate, setIsOpen] = useState<boolean>(true);
  const { projects } = useProjectStroe();
  const { createProject } = useProjectStroe();
  const [pjName, setPJName] = useState<string>();
  const handleCreateProject = async () => {
    if (pjName) {
      const pj: any = await createProject(pjName, "6");
      const encrypt = encryptAES(pj.id);
      console.log(encrypt);

      setPJName("");
      setIsOpen(false);
      router.push(`/projects/${encodeURIComponent(encrypt)}`);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className=" min-h-[70vh] ">
        <div className="col-span-6 p-4 bg-white rounded-md w-full">
          <div className="text-2xl font-bold my-3 flex justify-between">
            <h1>โครงการทั้งหมด</h1>
            <button
              className="font-thin text-base bg-yellow-400 p-2 rounded-lg"
              onClick={() => setIsOpen(true)}
            >
              สร้างโครงการ
            </button>
          </div>
          <div className="mt-4">
            <div>
              <div className="grid grid-cols-6 text-center text-sm border-b-2 pb-2">
                <div className="text-start col-span-3">
                  <p>ชื่อโครงการ</p>
                </div>
                <div>
                  <p>จำนวนหมวดหมู่</p>
                </div>
                <div>
                  <p>จำนวนสินค้า</p>
                </div>
              </div>
            </div>
            <div>
              {projects?.length > 0 &&
                projects.map((item, index) => {
                  let listLength = 0;
                  item?.categories?.length > 0 &&
                    item?.categories?.map((c) => {
                      listLength += c?.lists?.length || 0;
                    });

                  return (
                    <div key={index}>
                      <UseList
                        name={item.name}
                        listLength={listLength}
                        categoryLength={item?.categories?.length || 0}
                        projectId={encodeURIComponent(encryptAES("" + item.id))}
                      >
                        <div></div>
                      </UseList>
                    </div>
                  );
                })}
            </div>
            <UseCreateProject
              title="สร้างโครงการ"
              isOpenCreate={isOpenCreate}
              setIsOpen={setIsOpen}
            >
              {" "}
              <label className="block my-6">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                  ชื่อโครงการ
                </span>
                <input
                  name="projectName"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={(e) => setPJName(e.target.value)}
                />
              </label>
              <div className="w-[500px] flex justify-center">
                <button
                  className="py-2 px-5 bg-yellow-400 rounded-md"
                  onClick={() => handleCreateProject()}
                >
                  ยืนยัน
                </button>
              </div>
            </UseCreateProject>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      key: process.env.ENCRYPT_KEY,
    },
  };
}
