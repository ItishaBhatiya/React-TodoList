import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    let[Task,SetTask]=useState("")
    let[TaskList,SetTaskList]=useState([])

    const HandleAddTask=()=>{
        let ToDo={
            Task:Task,
            Status:false
        }
        SetTaskList([...TaskList,ToDo])
        SetTask("")
    }
    const HandleRemoveTask=(index)=>{
        let FilterData = TaskList.filter((ele,i)=>i!=index)
        SetTaskList(FilterData)
    }
    const HandleStatusChange=(index)=>{
        let filterData=TaskList.map((ele,i)=>{
            if(i==index){
                ele.Status=!ele.Status
                return ele
            }
            else{
                return ele
            }
        })
        SetTaskList(filterData)
    }

  return (
    <div>
        <div>
            <input type="text" value={Task} onChange={(e)=>SetTask(e.target.value)} />
            <button onClick={HandleAddTask}>Add</button>
        </div>
        <div>
            {
                TaskList.map((ele,index)=>(
                    <div>
                        <p style={{color:ele.Status ? "green" : "red"}}>{ele.Task}</p>
                        <button onClick={()=>HandleStatusChange(index)}>{ele.Status?"UnComplete":"Complete"}</button>
                        <button onClick={()=>HandleRemoveTask(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TodoList