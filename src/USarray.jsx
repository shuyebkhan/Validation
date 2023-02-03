import React from "react";
import { useState } from "react";

function USarray(){
        let num=[11,22,33,44];
        const [number,setNumber] =useState(num);

            // function changeList(){
            //        setNumber([111,222,333,444])
            // }
           
            function changeList(){
                setNumber(perviousState=>{
                       
                    return[ ...perviousState,
                              1000
                      ]
                    })
         } 

    return(
        <>
                <h1>USE ARRAY IN USESTATE</h1>
                
                    <ul>
                            {number.map((n,i) => <li key={i}>{n}</li>)}
                    </ul>
                  <button onClick={changeList}>Click Me</button>
        </>
    )
};

export default USarray;