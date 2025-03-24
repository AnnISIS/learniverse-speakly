
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isDark?: boolean;
  noPadding?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  isDark = false,
  noPadding = false,
  ...props 
}) => {
  return (
    <div
      className={cn(
        isDark ? "glass-card-dark" : "glass-card",
        "rounded-xl transition-all duration-300",
        !noPadding && "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
