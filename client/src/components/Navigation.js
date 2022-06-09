
function Navigation({ setIsAuthenticated, setUser, user}) {
    console.log(user)
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