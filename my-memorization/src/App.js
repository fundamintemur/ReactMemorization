
import './App.css';
import {useState,useMemo} from 'react';
import Hedaer from "./components/Hedaer";

function App() {
  const[number,setNumber]=useState(0)
  const data=useMemo(()=>{
   return {name:'Funda'};
  },[]);
  return (
    <div className="App">
      <Hedaer  data={data}/>
      <hr/>
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)}>Click</button>
    </div>
  );
}

export default App;
