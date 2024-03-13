import React from "react";

import { TaskItem } from "./types";

interface TaskFormProps {
    addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}




class TaskForm extends React.Component<TaskFormProps, TaskFormState>{
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "", description: "", dueDate: "",
        }
    }


    render() {
        return (
            <form onSubmit={this.addTask}>
                <input type="text" id="todoTitle" className="w-full p-2 border border-black rounded mb-4" value={this.state.title} placeholder="Title" onChange={this.titleUpdate} />
                <input type="text" id="todoDescription" className="w-full p-2 border border-black rounded mb-4" value={this.state.description} placeholder="description" onChange={this.descriptionUpdate} />
                {/* <button type="submit">Add item</button> */}

                <input type="date" id="todoDueDate" className="w-full p-2 border border-black rounded mb-4" value={this.state.dueDate} onChange={this.dueDateUpdate} placeholder="Due Date" />
                <button type="submit" id="addTaskButton" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Add item</button>
            </form>
        )
    }

    inputRef = React.createRef<HTMLInputElement>();

    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const { title, description, dueDate } = this.state;

        if (title.trim() !== "" && dueDate.trim() !== "") {
            const newTask = {
                title, description, dueDate,
            };
            this.props.addTask(newTask);
            this.setState({ title: "", description: '', dueDate: '' });
        } else {
            alert("please enter all fields");
        }
    }

    titleUpdate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({ title: event.target.value });
    };

    dueDateUpdate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        console.log(typeof event.target.value);
        this.setState({ dueDate: event.target.value });
    };

    descriptionUpdate: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        console.log(typeof event.target.value);
        this.setState({ description: event.target.value });
    }
    // addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    //     event.preventDefault();
    //     const newTask = {
    //       title: this.state.title,
    //     };
    //     this.props.addTask(newTask);
    //     this.setState({ title: "" });
    //   };
}

export default TaskForm;