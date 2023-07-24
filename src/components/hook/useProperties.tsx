import { IList } from "@/lib/slices/createProjectSlice";
import React from "react";

export default function Generate({ list }: { list: IList | undefined }) {
  return <div>{JSON.stringify(list)}</div>;
}
