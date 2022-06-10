
import './App.css';
import Login from './components/LogIn';
import {useState,useEffect} from 'react';
import Navigation from './components/Navigation';

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
    <div>Hello{user.name}</div>
    <div>meal 1{user.diets.map(r=><div>{r.meal_1}</div>)}</div>
    <div>meal 2{user.diets.map(r=><div>{r.meal_2}</div>)}</div>
    <div>meal 3{user.diets.map(r=><div>{r.meal_3}</div>)}</div>
    <div>meal 4{user.diets.map(r=><div>{r.meal_4}</div>)}</div>
    <div>meal 5{user.diets.map(r=><div>{r.meal_5}</div>)}</div>
    <div>meal 6{user.diets.map(r=><div>{r.meal_6}</div>)}</div>
    <div>Monday workouts{user.workouts.map(r=><div>{r.monday}</div>)}</div>
    <div>Tuesday workouts{user.workouts.map(r=><div>{r.tuesday}</div>)}</div>
    <div>Wednesday workouts{user.workouts.map(r=><div>{r.wednesday}</div>)}</div>
    <div>Thursday workouts{user.workouts.map(r=><div>{r.thursday}</div>)}</div>
    <div>Friday workouts{user.workouts.map(r=><div>{r.friday}</div>)}</div>
    <div>Saturday workouts{user.workouts.map(r=><div>{r.saturday}</div>)}</div>
    <div>Sunday workouts{user.workouts.map(r=><div>{r.sunday}</div>)}</div>
    
    <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

    </>
  );
}

export default App;
