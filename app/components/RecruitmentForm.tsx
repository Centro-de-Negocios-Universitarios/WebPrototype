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
        "TECNOLOGÍA": "#fe846d", // Naranja
        "OPERACIONES": "#ff91f4", // Morado
        "RECURSOS HUMANOS": "#ffbc53", // Amarillo
        "MARKETING": "#93dfff" // Azul turquesa
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
            description: "Colaborar en la elaboración y actualización de planes, cronogramas y asignación de recursos del proyecto. Facilitar la comunicación entre los equipos, recopilar y analizar información básica para la toma de decisiones, dar seguimiento a la implementación de mejoras sugeridas por Experiencia de Usuario y elaborar informes finales con insights, resultados y recomendaciones para futuras ediciones."
        },
        {
            name: "OPERACIONES",
            position: "AUXILIAR DE LOGÍSTICA",
            description: "Contactar y dar seguimiento a ponentes, redactar documentación para el préstamo de espacios, instalaciones, mobiliario y materiales. Gestionar la disponibilidad de recursos mediante planes de contingencia, dar seguimiento a los préstamos requeridos y realizar el inventario de los recursos existentes."
        },
        {
            name: "OPERACIONES",
            position: "AUXILIAR DE EXPERIENCIA DEL USUARIO",
            description: "Recabar y analizar la experiencia de ponentes, participantes y stakeholders mediante encuestas, entrevistas y retroalimentación. Generar indicadores de experiencia del usuario y compartir la información con Planeación de Proyectos para apoyar la toma de decisiones y la implementación de mejoras."
        },
        {
            name: "RECURSOS HUMANOS",
            position: "AUXILIAR DE GESTIÓN DE TALENTO",
            description: "Apoyar en los procesos de reclutamiento, selección, onboarding y offboarding de los miembros del CNU. Colaborar en capacitaciones, desarrollo y seguimiento de integrantes y áreas para la detección de necesidades de capacitación y diagnóstico organizacional. Apoyar en la planeación de reuniones de integración y en el fortalecimiento de la comunicación interna."
        },
        {
            name: "MARKETING",
            position: "CONTENT MANAGER",
            description: "Apoyar en los procesos de reclutamiento, selección, onboarding y offboarding de los miembros del CNU. Colaborar en capacitaciones, desarrollo y seguimiento de integrantes y áreas para la detección de necesidades de capacitación y diagnóstico organizacional. Apoyar en la planeación de reuniones de integración y en el fortalecimiento de la comunicación interna."
        },
        {
            name: "MARKETING",
            position: "COMMUNITY MANAGER",
            description: "Gestionar las redes sociales del CNU mediante la creación de parrillas de contenido para la difusión de proyectos. Brindar atención y resolver consultas de la comunidad, monitorear conversaciones y analizar métricas de desempeño, así como organizar y promocionar eventos virtuales para fortalecer la participación de la comunidad."
        },
        {
            name: "MARKETING",
            position: "RELACIONES PÚBLICAS",
            description: "Apoyar en la planeación y ejecución de estrategias de relaciones públicas para promover la imagen y proyectos del CNU. Difundir eventos y elaborar materiales promocionales, asistir y gestionar invitaciones a eventos de emprendimiento, desarrollar alianzas y patrocinios, y elaborar reportes de alcance en redes sociales para su presentación a patrocinadores y stakeholders."
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
