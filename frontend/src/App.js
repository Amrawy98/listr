import NavBar from "./components/NavBar";
import LinksForm from "./components/LinksForm";
import Card from "./components/Card";
const App = () => {
  const listData = {
    url: "https://www.google.com/",
    image: "https://i.ytimg.com/vi/U-C0I-Ks14M/maxresdefault.jpg",
    title: "google",
    description: "mammamiaa marcello this is not how hold a query",
  };
  return (
    <div className="App">
      <NavBar></NavBar>
      <LinksForm
        inputLink={"google.com"}
        handleChangeLink={() => {}}
      ></LinksForm>
      <Card
        listData={listData}
        deleteList={() => console.log("hello")}
        addToList={() => console.log("hello")}
      ></Card>
    </div>
  );
};

export default App;
