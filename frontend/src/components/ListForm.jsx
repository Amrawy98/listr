import { useState } from "react";
import listServices from "../services/list";
import { getNormalizedHostname } from "../utils/urlUtils";
const ListForm = ({ setQuery, query, setLists, lists }) => {
  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const addList = (e) => {
    e.preventDefault();
    const hostname = getNormalizedHostname(query);
    console.log("addList", hostname);
    const list = {
      name,
      hostname,
      description,
    };
    listServices.addList(list).then((res) => {
      setLists([...lists, res]);
      console.log("addList", lists);
    });
  };

  const handleNameChange = ({ target }) => {
    const value = target.value;
    setName(value);
  };

  const handleDescriptionChange = ({ target }) => {
    setDescription(target.value);
  };

  return (
    <form>
      <div>
        name: <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        description:{" "}
        <textarea value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <button type="submit" onClick={addList}>
          add
        </button>
      </div>
    </form>
  );
};

export default ListForm;
