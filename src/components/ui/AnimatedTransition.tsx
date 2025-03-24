
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedTransition = ({ children, className }: AnimatedTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedTransition;
