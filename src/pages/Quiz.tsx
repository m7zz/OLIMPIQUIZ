import { useParams } from "react-router-dom";
import { useState } from "react";
import { QuizStart } from "../components/Quiz/QuizStart";
import { QuizQuestion } from "../components/Quiz/QuizQuestion";
import { QuizResult } from "../components/Quiz/QuizResult";
import {
  getPerguntasAleatorias,
  type Dificuldade,
} from "../data/mockModalities";
import { type Pergunta } from "../data/mockModalities";

type QuizState = "start" | "playing" | "result";

export const Quiz = () => {
  const { modality, dificulty } = useParams<{
    modality: string;
    dificulty: string;
  }>();

  const [state, setState] = useState<QuizState>("start");
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    const questions = getPerguntasAleatorias(
      modality!,
      dificulty as Dificuldade,
    );
    setPerguntas(questions);
    setState("playing");
  };

  const handleAnswer = (acertou: boolean) => {
    if (acertou) setScore((s) => s + 1);

    if (currentIndex + 1 >= perguntas.length) {
      setState("result");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentIndex(0);
    setState("start");
  };

  if (state === "start") {
    return (
      <QuizStart
        modality={modality!}
        dificulty={dificulty!}
        onStart={handleStart}
      />
    );
  }

  if (state === "playing") {
    return (
      <QuizQuestion
        key={currentIndex}
        pergunta={perguntas[currentIndex]}
        currentIndex={currentIndex}
        total={perguntas.length}
        dificulty={dificulty as Dificuldade}
        onAnswer={handleAnswer}
      />
    );
  }

  return (
    <QuizResult
      score={score}
      total={perguntas.length}
      onRestart={handleRestart}
    />
  );
};
