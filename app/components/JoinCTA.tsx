import Link from "next/link";
import styles from "./JoinCTA.module.css";

export default function JoinCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Link href="/unete-al-equipo" className={styles.button}>
                    ¡ÚNETE!
                </Link>
            </div>
        </section>
    );
}
