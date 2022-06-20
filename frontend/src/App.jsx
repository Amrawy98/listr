import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ListCard from "./components/ListCard";
import ListForm from "./components/ListForm";
import { normalizeURL } from "./utils/urlUtils";
import { useEffect, useState } from "react";
const App = () => {
  const [lists, setLists] = useState([]);
  const [showListForm, setShowListForm] = useState(false);
  const [query, setQuery] = useState("");
  const [valid, setValid] = useState(null);
  useEffect(() => {
    setValid(normalizeURL(query));
  }, [query]);
  return (
    <div className="App">
      <NavBar />

      <SearchBar
        setLists={setLists}
        query={query}
        setQuery={setQuery}
        showListForm={showListForm}
      />

      {
        //TODO this isn't working
        valid && (
          <button
            onClick={() => {
              setShowListForm(!showListForm);
            }}
          >
            add list
          </button>
        )
      }
      {showListForm && (
        <ListForm
          setQuery={setQuery}
          query={query}
          setLists={setLists}
          lists={lists}
        />
      )}
      <div>
        {lists?.length > 0
          ? lists.map((l) => (
              <ListCard
                key={l.id}
                link={valid}
                listData={l}
                deleteList={() => console.log("hello")}
                addToList={() => console.log("hello")}
                getList={() => console.log("expand")}
              ></ListCard>
            ))
          : "no lists found please add a list for this site"}
      </div>
    </div>
  );
};

export default App;
