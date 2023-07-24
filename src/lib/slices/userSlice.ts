import { fetchUpdateUser, fetchUser } from "@/api/apiUser";
import { StateCreator } from "zustand";

export interface IUser {
  id?: number;
  userId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  lineId?: string;
  role?: string;
}

export interface UserSlice {
  user: IUser;
  fetchUser: () => IUser;
  fetchUpdateUser: (userId: string, data: IUser) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  user: {},
  fetchUser: async () => {
    const user = await fetchUser();
    set({ user: user });
    return user;
  },
  fetchUpdateUser: async (userId: string, data: IUser) => {
    await fetchUpdateUser(userId, data);

    // set({ user: await res.json() });
  },
});
