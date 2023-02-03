import React from "react";
function PropsPass(props){
    return(
        <>
                 <h1>{props.name}</h1>        
               {/* <button onClick={props.callMethod}>Click Me</button> */}
               <button onClick={()=> props.callMethod("Adil")}>Click Me</button>
        </>
    )
};

export default PropsPass;
