import { useEffect, useState } from "react"


export const App = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://39685-backend-production.up.railway.app/api/users')
                const users = await response.json()
                setUsers(users)
            } catch (error) {
                console.error(error)
            }
        }

        fetchUsers()
        console.log(users)
    }, [])

    return (
        <div>
            Usuarios en consola
        </div>
    )
}