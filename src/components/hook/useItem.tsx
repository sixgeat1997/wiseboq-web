import { IList } from "@/lib/slices/createProjectSlice";
import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { priceFormat } from "./useCombobox";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];
export default function UseItem({ item }: { item?: IList }) {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="mt-2 border border-b-2 p-2 rounded-md border-b-yellow-400 ">
      <div className="grid grid-cols-8 text-sm text-end">
        <div className=" col-span-4 text-start">
          <p>{item?.itemName}</p>
        </div>
        <div className="flex gap-2 justify-center">
          <p>{item?.quantity}</p>
          <p>{item?.unit}</p>
        </div>
        <div>
          <p>{priceFormat(item?.price || 0)}</p>
        </div>
        <div>
          <p>{priceFormat(item?.cost || 0)}</p>
        </div>
        <div className="items-end text-right">
          <p>
            {priceFormat(
              Number(item?.quantity) * Number(item?.price) +
                Number(item?.quantity) * Number(item?.cost)
            )}
          </p>
        </div>
        {/* {item?.itemName} {item?.quantity}{" "} */}
      </div>
    </div>
  );
}
