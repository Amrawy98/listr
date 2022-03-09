const Card = ({ listData, addToList, deleteList }) => {
  return (
    <div>
      <a href={listData.url}>
        <img src={listData.image} alt={`preview for ${listData.title}}`}></img>
        <div>
          <h4>{listData.title}</h4>
          <p>{listData.description}</p>
        </div>
      </a>
      <button onClick={addToList}>add</button>
      <button onClick={deleteList}>delete</button>
    </div>
  );
};

export default Card;
