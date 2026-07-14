import React, { useEffect } from 'react'
import Add from './Add'
import { useState } from 'react'
import axios from 'axios';

const Dashboard = () => {
const[todo,setTodo]=useState([]);
//get data from todos file

const getAllTodos=async()=>{
    let resp=await axios.get("http://localhost:3000/todos")
    resp=await resp.data;
    console.log(resp);
    setTodo(resp);
}

//effect
useEffect(()=>{
    getAllTodos()
},[]);



  return (
    <>
    <Add/>
    <div className='container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>SN</th>
                    <th>Task Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
        todo.map((val,index) => {
            return         <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.taskName}</td>
                    <td>
        <button className='btn btn-warning mx-2'>Edit</button>
          <button className='btn btn-danger '>Delete</button>
             </td>
            </tr>
        })
    }
        
</tbody>

</table>
</div>
    
    </>
  )
}
export default Dashboard;
