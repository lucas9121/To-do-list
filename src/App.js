import "./style.css"
import { useState, useEffect } from "react"
import toDoListData from "./data"

export default function App(){
    const [toDo, setToDo] = useState(toDoListData)
    const [newData, setNewData] = useState({
        title: '',
        completed: false
    })

    const handleChange = (event) => {
        // adding [] around the event.target.name makes the name variable in the target event the key of the object that is being made. So in this case the name is title because of the input name
        setNewData({[event.target.name]: event.target.value, completed: false})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setToDo([...toDoListData, newData] )
    }

    // const addData = () => {
    //     setNewData(input)
    //     toDoListData.push({title: newData, completed: false})
    // }

    useEffect(() => {
        console.log(toDoListData)
        console.log(toDo)
        // console.log(input)
    }, [toDo])

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
                    value={newData.title}
                    onChange={handleChange}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
            <br/>
            <div>
                <h2>To do Items: </h2>
                <ul>
                    {toDoListData.map((toDo, idx) => {
                        return(
                            <li key={idx}>{toDo.title}</li>
                        )
                    })}
                    {toDo.forEach((todo, i) => {
                        console.log(todo.title)
                        return(
                            <li key={i}>{todo.title} Hello</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}