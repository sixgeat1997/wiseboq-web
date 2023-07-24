"use client";
import UseItem from "@/components/hook/useItem";
import { useItemStore, useProjectStroe } from "@/lib/store";
import React, { Fragment, useEffect, useState } from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import UseCreateProject from "@/components/hook/useModalCreate";
import UseInput from "@/components/hook/useInput";
import { UseButton } from "@/components/hook/useButton";
import UseCombobox, { priceFormat } from "@/components/hook/useCombobox";
import { ICategories, IList } from "@/lib/slices/createProjectSlice";
import ModalProfile from "@/components/modalProfile";
import { decryptAES } from "@/util/crypto";
import * as ExcelJS from "exceljs";
import * as FileSaver from "file-saver";

export default function ProjectId({
  params,
}: {
  params: { projectId: string };
}) {
  const { fetchProjectById, project, addCategoryToProject } = useProjectStroe();
  const { fetchItems } = useItemStore();
  const [isOpen, setIsOpen] = useState(false);
  const [cateName, setCateName] = useState<string>();
  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);
  const projectId = decryptAES(decodeURIComponent(params.projectId));

  useEffect(() => {
    fetchProjectById(projectId);
    fetchItems();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCateName(e.target.value);
  };

  const handleCreateCate = () => {
    if (cateName) {
      addCategoryToProject(cateName, +projectId);
      setIsOpen(false);
      setCateName("");
    }
  };

  const calCategoryPrice = (category: ICategories) => {
    return category.lists.length > 0
      ? category.lists.reduce((prev, curr) => {
          if (curr.price) {
            const total: number =
              prev +
              (Number(curr.price) * Number(curr.quantity) +
                Number(curr.cost) * Number(curr.quantity));
            return total;
          }
          return 0;
        }, 0)
      : 0;
  };

  const calTotalPrice = () => {
    let price: number = 0;
    project[0].categories.map((item) => {
      const x = calCategoryPrice(item);
      price += x;
    });
    return priceFormat(price);
  };

  // const userId = localStorage.getItem("user-key");
  // console.log({ userId });

  const createExcelWorkbook = async () => {
    const workbook = new ExcelJS.Workbook();
    const date = new Date();
    workbook.creator = "wiseboq";
    workbook.created = date;
    workbook.modified = date;
    const categories = project[0].categories;
    for (let i = 0; i < categories.length; i++) {
      const currentCategory = categories[i];

      const sheet1 = workbook.addWorksheet(currentCategory.name);

      sheet1.columns = [
        {
          header: "ลำดับที่",
          key: "no",
          width: 10,
          style: {
            font: {
              name: "CordiaUPC",
              size: 12,
            },
            alignment: {
              wrapText: true,
            },
          },
        },
        {
          header: "รายการ",
          key: "name",
          width: 50,
          style: {
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "จำนวน",
          key: "quantity",
          width: 10,
          style: {
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "หน่วย",
          key: "unit",
          width: 10,
          style: {
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "ราคา/หน่วย",
          key: "price",
          width: 15,
          style: {
            numFmt: "#,##0.00;[Red]-#,##0.00'",
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "ค่าวัสดุรวม",
          key: "sumPriceUnit",
          width: 15,
          style: {
            numFmt: "#,##0.00;[Red]-#,##0.00'",
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "ค่าแรง",
          key: "cost",
          width: 15,
          style: {
            numFmt: "#,##0.00;[Red]-#,##0.00'",
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "ค่าแรงรวม",
          key: "sumCostUnit",
          width: 15,
          style: {
            numFmt: "#,##0.00;[Red]-#,##0.00'",
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
        {
          header: "รวมค่าวัสดุและแรงงาน",
          key: "sumAll",
          width: 15,
          style: {
            numFmt: "#,##0.00;[Red]-#,##0.00'",
            alignment: {
              wrapText: true,
            },
            font: {
              name: "CordiaUPC",
              size: 12,
            },
          },
        },
      ];

      sheet1.getColumn("A").alignment = { horizontal: "center" };
      sheet1.getColumn("D").alignment = { horizontal: "center" };
      sheet1.getCell("A1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("B1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("C1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("D1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("E1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("F1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("G1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("H1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("I1").style = {
        font: { bold: true, name: "CordiaUPC", size: 12 },
      };
      sheet1.getCell("B1").alignment = { horizontal: "center" };
      sheet1.getCell("C1").alignment = { horizontal: "center" };
      sheet1.getCell("D1").alignment = { horizontal: "center" };
      sheet1.getCell("E1").alignment = { horizontal: "center" };
      sheet1.getCell("F1").alignment = { horizontal: "center" };
      sheet1.getCell("G1").alignment = { horizontal: "center" };
      sheet1.getCell("H1").alignment = { horizontal: "center" };
      sheet1.getCell("I1").alignment = { horizontal: "center" };

      currentCategory.lists.map((item, i) => {
        const sumPriceUnit = Number(item.quantity) * Number(item.price);
        const sumCostUnit = Number(item.quantity) * Number(item.cost);
        sheet1.addRow({
          no: i + 1,
          name: item.itemName,
          quantity: +item.quantity,
          unit: item.unit,
          price: +item.price,
          sumPriceUnit,
          cost: +item.cost,
          sumCostUnit,
          sumAll: sumCostUnit + sumPriceUnit,
        });
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    const EXCEL_EXTENSION = ".xlsx";
    const blob = new Blob([buffer], { type: fileType });
    FileSaver.saveAs(blob, project[0].name + " " + date + EXCEL_EXTENSION);
  };

  if (project.length > 0) {
    return (
      <div className="relative">
        <div className="px-36 mb-5">
          <div className=" mt-10 relative min-h-[80vh] ">
            <div className="text-5xl flex justify-between items-center font-bold w-full">
              <h1>{project[0].name}</h1>
              <div className="flex h-fit">
                <button
                  className="ml-4 p-2 rounded-md items-center bg-yellow-400 flex text-base"
                  onClick={() => setIsOpen(true)}
                >
                  <PlusIcon width={20} />
                  สร้างหมวดหมู่
                </button>
              </div>
            </div>
            <div className="px-5 w-full ">
              <div className="mt-3">
                {project[0]?.categories?.map((item, index) => {
                  return (
                    <div key={index} className="my-7 p-7 shadow-lg rounded-md">
                      <div className="text-3xl font-bold text-gray-700">
                        {item.name}
                      </div>
                      <div className="px-6 mt-2">
                        <div>
                          <p className=" text-xl">สร้างรายการ</p>
                          <p>พิมพ์ชื่อวัสดุในช่องเพื่อเลือกรายการ</p>
                        </div>

                        <div className="mt-2 border font-bold text-base text-end p-2 rounded-md bg-yellow-500 ">
                          <div className="grid grid-cols-8">
                            <div className=" col-span-4 text-start">
                              <p>รายการ</p>
                            </div>
                            <div className=" text-center">
                              <p>จำนวน</p>
                            </div>
                            <div className="">
                              <p>ราคาสินค้า</p>
                            </div>
                            <div className="">
                              <p>ราคาค่าแรง</p>
                            </div>
                            <div className="">
                              <p></p>
                            </div>
                          </div>
                        </div>

                        <div>
                          {item?.lists?.length > 0 ? (
                            item?.lists?.map((item, index) => {
                              return (
                                <div key={index}>
                                  <UseItem item={item} />
                                </div>
                              );
                            })
                          ) : (
                            <></>
                          )}
                          <div className="flex justify-end">
                            <div className="w-fit p-2 text-lg font-bold">
                              <p>{priceFormat(calCategoryPrice(item))}</p>
                            </div>
                          </div>
                          <div className="mt-4 text-lg font-bold">
                            <p>เพิ่มรายการสินค้า</p>
                          </div>

                          <div className="flex items-center mt-2">
                            <UseCombobox
                              categoryId={"" + item.id}
                            ></UseCombobox>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <UseCreateProject
              title="สร้างหมวดหมู่"
              setIsOpen={setIsOpen}
              isOpenCreate={isOpen}
            >
              <div>
                <div className="w-[400px]">
                  <UseInput
                    titleLabel="ชื่อหมวดหมู่"
                    inputName="projectName"
                    onChange={handleChange}
                  ></UseInput>
                  <div className="flex justify-end w-full">
                    <button
                      onClick={() => handleCreateCate()}
                      className=" bg-yellow-400 py-2 rounded-md  ring-2 ring-yellow-300 ring-offset-1 px-5 "
                    >
                      สร้าง
                    </button>
                  </div>
                </div>
              </div>
            </UseCreateProject>
          </div>
          <div className="flex justify-end items-end w-full bottom-0 px-4 sticky bg-white p-4">
            <div className=" py-2 px-5 text-lg ml-2 rounded-md">
              <p>
                <span className=" text-base mr-2">รวม</span>
                {calTotalPrice()}
              </p>
            </div>
            <UseButton
              name="สร้าง BoQ"
              className="py-2 shadow-md text-lg font-bold px-5 bg-yellow-400"
              onClick={() => {
                setProfileIsOpen(true);
                // createExcelWorkbook();
              }}
            ></UseButton>
          </div>
          <>
            <ModalProfile
              isOpen={profileIsOpen}
              setIsOpen={setProfileIsOpen}
              createExcelWorkbook={createExcelWorkbook}
            ></ModalProfile>
          </>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
