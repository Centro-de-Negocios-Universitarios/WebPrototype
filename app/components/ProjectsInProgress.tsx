import Image from "next/image";
import styles from "./ProjectsInProgress.module.css";

export default function ProjectsInProgress() {
    const projects = [
        {
            title: "Podcast: Chismesito Emprendedor",
            description: "Con la finalidad de desarrollar habilidades comunicativas, creatividad  y expresion personal.  El podcast de chismesito emprendedor lleva a la comunidad interesada en el emprendimiento una conversacion que sera de ayuda para llevar a cabo sus proyectos personales.",
            image: "/project-placeholder-2.jpg"
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>PROYECTOS EN DESARROLLO</h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <span>📸</span>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
