"use client";
import { IList } from "@/lib/slices/createProjectSlice";
import { IItem } from "@/lib/slices/itemsSlice";
import { useItemStore, useProjectStroe } from "@/lib/store";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import debounce from "lodash.debounce";

interface ICombobox {
  children?: React.ReactNode;
  onChange?: (e: IItem, quantity: number) => void;
  categoryId?: string;
}

export const priceFormat = (number: number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
  }).format(number);
};

export default function UseCombobox({
  categoryId,
  children,
  onChange,
}: ICombobox) {
  const [selected, setSelected] = useState<IItem>({
    name: "",
    cost: 0,
    price: 0,
    id: 0,
    quantity: 1,
    unit: "หน่วย",
  });
  const { addListToCategory } = useProjectStroe();
  const [itemResults, setItemResults] = useState<IItem[]>([]);
  const loading = useRef<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  async function search(criteria: string) {
    loading.current = true;

    const response = await fetch(
      `http://localhost:3434/items/search?title=${criteria}`
    );
    const body = await response.json();

    loading.current = false;

    return body;
  }

  async function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value == "") {
      setSelected({
        name: "",
        cost: 0,
        price: 0,
        id: 0,
        quantity: 1,
        unit: "หน่วย",
      });
    }

    debouncedSearch(e.target.value);
  }

  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      if (criteria) setItemResults(await search(criteria));
      // setCharacters(await search(criteria));
    }, 1300)
  ).current;

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {}, [loading.current]);

  // filteredPeople =
  //   query === ""
  //     ? []
  //     : items.filter((item) =>
  //         item.name
  //           .toLowerCase()
  //           .replace(/\s+/g, "")
  //           .includes(query.toLowerCase().replace(/\s+/g, ""))
  //       );

  return (
    <>
      <div className="w-[600px]">
        <Combobox
          value={selected}
          onChange={(e: IItem) => {
            setSelected(e);
          }}
        >
          <div className="relative">
            <div className="">
              <Combobox.Input
                className="px-2 py-2 w-full text-sm focus:outline shadow-sm focus:border-blue-500 focus:outline-blue-400 border rounded-md"
                displayValue={(item: any) => item.name}
                onChange={(e) => {
                  loading.current = true;
                  handleChanges(e);
                }}
              />
            </div>
            {loading.current ? (
              <Combobox.Options className="absolute  mt-1 min-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30">
                <div className="text-center p-4">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </Combobox.Options>
            ) : (
              <Transition.Child
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                beforeEnter={() => {
                  setSelected({ ...selected, quantity: 1 });
                }}
                afterLeave={() => {
                  // setQuery("");
                }}
              >
                <div>
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-30">
                    {/* {loading.current ? <>loading</> : renderItemsList()} */}
                    {itemResults.map((item, i) => {
                      return (
                        <Combobox.Option
                          key={i}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-4 pr-4 ${
                              active ? "bg-yellow-500 " : "text-gray-900"
                            }`
                          }
                          value={item}
                        >
                          {({ selected }) => (
                            <div>
                              <span
                                className={`block ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item.name}
                              </span>
                            </div>
                          )}
                        </Combobox.Option>
                      );
                    })}
                  </Combobox.Options>
                </div>
                {/* )} */}
              </Transition.Child>
            )}
          </div>
        </Combobox>
      </div>
      <div className="ml-2 w-full flex gap-2 items-center">
        {loading.current ? <>{loading.current}</> : <>{loading.current}</>}
        <input
          type="number"
          min={1}
          defaultValue={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          className=" px-2 py-2 w-[60px] text-sm focus:outline shadow-sm focus:border-blue-500 focus:outline-blue-400 border rounded-md"
        />
        <div className="flex p-2 w-fit text-sm items-center border rounded-md">
          {selected.unit}
        </div>
        <div className="flex w-fit items-center border rounded-md p-1">
          <p className="p-1 border-r text-sm pr-2">ราคา/{selected.unit}</p>
          <p className="p-1 font-bold px-3">{priceFormat(selected.price)}</p>
        </div>
        <div className="flex w-fit items-center border rounded-md p-1">
          <p className="p-1 border-r text-sm pr-2 ">ค่าแรง/{selected.unit}</p>
          <p className="p-1 font-bold px-3">{priceFormat(selected.cost)}</p>
        </div>
        <div className="flex w-fit font-bold p-2  items-center border rounded-md ">
          <p className="">
            {priceFormat(
              Number(quantity) * Number(selected.price) +
                Number(quantity) * Number(selected.cost)
            )}
          </p>
        </div>
        <div>
          <button
            className="ml-2 bg-blue-600 text-white px-3 py-2 text-sm rounded-md w-fit"
            onClick={() => {
              if (selected.name) {
                addListToCategory({
                  categoryId: "" + categoryId,
                  cost: Number(selected.cost),
                  itemName: selected.name,
                  price: Number(selected.price),
                  quantity: quantity,
                  unit: selected.unit,
                });
                setSelected({
                  name: "",
                  cost: 0,
                  price: 0,
                  id: 0,
                  quantity: 1,
                  unit: "หน่วย",
                });
                setQuantity(1);
              }
            }}
          >
            เพิ่มสินค้า
          </button>
        </div>
      </div>
      {children}
    </>
  );
}
