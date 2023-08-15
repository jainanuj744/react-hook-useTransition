import { useState, useTransition } from "react";

export default function List() {
  let [input, setInput] = useState("");
  let [list, setList] = useState([]);

  let [isPending,startTransition] = useTransition("");

  const size = 10000;


  
  let handleChange = (e) => {
      setInput(e.target.value);
      startTransition(()=>{
          let newList = [];
          for (let i = 0; i < size; i++) {
            newList.push(e.target.value);
          }
          setList(newList);
      })
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
        {isPending?<div>...Loading</div> : list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
