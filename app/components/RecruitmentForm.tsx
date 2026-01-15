"use client";

import { useState, useRef } from "react";
import styles from "./RecruitmentForm.module.css";

export default function RecruitmentForm() {
    const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const areas = [
        {
            name: "TECNOLOGÍA",
            position: "MIEMBRO EN TECNOLOGÍA",
            description: "Es un área innovadora dedicada aldesarrollo e implementación de sistemasdigitales que facilitan las tareas del CNU ypromueve el emprendimiento a través deproyectos y capacitaciones tecnológicaspara la comunidad emprendedora."
        },
        {
            name: "OPERACIONES",
            position: "MIEMBRO EN OPERACIONES",
            description: "Es el área encargada de la planeación, logística y experiencia del usuario en proyectos del CNU. Sus funciones incluyen la gestión de proyectos, logística de sesiones, reconocimiento de participantes, entrega de premios y asesorías, siempre cuidando la experiencia del usuario."
        },
        {
            name: "MARKETING",
            position: "MIEMBRO EN MARKETING",
            description: "Se encarga de difundir cursos, talleres y conferencias del Centro de Negocios Universitario cada semestre para atraer personas del mercado y convertirlas en consumidores. Esto se logra identificando clientes meta, analizando sus necesidades, planificando estrategias, ejecutando actividades y controlando los avances y logros."
        },
        {
            name: "RECURSOS HUMANOS",
            position: "MIEMBRO DE RRHH",
            description: "Se encarga de identificar el talento humano y su desempeño en el CNU, asegurando un funcionamiento óptimo y eficiente en el desarrollo de actividades, integración y crecimiento de los miembros, creando una experiencia excepcional que facilite lograr los objetivos organizacionales."
        }
    ];

    const handlePrevArea = () => {
        setCurrentAreaIndex((prev) => (prev === 0 ? areas.length - 1 : prev - 1));
    };

    const handleNextArea = () => {
        setCurrentAreaIndex((prev) => (prev === areas.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeThreshold = 50; // minimum distance for a swipe
        const difference = touchStartX.current - touchEndX.current;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Swiped left - next area
                handleNextArea();
            } else {
                // Swiped right - previous area
                handlePrevArea();
            }
        }
    };

    const currentArea = areas[currentAreaIndex];

    return (
        <div className={styles.recruitmentContainer}>
            {/* Areas Carousel */}
            <div className={styles.carouselSection}>
                <button
                    onClick={handlePrevArea}
                    className={styles.carouselButton}
                    aria-label="Área anterior"
                >
                    ‹
                </button>

                <div
                    className={styles.areaCard}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <h2 className={styles.areaTitle}>
                        ÁREA: {currentArea.name}
                    </h2>
                    <h3 className={styles.areaPosition}>
                        {currentArea.position}
                    </h3>
                    <p className={styles.areaDescription}>
                        {currentArea.description}
                    </p>
                </div>

                <button
                    onClick={handleNextArea}
                    className={styles.carouselButton}
                    aria-label="Siguiente área"
                >
                    ›
                </button>
            </div>

            {/* Carousel Indicators */}
            <div className={styles.indicators}>
                {areas.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentAreaIndex ? styles.indicatorActive : ""}`}
                        onClick={() => setCurrentAreaIndex(index)}
                        aria-label={`Ir a área ${index + 1}`}
                    />
                ))}
            </div>

            {/* Google Forms Embed */}
            <div className={styles.formWrapper}>
                <h2 className={styles.formTitle}>REGISTRO</h2>

                <div className={styles.iframeContainer}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfPw-79vNwdmLaOQ3jO0IMgZeLPqVDH80AFqFeQzRX0OQ8LvQ/viewform?embedded=true"
                        className={styles.googleForm}
                        title="Formulario de registro CNU"
                    >
                        Cargando…
                    </iframe>
                </div>
            </div>
        </div>
    );
}
