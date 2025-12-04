import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ products }) {
  const role = localStorage.getItem("userRole") || "usuario";
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <header className="home-header">
        <img src="/logo.png" alt="LinkMarket logo" className="home-logo" />

        {role === "usuario" ? (
          <>
            <p className="home-subtitle">Descubre productos increíbles</p>
            <div className="search-box">
              <input className="search-input" placeholder="Buscar productos..." />
            </div>
          </>
        ) : (
          <>
            <h2 className="vendor-title">Tu espacio de ventas</h2>
            <p className="home-subtitle">Controla y administra tus artículos</p>
          </>
        )}
      </header>

      {/* ---------------- USUARIO ---------------- */}
      {role === "usuario" && (
        <>
          <section className="category-section">
            <h2 className="section-title">Comprar por categoría</h2>

            <div className="category-grid">
              <div className="category-card">🖥️ Electrónica</div>
              <div className="category-card">👕 Ropa</div>
              <div className="category-card">🏠 Hogar</div>
              <div className="category-card">📚 Libros</div>
            </div>
          </section>

          {/* RECOMENDADOS (basado en products reales) */}
          <section className="recommended-section">
            <h2 className="section-title">Recomendados para ti</h2>

            <div className="product-grid">
              {products.slice(0, 4).map((p) => (
                <div className="product-card" key={p.id}>
                  <img 
                    src={p.imageUrl || "/products/default.png"} 
                    alt={p.name} 
                  />
                  <h3>{p.name}</h3>
                  <p className="p-desc">{p.description}</p>
                  <div className="p-footer">
                    <span className="price">${p.price}</span>
                    <button className="btn-view" onClick={() => navigate("/productos")}>
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ---------------- VENDEDOR ---------------- */}
      {role === "vendedor" && (
        <section className="vendor-panel">
          <div className="vendor-grid">

            <div className="vendor-card">
              <h3>Total de productos</h3>
              <p className="vendor-number">{products.length}</p>
            </div>

            <div className="vendor-card">
              <h3>Agregar producto</h3>
              <button className="btn-vendor" onClick={() => navigate("/agregar")}>
                + Agregar
              </button>
            </div>

            <div className="vendor-card">
              <h3>Editar tu catálogo</h3>
              <button className="btn-vendor" onClick={() => navigate("/productos")}>
                Ir al listado
              </button>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
