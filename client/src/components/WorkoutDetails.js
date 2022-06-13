import React from "react";

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
        <>
    <div>{workouts.map(r=><div>
      Monday workouts<div>{r.monday}</div>
      Tuesday workouts<div>{r.tuesday}</div>
      Wednesday workouts<div>{r.wednesday}</div>
      Thursday workouts<div>{r.thursday}</div>
      Friday workouts<div>{r.friday}</div>
      Saturday workouts<div>{r.saturday}</div>
      Sunday workouts<div>{r.sunday}</div>
      </div>)}</div>

      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </>
    )
}
export default WorkoutDetails