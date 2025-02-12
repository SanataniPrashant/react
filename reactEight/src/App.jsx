import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { colorChange } from './colorSlice'
import './App.css'
// import Child from './Child1'

function App() {
   const ans = useSelector((state)=>state.mycolor.color)
  const [val , setVal]= useState("")
  cost dispatch = useDispatch();
  return (
    <>

    enter color : <input type="text"/>
    <button onclick ={()=>{()=>{}}} >click</button>

    <div style={{backgroundColor:{color}, height:"100px",width:"100px"}}> </div>
      {/* <Child name="ram" age={45} std="9th" /> */}
    </>
  )
}

export default App
