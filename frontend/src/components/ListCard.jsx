// import Card from "./Card";
import linkServices from "../services/link";

const ListCard = ({ listData, deleteList, getList, link }) => {
  const addToList = (link, list) => {
    linkServices
      .addLink({
        link,
        list,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={deleteList}>delete</button>
      <a href={listData.hostname}>
        <div>
          <h4>{listData.name}</h4>
          {listData.description ? <p>{listData.description}</p> : ""}
        </div>
      </a>
      <button
        onClick={() => {
          console.log(link, listData.id);
          addToList(link, listData.id);
        }}
      >
        add
      </button>
      <button onClick={getList}>expand</button>
    </div>
  );
};

export default ListCard;
