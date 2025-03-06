
import React, { useEffect, useState } from 'react'


function Login() {
    const [input, setInput] = useState({name:"",username:"", password:""});
    const [signdata, setSigndata] = useState("");
      const handle = (e)=>{
        
        const name = e.target.name;
        const value = e.target.value;
        setInput({...input,[name]:value});
  
      }
      useEffect(()=>{
        let signdataa = JSON.parse(localStorage.getItem('userdata'));
        setSigndata(signdataa);
      },[])
  
      const finalSubmit = (e)=>{
        e.preventDefault();
        if(signdata.username != input.username)
        {
          alert('user not found');
        }
        else if(signdata.password != input.password)
        {
          alert('wrong password');
        }
        else
        {
          alert('user sucessfuly loged-in ')
        }
        
        
      }
  return (
    <>
    <form action="" onSubmit={finalSubmit}>
    Enter username:
    <input type="text" name="username" onChange={handle} />
    Enter Password:
    <input type="password"  name='password' onChange={handle} />

    <input type="submit" />

    </form>
    </>
  )
}

export default Login
