import HeroSection from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";
import TechnologiesSection from "@/components/sections/Technologies";
import ToolsSection from "@/components/sections/Tools";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageLoader from "@/components/shared/PageLoader";
import { AnimatePresence, motion } from "framer-motion";
import useLoad from "./hooks/useLoad";

const App = () => {
  const { isLoading } = useLoad();

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="min-h-screen bg-background text-foreground bg-linear-to-br from-background via-background to-muted/20"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
