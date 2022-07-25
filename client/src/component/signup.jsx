import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const[all,setall] = useState()
    const navigate = useNavigate()
  return (
    <>
    <div className="signup">
        <h1>Signup</h1>
        <input type="text" value={name} onChange={event=>{
            setname(event.target.value)
        }} />
        <br />
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
               user:{ name:name,
                email:email,
                password:password
            }}
            //setall(data)
            console.log(data)
            axios.post("http://localhost:3001/users",data).then((res)=>{
                console.log(res)
                if(res.data)
                {
                    alert(`You have successfully Sign up go to Login page your Id ${res.data.data._id}`)
                    localStorage.setItem("_id",JSON.stringify(res.data.data._id))
                    navigate("/login")
                }
            }).catch((err)=>{
                console.log(err)
            })
        }}>Signup</button>
    </div>
    </>
  )
}

export default Signup