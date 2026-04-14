import { useState, useEffect } from 'react';

export function TypingAnimation({ roles }: { roles: string[] }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < role.length) {
            setCurrentText(role.substring(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(role.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-baseline">
      <span>{currentText}</span>
      <span
        className={`ml-1 inline-block w-[3px] h-12 bg-primary transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}
