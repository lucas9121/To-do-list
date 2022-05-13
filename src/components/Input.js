export default function Input ({handleSubmit, newData, setNewData}) {
    const handleChange = (event) => {
        // adding [] around the event.target.name makes the name variable in the target event the key of the object that is being made. So in this case the name is title because of the input name
        setNewData({[event.target.name]: event.target.value})
    }
    return (
        <main>
            <small>New Item</small>
                <br />
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    id="todo"
                    value={newData.title}
                    onChange={handleChange}
                    />
                    <button type="submit" style={{display: 'none'}} >submit</button>
                </form>
        </main>
    )
}