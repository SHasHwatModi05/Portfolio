import { motion } from 'motion/react';

export function FloatingParticles() {
  const particlesLight = [
    { size: 400, color: 'rgba(59, 130, 246, 0.08)', duration: 25, delay: 0, x: '10%', y: '20%' },
    { size: 350, color: 'rgba(6, 182, 212, 0.06)', duration: 30, delay: 3, x: '70%', y: '10%' },
    { size: 450, color: 'rgba(16, 185, 129, 0.05)', duration: 28, delay: 1, x: '80%', y: '60%' },
    { size: 300, color: 'rgba(59, 130, 246, 0.04)', duration: 22, delay: 5, x: '20%', y: '70%' },
    { size: 380, color: 'rgba(6, 182, 212, 0.05)', duration: 26, delay: 2, x: '50%', y: '40%' },
  ];

  const particlesDark = [
    { size: 400, color: 'rgba(96, 165, 250, 0.15)', duration: 25, delay: 0, x: '10%', y: '20%' },
    { size: 350, color: 'rgba(34, 211, 238, 0.12)', duration: 30, delay: 3, x: '70%', y: '10%' },
    { size: 450, color: 'rgba(52, 211, 153, 0.1)', duration: 28, delay: 1, x: '80%', y: '60%' },
    { size: 300, color: 'rgba(96, 165, 250, 0.08)', duration: 22, delay: 5, x: '20%', y: '70%' },
    { size: 380, color: 'rgba(34, 211, 238, 0.1)', duration: 26, delay: 2, x: '50%', y: '40%' },
  ];

  return (
    <>
      {/* Light mode particles */}
      <div className="dark:hidden fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particlesLight.map((particle, index) => (
          <motion.div
            key={`light-${index}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Dark mode particles */}
      <div className="hidden dark:block fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particlesDark.map((particle, index) => (
          <motion.div
            key={`dark-${index}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              left: particle.x,
              top: particle.y,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  );
}
