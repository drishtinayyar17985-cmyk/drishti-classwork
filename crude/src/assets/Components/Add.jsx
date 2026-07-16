import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Add = () => {
  const[task,setTask]=useState({
    taskName:""
  });
  let navigate=useNavigate()


  const saveData=async()=>{
    await axios.post("http://localhost:3000/todos",task).then(()=>{
 alert("data saved");
 navigate("/");
    }).catch((err)=>{
       console.log(err);
    })
  }


const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(task);
  saveData();
}

  return (
<div className='container'>
    <form onSubmit={handleSubmit}>
        <p className='fs-4 fw-bold fst-italic text-center'>Add Task Here</p>
        <div className='d-flex gap-4 justify-content-center'>
        <div className='mb-3 w-100'>
<input type="text" className='form-control' value={task.taskName} 
onChange={(e)=>setTask({
  taskName:e.target.value
})}/>
        </div>
        <div className='mb-3'>
   <input type="submit" className='btn btn-dark' value="Add"/>
    </div>
        </div>
    </form>
</div>

  )
}
export default Add;