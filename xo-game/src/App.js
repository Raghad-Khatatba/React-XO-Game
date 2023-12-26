import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Components/AppRoutes/AppRoutes';



export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
