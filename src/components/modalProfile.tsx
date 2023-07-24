"use client";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import UseInput from "./hook/useInput";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface IModalProfile {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createExcelWorkbook: () => void;
}

export default function ModalProfile({
  isOpen,
  setIsOpen,
  createExcelWorkbook,
}: IModalProfile) {
  const stateOfProject = [
    { id: 1, name: "วางแผน/ออกแบบ", unavailable: false },
    { id: 2, name: "ประมูล/จัดหาผู้รับเหมา", unavailable: false },
    { id: 3, name: "ระหว่างการก่อสร้าง", unavailable: false },
  ];

  const valueUserTyep = [
    { id: 1, name: "ฝ่ายจัดซื้อ", unavailable: false },
    { id: 2, name: "เจ้าของบ้าน", unavailable: false },
    { id: 3, name: "ผู้รับเหมา", unavailable: false },
    { id: 4, name: "เจ้าของโครงการ", unavailable: false },
  ];
  const [projectState, setProjectState] = useState(stateOfProject[0]);
  const [userType, setUserType] = useState(valueUserTyep[0]);

  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    lineId: "",
  });

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const targetName = e.target.name;
    switch (targetName) {
      case "name":
        setInfo({
          ...info,
          name: value,
        });
        break;
      case "lastName":
        setInfo({
          ...info,
          lastName: value,
        });
        break;
      case "email":
        setInfo({
          ...info,
          email: value,
        });
        break;
      case "phone":
        setInfo({
          ...info,
          phone: value,
        });
        break;
      case "lineId":
        setInfo({
          ...info,
          phone: value,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="modal">
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-fit mt-40 container mx-auto justify-center p-4">
              <Dialog.Panel as="div" className="p-2 rounded-xl bg-white ">
                <div className="px-8 py-5">
                  <Dialog.Title className="text-2xl font-bold">
                    <p>โปรดระบุข้อมูล</p>
                  </Dialog.Title>
                  <Dialog.Description>
                    {/* This will permanently deactivate your account */}
                  </Dialog.Description>
                  <div>
                    <div className="flex gap-2">
                      <UseInput
                        className="block mt-2"
                        titleLabel="ชื่อ"
                        inputName="name"
                        onChange={handleInfoChange}
                        placeHolder="wiseboq"
                      ></UseInput>
                      <UseInput
                        className="block mt-2"
                        titleLabel="นามสกุล"
                        inputName="lastName"
                        onChange={handleInfoChange}
                        placeHolder="wiseboq"
                      ></UseInput>
                      {/* <label className="block">
                          <span className="block text-sm font-medium text-slate-700">
                            Email
                          </span>
                          <input
                            type="email"
                            className="border peer peer-invalid:visible peer-invalid:border-red-500 peer-invalid:border-2 "
                          />
                          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                          </p>
                        </label> */}
                    </div>

                    <div>
                      <UseInput
                        titleLabel="อีเมล"
                        className="block my-2"
                        inputName="email"
                        onChange={handleInfoChange}
                        placeHolder="info@wiseboq.com"
                      ></UseInput>
                      <UseInput
                        titleLabel="หมายเลขโทรศัพท์"
                        className="block my-2"
                        inputName="phone"
                        onChange={handleInfoChange}
                        placeHolder="080-000-0000"
                      ></UseInput>
                      <UseInput
                        titleLabel="ไลน์ไอดี"
                        className="block my-2"
                        inputName="lineId"
                        onChange={handleInfoChange}
                        placeHolder="@wiseboq"
                      ></UseInput>
                    </div>

                    <div className="pb-2">
                      <div>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                          สถานะโครงการ
                        </span>
                      </div>
                      <Listbox value={projectState} onChange={setProjectState}>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                              {projectState.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {stateOfProject.map((state, stateIdx) => (
                                <Listbox.Option
                                  key={stateIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={state}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {state.name}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    <div className="">
                      <div>
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                          ประเภทผู้ใช้งาน
                        </span>
                      </div>
                      <Listbox value={userType} onChange={setUserType}>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                              {userType.name}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {valueUserTyep.map((person, personIdx) => (
                                <Listbox.Option
                                  key={personIdx}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-amber-100 text-amber-900"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={person}
                                >
                                  {({ selected }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {person.name}
                                      </span>
                                      {selected ? (
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </Listbox>
                    </div>
                    <div className="flex justify-center mt-6">
                      <button
                        onClick={() => {
                          createExcelWorkbook();
                          setIsOpen(false);
                        }}
                        className="w-full rounded-md ring-2 ring-yellow-400 ring-offset-1 py-2 font-bold bg-yellow-500"
                      >
                        ยืนยัน
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
