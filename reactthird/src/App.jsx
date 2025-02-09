import { useReducer } from 'react'
import './App.css'

function App() {


  const reducers = (state, actions)=>{
    switch(actions){
      case 'increment':
      return state+1
      case 'decrement':
      return state-1 ;
      default:
      return state;
    }
  }

  const changebgC = (state,actions)=>{
    switch(actions){
      case 'colorblue':
        return state ='blue';
      case 'colorgreen':
        return state ='blue'  ;
      case 'coloryellow':
        return state ='yellow' ; 
      case 'colororange' :
        return state ='orange';
      default:
        return state ='red';
  }
}

  const [count, dispatch]=useReducer(reducers,0);

  const[bgcolor, myfun] =useReducer(changebgC, "red")

  return (
    <>
      <h1>number: {count} </h1>

      <button onClick={()=>{dispatch("increment")}}>Increment</button>
      <button onClick={()=>{dispatch("decrement")}}>Decrement</button>




      <div style={{height:"100px",width:"100px", backgroundColor:bgcolor}}></div>

      <hr />

      <button onClick={()=>{myfun("colorblue")}}>blue</button>
      <button onClick={()=>{myfun("colorgreen")}}>green</button>
      <button onClick={()=>{myfun("coloryellow")}}>yellow</button>
      <button onClick={()=>{myfun("colororange")}}>orange</button>
    </>
  )
}

export default App
