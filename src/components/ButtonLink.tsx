import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { type LucideIcon } from "lucide-react";

interface ButtonLinkProps {
  label: string;
  destiny: string;
  className?: string;
}

interface ButtonLinkProps {
  label: string;
  destiny: string;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "solid" | "outline";
}

export const ButtonLink = ({
  label,
  destiny,
  className,
  icon: Icon,
  iconPosition = "right",
  variant = "solid",
}: ButtonLinkProps) => {
  const base =
    "flex items-center gap-2 font-display text-base tracking-widest px-6 py-2 rounded-sm transition-all duration-200 active:scale-95";

  const variants = {
    solid: "bg-neon text-background hover:brightness-110 hover:shadow-neon-md",
    outline:
      "border-2 border-neon text-neon hover:bg-neon/10 hover:shadow-neon-sm",
  };

  return (
    <Link to={destiny} className={twMerge(base, variants[variant], className)}>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {label}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </Link>
  );
};
