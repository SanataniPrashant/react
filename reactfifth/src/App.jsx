import { useState,useMemo, useCallback  } from 'react'
import Callback from './Callback'


import './App.css'

function App() {

  // const [add, setAdd] = useState(0);
  // const [sub,setSub]=useState(100);
  
  //  const myMulti =useMemo(mmm,[add]);
  //  function mmm(){
  //   console.log("d")
  //     return add*2
  //  }



  
  // const [num, setNum] = useState(0);
  // const [city,setCity]=useState("");
  
  // const my = useMemo(functionn,[num] )
  
  // function functionn(){
  //     for(var i =0; i<100000000;i++){
  
  //     }
  //     return num *2;
  // }


  const [count,setCount]= useState(0);
  const [task,setTask] = useState([]);
  
    const Myadd=()=>{
      setTask(values=>([...values, "new task"]))
    }
  
    const MyTaskAdd = useCallback(Myadd,[task])

  return (
    <>

    <Callback task= {task} addtask={MyTaskAdd} />

    <button onClick={()=>{setCount(count+1)}}>click here!!!!!!!!!</button>
      Count : {count}



       {/* <h1>multiplication :{myMulti} </h1>
            <h1>Add : {add} </h1>
            <button onClick={()=>{
              setAdd(add+1)
            }}>click</button>
            <h1>sub : {sub} </h1>
            <button onClick={()=>{
              setSub(sub-1)
            }}>click</button> */}


            {/* Enter the no. <input type="number" value={num}   onChange={(e)=>{setNum(e.target.value)}}/>
            Enter the city <input type="text" value={city}   onChange={(e)=>{setCity(e.target.value)}}/>
            <button onClick={functionn}>click</button>
            <h1>fff:{functionn()}</h1> */}
    </>
  )
}

export default App
