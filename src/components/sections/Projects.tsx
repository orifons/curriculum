import { projects } from "@/data/projects";
import { containerVariants, itemVariants } from "@/lib/constants";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

const ProjectsSection = () => {
  return (
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
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
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
  );
};

export default ProjectsSection;
