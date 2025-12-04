import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import ModalProductForm from '../components/ModalProductForm'

export default function Products({ products, onEdit, onDelete, onSave }) {
  const [modalProduct, setModalProduct] = useState(null)

  const openModal = (product) => {
    setModalProduct(product)
  }

  const closeModal = () => {
    setModalProduct(null)
  }

  return (
    <>
      <section>
        <h1>Productos</h1>

        <ProductList 
          products={products} 
          onEdit={openModal}  // 
          onDelete={onDelete}
        />
      </section>

      {/* MODAL ACTIVO */}
      {modalProduct && (
        <ModalProductForm 
          product={modalProduct}
          onSave={onSave}     // 
          onClose={closeModal}
        />
      )}
    </>
  )
}
