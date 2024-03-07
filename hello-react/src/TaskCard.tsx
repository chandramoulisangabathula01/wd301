import React from 'react';
import './TaskCard.css';

interface TaskCardPropsApp {
    title: string;
    dueDate: string;
    completedAtDate: string;
    assigneeName: string;
}

const TaskCard: React.FC<TaskCardPropsApp> = (props) => {
    let text = "";
    if (props.completedAtDate) {
        text = `Completed on: ${props.completedAtDate}`;
    } else {
        text = `Due on: ${props.dueDate}`;
    }
    return (
        <div className="TaskItem">
            <h2 className='text-xl font-bold text-green-800 '>{props.title}</h2>
            <p className='text-lg font-semi-bold text-red-700'>{text}</p>
            <p className='text-lg font-semi-bold text-gray-700'>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard;