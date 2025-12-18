import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src="/Centro_de_Negocios_Universitario.png"
                    alt="Centro de Negocios Universitario"
                    width={50}
                    height={50}
                    className={styles.logoImage}
                />
            </div>

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
