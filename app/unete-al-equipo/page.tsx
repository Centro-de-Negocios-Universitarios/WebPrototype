import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JoinCTA from "../components/JoinCTA";
import styles from "./page.module.css";

export default function UneteAlEquipoPage() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Únete al Equipo</h1>

                <p className={styles.description}>
                    ¿Te gustaría formar parte del Centro de Negocios Universitario?
                    Conoce cómo puedes unirte a nuestro equipo.
                </p>

                <JoinCTA />

                {/* TODO: Agregar formulario o proceso de reclutamiento */}
            </main>

            <Footer />
        </>
    );
}
