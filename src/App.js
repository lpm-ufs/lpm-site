import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import AboutMe from "./Pages/Home/AboutMe";
import Navbar2 from "./Pages/Home/Navbar2";
import Home from "./Pages/Home/Homescreen";

function App() {
  // Adicione um estado para controlar qual navbar será renderizado
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Verifica o tamanho da tela e atualiza o estado
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Registra o evento de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove o evento de redimensionamento ao desmontar o componente
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          {isSmallScreen ? <Navbar /> : <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
