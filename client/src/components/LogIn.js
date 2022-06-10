import React, { useState } from 'react'
import Auth from './Auth'

const Login = ({setUser,setIsAuthenticated})=>{

    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    const [error,setError]= useState([])
    
    const onSubmit=(e)=>{
        e.preventDefault()
        const user = {
            username: username,
            password
        }

        const request =async ()=>{
            let req = await fetch('/login',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(user)

            })
            if(req.ok){
                let res = await req.json()
                console.log(res)
                setUser(res)
                setIsAuthenticated(true)/*this is to change the state to  true to render the rest of components after user login*/ 
            }else{
                let res = await req.json()
                console.log(res)
                setError(res)
            }
        }
        request()
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
            <label>Username
             <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>

            <label>Password
             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Login" />
            </form>
            {error?<div>{error}</div>:null}
            
            <Auth setUser={setUser} setIsAuthenticated={setUser}/>
            {error?<div>{error}</div>:null}
        </div>
    )
}

export default Login