import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
    tasks: TaskItem[];
    onDelete:(index:number)=> void;
}

const TaskList = (props: Props) => {
  const handleDelete = (index: number) => {
    props.onDelete(index);
  };

// const TaskList = (props: Props) => {
//     const list = props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         title={task.title}
//         description={task.description}
//         dueDate={task.dueDate}
//       />

//     ));
//     return <>{list}</>;
//   };

  return(
    <ul>
      {props.tasks.map((task,idx)=>(
        <li key={idx}>
          <Task dueDate={task.dueDate} description={task.description} title={task.title}/>
          <button className="deleteTaskButton w-fit h-fit text-white px-5 rounded-lg mb-1 bg-red-600" 
          onClick={()=>handleDelete(idx)}
          >Delete Task</button>
        </li>
      ))}
    </ul>
  )
};
export default TaskList;