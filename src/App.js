import "./style.css"
import { useState } from "react"

export default function App(){
    const [input, setInput] = useState('')
    return(
        <div className="App">
            <h1>My To Do List:</h1>
            <div id="input-field">
                <small>New Item</small>
                <br />
                <input
                type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                />
            </div>
            <br/>
            <div>
                <h2>To do Items: </h2>
                <ul>
                    <li> Learn more about React</li>
                    <li> Write a new Component</li>
                    <li>Add some style</li>
                </ul>
            </div>
        </div>
    )
}