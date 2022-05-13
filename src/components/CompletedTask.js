import { handleClick } from "../utilities/task-api"
export default function Completed({tasks, btnPressed, setBtnPresed}) {
    return (
        <div>
            <h2>Completed:</h2>
            <ul>
                {tasks.map((task, idx) => {
                    return(
                        task.status === true ?
                        <li key={idx}>{task.title} <button onClick={() => {handleClick(false, task._id); setBtnPresed(!btnPressed)}}>To do</button> <button onClick={() => {
                            try {
                                fetch(`/tasks/${task._id}`, {method: 'DELETE'})
                            } catch(e) {
                                console.log(e)
                            } finally {
                                setBtnPresed(!btnPressed)
                            }
                        }}>Remove</button></li>:
                        null
                    )
                })}
            </ul>
        </div>
    )
}