import "./style.scss";

function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }
  function handleKeyDown(e) {
    const { keyCode } = e;
    props.handleOnKeyDown(keyCode);
  }
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={props.value}
      />
    </div>
  );
}

export default Search;
