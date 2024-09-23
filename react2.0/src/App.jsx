import React from "react";
import Index from "./component/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Gallery from "./component/pages/Gallery";
import Contact from "./component/pages/Contact";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
