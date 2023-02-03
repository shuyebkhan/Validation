import { memo } from "react";

function Callbackchild({todos,addTodo}){

       console.log("Child Render")
     return(
        <>
            <h1>My Todos</h1>
            {
                todos.map((value,index)=>{
                    return <p key={index}>{value + index}</p>
                })
            }

            <button onClick={addTodo}>Add Todo</button>
        </>
     )
};

export default memo(Callbackchild);