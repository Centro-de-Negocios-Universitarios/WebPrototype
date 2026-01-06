"use client";

import { useState } from "react";
import styles from "./RecruitmentForm.module.css";

export default function RecruitmentForm() {
    const [currentAreaIndex, setCurrentAreaIndex] = useState(0);

    const areas = [
        {
            name: "TECNOLOGÍA",
            position: "PROGRAMADOR (A) FULL",
            description: "Únete a nuestro equipo de tecnología y desarrolla soluciones innovadoras. Trabajarás en proyectos web modernos utilizando tecnologías de vanguardia como React, Next.js y más. Buscamos personas apasionadas por la programación que quieran crecer profesionalmente."
        },
        {
            name: "DISEÑO",
            position: "DISEÑADOR (A) UX/UI",
            description: "Forma parte del equipo creativo del CNU. Diseña experiencias visuales impactantes y funcionales. Trabajarás en branding, interfaces de usuario y materiales de comunicación para todos nuestros proyectos y eventos."
        },
        {
            name: "MARKETING",
            position: "ESPECIALISTA EN MARKETING",
            description: "Impulsa la presencia del CNU en diferentes plataformas. Crea estrategias de contenido, gestiona redes sociales y desarrolla campañas creativas que conecten con la comunidad estudiantil y empresarial."
        },
        {
            name: "RECURSOS HUMANOS",
            position: "COORDINADOR (A) DE RRHH",
            description: "Gestiona el talento humano del CNU. Participa en procesos de reclutamiento, desarrollo de personal, y creación de un ambiente de trabajo colaborativo y motivador para todos los miembros."
        }
    ];

    const handlePrevArea = () => {
        setCurrentAreaIndex((prev) => (prev === 0 ? areas.length - 1 : prev - 1));
    };

    const handleNextArea = () => {
        setCurrentAreaIndex((prev) => (prev === areas.length - 1 ? 0 : prev + 1));
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

                <div className={styles.areaCard}>
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
                        src="https://docs.google.com/forms/d/e/1FAIpQLScmqpzFGkTZNkBD-ODgrjSL85X1DjWNUed-8wGM0-L5-NRbEA/viewform?embedded=true"
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
