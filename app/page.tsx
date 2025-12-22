import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import ProjectsInProgress from "./components/ProjectsInProgress";
import FeaturedProjects from "./components/home/FeaturedProjects";
import Timeline from "./components/home/Timeline";
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
