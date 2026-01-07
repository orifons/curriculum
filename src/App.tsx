import { useEffect, useState } from "react";
import HeroSection from "./components/sections/Hero";
import ProjectsSection from "./components/sections/Projects";
import SkillsSection from "./components/sections/Skills";
import TechnologiesSection from "./components/sections/Technologies";
import ToolsSection from "./components/sections/Tools";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading)
    return (
      <div className="text-center">
        <h1 className="text-2xl">LOADING</h1>
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-foreground bg-linear-to-br from-background via-background to-muted/20">
      {/* Header/Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* Tools Section */}
        <ToolsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
