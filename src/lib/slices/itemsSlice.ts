import { StateCreator } from "zustand";

export interface IItem {
  id: number;
  name: string;
  cost: number;
  price: number;
  quantity: number;
  unit: string;
}

export interface ItemSlice {
  items: IItem[];
  fetchItems: () => void;
}

export const createItemSlice: StateCreator<ItemSlice> = (set, get) => ({
  items: [
    {
      id: 1,
      name: "ทรายถม",
      price: 377,
      cost: 99,
      unit: "ไหฟก",
      quantity: 1,
    },
    {
      id: 2,
      name: "ดิน",
      price: 400,
      cost: 99,
      unit: "หน่วย",
      quantity: 1,
    },
    {
      id: 3,
      name: "ดินลูกรัง",
      price: 370,
      cost: 99,
      unit: "หน่วย",
      quantity: 1,
    },
    {
      id: 4,
      name: "คอนกรีตหยาบ 1:3:5 (ประเภท1)",
      price: 1610,
      cost: 100,
      unit: "หน่วย",
      quantity: 1,
    },
    {
      id: 5,
      name: "คอนกรีตหยาบ 1:3:5 (ประเภท5)",
      price: 1650,
      cost: 100,
      unit: "หน่วย",
      quantity: 1,
    },
  ],
  fetchItems: async () => {
    const res = await fetch("http://localhost:3434/items/get-all");

    set({ items: await res.json() });
  },
});
