import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
  const [input, setInput] = useState({name:"",username:"", password:""});
  const navigate = useNavigate();
    const handle = (e)=>{
      // const {name,value}=e.target;
      // setInput({...input,[name]:value});
      // console.log(input);
      const name = e.target.name;
      const value = e.target.value;
      setInput({...input,[name]:value});

    }

    const finalSubmit = (e)=>{
      e.preventDefault();
      console.log(input);
      localStorage.setItem("userdata",JSON.stringify(input));
      navigate("/login");
      
    }
  return (
    
    <>
    <form action="" onSubmit={finalSubmit}>
    Enter your name:
    <input type="text" name="name" onChange={handle} />
    Enter username:
    <input type="text" name="username" onChange={handle} />
    Enter Password:
    <input type="password"  name='password' onChange={handle} />

    <input type="submit" />

    </form>
   
   
    </>
  )
}

export default Form

// spread operator object as bracket notation
// localstorage: protocol domain port 
// key value pair string formate