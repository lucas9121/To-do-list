import "./style.css"
import { useState, useEffect, useRef } from "react"
import toDoListData from "./data"
import { Link } from "react-router-dom"
import Header from "./components/Header"
import Input from "./components/Input"
import Todo from "./components/TodoItems"

export default function App(){
    const [newData, setNewData] = useState('')
    const [tasks, setTasks] = useState([])
    const [btnPressed, setBtnPresed] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/tasks`)
                const data = await response.json()
                console.log('UseEffect console!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                console.log(data)
                setTasks(data)
            } catch(e) {
                console.log(e)
            }
        })()
    }, [btnPressed])


    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await fetch('/tasks', {
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
            <Header />
            <Input handleSubmit={handleSubmit} newData={newData} setNewData={setNewData} />
            <Todo tasks={tasks} />
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