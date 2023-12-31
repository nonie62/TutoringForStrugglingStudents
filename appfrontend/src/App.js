import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import './styles.css';
import EnglishPage from "./pages/EnglishPage";
import SpanishPage from "./pages/SpanishPage"

export function buildPath(route){
  if(process.env.NODE_ENV == 'production')
      return 'https://tutoringforstrugglingstudents-0e43e84a668a.herokuapp.com/' + route;
  else
      return 'http://localhost:5001/' + route;
}


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<EnglishPage />} />
                <Route path="/sp" element={<SpanishPage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
