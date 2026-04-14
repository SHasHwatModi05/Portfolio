import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { size: 'w-32 h-32', color: 'bg-primary/10', duration: 20, delay: 0, x: '20%', y: '10%' },
    { size: 'w-24 h-24', color: 'bg-accent/10', duration: 25, delay: 2, x: '80%', y: '20%' },
    { size: 'w-40 h-40', color: 'bg-primary/5', duration: 30, delay: 4, x: '60%', y: '70%' },
    { size: 'w-28 h-28', color: 'bg-accent/5', duration: 22, delay: 1, x: '10%', y: '80%' },
    { size: 'w-36 h-36', color: 'bg-primary/8', duration: 28, delay: 3, x: '90%', y: '60%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} rounded-full blur-2xl`}
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
