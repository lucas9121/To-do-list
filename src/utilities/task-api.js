export async function handleClick(statusChange, id){
    try {
        const response = await fetch(`/tasks/${id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: statusChange})
        })
    } catch(e) {
        console.log(e)
    }
}