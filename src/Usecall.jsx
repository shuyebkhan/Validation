import { useCallback } from "react";
import { useState } from "react";
import Callbackchild from "./Callbackchild";


function Usecall() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  function increment() {
    setCount(count + 1);
  }

  const addTodo= useCallback(()=>{
          setTodos((pre)=> [...pre, `Enter New`])
  },[todos]);


  return (
    <>
      <Callbackchild todos={todos} addTodo={addTodo} />
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Usecall;
