import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsInProgress from "./components/ProjectsInProgress";
import FeaturedProjects from "./components/FeaturedProjects";
import Timeline from "./components/Timeline";
import JoinCTA from "./components/JoinCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsInProgress />
      <FeaturedProjects />
      <Timeline />
      <JoinCTA />
      <Footer />
    </>
  );
}
