import {useState} from 'react'
import './App.css'

function App() {
  const [name,setName] = useState("ramm")
  const [num,setNum] = useState(0)
  function ram(a){
    alert("Ram is working " + a)
  }

  function demo(){
    setName("radhe")
  }


  function increment(){
    setNum(num+1)
  }

    function decrement(){
     if(num!=0){
      setNum(num-1)
     }
    }


  return (
    <>
      <h1> welcome to this class </h1>
      <button onClick={()=>ram(45)}>click</button>
      <button onDoubleClick={()=>ram("ram")}>click</button>
      <button onMouseEnter={()=>ram("cccccccccc")}>click</button>
      <button onMouseLeave={()=>ram("ssssssssss")}>click</button>


      <h1>my name is {name}</h1>
      <button onClick={demo}>click</button>


      <button onClick={increment}>Increment</button>
      {num}
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App


