import styles from "./Timeline.module.css";

export default function Timeline() {
    const events = [
        {
            date: "2004",
            description: "En el 2004 se fundó el Centro de Negocios de Ingeniería Industrial (CNII), con la iniciativa del estudiante de Ingeniería Gabriel Regalado y con el apoyo, hasta su salida en 2006, del Ingeniero Antonio Cordero, Jefe del Departamento de Ingeniería Industrial. A partir de ese año, la Maestra Ingeniera Silvina Hernández es quien ha brindado apoyo a la agrupación estudiantil.",
            side: "left"
        },
        {
            date: "2006",
            description: "Las actividades del CNII no consistían únicamente en brindar asesoría, sino que, por medio de cursos y talleres, se buscaba compartir y difundir el emprendimiento. Bajo este precepto, las estudiantes de Administración, Paola Dorado y Lluvia Chávez diseñaron el curso Programa de Innovación y Creación de Empresas, ahora conocido como Business Apprentice War (BAW), que tiene su primera emisión en el año 2006. Hoy en día, BAW es el curso principal de nuestra organización.",
            side: "right"
        },
        {
            date: "2010",
            description: "En el año 2010, la licenciada Paola Dorado abre la Incubadora de la Facultad de Ingeniería, inspirada con los objetivos del CNII, y para el año 2016, bajo la presidencia de Jorge Chávez, se logra la refundación de la organización bajo el nombre de Centro de Negocios Universitario (CNU).",
            side: "left"
        },
        {
            date: "2019",
            description: "En el 2019, bajo la Presidencia de Atl Hernández, se modificaron aspectos de la identidad corporativa del CNU con la intención de crecer y fomentar la tecnologización dentro de la organización. La implementación de estos nuevos ideales, ha permitido nuestro desarrollo y fomentado nuestro impacto tanto interna como externamente. Como reflejo de esto, el CNU a lo largo de su trayectoría ha buscado alianzas estratégicas con empresas, entre las que destacan: Pastelerías el Globo, IBM, Grupo Modelo y General Electric; actualmente con Buna, Consulthinks, IMEF ingeniería y Kubo.financiero. Permanecemos en crecimiento constante.",
            side: "right"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>NUESTRA HISTORIA</h2>

                <div className={styles.timeline}>
                    <div className={styles.timelineLine}></div>

                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`${styles.timelineItem} ${styles[event.side]}`}
                        >
                            {event.side === "left" ? (
                                <>
                                    <div className={styles.content}>
                                        <p className={styles.description}>{event.description}</p>
                                    </div>
                                    <div className={styles.circle}>
                                        <span className={styles.year}>{event.date}</span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.circle}>
                                        <span className={styles.year}>{event.date}</span>
                                    </div>
                                    <div className={styles.content}>
                                        <p className={styles.description}>{event.description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
