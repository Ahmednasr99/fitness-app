import React from "react";
import { Link } from "react-router-dom";
import AddWorkout from "./AddWorkout";

const WorkoutDetails = ({workouts})=>{
    const handleDelete = async()=>{
        const {id}=workouts[0]
        let req = await fetch(`/workouts/${id}`,{
          method: "DELETE",
        })
        if(req.ok){
          alert("delete sucess")
          }
        }
    return(
      <div>
      {workouts.length!==0?
      <div>
      <div>{workouts.map(r=><div>
        Monday workouts<div>{r.monday}</div>
        Tuesday workouts<div>{r.tuesday}</div>
        Wednesday workouts<div>{r.wednesday}</div>
        Thursday workouts<div>{r.thursday}</div>
        Friday workouts<div>{r.friday}</div>
        Saturday workouts<div>{r.saturday}</div>
        Sunday workouts<div>{r.sunday}</div>
      </div>)}</div>
        <Link to="/workouts/:id/edit"><button>Edit</button></Link>
        <button onClick={handleDelete}>Delete</button>
        </div>
      :
    
      <div><AddWorkout/></div>
    
    }
    </div>
    )
}
export default WorkoutDetails