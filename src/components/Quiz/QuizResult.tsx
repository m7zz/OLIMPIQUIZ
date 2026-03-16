import { Trophy } from "lucide-react";
import { ButtonLink } from "../ButtonLink";
import { twMerge } from "tailwind-merge";

interface QuizResultProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const QuizResult = ({ score, total, onRestart }: QuizResultProps) => {
  const percentage = Math.round((score / total) * 100);

  const feedback = () => {
    if (percentage === 100) return { texto: "PERFEITO!", cor: "text-neon" };
    if (percentage >= 70) return { texto: "MUITO BOM!", cor: "text-success" };
    if (percentage >= 40) return { texto: "PODE MELHORAR!", cor: "text-neon" };
    return { texto: "TENTE NOVAMENTE!", cor: "text-error" };
  };

  const { texto, cor } = feedback();

  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-60px)] bg-background px-6 gap-8">
      <Trophy size={64} className="text-neon" />

      <div className="flex flex-col items-center gap-2 text-center">
        <span className={twMerge("font-display text-5xl md:text-7xl", cor)}>
          {texto}
        </span>
        <p className="font-body text-muted text-lg">Você concluiu o quiz</p>
      </div>

      <div className="card flex flex-col items-center gap-1 px-16 py-8">
        <span className="font-body text-muted text-sm tracking-widest uppercase">
          Acertos
        </span>
        <div className="flex items-end gap-2">
          <span className="font-display text-7xl text-neon">{score}</span>
          <span className="font-display text-4xl text-muted mb-2">
            / {total}
          </span>
        </div>
        <span className="font-display text-2xl text-soft-white">
          {percentage}%
        </span>
        <div className="w-full h-2 bg-background rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-neon rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <button
          onClick={onRestart}
          className="flex-1 font-display text-lg tracking-widest bg-neon text-background px-6 py-3 rounded-sm transition-all duration-200 hover:brightness-110 hover:shadow-neon-md active:scale-95"
        >
          TENTAR NOVAMENTE
        </button>

        <ButtonLink
          label="INÍCIO"
          destiny="/modalidades"
          variant="outline"
          className="flex-1 justify-center text-lg py-3"
        />
      </div>
    </div>
  );
};
