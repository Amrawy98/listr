import { useEffect, useState } from "react";
import useLists from "../services/useList";

const SearchBar = ({ setLists }) => {
  const [query, setQuery] = useState("");
  const { lists, isLoading, isError } = useLists(query);

  const handleChangeLink = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    if (isError) setLists(null);
    else isLoading ? setLists([]) : setLists(lists);
  }, [lists, isLoading, isError, setLists]);

  return (
    <input value={query} onChange={handleChangeLink} type="search"></input>
  );
};

export default SearchBar;
