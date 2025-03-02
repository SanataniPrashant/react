import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const handle = (e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
  return (
    
    <>
    Enter your name:
    <input type="text" onChange={handle} />
    <p>your name is {name}</p>
    </>
  )
}

export default Form

// spread operator object as bracket notation
