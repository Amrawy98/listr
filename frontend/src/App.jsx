import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ListCard from "./components/ListCard";
import ListForm from "./components/ListForm";
import { validateURL } from "./utils/urlUtils";
import { useEffect, useState } from "react";
const App = () => {
  // const listData = {
  //   url: "https://www.google.com/",
  //   image: "https://i.ytimg.com/vi/U-C0I-Ks14M/maxresdefault.jpg",
  //   title: "google",
  //   description: "mammamiaa marcello this is not how hold a query",
  // };

  const [lists, setLists] = useState([]);
  const [showListForm, setShowListForm] = useState(false);
  const [query, setQuery] = useState("");
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setValid(validateURL(query));
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
