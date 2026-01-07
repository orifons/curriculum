import { skills } from "@/data/skills";
import { containerVariants, itemVariants } from "@/lib/constants";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const SkillsSection = () => {
  return (
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
  );
};

export default SkillsSection;
