
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeColor } from './colorSlice'
import { useState } from 'react'

function App() {

    const [val, setColor] = useState('');
    const dispatch = useDispatch();
    const colorState = useSelector((state) => state.mycolor.color);
  return (
    <>
      enter color : <input type="text" value={val} onChange={(e)=>{setColor(e.target.value)}} />

      <button onClick={()=>dispatch(changeColor(val))}>click</button>

      <div style={{width:"100px", height:"100px", backgroundColor:colorState}}></div>
    </>
  )
}

export default App
