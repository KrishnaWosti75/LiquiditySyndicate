import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling Down → Hide Navbar
                setShowNavbar(false);
            } else {
                // Scrolling Up → Show Navbar
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden}`}>
            <div className={styles.logo}>
                <Link href="/">Liquidity Syndicate</Link>
            </div>

            {/* Hamburger icon */}
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </div>

            {/* Nav links */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link href="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
                <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
}
