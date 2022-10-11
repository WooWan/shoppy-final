import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import HabitPresenter from "./habit_presenter";

const habitPresenter = new HabitPresenter([
  { id: 1, name: "Reading", count: 0 },
  { id: 2, name: "Running", count: 0 },
  { id: 3, name: "Coding", count: 0 },
]);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App habitPresenter={habitPresenter} />);
