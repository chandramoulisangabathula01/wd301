import React from "react"
import TaskCard from "./TaskCard"
function App() {
  

  return (
    <>
      <div>
        <div className="m-10">
          <h1 className='text-xl font-bold text-black-800'>Pending</h1>
          <TaskCard title="Build a web application" dueDate={undefined} completedAtDate={undefined} assigneeName={undefined}/>
          <TaskCard dueDate="01/01/2024" title={undefined} completedAtDate={undefined} assigneeName={undefined}/>
          <TaskCard assigneeName="chandu" title={undefined} dueDate={undefined} completedAtDate={undefined}/>
        </div>
        <div className="m-10">
          <h1 className='text-xl font-bold text-black-800 ' >Done</h1>
          <TaskCard title="created a web application" dueDate={undefined} completedAtDate={undefined} assigneeName={undefined}/>
          <TaskCard completedAtDate="31/12/2023" title={undefined} dueDate={undefined} assigneeName={undefined}/>
          <TaskCard assigneeName="kishore" title={undefined} dueDate={undefined} completedAtDate={undefined}/>

        </div>
      </div>
    </>
  )
}

export default App
