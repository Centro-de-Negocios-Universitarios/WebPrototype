import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecruitmentForm from "../components/RecruitmentForm";
import styles from "./page.module.css";

export default function UneteAlEquipoPage() {
    return (
        <>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>¡ÚNETE AL EQUIPO!</h1>

                <p className={styles.description}>
                    ¿Te gustaría formar parte del Centro de Negocios Universitario?
                    Conoce nuestras áreas de trabajo y postúlate para unirte a nuestro equipo.
                </p>

                <RecruitmentForm />
            </main>

            <Footer />
        </>
    );
}
