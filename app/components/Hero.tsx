import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Anyone can make a great video.
                    <br />
                    <span className={styles.subtitle}>That means you.</span>
                </h1>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/equipo.png"
                        alt="Equipo CNU"
                        width={850}
                        height={560}
                        className={styles.teamImage}
                    />
                </div>

                <p className={styles.description}>
                    El Centro de Negocios Universitario es una agrupación estudiantil que
                    constantemente busca innovar en nuevos proyectos, con la finalidad de que los miembros desarrollen y
                    fortalezcan habilidades blandas y duras.
                </p>
            </div>
        </section>
    );
}
