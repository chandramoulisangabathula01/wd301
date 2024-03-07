import React from "react"
import TaskCard from "./TaskCard"
function App() {
  

  return (
    <>
      <div>
        <div className="m-10">
          <h1 className='text-xl font-bold text-black-800'>Pending</h1>
          <TaskCard title="Build a web application" dueDate="06 September" assigneeName="chandu" completedAtDate={""} />
          <TaskCard title="Build a app " dueDate="06/09/2023" assigneeName="shankar" completedAtDate={""} />
          
        </div>
        <div className="m-10">
          <h1 className='text-xl font-bold text-black-800 ' >Done</h1>
          <TaskCard title="created a web applications" completedAtDate="18/08/2023" assigneeName="kishore" dueDate={""}/>
          <TaskCard title="created a wix application" completedAtDate="31/08/2023" assigneeName="santosh" dueDate={""}/>
   

        </div>
      </div>
    </>
  )
}

export default App
