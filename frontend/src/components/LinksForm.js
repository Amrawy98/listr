const LinksForm = ({ inputLink, handleChangeLink }) => {
  return (
    <form>
      <input value={inputLink} onChange={handleChangeLink}></input>
    </form>
  );
};

export default LinksForm;
