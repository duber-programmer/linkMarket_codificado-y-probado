import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ isAuth, onLogout }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");

  // Si no está autenticado → NO mostrar header
  if (!isAuth) return null;

  return (
    <header className="header">
      <div className="header-content">

        {/* LOGO */}
        <img 
          src="/logo.png" 
          alt="LinkMarket" 
          className="header-logo"
          onClick={() => navigate("/home")}
        />

        {/* MENÚ */}
        <nav className="header-menu">

          <Link className="header-link" to="/home">Inicio</Link>

          {role === "vendedor" && (
            <Link className="header-link" to="/productos">Productos</Link>
          )}

          <Link className="header-link" to="/profile">Perfil</Link>

          <button
            className="header-link logout-btn"
            onClick={onLogout}
          >
            Salir
          </button>

        </nav>
      </div>
    </header>
  );
}
