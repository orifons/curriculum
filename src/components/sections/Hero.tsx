import { personalInfo } from "@/data/personal-info";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const HeroSection = () => {
  return (
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
                  alt={personalInfo.firstName}
                />
                <AvatarFallback style={{ fontSize: 40 }}>
                  {personalInfo.firstName
                    .charAt(0)
                    .concat(personalInfo.lastName.charAt(0))}
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
                {personalInfo.firstName.concat(" ", personalInfo.lastName)}
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
  );
};

export default HeroSection;
