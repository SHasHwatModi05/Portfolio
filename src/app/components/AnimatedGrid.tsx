export function AnimatedGrid() {
  return (
    <>
      {/* Light mode grid */}
      <div className="dark:hidden absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Dark mode grid */}
      <div className="hidden dark:block absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(96, 165, 250, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(4rem, 4rem);
          }
        }
      `}</style>
    </>
  );
}
