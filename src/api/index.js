export const registerUser = async (name, password) => {
    const response = await fetch(/* API URL */)
    {
    method:"POST"
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify({
        user:{
            username,
            password
        }
    })
}
)
const data = await response.json()
return data
}