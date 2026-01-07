import { personalInfo } from "@/data/personal-info";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center py-8 border-t"
    >
      <p className="text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        {personalInfo.firstName.concat(" ", personalInfo.lastName)}. Desarrollado
        con React, TypeScript y Tailwind CSS.
      </p>
    </motion.footer>
  );
};

export default Footer;
