import {useSelector,useDispatch} from "react-redux"

import './App.css'
import { blueColor,greenColor,yellowColor,blackColor } from "./ColorSlice"


function App() {

  const ans = useSelector((state)=> state.myColor.color)

  const dispatch = useDispatch();

  return (
    <>
    <h1>Welcome</h1>
      <div style={{height:"100px",width:"100px", backgroundColor:ans}}></div>

      <button onClick={()=>{dispatch(blueColor())}}>blue</button>
      <button onClick={()=>{dispatch(greenColor())}}>green</button>
      <button onClick={()=>{dispatch(yellowColor())}}>yellow</button>
      <button onClick={()=>{dispatch(blackColor())}}>black</button>
    </>
  )
}

export default App
