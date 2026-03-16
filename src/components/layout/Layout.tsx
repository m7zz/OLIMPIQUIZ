import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-soft-white">
      <Header />
      <main className="flex flex-col flex-1 font-body">
        <Outlet />
      </main>
    </div>
  );
};
