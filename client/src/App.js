
import './App.css';
import Login from './components/LogIn';
import {useState,useEffect} from 'react';
import Navigation from './components/Navigation';
import Detail from './components/detail';
import AddChampion from './components/AddChampion';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((r) => {
          setIsAuthenticated(true);
          setUser(r);
        });
      }
    });
    

  },[]);

  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  /*we send setisauthenticated to the login to change the status so we take the decession which part is gonna render*/ 
  return (
    <>
    <Detail user={user}/>
    <AddChampion/>
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
    </>
  );
}

export default App;
