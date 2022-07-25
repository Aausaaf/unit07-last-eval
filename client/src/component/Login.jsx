import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
   const navigate = useNavigate()
  return (
    <>
    <div className="signup">
        <h1>Login</h1>
       
        
        <input type="text" value={email} onChange={(event)=>{
            setemail(event.target.value)
        }} />
        <br />
        <input type="text" value={password} onChange={(event)=>{
            setpassword(event.target.value)
        }} />
        <br />
        <button onClick={()=>{
            let data = {
             
                email:email,
                password:password
            }
            //setall(data)
            console.log(data)
            axios.post("http://localhost:3001/user/login",data).then((res)=>{
                console.log(res)
                if(res.data)
                {
                    alert(`You have successfully Login go to Notes page your token ${res.data.data.token}`)
                    localStorage.setItem("token",JSON.stringify(res.data.data.token))
                      navigate("/notes")
                }
            }).catch((err)=>{
                console.log(err)
            })
        }}>Login</button>
    </div>
    </>
  )
}

export default Login