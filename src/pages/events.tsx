import { useEffect, useState } from "react";
import { urlFor } from "@/lib/sanity";
import styles from "@/styles/Events.module.css";
import FadeInSection from "@/components/FadeInSection";

type Event = {
    _id: string;
    name: string;
    description: string;
    date: string;
    location: string;
    image: any;
    registrationPage: string;
};

export default function EventsPage() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => setEvents(data.events)); // Assuming the API returns 'events'
    }, []);

    return (
        <div className={styles.container}>
            <FadeInSection >
                <h1 className={styles.heading}>Upcoming Events</h1>
                <div className={styles.eventsGrid}>
                    {events.map((event) => (
                        <div key={event._id} className={styles.eventCard}>
                            <div className={styles.imageContainer}>
                                {event.image && (
                                    <img
                                        src={urlFor(event.image).width(300).height(300).url()}
                                        alt={event.name}
                                        className={styles.eventImage}
                                    />
                                )}
                            </div>
                            <div className={styles.eventDetails}>
                                <h2>{event.name}</h2>
                                <p>{event.description}</p>
                                <p>
                                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                                </p>
                                <p>
                                    <strong>Location:</strong> {event.location}
                                </p>
                                {event.registrationPage && (
                                    <a
                                        href={event.registrationPage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.registerButton}
                                    >
                                        Register Now
                                    </a>
                                )}

                            </div>

                        </div>

                    ))}
                </div>
            </FadeInSection>
        </div>
    );
}
