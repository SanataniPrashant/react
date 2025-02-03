
import { useState } from "react"




function App() {
 
 
  const [name, setName]= useState("")
  const [city, setCity]= useState("")
  
  const handleSubmit=()=>{
    const input = {name:name, city:city}
    console.log(input)
  }
  return (
    <>
      <h1>Welcome</h1>
      Enter the Name: <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <br />
      Enter the city: <input type="text"  name="city" value={city}  onChange={(e)=>{setCity(e.target.value)} }/>
    <br />

    <button onClick={handleSubmit}> click</button>
    </>
  )
}

export default App
