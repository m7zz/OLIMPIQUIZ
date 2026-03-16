import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import type { Pergunta, Dificuldade } from "../../data/mockModalities";

interface QuizQuestionProps {
  pergunta: Pergunta;
  currentIndex: number;
  total: number;
  dificulty: Dificuldade;
  onAnswer: (acertou: boolean) => void;
}

const TIMER_POR_DIFICULDADE: Record<Dificuldade, number> = {
  facil: 30,
  medio: 20,
  dificil: 12,
};

export const QuizQuestion = ({
  pergunta,
  currentIndex,
  total,
  dificulty,
  onAnswer,
}: QuizQuestionProps) => {
  const tempoTotal = TIMER_POR_DIFICULDADE[dificulty];
  const [selected, setSelected] = useState<string | null>(null);
  const [tempo, setTempo] = useState(tempoTotal);
  const answered = selected !== null;

  useEffect(() => {
    if (answered) return;
    if (tempo <= 0) {
      onAnswer(false);
      return;
    }

    const interval = setInterval(() => {
      setTempo((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [tempo, answered, onAnswer]);

  const handleSelect = (id: string) => {
    if (answered) return;
    setSelected(id);
    setTimeout(() => {
      onAnswer(id === pergunta.respostaCorretaId);
      setSelected(null);
    }, 1000);
  };

  const getAlternativeStyle = (id: string) => {
    if (!answered)
      return "border-surface hover:border-neon hover:bg-surface cursor-pointer";
    if (id === pergunta.respostaCorretaId)
      return "border-success bg-success/10 text-success";
    if (id === selected) return "border-error bg-error/10 text-error";
    return "border-surface opacity-40";
  };

  const timerPercent = (tempo / tempoTotal) * 100;

  const timerColor = () => {
    if (timerPercent > 50) return "text-neon";
    if (timerPercent > 25) return "text-amber-400";
    return "text-error";
  };

  const timerBarColor = () => {
    if (timerPercent > 50) return "bg-neon";
    if (timerPercent > 25) return "bg-amber-400";
    return "bg-error";
  };

  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="flex flex-col flex-1 min-h-[calc(100vh-60px)] bg-background px-6 py-8 max-w-2xl mx-auto w-full gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-body text-muted text-sm tracking-widest uppercase">
            Pergunta
          </span>
          <span className="font-display text-2xl text-neon">
            {currentIndex + 1}
            <span className="text-muted text-lg"> / {total}</span>
          </span>
        </div>

        <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-neon rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span
          className={twMerge(
            "font-display text-6xl transition-colors duration-300",
            timerColor(),
          )}
        >
          {tempo}
        </span>
        <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
          <div
            className={twMerge(
              "h-full rounded-full transition-all duration-1000",
              timerBarColor(),
            )}
            style={{ width: `${timerPercent}%` }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <div className="card flex-1 flex items-center justify-center py-10">
        <h2 className="font-display text-3xl md:text-4xl text-soft-white text-center leading-tight">
          {pergunta.texto}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {pergunta.alternativas.map((alt) => (
          <button
            key={alt.id}
            onClick={() => handleSelect(alt.id)}
            className={twMerge(
              "w-full flex items-center gap-4 px-5 py-4 rounded-lg border-2 bg-background transition-all duration-200 text-left",
              getAlternativeStyle(alt.id),
            )}
          >
            <span className="font-display text-xl text-neon w-6 shrink-0">
              {alt.id.toUpperCase()}
            </span>
            <span className="font-body text-soft-white text-base">
              {alt.texto}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
