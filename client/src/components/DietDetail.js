import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddDiet from "./AddDiet";

const DietDetail = ({diets})=>{
console.log(diets)
const [visible,setVisible] = useState(false)



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
    <div>{
      diets.length!==0?
    <><div>
      <ul>{diets.map(r => <div>
          <li>meal 1<div>{r.meal_1} <input type="checkbox" name="done" value="Done" onClick={()=>setVisible(!visible)} /><label for="done">{visible?"Done":""}</label></div></li>
          <li>meal 2<div>{r.meal_2}</div></li>
          <li>meal 3<div>{r.meal_3}</div></li>
          <li>meal 4<div>{r.meal_4}</div></li>
          <li>meal 5<div>{r.meal_5}</div></li>
          <li>meal 6<div>{r.meal_6}</div></li>
        </div>)}</ul>
        </div><Link to="/diets/:id/edit"><button>Edit</button></Link><button onClick={handleDelete}>Delete</button></>
        :
        <div>
          <AddDiet/>
        </div>
    
    }
      </div>
    )

}
export default DietDetail