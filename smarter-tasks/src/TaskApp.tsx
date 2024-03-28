import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import './App.css'
import { useLocalStorage } from "./hooks/useLocalStorage";
import React from "react";

interface TaskAppState {
    tasks: TaskItem[];
}

const TaskApp = () => {

    

    const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
        tasks: [],
    });

    React.useEffect(() => {
        const id = setTimeout(() => {
          console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
        }, 5000);
        return () => {
          console.log("cancel any existing n/w call");
          clearTimeout(id);
        };
    }, [taskAppState.tasks]);

    // added the task 
    const addTask = (task: TaskItem) => {
        console.log("Adding task:", task);
        setTaskAppState({ tasks: [...taskAppState.tasks, task] });
    };

    // delete the task 
    const deleteTask = (index: number)=>{
        const updatedTasks = [...taskAppState.tasks];
        updatedTasks.splice(index,1);
        setTaskAppState({tasks: updatedTasks});
    };

    
    


    return (
        <div className="container py-10 max-w-4xl mx-auto">
            <h1 className="text-3xl mb-2 font-bold text-slate-700">
                Smarter Tasks
            </h1>
            <h1 className="text-lg mb-6 text-slate-600">
                <span className="font-bold">Project: </span>
                Graduation Final Year Project (Revamp college website)
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4">
                    <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
                        Pending
                    </h1>
                    <TaskForm addTask={addTask} />
                    <TaskList tasks={taskAppState.tasks} onDelete={deleteTask} />
                </div>
            </div>
        </div>
    );
};

export default TaskApp;
