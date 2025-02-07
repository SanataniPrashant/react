

import { useState , useEffect } from "react"




function App() {
 
 
  const [count, setCount]= useState(0)
  const [multi, setMulti]= useState(0)
  useEffect(()=>{
    setMulti(count*2);
  },[count])
 


  
  return (
    <>

      <h1>Welcome : {count}</h1>
      <h1>Welcome to the multi : {multi}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
     
    </>
  )
}

export default App
