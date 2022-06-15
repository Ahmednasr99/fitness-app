import React from "react";
import { Link } from "react-router-dom";
import {useHistory } from "react-router-dom";

function Navigation({ setIsAuthenticated, setUser, user}) {
    const history = useHistory()
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
        .then(()=>{
            history.push(`/`)
        })
    }
    return (
        <> 
   
         
         <div>
         <nav>
                <Link to="/">Home</Link>

                <Link to="/diets">Diet</Link>

                <Link to="/workouts">Workout </Link>
                
                <Link to="/champions">Wall Of Fame</Link>

                <Link to="#">Calculator</Link>
                

                <Link to="#">Calories List</Link>
            
                <button onClick={logout}>Logout</button>
            </nav>

         </div>

        </>
    )
}

export default Navigation;