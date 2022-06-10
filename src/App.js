import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar title='' icon='fab fa-amazon' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
