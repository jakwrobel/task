import axios from "axios";

export const getData = () => {
  return axios
    .get("https://dujour.squiz.cloud/developer-challenge/data")
    .then((res) => res.data);
};
