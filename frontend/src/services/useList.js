import useSWRWithParams from "../swr/useSWRWithParams";
import { normalizeURL } from "../utils/urlUtils";
const URL = process.env.REACT_APP_SERVER_URL + "list/";

const useLists = (root) => {
  const url = normalizeURL(root);
  const { data, error } = useSWRWithParams(
    URL,
    url
      ? {
          root: url,
        }
      : null
  );
  return {
    lists: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useLists;
