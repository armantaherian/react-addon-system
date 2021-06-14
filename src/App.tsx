import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import loadModules, { AppCore } from "./plugins/loadModules";

const modulesList = {
  UserJsonExport: "JsonExport",
};

loadModules(modulesList);

function App() {
  return (
    <div className="app">
      <Navigation />

      <main className="app-main">
        <header className="app-header">
          <div className="header-left">left</div>

          <div className="header-right">right</div>
        </header>

        <section className="app-content">main content</section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
