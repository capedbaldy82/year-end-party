import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfo",
  default: {
    isLoggedIn: false,
    id: "qweqwew",
    name: "qweqwklejkl",
    token: "",
  },
});
