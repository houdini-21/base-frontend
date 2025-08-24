import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  id: string;
  name: string;
  email: string;
  age: number;
  role: string;
  isLoggedIn: boolean;
}

type UserState = {
  user: UserStore;
  setUser: (user: UserStore) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        id: "",
        name: "",
        email: "",
        age: 0,
        role: "user",
        isLoggedIn: false,
      },
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: {
        id: "",
        name: "",
        email: "",
        age: 0,
        role: "user",
        isLoggedIn: false,
      }}),
    }),
    {
      name: "user-storage", // name of the storage (must be unique)
    }
  )
);
