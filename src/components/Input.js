export default function Input ({handleSubmit, newData, setNewData}) {
    const handleChange = (event) => {
        setNewData(event.target.value)
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
                    value={newData.value}
                    onChange={handleChange}
                    />
                    <button type="submit" style={{display: 'none'}} >submit</button>
                </form>
        </main>
    )
}