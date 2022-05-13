import "./style.css"
import { useState, useEffect, useRef } from "react"
import toDoListData from "./data"
import { Link } from "react-router-dom"
import Header from "./components/Header"

export default function App(){
    const [newData, setNewData] = useState('')
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
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({status: statusChange})
            })
            if(response.status === 200){
                setBtnPresed(!btnPressed)
            } else (
                console.log('something went wrong')
            )
        } catch(e) {
            console.log(e)
        }
    }

    const handleChange = (event) => {
        setNewData(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await fetch('http://localhost:3001/tasks', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: newData,
                    status: false
                })
            })
            setNewData('')
            setBtnPresed(!btnPressed)
        } catch(e) {
            console.log(e)
        }
    }

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
                    value={newData.value}
                    onChange={handleChange}
                    />
                    <button type="submit" style={{display: 'none'}} >submit</button>
                </form>
            </div>
            <div>
                <h2>To do Items: </h2>
                <ul>
                    {tasks.map((task, i) => {
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
                            <li key={idx}>{task.title} <button onClick={() => {handleClick(false, task._id)}}>To do</button> <button onClick={() => {
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
        </div>
    )
}