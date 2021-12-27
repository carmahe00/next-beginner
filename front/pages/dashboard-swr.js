import useSwr from 'swr';
import axios from 'axios';

function DashboardSWR() {
    const fetcher = async () => {
        const { data } = await axios(`http://localhost:4000/dashboard`);
        return data;
    };
    const {data, error} = useSwr('dashboard', fetcher)
    if(error) return `An error has ocurred`
    if(!data) return `Loading`

    return (
        <div>
            <h2>data</h2>
            <h2>Posts - { data.posts }</h2>
            <h2>Likes - { data.likes }</h2>
            <h2>Followers - { data.followers }</h2>
            <h2>Following - { data.following }</h2>
        </div>
    )
}

export default DashboardSWR