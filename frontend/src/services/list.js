import axios from "axios";

const baseURL = "http://localhost:3001/api/list";

const addList = (list) => {
  // TODO: add list axios call
  return axios.post(baseURL, list).then((res) => res.data);
};

const listServices = {
  addList,
};

export default listServices;
