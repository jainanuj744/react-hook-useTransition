import { useState } from "react";

export default function List() {
  let [input, setInput] = useState("");
  let [list, setList] = useState([]);

  const size = 10000;

  let handleChange = (e) => {
    setInput(e.target.value);
    let newList = [];
    for (let i = 0; i < size; i++) {
      newList.push(e.target.value);
    }
    setList(newList);
  };

  return (
    <>
      <div>List Component</div>
      <input
        type="text"
        placeholder="Write here"
        onChange={handleChange}
        value={input}
      ></input>
      {/* <div>{input}</div> */}
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
