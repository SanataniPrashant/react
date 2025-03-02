
import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [val,setVal] = useState(0);
  const [color, setColor] =useState('red');
  useEffect(()=>{
    alert("hii");
  },[color,val])

  return (
    <>
    <div style={{height:"100vh", width:"100%", backgroundColor:color}}></div>
    <button onClick={()=>setColor('blue')}>change color</button>
    <button onClick={()=>setColor('green')}>change color</button>
    <button onClick={()=>setColor('pink')}>change color</button>

    <br />
    <button onClick={()=>setVal(val+1)}>Increment</button>
    <p>Value: {val}</p>
    <button  onClick={()=>setVal(val-1)}>Decrement</button>
        <h1>Es7</h1>
        <h1>useEffect hook </h1>
        <h2>useeffect accept function and araay format me dependency </h2>
    </>
  )
}

export default App
