import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Components/Start/Start';
import Board from './Components/Board/Board';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/board" element={<Board />} />
   </Routes>
   </BrowserRouter>
  );
}
