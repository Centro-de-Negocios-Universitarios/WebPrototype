import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>CNU</div>

            <nav className={styles.nav}>
                <Link href="/quienes-somos" className={styles.navLink}>
                    ¿Quiénes somos?
                </Link>
                <Link href="/equipo" className={styles.navLink}>
                    Nuestro Equipo
                </Link>
                <Link href="/proyectos" className={styles.navLink}>
                    Proyectos
                </Link>
                <Link href="/unete" className={styles.navLink}>
                    Únete al Equipo
                </Link>
            </nav>
        </header>
    );
}
