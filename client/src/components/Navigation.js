

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
            <button onClick={logout}>Logout</button>

         </div>

        </>
    )
}

export default Navigation;