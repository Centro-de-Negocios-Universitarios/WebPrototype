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
                    <div className={styles.cardYellow}></div>
                    <div className={styles.cardRed}></div>
                </div>
            </main>

            <Footer />
        </>

    );
}