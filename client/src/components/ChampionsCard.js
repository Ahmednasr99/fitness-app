import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import DltButton from "./DltButton";

const ChampionCard = ()=> { 
  const [champions,setChampions]=useState([])
 // eslint-disable-next-line react-hooks/exhaustive-deps
 const request = async () => {
  let req = await fetch('/champions')
  let res = await req.json()
  console.log(res)
  setChampions(res)  
}
useEffect(request,[])
    return (
        <>
      <div >
          <Link to="/champions/new"><button>Add Champion</button></Link>
        {
          champions.map((champion) =>{
            return(
            <div className="postItems">
            <h2>{champion.name}</h2>
            <img width="300px" height="200px" alt="" src={champion.image_url}/>
            <h3>Age</h3>
            <h3>nationality: {champion.nationality}</h3>
            <h3>Weight: {champion.weight} lb</h3>
            <h3>Competing Category: {champion.category}</h3>
            <DltButton champion={champion} setChampions={setChampions}/>
            </div>
          )
          })
        }
      </div>

      </>
    );
  }
  
  export default ChampionCard