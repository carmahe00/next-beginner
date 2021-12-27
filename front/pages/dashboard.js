import axios from 'axios'
import { useState, useEffect } from 'react'

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboard, setDashboard] = useState(null)

    useEffect(() => {
        (async () => {
            const { data } = await axios(`http://localhost:4000/dashboard`);
            setDashboard(data);
            setIsLoading(false);
        })()
    }, [])
    if(isLoading)
        return <h2>Loading...</h2>

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - { dashboard.posts }</h2>
            <h2>Likes - { dashboard.likes }</h2>
            <h2>Followers - { dashboard.followers }</h2>
            <h2>Following - { dashboard.following }</h2>
        </div>
    )
}

export default Dashboard