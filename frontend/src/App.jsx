import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { useState } from "react";
const App = () => {
  // const listData = {
  //   url: "https://www.google.com/",
  //   image: "https://i.ytimg.com/vi/U-C0I-Ks14M/maxresdefault.jpg",
  //   title: "google",
  //   description: "mammamiaa marcello this is not how hold a query",
  // };
  const [lists, setLists] = useState([{
    id : "3aaaaaaaaaaaaaaaaaaaaaaa",
    url: "https://www.google.com/",
    image: "https://i.ytimg.com/vi/U-C0I-Ks14M/maxresdefault.jpg",
    title: "google",
    description: "mammamiaa marcello this is not how hold a query",
  }])
  return (
    <div className="App">
      <NavBar></NavBar>
      <SearchBar setLists={setLists}></SearchBar>
      <div>{
        lists?.length > 0?lists.map((l)=><Card key = {l.id}
        listData={l}
        deleteList={() => console.log("hello")}
        addToList={() => console.log("hello")}
      ></Card>): "no lists found please add a list for this site"
        
      }</div>
    </div>
  );
};

export default App;
