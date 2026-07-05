import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import useDocumentTitle from "./hooks/useDocumentTitle";
import "./App.css";

function App() {
  useDocumentTitle("Theme Manager App");

  return (
    <div>
      <ThemeToggle />
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}
export default App;
