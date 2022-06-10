import React from "react";

const Detail = ({user})=>{
    return(
        <>
    <div>Hello {user.name.toUpperCase()}</div>
    <div>{user.diets.map(r=><div>
      meal 1<div>{r.meal_1}</div>
      meal 2<div>{r.meal_2}</div>
      meal 3<div>{r.meal_3}</div>
      meal 4<div>{r.meal_4}</div>
      meal 5<div>{r.meal_5}</div>
      meal 6<div>{r.meal_6}</div>
      </div>)}</div>
    
    <div>{user.workouts.map(r=><div>
      Monday workouts<div>{r.monday}</div>
      Tuesday workouts<div>{r.tuesday}</div>
      Wednesday workouts<div>{r.wednesday}</div>
      Thursday workouts<div>{r.thursday}</div>
      Friday workouts<div>{r.friday}</div>
      Saturday workouts<div>{r.saturday}</div>
      Sunday workouts<div>{r.sunday}</div>
      </div>)}</div>
        </>
    )

}
export default Detail