import React from "react";
import { useState } from "react";

function Usestate(){
             const obj={
                name:"shuyeb",
                location:"noida",
                 age:21
             };

             const[person,setPerson]=useState(obj);
           
               function changeBtn(){
                     setPerson(previousState => {
                          return{
                             ...previousState,
                                name:"Vinod"
                          }
                     })


                     // function changeBtn(){
                     //    setPerson({
                     //         name:"Rahul",
                     //         age:30,
                     //         location:"Delhi"
                     //    });
               }
     return(

        <>
             <h1>{person.name}</h1>
             <h1>{person.location}</h1>
             <h1>{person.age}</h1>
             <button onClick={changeBtn}>Change</button>
        </>
     )
};

export default Usestate;