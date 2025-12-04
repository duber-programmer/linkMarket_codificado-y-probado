import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ products, onEdit, onDelete }) {
  if (!products || products.length === 0) {
    return <p>No hay productos aún.</p>
  }

  return (
    <div className="grid">
      {products.map(p => (
        <ProductItem key={p.id} product={p} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}
