import { useEffect, useState } from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import styles from '@/styles/Home.module.css'
import FadeInSection from '@/components/FadeInSection'

type Event = {
    _id: string
    name: string
    description: string
    date: string
    location: string
    image: any
    registrationPage: string
}

type Testimonial = {
    _id: string
    name: string
    role: string
    testimonial: string
    image: any
    socialLink: string
}

export default function Home() {
    const [events, setEvents] = useState<Event[]>([])
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])

    useEffect(() => {
        fetch('/api/events')
            .then((res) => res.json())
            .then((data) => {
                setEvents(data.events)
                setTestimonials(data.testimonials)
            })
    }, [])

    return (
        <div className={styles.container}>
            <FadeInSection>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>Master Liquidity, <br /> Control the Markets</h1>
                        <p>Join the best trading community and sharpen your skills with expert insights.</p>
                        <Link href="https://discord.com" target="_blank">
                            <button className={styles.ctaButton}>Join the Community</button>
                        </Link>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                {/* About Section */}
                <section className={styles.about}>
                    <h2>About Liquidity Syndicate</h2>
                    <p>
                        Liquidity Syndicate is a <strong>free</strong> community for funded traders in Nepal, providing mentorship,
                        and a space to connect with like-minded traders within Nepal (or international).
                    </p>
                </section>
            </FadeInSection>

            <FadeInSection>
                {/* Upcoming Events Section */}
                <section className={styles.eventsPreview}>
                    <h2>Upcoming Events</h2>
                    <p>Stay updated with our latest trading sessions and community events.</p>
                    <div className={styles.eventsGrid}>
                        {events.map(event => (
                            <div key={event._id} className={styles.eventCard}>
                                {event.image && (
                                    <img
                                        src={urlFor(event.image).width(150).height(150).url()}
                                        alt={event.name}
                                        className={styles.eventImage}
                                    />
                                )}
                                <div className={styles.eventDetails}>
                                    <h3>{event.name}</h3>
                                    <p>{event.description}</p>
                                    <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="/events">
                        <button className={styles.viewMoreButton}>View All Events</button>
                    </Link>
                </section>
            </FadeInSection>

            <FadeInSection>
                {/* Why Join Section */}
                <section className={styles.whyJoin}>
                    <h2>Why Join Liquidity Syndicate?</h2>
                    <ul>
                        <li>📊 Get real-time market insights</li>
                        <li>💬 Connect with a community of funded traders</li>
                        <li>📈 Access high-level mentorship & strategies</li>
                        <li>🎯 Improve your psychology & risk management</li>
                    </ul>

                    {/* Testimonials */}
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial._id} className={styles.testimonialCard}>
                                {testimonial.image && (
                                    <img
                                        src={urlFor(testimonial.image).width(100).height(100).url()}
                                        alt={testimonial.name}
                                        className={styles.testimonialImage}
                                    />
                                )}
                                <p className={styles.testimonialText}>
                                    "{testimonial.testimonial}"
                                </p>
                                <p className={styles.testimonialName}>
                                    - {testimonial.name}, {testimonial.role}
                                </p>
                                {testimonial.socialLink && (
                                    <a href={testimonial.socialLink} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.socialLinkButton}>View on Youtube</button>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>
        </div>
    )
}