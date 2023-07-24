import { BACKEND } from "@/constant/backend";
import { IUser } from "@/lib/slices/userSlice";

export const fetchUser = async () => {
  try {
    const res = await fetch(`${BACKEND.host}/user/create`);
    const user = await res.json();
    console.log({ user, host: BACKEND.host });
    return user;
  } catch (error) {
    console.log("fetchProjects", error);
  }
};

export const fetchUpdateUser = async (userId: string, data: IUser) => {
  try {
    const res = await fetch(`${BACKEND.host}/user/update/${userId}`, {
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("fetchProjects", error);
  }
};
