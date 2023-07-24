import React from "react";
import Link from "next/link";

export default function UseList({
  children,
  name,
  categoryLength,
  listLength,
  projectId,
}: {
  children: React.ReactNode;
  name: string;
  categoryLength: number;
  listLength: number;
  projectId: string;
}) {
  return (
    <div className="px-1 py-1 text-center border-gray-100 border mt-1 border-t-0 border-l-0 border-r-0 font-thin">
      <div className="grid grid-cols-6">
        <div className=" col-span-3 text-start">{name}</div>
        <div>{categoryLength}</div>
        <div>{listLength}</div>
        <div className="text-end text-sm">
          <button className=" border border-gray-500 p-1 rounded-md">
            <Link href={`/projects/${projectId}`}>ดูรายละเอียด</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
