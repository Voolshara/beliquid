import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./routes/main";
import "./index.scss";

export function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}
