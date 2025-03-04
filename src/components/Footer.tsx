import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribed with:", email);
        setEmail(""); // Clear input after submission
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Left Section: Logo & Newsletter */}
                <div className={styles.footerLeft}>
                    <h2>Liquidity Syndicate</h2>
                    <p>Stay ahead in trading. Subscribe for market updates.</p>
                    <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>

                {/* Right Section: Social Media */}
                <div className={styles.footerRight}>
                    <h3>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        <Link href="https://facebook.com/LiquiditySyndicate" passHref>
                            <FaFacebook size={30} />
                        </Link>
                        <Link href="https://twitter.com/LiquiditySyndicate" passHref>
                            <FaTwitter size={30} />
                        </Link>
                        <Link href="https://instagram.com/LiquiditySyndicate" passHref>
                            <FaInstagram size={30} />
                        </Link>
                        <Link href="https://discord.gg/LiquiditySyndicate" passHref>
                            <FaDiscord size={30} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Liquidity Syndicate. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
