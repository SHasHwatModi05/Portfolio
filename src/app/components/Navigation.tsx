import { motion } from 'motion/react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <motion.span
              className="text-primary"
              whileHover={{ color: "#0d9488" }}
            >
              &lt;Shashwat
            </motion.span>
            <span className="text-foreground"> /&gt;</span>
          </motion.div>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-primary transition-colors font-semibold text-base relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-base"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
