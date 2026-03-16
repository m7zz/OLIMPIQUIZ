import type { Dificuldade } from "../../data/mockModalities";

interface DifficultyCardProps {
  dificuldade: Dificuldade;
  total: number;
  onClick: () => void;
}

const CONFIG: Record<
  Dificuldade,
  { label: string; tempo: number; cor: string; corBg: string }
> = {
  facil: {
    label: "FÁCIL",
    tempo: 30,
    cor: "border-success text-success",
    corBg: "hover:bg-success/5",
  },
  medio: {
    label: "MÉDIO",
    tempo: 20,
    cor: "border-neon text-neon",
    corBg: "hover:bg-neon/5",
  },
  dificil: {
    label: "DIFÍCIL",
    tempo: 12,
    cor: "border-error text-error",
    corBg: "hover:bg-error/5",
  },
};

export const DifficultyCard = ({
  dificuldade,
  total,
  onClick,
}: DifficultyCardProps) => {
  const { label, tempo, cor, corBg } = CONFIG[dificuldade];

  return (
    <button
      onClick={onClick}
      className={`card flex flex-col items-center gap-4 py-8 px-6 border-2 active:scale-95 transition-all duration-200 w-full ${cor} ${corBg}`}
    >
      <span className="font-display text-3xl tracking-widest">{label}</span>

      <div className="divider-neon w-full" />

      <div className="flex flex-col items-center gap-1">
        <span className="font-display text-4xl">{total}</span>
        <span className="font-body text-muted text-xs tracking-widest uppercase">
          perguntas
        </span>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-display text-4xl">
          {tempo}
          <span className="text-sm ml-1">sec</span>
        </span>
        <span className="font-body text-muted text-xs tracking-widest uppercase">
          por pergunta
        </span>
      </div>
    </button>
  );
};
