import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/header";
import { Footer } from "../../layout/footer";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
