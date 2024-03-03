import TaskCard from "./TaskCard"
function App() {
  

  return (
    <>
      <div>
        <div className="m-10">
          <h1 className='text-xl font-bold text-black-800'>Pending</h1>
          <TaskCard title="Build a web application"/>
          <TaskCard dueDate="01/01/2024"/>
          <TaskCard assigneeName="chandu"/>
        </div>
        <div className="m-10">
          <h1 className='text-xl font-bold text-black-800 ' >Done</h1>
          <TaskCard title="created a web application"/>
          <TaskCard completedAtDate="31/12/2023"/>
          <TaskCard assigneeName="kishore"/>

        </div>
      </div>
    </>
  )
}

export default App
