import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import ProductsPage from './pages/Products'
import AddProductPage from './pages/AddProduct'
import Login from './pages/Login'
import Profile from './pages/Profile'
import mockData from './data/mockProducts'

function AppContent() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const location = useLocation()
  const hideLayout = location.pathname === "/login" || location.pathname === "/"

  // Inicializar productos con mockData SOLO UNA VEZ
  useEffect(() => {
    setProducts(mockData)
  }, [])

  // ✔ handleSave corregido — usa editingProduct, no product.id
  const handleSave = (product) => {
  setProducts(prev => {
    const exists = prev.some(p => p.id === product.id);

    if (exists) {
      // EDITAR
      return prev.map(p =>
        p.id === product.id ? product : p
      );
    }

    // AGREGAR
    return [product, ...prev];
  });

  setEditingProduct(null);
};


  const handleDelete = (id) => {
    if (!window.confirm('Eliminar producto?')) return
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  const handleLogin = (user, pass) => {
    if (user === 'dubafa_carlsen' && pass === 'duber1940') {
      setIsAuthenticated(true)
      return { ok: true }
    }
    return { ok: false, message: 'Credenciales incorrectas' }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("userRole")
  }

  const role = localStorage.getItem("userRole")

  return (
    <>
      {!hideLayout && (
        <Header isAuth={isAuthenticated} onLogout={handleLogout} />
      )}

      <main className="container">
        <Routes>

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Navigate to="/login" />} />

          {/* HOME RECIBE PRODUCTS AHORA */}
          <Route 
            path="/home"
            element={
              isAuthenticated 
                ? <Home products={products} /> 
                : <Navigate to="/login" />
            }
          />

          {/* LISTA DE PRODUCTOS */}
          <Route 
  path="/productos"
  element={
    isAuthenticated 
      ? (
        <ProductsPage 
          products={products} 
          onDelete={handleDelete}
          onSave={handleSave}   // 👈 AÑADIDO
        />
      )
      : <Navigate to="/login" />
  }
/>


          {/* AGREGAR O EDITAR PRODUCTO */}
          <Route 
            path="/agregar"
            element={
              isAuthenticated && role === "vendedor"
                ? (
                    <AddProductPage 
                      onSave={handleSave} 
                      editingProduct={editingProduct} 
                    />
                  )
                : <h2 style={{ padding: 20 }}>No tienes permiso para entrar aquí</h2>
            }
          />

          {/* PERFIL */}
          <Route 
            path="/profile"
            element={
              isAuthenticated
                ? <Profile />
                : <Navigate to="/login" />
            }
          />

          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>

      {!hideLayout && (
        <>
          <Chatbot />
          <Footer />
        </>
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
