import axios from "axios";

export const BASE_URL = "https://www.year-end-party.site";

export const Api = {
  user: {
    signup: (kakao_id: number, name: string) =>
      axios.post(BASE_URL + "/api/user/signup", { kakao_id, name }),
    login: (kakao_id: number, name: string) =>
      axios.post(BASE_URL + "/api/user/login", { kakao_id, name }),
    me: axios.get(BASE_URL + "/"),
  },
};
