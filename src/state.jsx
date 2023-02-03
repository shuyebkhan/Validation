import React from "react";

export default class State extends React.Component{

       constructor(){
          super();

           this.state={
                name:"shuyeb",
                age:25,
                count:0
           }
       }

       updateState(){
          this.setState({
               name:"shujaat ali",
               count:this.state.count+1
          })
       }

       render(){
         return(
              <>
                 <h1>Name: {this.state.name}</h1>
                 <h1>AGE : {this.state.count}</h1>
                 <button onClick={()=>{this.updateState()}}>Click me</button>
              </>
         )
       }
}