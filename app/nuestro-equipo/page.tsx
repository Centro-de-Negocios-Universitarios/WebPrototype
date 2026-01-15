import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";

export default function NuestroEquipoPage() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Nuestro Equipo</h1>

                <p className={styles.description}>
                    Conoce a las personas que hacen posible el Centro de Negocios Universitario.
                </p>

                <div className={styles.constructionContainer}>
                    <div className={styles.constructionIcon}>🚧</div>
                    <h2 className={styles.constructionTitle}>Página en Construcción</h2>
                    <p className={styles.constructionText}>
                        ¡Estamos trabajando en esta sección para mostrarte al increíble equipo del CNU!
                        <br />
                        Muy pronto podrás conocer a todas las personas que hacen posible nuestros proyectos.
                    </p>
                    <p className={styles.constructionEmoji}>⚡ Vuelve pronto ⚡</p>
                </div>
            </main>

            <Footer />
        </>
    );
}
