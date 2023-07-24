import { create } from "zustand";

import { ProjectsSlice, createProjectSlice } from "./slices/createProjectSlice";
import { ItemSlice, createItemSlice } from "./slices/itemsSlice";
import { UserSlice, createUserSlice } from "./slices/userSlice";

type ProjectStoreState = ProjectsSlice;

export const useProjectStroe = create<ProjectStoreState>()((...a) => ({
  ...createProjectSlice(...a),
}));

type ItemStoreState = ItemSlice;

export const useItemStore = create<ItemStoreState>()((...a) => ({
  ...createItemSlice(...a),
}));

type UserStoreState = UserSlice;

export const userStore = create<UserStoreState>()((...a) => ({
  ...createUserSlice(...a),
}));
