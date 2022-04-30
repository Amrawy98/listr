import normalizeUrl from "normalize-url";

import useSWRWithParams from "../swr/useSWRWithParams";

const URL = process.env.REACT_APP_SERVER_URL + "list/";

const useLists = (root) => {
  console.log(URL);
  const { data, error } = useSWRWithParams(
    root.trim().length > 0 ? URL : null,
    {
      root: root.trim().length > 0 ? normalizeUrl(root) : null,
    }
  );
  return {
    lists: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useLists;
