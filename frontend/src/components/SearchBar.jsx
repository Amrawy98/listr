import { useEffect } from "react";
import useLists from "../services/useList";

const SearchBar = ({ setLists, query, setQuery, showListForm }) => {
  const { lists, isLoading, isError } = useLists(query);

  const handleChangeLink = (e) => {
    if (!showListForm) setQuery(e.target.value);
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
