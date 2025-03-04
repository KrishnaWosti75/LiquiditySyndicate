import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await emailjs.send(
                "YOUR_SERVICE_ID",  // Replace with your EmailJS Service ID
                "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "YOUR_PUBLIC_KEY"  // Replace with your EmailJS Public Key
            );

            if (response.status === 200) {
                setFormStatus("Message sent successfully! ✅");
                setFormData({ name: "", email: "", message: "" }); // Clear the form
            } else {
                setFormStatus("Failed to send message. Please try again. ❌");
            }
        } catch (error) {
            setFormStatus("Error sending message. Please try again. ❌");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us - Liquidity Syndicate</title>
                <meta name="description" content="Get in touch with us for inquiries, support, or collaborations." />
            </Head>

            <div className={styles.gradientBackground}>
                <div className={styles.container}>
                    {/* Contact Form */}
                    <div className={styles.contactForm}>
                        <h2>Contact Us</h2>
                        <p>Have questions or need support? Reach out to us.</p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>

                        {formStatus && <p className={`${styles.successMessage} ${styles.fadeIn}`}>{formStatus}</p>}
                    </div>

                    {/* Contact Info & Socials */}
                    <div className={styles.infoSection}>
                        <div className={styles.contactInfo}>
                            <h2>Contact Information</h2>
                            <p>Email: <Link href="mailto:info@liquiditysyndicate.com">info@liquiditysyndicate.com</Link></p>
                            <p>Phone: <Link href="tel:+977123456789">+977 123-456-789</Link></p>
                            <p>Address: Kathmandu, Nepal</p>
                        </div>

                        {/* Social Cards */}
                        <div className={styles.socialSection}>
                            <h2>Follow Us</h2>
                            <div className={styles.socialCards}>
                                <div className={styles.socialCard}>
                                    <FaDiscord className={styles.discordIcon} />
                                    <h3>Join Our Discord</h3>
                                    <p>Engage with our trading community.</p>
                                    <Link href="https://discord.gg/YOUR_DISCORD_LINK" target="_blank" className={styles.joinButton}>
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className={styles.faqSection}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faq}>
                        <details>
                            <summary>How can I join Liquidity Syndicate?</summary>
                            <p>Simply join our Discord group. You'll find everything there.</p>
                        </details>
                        <details>
                            <summary>Do you offer mentorship?</summary>
                            <p>Yes, we provide free and paid mentorship programs. Free mentorships are done via pre-planned sessions.</p>
                        </details>
                        <details>
                            <summary>How do I contact support?</summary>
                            <p>You can email us at info@liquiditysyndicate.com or call us directly. (Discord Preferred).</p>
                        </details>
                    </div>
                </div>
            </div>
        </>
    );
}
