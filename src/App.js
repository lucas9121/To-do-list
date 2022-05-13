import "./style.css"
import { useState, useEffect} from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Todo from "./components/TodoTask"
import Completed from "./components/CompletedTask"

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
            <Todo tasks={tasks} btnPressed={btnPressed} setBtnPresed={setBtnPresed} />
            <Completed tasks={tasks} btnPressed={btnPressed} setBtnPresed={setBtnPresed} />
        </div>
    )
}