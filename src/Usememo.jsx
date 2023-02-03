import { useMemo } from "react";
import { useState } from "react";

function Usememo(){
        const [count,setCount] =useState(0);
         const [item,setItem]=useState(10);

         function changeCount(){
               setCount(count + 1)
         };
 
            function changeItem(){
                 setItem(item * 5)
            };

            // function multicount(){
            //     console.log("function Update")
            //      return count*3
            // };


            const multiCountMemo= useMemo(function multicount(){
                console.log("update function");
                 return count*4
            },[count])

     return(
        <>
             <h1>Count: {count}</h1>
             <button onClick={changeCount}>Count</button>
             <h1>Item: {item}</h1>
             <h1>{multiCountMemo}</h1>
             <button onClick={changeItem}>Item</button>
        </>
     )
};

export default Usememo;