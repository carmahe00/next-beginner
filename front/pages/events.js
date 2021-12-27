import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList);
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const { data } = await axios(`http://localhost:4000/events`);
        console.log(data);
        setEvents(data);
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <>
            <button onClick={fetchSportsEvents} >Sport Events</button>
            <h1>List of event</h1>
            {
                events.map(event => (
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default EventList

export async function getServerSideProps(ctx) {
    const { query: { category } } = ctx;
    const queryString = category ? 'category=sports' : ''
    const { data } = await axios(`http://localhost:4000/events?${queryString}`)
    return {
        props: {
            eventList: data
        }
    }
}