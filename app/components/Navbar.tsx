'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/Centro_de_Negocios_Universitario.png"
                    alt="Centro de Negocios Universitario"
                    width={50}
                    height={50}
                    className={styles.logoImage}
                />
            </Link>

            {/* Hamburger Button */}
            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            {/* Navigation Menu */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <Link href="/quienes-somos" className={styles.navLink} onClick={closeMenu}>
                    ¿Quiénes somos?
                </Link>
                <Link href="/nuestro-equipo" className={styles.navLink} onClick={closeMenu}>
                    Nuestro Equipo
                </Link>
                <Link href="/proyectos" className={styles.navLink} onClick={closeMenu}>
                    Proyectos
                </Link>
                <Link href="/unete-al-equipo" className={`${styles.navLink} ${styles.specialButton}`} onClick={closeMenu}>
                    Únete al Equipo
                </Link>
            </nav>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </header>
    );
}
