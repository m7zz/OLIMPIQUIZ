import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Modalidades } from "./pages/Modalidades";
import { Quiz } from "./pages/Quiz";
import { DificultySelector } from "./pages/DificultySelector";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/modalidades", Component: Modalidades },
      { path: "/dificuldade/:modality", Component: DificultySelector },
      { path: "/quiz/:modality/:dificulty", Component: Quiz },
    ],
  },
]);