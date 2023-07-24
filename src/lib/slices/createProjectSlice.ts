import {
  fetchCreateProject,
  fetchAllProjects,
  fetchAddCategoryToProject,
  fetchAddListToCategory,
  fetchProjectById,
} from "@/api/apiProject";
import { StateCreator } from "zustand";

export interface IProject {
  id: number;
  name: string;
  userId: string;
  categories: ICategories[];
}

export interface ICategories {
  id?: number;
  projectId: string;
  name: string;
  lists: IList[];
}

export interface IList {
  id?: string;
  categoryId: string;
  itemName: string;
  cost: number;
  quantity: number;
  unit: string;
  price: number;
}

export interface ProjectsSlice {
  projects: IProject[];
  project: IProject[];
  fetchProjects: (userId: string) => void;
  fetchProjectById: (pgId: string) => void;
  updateQuantity: (pgId: string, cateId: string, itemId: string) => void;
  createProject: (name: string, userId: string) => void;
  addCategoryToProject: (name: string, projectId: number) => void;
  addListToCategory: (data: IList) => void;
}

export const createProjectSlice: StateCreator<ProjectsSlice> = (set, get) => ({
  projects: [],
  project: [],
  fetchProjects: async (userId: string) => {
    const res = await fetchAllProjects(userId);
    console.log({ res });

    set({ projects: res });
  },
  fetchProjectById: async (pgId: string) => {
    const res = await fetchProjectById(pgId);
    console.log(res);

    set({ project: res });
  },
  updateQuantity: (pgId: string, cateId: string, itemId: string) => {},
  createProject: async (name: string, userId: string) => {
    const pj = await fetchCreateProject(name, userId);
    const allProjects = get()?.projects || [];
    console.log({ allProjects });

    set({ projects: [...allProjects, pj] });
    return pj;
  },
  addCategoryToProject: async (name: string, projectId: number) => {
    const pj = await fetchAddCategoryToProject(name, projectId);

    if (pj) {
      const project = get().project[0];
      project.categories = pj[0].categories;
      set({ project: [project] });
    }
  },
  addListToCategory: async (data: IList) => {
    const pj = await fetchAddListToCategory(data);
    if (pj) {
      const project = get().project[0];

      project.categories = project.categories.map((c) => {
        if (c.id === +data.categoryId) {
          const indexList = c.lists.findIndex(
            (l) => l.itemName == data.itemName
          );

          if (indexList > -1) {
            c.lists.splice(indexList, 1, {
              ...data,
              quantity:
                Number(data.quantity) + Number(c.lists[indexList].quantity),
            });
          } else {
            c.lists.push(data);
          }
        }
        return c;
      });

      set({ project: [project] });
    }
  },
});
