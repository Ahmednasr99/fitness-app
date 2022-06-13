import React from "react";
import { Link } from "react-router-dom";

function Navigation({ setIsAuthenticated, setUser, user}) {
    const logout = () => {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }
    return (
        <> 
   
         
         <div>
         <nav>
                <Link to="/">Home</Link>

                <Link to="/diets">Diet</Link>

                <Link to="/workouts">Workout </Link>
                
                <Link to="#">Wall Of Fame</Link>

                <Link to="#">Calculator</Link>
                

                <Link to="#">Calories List</Link>
            
                <button onClick={logout}>Logout</button>
            </nav>

         </div>

        </>
    )
}

export default Navigation;