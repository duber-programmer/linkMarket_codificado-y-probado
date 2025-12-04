import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

export default function AddProductPage({ onSave, editingProduct }) {
  const navigate = useNavigate()

  const handleSaveAndReturn = (product) => {
    onSave(product)
    navigate("/productos")     // 👈 REGRESA AUTOMÁTICAMENTE
  }

  return (
    <section className="add-product-container">
      <div className="add-product-card">
        <h1 className="add-title">
          {editingProduct ? "Editar producto" : "Agregar producto"}
        </h1>

        <p className="add-subtitle">
          {editingProduct 
            ? "Modifica los datos del producto y guarda los cambios."
            : "Completa la información para agregar un nuevo producto al catálogo."}
        </p>

        <ProductForm 
          editingProduct={editingProduct} 
          onSave={handleSaveAndReturn}   // 👈 Aquí llamamos la función que navega
        />
      </div>
    </section>
  )
}
