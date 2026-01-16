"use client";

import { useState, useRef } from "react";
import styles from "./RecruitmentForm.module.css";

export default function RecruitmentForm() {
    const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Mapeo de colores por área
    const areaColors: { [key: string]: string } = {
        "TECNOLOGÍA": "#FF8C42", // Naranja
        "OPERACIONES": "#9B59B6", // Morado
        "RECURSOS HUMANOS": "#E74C3C" // Rojo
    };

    const areas = [
        {
            name: "TECNOLOGÍA",
            position: "DISEÑADOR UX/UI",
            description: "Diseñar y desarrollar la estructura visual y estética de la página web con la finalidad de mantenerla actualizada, moderna y funcional. Diseñar elementos interactivos y visuales que mejoren la experiencia del usuario (formularios, menús, sliders, etc.). Realizar investigaciones de usuarios mediante encuestas, entrevistas, análisis de datos o pruebas de usabilidad."
        },
        {
            name: "TECNOLOGÍA",
            position: "PROGRAMADOR (A) FRONT-END",
            description: "Es el encargado de diseñar, desarrollar y mantener la interfaz de usuario, garantizando que sean funcionales, atractivas y fáciles de usar."
        },
        {
            name: "TECNOLOGÍA",
            position: "PROGRAMADOR (A) BACK-END",
            description: "Es el encargado de diseñar, desarrollar y mantener la lógica del servidor, las bases de datos y las APIs de las aplicaciones, asegurando que sean escalables, seguras y eficientes para soportar las funcionalidades del front-end."
        },
        {
            name: "OPERACIONES",
            position: "AUXILIAR DE PLANEACIÓN DE PROYECTOS",
            description: "Planea y mantén proyectos en marcha de forma eficiente y organizada."
        },
        {
            name: "OPERACIONES",
            position: "AUXILIAR DE LOGÍSTICA",
            description: "Gestiona y garantiza la ejecución de operaciones en estádares óptimos, previendo cambios inesperados."
        },
        {
            name: "OPERACIONES",
            position: "AUXILIAR DE EXPERIENCIA DEL USUARIO",
            description: "Recopila la experiencias de los usuarios para mejorar la calidad de los procesos y servicios."
        },
        {
            name: "RECURSOS HUMANOS",
            position: "AUXILIAR DE GESTIÓN DE TALENTO",
            description: "Persona encargada de apoyar en el reclutamiento, selección, capacitación y seguimiento de los miembros del CNU. Apoyo en el proceso de reclutamiento y selección, y onboarding de los miembros. Apoyar en las capacitaciones a los miembros del CNU Seguimiento a los miembros y áreas para DNC Apoyo en el proceso de offboarding de los miembros del CNU."
        }
    ];

    const handlePrevArea = () => {
        setAnimationDirection('right');
        setTimeout(() => setAnimationDirection(null), 500);
        setCurrentAreaIndex((prev) => (prev === 0 ? areas.length - 1 : prev - 1));
    };

    const handleNextArea = () => {
        setAnimationDirection('left');
        setTimeout(() => setAnimationDirection(null), 500);
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
                    className={`${styles.areaCard} ${animationDirection === 'left' ? styles.slideLeft :
                            animationDirection === 'right' ? styles.slideRight : ''
                        }`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Barra de color superior característica del área */}
                    <div
                        className={styles.colorBar}
                        style={{ backgroundColor: areaColors[currentArea.name] }}
                    />
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
