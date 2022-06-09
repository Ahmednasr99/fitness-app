
import './App.css';
import Login from './components/LogIn';
import {useState,useEffect} from 'react';
import Auth from './components/Auth';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
    

  },[]);

  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  /*we send setisauthenticated to the login to change the status so we take the decession which part is gonna render*/ 
  return (
    <>
    <div>Hello{user.name}</div>

    </>
  );
}

export default App;
