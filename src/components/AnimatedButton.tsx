import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
// No useEffect or useState needed for hydration-safe rendering

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: AnimatedButtonProps) {
  const baseClasses = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2";
  const variantClasses = {
    primary: "bg-brand-primary text-black hover:bg-brand-primary-dark shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black"
  };
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
