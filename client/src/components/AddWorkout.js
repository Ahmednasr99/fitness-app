import React, {useState} from "react";

import {useHistory } from "react-router-dom";
const AddWorkout = ()=>{
  const [form, setForm] = useState({monday: '', tuesday: '', wednesday: '', thursday:'',friday:'',saturday:'',sunday:''})
  const history = useHistory()
  const updateForm =(e)=>{
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})}
    return (
        <div className="formarea">
        <h3>Add a Champion</h3>
        <form className="newpost" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch("/workouts", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
       ((prevState) => {return [...prevState, res]})
        alert("done")
        history.push(`/diets`)
      }} >
          <input type="text"  placeholder="monday" name="monday" value={form.monday} onChange={e => updateForm(e)}/>
          <input type="text" placeholder="tuesday" name="tuesday" value={form.tuesday} onChange={e => updateForm(e)} />
          <input type="text" placeholder="wednesday" name="wednesday" value={form.wednesday} onChange={e => updateForm(e)} />
          <input type="text"  placeholder="thursday" name="thursday" value={form.thursday} onChange={e => updateForm(e)}/>
          <input type="text" placeholder="friday" name="friday" value={form.friday} onChange={e => updateForm(e)} />
          <input type="text" placeholder="saturday" name="saturday" value={form.saturday} onChange={e => updateForm(e)} />
          <input type="text" placeholder="sunday" name="sunday" value={form.sunday} onChange={e => updateForm(e)} />
          <button type="submit">Submit</button>
        </form>
        </div>
      );

      
}

export default AddWorkout