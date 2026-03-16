import { ButtonLink } from "../ButtonLink";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-surface flex items-center justify-between px-6 h-15">
      <span className="font-display text-4xl text-neon tracking-wide">
        OLIMPI<span className="text-soft-white">QUIZ</span>
      </span>

      <ButtonLink label="INICIO" destiny="/" />
    </header>
  );
};
