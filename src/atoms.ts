import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userInfoState = atom({
  key: "userInfo",
  default: {
    isLoggedIn: false,
    id: "",
    name: "",
    token: "",
  },
  effects_UNSTABLE: [persistAtom],
});
