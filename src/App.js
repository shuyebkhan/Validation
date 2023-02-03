import logo from './logo.svg';
import './App.css';
import Props from "./props";
import State from "./state";
import Usestate from './usestate';
import Employee from './Employee';
import Destruct from './Destruct';
import PropsPass from './ProsPass';
import USarray from './USarray';
import Palidrom from './Palidrom';
import Usememo from './Usememo';
import Callbackchild from './Callbackchild';
import Usecall from './Usecall';
import Purecomp from './Purecomp';
import Validation from './Validation';

function App() {

  return (
    <>
    <div className="App">
        {/* <Props name="shujaat ali" age={25} area={location}/> */}
        {/* <State/> */}
        {/* <Usestate/> */}
        {/* <Employee lname="khan."/> */}
        {/* <Destruct name="Arvind" age={35}/> */}
         
          {/* <PropsPass callMethod={ParentMethod} name="Rahul"/> */}
            {/* <USarray/> */}

            {/* <Palidrom/> */}

            {/* <Usememo/> */}
            
          {/* <Usecall/> */}

          {/* <Purecomp/> */}
          <Validation/>
          
    </div>
    </>
  );
}
 
export default App;
