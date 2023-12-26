import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from '../Start/Start';
import Board from '../Board/Board';



const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/board" element={<Board />} />
  </Routes>
);

export default AppRoutes;
