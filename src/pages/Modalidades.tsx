import { useNavigate } from "react-router-dom";
import { getModalidadesCard } from "../data/mockModalities";

export const Modalidades = () => {
  const navigate = useNavigate();

  const modalidades = getModalidadesCard();

  function irParaQuiz(id: string) {
    navigate(`/dificuldade/${id}`);
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-display text-soft-white text-center mb-6">
        Escolha uma modalidade
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {modalidades.map((m) => {
          const Icon = m.icon;

          return (
            <div
              key={m.id}
              className="
                w-56
                bg-surface
                text-soft-white
                rounded-xl
                p-4
                shadow-lg
                flex
                flex-col
                items-center
                text-center
                gap-2
                hover:scale-105
                hover:shadow-2xl
                transition
                cursor-pointer
              "
            >
              <Icon size={42} className="text-neon" />

              <h2 className="text-xl font-display">{m.titulo}</h2>

              <p className="text-sm text-muted font-body">{m.descricao}</p>

              <button
                onClick={() => irParaQuiz(m.id)}
                className="
                  mt-3
                  w-full
                  bg-neon
                  text-black
                  rounded-lg
                  p-2
                  hover:opacity-80
                "
              >
                Jogar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
