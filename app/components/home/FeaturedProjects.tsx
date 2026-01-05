import Image from "next/image";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "Feria de las Agrupaciones",
            description: "Un evento anual en el que el CNU participa con el objetivo de darse a conocer ante la comunidad, presentando tanto sus nuevos proyectos como sus procesos de reclutamiento.",
            image: "/featured-1.jpg"
        },
        {
            title: "BAW",
            description: "Business Apprentice War, el proyecto insignia del CNU, es un evento que busca incentivar a la comunidad a emprender de manera segura, brindándoles un seguimiento personalizado a sus propuestas a través de una serie de talleres enfocados en áreas clave de la creación de un negocio.",
            image: "/BAW.jpeg"
        },
        {
            title: "Semana DIMEI",
            description: "Un evento anual en el que se presentan proyectos, exposiciones, hitos y demás actividades de vinculación académica y profesional. El CNU participa en algunas de estas categorías, asegurándose de mantener un vínculo constante tanto con la comunidad estudiantil como con el sector empresarial.",
            image: "/Eventos.JPG"
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
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className={styles.projectImage}
                                />
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
