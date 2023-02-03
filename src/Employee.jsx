import React from "react";



export default class Employee extends React.Component{
       constructor(props){
          super(props);
          this.state={
              lname:this.props.lname
              
          }
       }

          changeBtn(){
              this.setState({
                  lname:"Ali."
              })
          }
        

        render(){
             return(
                <>
                    <h1>Name:{this.state.lname}</h1>
                    <button onClick={()=>this.changeBtn()}>Click Me</button>
                </>
             )
        }
};