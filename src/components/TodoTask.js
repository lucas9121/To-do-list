import { handleClick } from "../utilities/task-api"
export default function Todo({tasks, btnPressed, setBtnPresed}) {
    return (
        <div>
            <h2>To do Items: </h2>
            <ul>
                {tasks.map((task, i) => {
                    return(
                        task.status === false ?
                        <li key={i}>{task.title} <button onClick={() => {handleClick(true, task._id); setBtnPresed(!btnPressed)}} >Completed</button> </li> : 
                        null
                    )
                })}
            </ul>
        </div>
    )
}