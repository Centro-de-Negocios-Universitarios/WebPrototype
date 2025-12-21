import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../components/WhoWeAre.module.css";
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
            </main>

            <Footer />
        </>

    );
}