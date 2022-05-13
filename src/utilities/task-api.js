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
        if(response.status === 200){
            setBtnPresed(!btnPressed)
        } else (
            console.log('something went wrong')
        )
    } catch(e) {
        console.log(e)
    }
}