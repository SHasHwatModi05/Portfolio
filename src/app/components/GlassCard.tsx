import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className = '', hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      className={`
        relative group
        bg-white/80 backdrop-blur-xl
        border border-gray-200
        rounded-2xl
        shadow-lg
        hover:shadow-2xl hover:shadow-primary/10
        hover:border-primary/50
        transition-all duration-300
        ${className}
      `}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-cyan/0 to-accent/0 group-hover:from-primary/5 group-hover:via-cyan/3 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
