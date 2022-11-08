import { useState } from "react"

type AuthUser={
    name:string
    email:string
}

export const User =() =>{
    //const[user, setuser]=useState<AuthUser | null>(null)
    const[user, setuser]=useState<AuthUser>({}as AuthUser) //by type assetion
    const handleLogin=()=>{
     
        setuser({
            name:'Rahul',
            email:'abc@gmail.com'
        })
        
    }
    // //const handleLogout=()=>{
    //   //  setuser(null)
    // }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
            {/* <button onClick={handleLogout}>logout</button>
            <div>User name is{user?.name}</div>
            <div>User email is{user?.email}</div> */}
            <div>user name is{user.name}</div>
            <div>user email is{user.email}</div>
        </div>
    )
}                                                                    