// import Card from "./Card";

const ListCard = ({ listData, addToList, deleteList, getList }) => {
  return (
    <div>
      <button onClick={deleteList}>delete</button>
      <a href={listData.hostname}>
        <div>
          <h4>{listData.name}</h4>
          {listData.description ? <p>{listData.description}</p> : ""}
        </div>
      </a>
      <button onClick={addToList}>add</button>
      <button onClick={getList}>expand</button>
    </div>
  );
};

export default ListCard;
