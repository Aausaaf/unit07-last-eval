import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Notes = () => {
const [id,setid] = useState("")
const [datas,setdata] = useState([])
 const fetchdata = () => {
    setid(JSON.parse(localStorage.getItem("_id")))
    console.log(id)
    let data = toString(id)
    axios.get(`http://localhost:3001/posts/${id}`).then((res)=>{
        console.log(res.data.data)
        setdata(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })
 }
useEffect(()=>{
   fetchdata()
},[])

  return (
    <div className='notes'>
        {
            datas.map((ele)=>{
                return <>
                 <div key={ele._id} className="notescon">
                 <p>Title: {ele.title}</p>
                 <p> Notes : {ele.note}</p>
                 <p>Lable : {ele.label}</p>
                 <button onClick={()=>{
                    axios.delete(`http://localhost:3001/posts/${ele._id}`).then(res=>{
                        console.log(res)
                        if(res)
                        {
                            window.location.reload()
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                 }}>Delete</button>
                 </div>
                </>
            })
        }
    </div>
  )
}

export default Notes