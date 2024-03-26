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

  return(
    <ul>
      {props.tasks.map((task,idx)=>(
        <li key={idx}>
          <Task item={task}
          removeTask={()=> handleDelete(idx)} />
          {/* <button className="deleteTaskButton w-fit h-fit text-white px-5 rounded-lg mb-1 bg-red-600" 
          onClick={()=>handleDelete(idx)}
          >Delete Task</button> */}
        </li>
      ))}
    </ul>
  )
};
export default TaskList;