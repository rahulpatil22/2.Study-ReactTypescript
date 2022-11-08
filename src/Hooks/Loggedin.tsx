import { useState } from "react"

export const Loggedin =() =>{
    const[isLoggedIn, setisLoggedIn]=useState(false)
    const handleLogin=()=>{
        setisLoggedIn(true)
    }
    const handleLogout=()=>{
        setisLoggedIn(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>User is{ isLoggedIn ?'loggedin':'logged out'}</div>
        </div>
    )
}                                                                    