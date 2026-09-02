import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function React(){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit=()=>{

  }
  return(
  <div>
    <h2>Login</h2>
    <input type="text" 
    value={username} 
    onChange={(e)=> setUsername(e.target.value)}
    placeholder="username"/>
    <input type="text" 
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    placeholder="username"/>
    <button onClick={handleSubmit}>Submit</button>
  </div>
  )
}

export default Login