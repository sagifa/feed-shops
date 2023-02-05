import axios from "axios";
import { urlApi } from "../utils/consts";
const api = {
  fetchFeeds: async () => {
    return await axios
      .get(urlApi)
      .then((res) => res)
      .catch((err) => err);
  },
};
export default api;
