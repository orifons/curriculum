import { tools } from "@/data/tools";
import { containerVariants, itemVariants } from "@/lib/constants";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const ToolsSection = () => {
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
  );
};

export default ToolsSection;
