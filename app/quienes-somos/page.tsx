import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
export default function WhoWeArePage() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>¿Quiénes somos?</h1>

                <p className={styles.description}>
                    El Centro de Negocios Universitario es una agrupación estudiantil que constantemente busca
                    innovar en nuevos proyectos, con la finalidad y objetivo de que los miembros desarrollen y
                    fortalezcan habilidades blandas y duras.
                </p>

                <div className={styles.cards}>
                    <div className={styles.cardYellow}>
                        <h2 className={styles.cardTitle}>MISIÓN</h2>
                        <p className={styles.cardText}>
                            Formar...
                        </p>
                    </div>

                    <div className={styles.cardRed}>
                        <h2 className={styles.cardTitle}>VISIÓN</h2>
                        <p className={styles.cardText}>
                            Ir más allá...
                        </p>
                    </div>
                </div>

                <div className={styles.largeCard}>
                    <div className={styles.largeCardContent}>

                        <div className={styles.leftColumn}>
                            <div className={styles.imagePlaceholder}></div>
                            <h2 className={styles.largeCardTitle}>
                                NEGOCIOS EN LA COMUNIDAD UNIVERSITARIA
                            </h2>
                        </div>

                        <div className={styles.rightColumn}>
                            <p className={styles.largeCardText}>
                                La universidad es el único momento en que tienes tiempo, recursos y libertad para equivocarte sin que te cueste una fortuna. El emprendimiento y los negocios te enseñan a crear valor y a no depender de nadie; las actividades extracurriculares te dan liderazgo y una red que ningún título iguala. Juntos te convierten en el profesionista que todos quieren contratar… o en quien los contrata. Aprovéchalo ahora.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            <div className={styles.yellowBanner}>
                <div className={styles.marquee}>
                    <div className={styles.marqueeTrack}>
                        <span>¡HEY, EMPRENDAMOS!</span>
                        <span>¡HEY, EMPRENDAMOS!</span>
                        <span>¡HEY, EMPRENDAMOS!</span>

                        <span>¡HEY, EMPRENDAMOS!</span>
                        <span>¡HEY, EMPRENDAMOS!</span>
                        <span>¡HEY, EMPRENDAMOS!</span>
                    </div>
                </div>
            </div>

            <section className={styles.impactSection}>
                <h2 className={styles.impactTitle}>IMPACTO</h2>
            </section>

            <div className={styles.impactWrapper}>
                <button className={styles.arrowButton}>‹</button>
                <div className={styles.impactCards}>

                    <div className={styles.impactCard}>
                        <div className={styles.impactImage}></div>

                        <p className={styles.impactText}>
                            "En el CNU aprendi el valor real del trabajo en equipo y la importancia
                            de una buena organización"
                        </p>

                        <span className={styles.impactAuthor}>
                            Tamal de mole, 2025
                        </span>
                    </div>

                    <div className={styles.impactCard}>
                        <div className={styles.impactImage}></div>

                        <p className={styles.impactText}>
                            "En el CNU aprendi el valor real del trabajo en equipo y la importancia
                            de una buena organización"
                        </p>

                        <span className={styles.impactAuthor}>
                            Tamal de mole, 2025
                        </span>
                    </div>

                    <div className={styles.impactCard}>
                        <div className={styles.impactImage}></div>

                        <p className={styles.impactText}>
                            "En el CNU aprendi el valor real del trabajo en equipo y la importancia
                            de una buena organización"
                        </p>

                        <span className={styles.impactAuthor}>
                            Tamal de mole, 2025
                        </span>
                    </div>
                </div>

                <button className={styles.arrowButton}>›</button>
            </div>
            <Footer />
        </>

    );
}