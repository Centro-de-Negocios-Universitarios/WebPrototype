import styles from "./JoinCTA.module.css";

export default function JoinCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <a href="#contact" className={styles.button}>
                    ¡ÚNETE!
                </a>
            </div>
        </section>
    );
}
