import { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const reset = () => {
    setInput("");
  };

  const handleDelete = (itemIndex) => {
    let updatedList = list.filter((item, index) => index !== itemIndex);
    setList(updatedList);
  };

  const addTask = () => {
    let newList = [...list, input];
    setList(newList);
    reset();
  };

  const change = (event) => {
    let value = event.target.value;
    setInput(value);
  };

  return (
    <div className="main">
      <input onChange={change} value={input} />
      <input onClick={addTask} value="Add" type="button" className="add" />
      <ul>
        {list.map((item, index) => (
          <li>
            {item}
            <input
              onClick={() => handleDelete(index)}
              value="delete"
              type="button"
              className="delete"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
