import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Planning from "./components/Planning";
import Desiging from "./components/Desiging";
import Manufacturing from "./components/Manufacturing";
import Sales from "./components/Sales";
import Research from "./components/Research";
import BusineessRelations from "./components/BusineessRelations";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Research" element={<Research />} />
        <Route path="/Planning" element={<Planning />} />
        <Route path="/Desiging" element={<Desiging />} />
        <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/BusineessRelations" element={<BusineessRelations />} />
        <Route path="/Statistics" element={<Statistics />} />
        {/* Add a default route to redirect to Research */}
        <Route path="*" element={<Navigate to="/Research" />} />
      </Routes>
    </>
  );
}

export default App;
