import './App.css';
import React, {useState} from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Top from './components/Top';
import SideBar from './components/SideBar';
import { evaluate } from 'mathjs';


function App() {
  const [val, setVal] = useState("");
  const [sideBarState, setSideBarState] = useState(0);
  
  const toggleSideBarState = () => {
    setSideBarState( (curSideBarState) => 1-curSideBarState );
  }

  function keyPress(n){
    if(n === '=') evalVal();
    else if(n === 'C'){
      setVal("");
    }
    else if(n === "DEL"){
      setVal(curVal => curVal.substring(0, curVal.length-1))
    }
    else setVal( curVal => curVal + n);
  }

  const evalVal = () => {
    setVal(evaluate(val));
  }

  return (
    <div className="calWindow">
      <Top toggleSideBarState={toggleSideBarState}/>
      <SideBar sideBarState={sideBarState}/>
      <Display val={val} sideBarState={sideBarState}/>
      <Buttons onClick={keyPress} />
    </div>
  );
}

export default App;
