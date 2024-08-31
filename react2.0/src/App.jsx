import React from "react";
import Index from "./component/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
