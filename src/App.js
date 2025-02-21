import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Index from "./Components/Index";

export default function RouterNode() {
  return (
    <BrowserRouter>

      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>

    </BrowserRouter>
  );
}
