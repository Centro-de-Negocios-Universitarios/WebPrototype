import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsInProgress from "../components/ProjectsInProgress";
import styles from "./page.module.css";

export default function ProyectosPage() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>Nuestros Proyectos</h1>

                <p className={styles.description}>
                    Descubre los proyectos en los que estamos trabajando actualmente.
                </p>

                <ProjectsInProgress />

                {/* TODO: Agregar más contenido de proyectos */}
            </main>

            <Footer />
        </>
    );
}
