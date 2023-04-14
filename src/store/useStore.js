import { create } from "zustand";

const $LOCAL_LOGGEDIN_KEY = "logged_in";

const getInitialLoggedIn = () => {
  const loggedIn = localStorage.getItem($LOCAL_LOGGEDIN_KEY) || false;
  return loggedIn;
};

export const useLoggedInStore = create((set) => ({
  loggedIn: getInitialLoggedIn(),
  login: () =>
    set(() => {
      localStorage.setItem($LOCAL_LOGGEDIN_KEY, true);
      return {
        loggedIn: true,
      };
    }),
  logout: () =>
    set(() => {
      localStorage.clear();
      return {
        loggedIn: false,
      };
    }),

}));

export const useAuthStore = create((set) => ({

 authData: localStorage.getItem("authData")
   ? JSON.parse(localStorage.getItem("authData"))
   : null,

 setAuthData: (authData) => {
   localStorage.setItem("authData", JSON.stringify(authData));
   set({ authData });
 },
}));



export const useAnimalStore = create((set) => ({
  animalId: null ,
  setAnimalId: (id) => {
    set({ animalId: id });
  },
}));

export const useAssociationStore = create((set) => ({
  associationId: null ,
  setAssociationId: (id) => {
    set({ associationId: id });
  }
}));

