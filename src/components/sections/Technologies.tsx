import { technologies } from "@/data/tecnologies";
import { containerVariants, itemVariants } from "@/lib/constants";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const TechnologiesSection = () => {
  return (
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
  );
};

export default TechnologiesSection;
