import { ButtonLink } from "../components/ButtonLink";
import {
  CircleQuestionMark,
  Dumbbell,
  Gamepad,
  type LucideIcon,
} from "lucide-react";

interface Stat {
  valor: string;
  label: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  { valor: "10+", label: "Modalidades", icon: Dumbbell },
  { valor: "200+", label: "Perguntas", icon: CircleQuestionMark },
  { valor: "3", label: "Dificuldades", icon: Gamepad },
];

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-60px)] bg-background px-6 gap-10">
      <span className="badge">TEMPORADA 2026</span>

      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-display text-7xl md:text-9xl text-soft-white leading-none tracking-wide">
          OLIMPI<span className="text-neon">QUIZ</span>
        </h1>
        <p className="font-body text-muted text-lg md:text-xl max-w-md">
          Teste seus conhecimentos sobre o mundo dos esportes olímpicos
        </p>
      </div>

      <ButtonLink
        label="COMEÇAR"
        destiny="/modalidades"
        className="px-18 py-5 text-4xl"
      />
      <div className="flex gap-8 md:gap-16 mt-4">
        {stats.map(({ valor, label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <Icon size={28} className="text-neon mb-1" />
            <span className="font-display text-4xl text-neon">{valor}</span>
            <span className="font-body text-muted text-sm tracking-widest uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-surface" />
    </div>
  );
};
