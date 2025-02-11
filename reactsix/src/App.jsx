// import Child from './Child'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './COunterSlice'




function App() {

  const myval = useSelector((state)=>state.myCount.count);
  const dispatch = useDispatch();


  // let a = "ramayan"

  // let age = window.prompt("enter age");

  // let obj = {
  //   fname: "ram",
  //   lname: "kumar",
  //   age: 25,
  //   city: "delhi"
  // }
  // let myfun = (a)=>{
  //   alert("working");
  //   return a+a;
  // }
  return (
    <>


   <h1>welcome</h1>

   <button onClick={()=>{dispatch(increment())}}>Increment</button>

   val : {myval}

   <button onClick={()=>{dispatch(decrement())}}>Decrement</button>







    <hr />



    {/* <h1>My first name is {obj.fname} and last name is {obj.lname} and age is{obj.age} and city is {obj.city}</h1>

    <h1>the holy book is : {a}</h1> */}

    {/* <h1>the age is : {age}</h1> */}

    {/* {myfun(45)}

    <Child  name="prashant" />   */}



    </>
  )
}

export default App
