import React, {useState} from "react";

import {useHistory } from "react-router-dom";
const AddChampion = ()=>{
  const [form, setForm] = useState({name: '', image_url: '', birthDate: '', weight:0,height:0,category:'',nationality:''})
  const history = useHistory()
  const updateForm =(e)=>{
    setForm({...form, [e.target.getAttribute('name')]: e.target.value})}
    return (
        <div className="formarea">
        <h3>Add a Champion</h3>
        <form className="newpost" onSubmit={async (e) => {
        e.preventDefault()
        let req = await fetch("/champions", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
       ((prevState) => {return [...prevState, res]})
        alert("done")
        history.push(`/champions`)
      }} >
          <input type="text"  placeholder="Name" name="name" value={form.name} onChange={e => updateForm(e)}/>
          <input type="url" placeholder="Image" name="image_url" value={form.image_url} onChange={e => updateForm(e)} />
          <input type="date" placeholder="Birth date" name="birthDate" value={form.birthDate} onChange={e => updateForm(e)} />
          <input type="number"  placeholder="Weight" name="weight" value={form.weight} onChange={e => updateForm(e)}/>
          <input type="number" placeholder="Height" name="height" value={form.height} onChange={e => updateForm(e)} />
          <input type="text" placeholder="Category" name="category" value={form.category} onChange={e => updateForm(e)} />
          <input type="text" placeholder="Nationality" name="nationality" value={form.nationality} onChange={e => updateForm(e)} />
          <button type="submit">Submit</button>
        </form>
        </div>
      );

      
}

export default AddChampion