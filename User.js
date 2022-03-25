import React, { useState } from 'react'
import './App.css'

const User = ({user,index,id}) => {

    let[hide,setHide]=useState(false)
    let[liked,setLiked]=useState(false)
    console.log(user.username)
  return (
    <div id="card"  style={{display:hide?"none":null}} >
        
<img  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`} width={100} height={100}  />
<h3 key={id} >{user.username}</h3>
<h3 key={id} >{user.email}</h3>
<h3 key={id} >{user.phone}</h3>
<h3 key={id} >{user.company.name}</h3>

<button style={{backgroundColor:liked? "blue":null  }} onClick={()=>setLiked(!liked)} >Like</button>
<button id="delete"  onClick={()=>setHide(true)} >Delete</button>


    </div>
  )
}

export default User