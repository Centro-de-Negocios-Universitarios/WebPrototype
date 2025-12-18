import Image from "next/image";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "Feria de las Agrupaciones",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
            image: "/featured-1.jpg"
        },
        {
            title: "BAW",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "/featured-2.jpg"
        },
        {
            title: "Semana DIMEI",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "/featured-3.jpg"
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>PROYECTOS DESTACADOS</h2>

                <div className={styles.projectsList}>
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
