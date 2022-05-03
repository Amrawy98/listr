import axios from "axios";
import useSWR from "swr";

const fetchWithParams = (url, params) =>
  axios
    .get(url, {
      params: params,
    })
    .then((res) => res.data)
    .catch((err) => err);

const useSWRWithParams = (url, params) => {
  const { data, error } = useSWR(
    [params ? url : null, params],
    fetchWithParams
  );
  return {
    data: data,
    error: error,
  };
};
export default useSWRWithParams;
