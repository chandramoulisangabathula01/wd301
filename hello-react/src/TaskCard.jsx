import './TaskCard.css'
import PropTypes from "prop-types";

const TaskCard = (props) => {
    console.log(props)
    return (
        <div className="TaskItem">
            <h2 className='text-xl font-bold text-green-800 '>{props.title}</h2>
            <p className='text-lg font-semi-bold text-red-700'>{props.dueDate}</p>
            <p className='text-lg font-semi-bold text-gray-700'>{props.completedAtDate}</p>
            <p className='text-lg font-semi-bold text-gray-700'>{props.assigneeName}</p>
        </div>
    )
}

TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    completedAtDate: PropTypes.string.isRequired,
    assigneeName: PropTypes.string.isRequired
};

export default TaskCard;
