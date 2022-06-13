import React from "react";
import { Link } from "react-router-dom";

const DietDetail = ({diets})=>{
console.log(diets)



 const handleDelete = async()=>{
    const {id}=diets[0]
    let req = await fetch(`/diets/${id}`,{
      method: "DELETE",
    })
    if(req.ok){
      alert("delete sucess")
      }
    }
   
  
    return(
    <>
    <div>{diets.map(r=><div>
      meal 1<div>{r.meal_1}</div>
      meal 2<div>{r.meal_2}</div>
      meal 3<div>{r.meal_3}</div>
      meal 4<div>{r.meal_4}</div>
      meal 5<div>{r.meal_5}</div>
      meal 6<div>{r.meal_6}</div>
      </div>)}</div>

      <Link to="/diets/:id/edit"><button>Edit</button></Link>
      <button onClick={handleDelete} >Delete</button>
      </>
    )

}
export default DietDetail