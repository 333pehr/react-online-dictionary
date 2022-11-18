import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  return (
    <form
      className="d-flex"
      onSubmit={() => {
        navigate("/definition/" + word);
      }}
    >
      <input
        type="text"
        className="dictionaryInput"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button className="searchBtn">Search</button>
    </form>
  );
}
