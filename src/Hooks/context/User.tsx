import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User =() =>{
    const userContext =useContext(UserContext)
    
    const handleLogin=()=>{
        if (userContext){
            userContext.setUser({
                name:"Rahul",
                email:'rahul@gmail.com'
            })
        }
     }
    const handleLogout=()=>{

      if (userContext){
            userContext.setUser(null)
        }
     }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
           
        </div>
    )
}                                                                    