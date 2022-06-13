import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";

const EditWorkoutForm = ({workouts})=>{
    const {id}=workouts[0]
    /*use state to update the form */
    const [form, setForm] = useState({monday: '', tuesday: '', wednesday: '', thursday:'',friday:'',saturday:'',sunday:''})
    /*define the function updateform */
    useEffect(() => {
        fetch(`/workouts/${id}`)
          .then((res) => res.json())
          .then((r) => setForm(r));
      }, [id]);
    const updateForm =(e)=>{
        setForm({...form, [e.target.getAttribute('name')]: e.target.value})}
        /* redirect to specific route*/
        const history = useHistory()
        
    return(
        <div >
        <h3>Edit Your Meals</h3>
        <form onSubmit={async (e) => {
        e.preventDefault()
        
        let req = await fetch(`/workouts/${id}`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(form) 
        })
        let res = await req.json()
        console.log(res)
        setForm((prevState) => {return [...prevState, res]})
        alert("done")
        history.push(`/workouts`)
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
    )
}
export default EditWorkoutForm