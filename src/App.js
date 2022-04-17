import "./style.css"
import { useState, useEffect } from "react"
import toDoListData from "./data"

export default function App(){
    const [toDo, setToDo] = useState(toDoListData)
    const [newData, setNewData] = useState({
        title: '',
        completed: false
    })
    const [completed, setCompleted] = useState([])

    const handleChange = (event) => {
        // adding [] around the event.target.name makes the name variable in the target event the key of the object that is being made. So in this case the name is title because of the input name
        setNewData({[event.target.name]: event.target.value, completed: false})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setToDo([...toDo, newData])
    }

    const completedStatus = () => {
        toDo.forEach((todo) => {
            if(todo.completed === true){
                setCompleted([...completed, todo])
            }
        })
    }

    // const addData = () => {
    //     setNewData(input)
    //     toDoListData.push({title: newData, completed: false})
    // }

    useEffect(() => {
        completedStatus()
        console.log('todoListaData is')
        console.log(toDoListData)
        console.log('data hook is ')
        console.log(toDo)
        console.log('new data hook is ')
        console.log(newData)
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
                    {toDo.map((todo, i) => {
                        console.log('ForEach here!!!!!!!!!!!!')
                        console.log(todo.title)
                        console.log(todo.completed)
                        return(
                            todo.completed === false ?
                            <li key={i}>{todo.title} {todo.completed === true ? <button>Remove</button> : <button>Completed</button>} </li> : null
                        )
                    })}
                </ul>
            </div>
            <div>
                <h2>Completed:</h2>
                <ul>
                    {completed.map((obj, idx) => {
                        console.log('completed hook!!!!!!!!')
                        console.log(obj.title)
                        return(
                            <li key={idx}>{obj.title} <button>Remove</button></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}