import { useParams, useNavigate } from "react-router-dom";
import { getModalidade } from "../../data/mockModalities";
import type { Dificuldade } from "../../data/mockModalities";
import { DifficultyCard } from "./DifficultyCard";
import { ButtonLink } from "../ButtonLink";
import { Undo2 } from "lucide-react";

const DIFICULDADES: Dificuldade[] = ["facil", "medio", "dificil"];

export const CardGrid = () => {
  const { modality } = useParams<{ modality: string }>();
  const navigate = useNavigate();

  const modalidade = getModalidade(modality ?? "");

  const totalPorDificuldade = (dificuldade: Dificuldade) =>
    modalidade?.perguntas.filter(
      (p) => p.dificuldade === dificuldade
    ).length ?? 0;

  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-60px)] bg-background px-6 gap-8">

      <div className="w-full max-w-2xl flex justify-start mb-4">
        <ButtonLink
          destiny="/modalidades"
          label="voltar"
          icon={Undo2}
          variant="outline"
        />
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <span className="badge">{modalidade?.titulo}</span>
        <h1 className="font-display text-5xl md:text-7xl text-soft-white">
          ESCOLHA A DIFICULDADE
        </h1>
        <p className="font-body text-muted">{modalidade?.descricao}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
        {DIFICULDADES.map((dificuldade) => (
          <DifficultyCard
            key={dificuldade}
            dificuldade={dificuldade}
            total={totalPorDificuldade(dificuldade)}
            onClick={() => navigate(`/quiz/${modality}/${dificuldade}`)}
          />
        ))}
      </div>
    </div>
  );
};