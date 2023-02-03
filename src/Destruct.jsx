import React from "react";

function Destruct(props){
      const {name,age}=props;
    return(
       <>
           <h1>{name}</h1>
           <h1>{age}</h1>
       </>
    )
};

export default Destruct;