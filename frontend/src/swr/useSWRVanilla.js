import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useSWRVanilla = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return {
    lists: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useSWRVanilla;
