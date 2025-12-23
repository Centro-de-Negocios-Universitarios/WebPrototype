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

                {/* TODO: Agregar contenido del equipo */}
            </main>

            <Footer />
        </>
    );
}
