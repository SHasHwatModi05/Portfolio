import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: LucideIcon;
  delay?: number;
}

export function SkillCard({ category, skills, icon: Icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="relative group cursor-pointer"
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-cyan/10 to-accent/15 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glass card */}
      <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20 h-full">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-cyan to-accent flex items-center justify-center shadow-lg shadow-primary/50 group-hover:shadow-xl group-hover:shadow-primary/60"
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan group-hover:bg-clip-text transition-all">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-full text-foreground font-medium hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all cursor-default shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
