import { motion, useMotionValue, useTransform } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  featured = false,
  delay = 0
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary/50 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700" />

      <div className="relative h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            Featured
          </div>
        )}

        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors group/btn"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
