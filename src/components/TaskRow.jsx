import { memo} from 'react';

const TaskRow = memo( ({task}) => {
    return (
        <tr>
            <td>{task.title}</td>
            <td style={{ backgroundColor: task.status === "To do" ? "red" : task.status === "Doing" ? "yellow" : "green" }}>
                {task.status}
            </td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
})
export default TaskRow;