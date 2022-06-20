import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001/";

const getMetaData = (link) => {
  axios.get(URL + "link/", {
    params: {
      link: link,
    },
  });
};
const addLink = (link) => {
  return axios.post(URL + "link/", link).then((res) => res.data);
};
const linkServices = {
  getMetaData,
  addLink,
};

export default linkServices;
