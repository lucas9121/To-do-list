import "./style.css"
import { useState, useEffect, useRef } from "react"
import toDoListData from "./data"
import { Link } from "react-router-dom"
import Header from "./components/Header"

export default function App(){
    const [toDo, setToDo] = useState(toDoListData)
    const [newData2, setNewData2] = useState({
        title: '',
        completed: false
    })
    const [newData, setNewData] = useState('')
    const [taskComplete, setTaskComplete] = useState([])
    const [complete, setComplete] = useState(true)
    const [tasks, setTasks] = useState([])
    const [btnPressed, setBtnPresed] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`http://localhost:3001/tasks`)
                const data = await response.json()
                console.log('UseEffect console!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                console.log(data)
                setTasks(data)
            } catch(e) {
                console.log(e)
            }
        })()
    }, [btnPressed])

    const handleClick = async (statusChange, id) => {
        try {
            const response = await fetch(`http://localhost:3001/tasks/${id}`, {
                method: "PUT",
                body: JSON.stringify({status: statusChange})
            })
            const data = await response.json()
            console.log('Data unchanged!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(data)
            console.log(data.status)
            data.status = statusChange
            console.log('data change!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            console.log(response)
            console.log(data)
            console.log(data.status)
            setBtnPresed(!btnPressed)
        } catch(e) {
            console.log(e)
        }
    }

    const handleChange = (event) => {
        // adding [] around the event.target.name makes the name variable in the target event the key of the object that is being made. So in this case the name is title because of the input name
        setNewData(event.target.value)
        console.log(newData)
        console.log('Data here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let newTask = await fetch('http://localhost:3001/tasks', {
                method: "POST",
                body: JSON.stringify({
                    title: newData,
                    status: false
                })
            })
        } catch(e) {
            console.log(e)
        }
    }

    const handleSubmit2 = (event) => {
        event.preventDefault()
        setToDo([...toDo, newData])
    }

    const completedStatus = () => {
        toDo.forEach((todo) => {
            // checks if task is already in the array
            if(taskComplete.find((obj) => obj === todo)){
                return
            } else if(todo.completed === true){
                setTaskComplete([...taskComplete, todo])
            }
        })
    }
    // const taskBtn = (task) => {
    //     console.log('function works')
    //     let item = toDo.find(obj => obj === task)
    //     if(item){
    //         console.log('here')
    //     }
    // }

    // const addData = () => {
    //     setNewData(input)
    //     toDoListData.push({title: newData, completed: false})
    // }

    // useEffect(() => {
    //     completedStatus()
    //     console.log('todoListaData is')
    //     console.log(toDoListData)
    //     console.log('data hook is ')
    //     console.log(toDo)
    //     console.log('new data hook is ')
    //     console.log(newData)
    // }, [toDo])

    return(
        <div className="App">
            <h1>My To Do List:</h1>
            <div id="input-field">
                <small>New Item</small>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    id="todo"
                    value={newData}
                    onChange={handleChange}
                    />
                    <button type="submit" style={{display: 'none'}} >submit</button>
                </form>
            </div>
            <div>
                <h2>To do Items: </h2>
                <ul>
                    {tasks.map((task, i) => {
                        // console.log('Task here!!!!!!!!!!!!!!!!!!!!!!!')
                        // console.log(task._id)
                        return(
                            task.status === false ?
                            <li key={i}>{task.title} <button onClick={() => {handleClick(true, task._id)}} >Completed</button> </li> : 
                            null
                        )
                    })}
                </ul>
            </div>
            <div>
                <h2>Completed:</h2>
                <ul>
                    {tasks.map((task, idx) => {
                        return(
                            task.status === true ?
                            <li key={idx}>{task.title} <button onClick={() => {handleClick(false, task._id)}}>Remove</button></li>:
                            null
                        )
                    })}
                </ul>
            </div>
        </div>

        // <div className="App">
        //     <h1>My To Do List:</h1>
        //     <div id="input-field">
        //         <small>New Item</small>
        //         <br />
        //         <form onSubmit={handleSubmit}>
        //             <input
        //             type="text"
        //             name="title"
        //             id="todo"
        //             value={newData.title}
        //             onChange={handleChange}
        //             />
        //             <button type="submit" style={{display: 'none'}} >submit</button>
        //         </form>
        //     </div>
        //     <div>
        //         <h2>To do Items: </h2>
        //         <ul>
        //             {toDo.map((todo, i) => {
        //                 console.log('ForEach here!!!!!!!!!!!!')
        //                 console.log(todo.title)
        //                 console.log(todo.completed)
        //                 return(
        //                     todo.completed === false ?
        //                     <li key={i}>{todo.title} <button>Completed</button> </li> : 
        //                     null
        //                 )
        //             })}
        //         </ul>
        //     </div>
        //     <div>
        //         <h2>Completed:</h2>
        //         <ul>
        //             {taskComplete.map((obj, idx) => {
        //                 console.log('completed hook!!!!!!!!')
        //                 console.log(obj.title)
        //                 return(
        //                     <li key={idx}>{obj.title} <button>Remove</button></li>
        //                 )
        //             })}
        //         </ul>
        //     </div>
        // </div>
    )
}