import React from "react";
import { Link } from "react-router-dom";
import AddWorkout from "./AddWorkout";
import {  FaTrash } from "react-icons/fa";
import { FaPencilAlt} from "react-icons/fa";

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
        <div className="mainContainer">
        <p>Weekly Workout Plan</p>
        <div className="keys">
        <Link to="/workouts/:id/edit"><button title="Edit"><FaPencilAlt/></button></Link>
        <button title="Delete" onClick={handleDelete}><FaTrash/></button>
        </div>
    <div class="tableContainer">
    <div class="table">
    <div class="table-header">
			<div class="header__item">Week days</div>
			<div class="header__item">Workout</div>
		</div>
      <div>{workouts.map(element=>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">Monday</div>
				<div class="table-data">{element.monday}</div>
			</div>
      <div class="table-row">		
				<div class="table-data">Tuesday</div>
				<div class="table-data">{element.tuesday}</div>
			</div>
      <div class="table-row">		
				<div class="table-data">Wednesday</div>
				<div class="table-data">{element.wednesday}</div>
			</div>
      <div class="table-row">		
				<div class="table-data">Thursday</div>
				<div class="table-data">{element.thursday}</div>
			</div>
      <div class="table-row">		
				<div class="table-data">Friday</div>
				<div class="table-data">{element.friday}</div>
			</div>
      <div class="table-row">		
				<div class="table-data">Saturday</div>
				<div class="table-data">{element.saturday}</div>
			</div>
      <div class="table-row">		
				<div class="table-data">Sunday</div>
				<div class="table-data">{element.sunday}</div>
			</div>
		</div>
    )}
    </div>
    </div>
    </div>
    </div>

        </div>
      :
    
      <div><AddWorkout/></div>
    
    }
    </div>
    )
}
export default WorkoutDetails
