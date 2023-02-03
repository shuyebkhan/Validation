import React, {PureComponent} from "react";

class Purecomp extends PureComponent{

       constructor(){
           super();

           this.state={
               count:1
           }
       }

     render(){
                  console.log("Check-Rendering")
         return(
            <>
               <h1>Pure Component</h1>
               <h2>{this.state.count}</h2>
               <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
            </>
         )
     }
};

export default Purecomp;