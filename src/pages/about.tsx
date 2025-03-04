import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import styles from "@/styles/About.module.css";

type Person = {
    _id: string;
    name: string;
    role: string;
    image: any;
    description: string;
};

export default function AboutPage() {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const res = await fetch("/api/about");
                if (!res.ok) throw new Error("Failed to fetch data");

                const data = await res.json();
                setPeople(data.slice(0, 3)); // Only show 3 people
            } catch (err) {
                console.error("Failed to load team members.");
            } finally {
                setLoading(false);
            }
        };

        fetchPeople();
    }, []);

    return (
        <>
            <Head>
                <title>About Us - Liquidity Syndicate</title>
                <meta name="description" content="Learn about our mission, vision, and the people behind Liquidity Syndicate." />
            </Head>

            <div className={styles.container}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <h1>About Liquidity Syndicate</h1>
                    <p>Master Liquidity, Control the Markets – A community for traders, by traders.</p>
                </section>

                {/* Company Overview */}
                <section className={styles.overview}>
                    <h2>Who We Are</h2>
                    <p>
                        Liquidity Syndicate is a trader-led community focused on precision, transparency, and market expertise.
                        Our platform provides structured education, real-time market insights, and a space where traders can learn and thrive together.
                    </p>
                </section>

                {/* Core Values */}
                <section className={styles.values}>
                    <h2>Our Core Values</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <h3>📈 Expertise</h3>
                            <p>We provide expert-driven market insights and proven strategies.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>🤝 Community</h3>
                            <p>We foster a collaborative environment where traders support each other.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3>🚀 Innovation</h3>
                            <p>We stay ahead of market trends and adapt to the evolving trading landscape.</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className={styles.team}>
                    <h2>The Team Behind Liquidity Syndicate</h2>

                    {loading ? <p>Loading team members...</p> : (
                        <div className={styles.teamGrid}>
                            {people.map((person) => (
                                <div key={person._id} className={styles.teamCard}>
                                    {person.image && (
                                        <img src={urlFor(person.image).width(150).height(150).url()} alt={person.name} className={styles.teamImage} />
                                    )}
                                    <h3>{person.name}</h3>
                                    <p className={styles.role}>{person.role}</p>
                                    <p className={styles.description}>{person.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Call to Action */}
                <section className={styles.ctaSection}>
                    <h2>Join Our Community</h2>
                    <p>Take your trading to the next level. Connect with us and gain access to premium strategies and insights.</p>
                    <Link href="https://discord.com" target="_blank">
                        <button className={styles.ctaButton}>Join Now</button>
                    </Link>
                </section>
            </div>
        </>
    );
}
