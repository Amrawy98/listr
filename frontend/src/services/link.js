import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL || "http://localhost:3001/";

const getMetaData = (link) => {
  axios.get(URL + "api/link/", {
    params: {
      link: link,
    },
  });
};

const linkServices = {
  getMetaData,
};

export default linkServices;
