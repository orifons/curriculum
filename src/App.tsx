import { ModeToggle } from "@/components/theme/mode-theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { personalInfo } from "@/data/personal-info";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { technologies } from "@/data/tecnologies";
import { tools } from "@/data/tools";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-linear-to-br from-background via-background to-muted/20">
      {/* Header/Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Portfolio</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#sobre-mi">Sobre Mí</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#habilidades">Habilidades</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#proyectos">Proyectos</a>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </motion.nav>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.section
          id="sobre-mi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar className="h-32 w-32 border-4 border-primary">
                    <AvatarImage
                      src={personalInfo.avatar}
                      alt={personalInfo.fistName}
                    />
                    <AvatarFallback style={{ fontSize: 40 }}>
                      {personalInfo.fistName.charAt(0) +
                        personalInfo.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-2 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                  >
                    {personalInfo.fistName + " " + personalInfo.lastName}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-muted-foreground mb-4"
                  >
                    {personalInfo.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground mb-6"
                  >
                    {personalInfo.bio}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {personalInfo.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {personalInfo.email}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 justify-center md:justify-start"
                  >
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={`mailto:${personalInfo.email}`}>
                        <Mail className="h-4 w-4" />
                        Contactar
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="habilidades"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Habilidades
            </h2>
            <Separator className="mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-linear-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Tecnologías
            </h2>
            <Separator className="mb-6" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <h3 className="font-semibold mb-1">{tech.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Herramientas
            </h2>
            <Separator className="mb-6" />
          </motion.div>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge variant="outline" className="text-sm px-3 py-1.5">
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="proyectos"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Proyectos
            </h2>
            <Separator className="mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`h-full ${
                    project.featured ? "border-primary border-2" : ""
                  } hover:shadow-lg transition-shadow`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {project.featured && (
                          <Badge className="mb-2" variant="default">
                            <Star className="h-3 w-3 mr-1" />
                            Destacado
                          </Badge>
                        )}
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Proyecto
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.fistName}{" "}
            {personalInfo.lastName}. Desarrollado con React, TypeScript y
            Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
