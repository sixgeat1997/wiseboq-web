import { BACKEND } from "@/constant/backend";
import { api } from ".";
import axios from "axios";
import { IList } from "@/lib/slices/createProjectSlice";

export const getOrderById = async ({ queryKey }: any) => {
  try {
    const [_key, isOrderId] = queryKey;
    const result = await api().get(`/orders/${isOrderId}`);
    return result.data;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const fetchAllProjects = async (userId: string) => {
  try {
    const res = await fetch(
      `${BACKEND.host}/project/by-userid/${userId}`
    );
    return await res.json();
  } catch (error) {
    console.log("fetchProjects", error);
  }
};

export const fetchCreateProject = async (name: string, userId: string) => {
  try {
    const res = await axios.post(
      `${BACKEND.host}/project/create`,
      {
        name,
        userId: userId,
      }
    );
    const pj = await res.data;
    return pj;
  } catch (error) {
    console.log("fetchProjects", error);
  }
};
export const fetchAddCategoryToProject = async (
  name: string,
  projectId: number
) => {
  try {
    const res = await axios.post(
      `${BACKEND.host}/project/add-category`,
      {
        name,
        projectId,
      }
    );
    const pj = await res.data;
    return pj;
  } catch (error) {
    console.log("fetchProjects", error);
  }
};

export const fetchAddListToCategory = async (data: IList) => {
  try {
    const res = await axios.post(
      `${BACKEND.host}/project/add-list`,
      {
        itemName: data.itemName,
        categoryId: +data.categoryId,
        quantity: data.quantity,
        cost: data.cost,
        unit: data.unit,
        price: data.price,
      }
    );
    const pj = await res.data;
    return pj;
  } catch (error) {
    console.log("fetchProjects", error);
  }
};

export const fetchProjectById = async (pgId: string) => {
  try {
    const res = await fetch(`${BACKEND.host}/project/${pgId}`);
    const pj = await res.json();
    return pj;
  } catch (error) {
    console.log("fetchProjects", error);
  }
};
