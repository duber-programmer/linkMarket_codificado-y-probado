import React, { useState, useEffect } from 'react'

export default function ProductForm({ editingProduct, onSave }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name || '')
      setDescription(editingProduct.description || '')
      setPrice(editingProduct.price != null ? editingProduct.price : '')
      setImageUrl(editingProduct.imageUrl || '')
    } else {
      setName('')
      setDescription('')
      setPrice('')
      setImageUrl('')
    }
  }, [editingProduct])

  const handleSubmit = (e) => {
    e.preventDefault()

    // VALIDACIONES
    if (!name.trim()) { alert('El nombre es obligatorio'); return }
    if (!description.trim()) { alert('La descripción es obligatoria'); return }
    if (!price) { alert('El precio es obligatorio'); return }

    const priceNum = parseFloat(price)
    if (isNaN(priceNum) || priceNum <= 0) {
      alert('El precio debe ser un número válido mayor que 0')
      return
    }

    if (!imageUrl.trim()) {
      alert('La imagen es obligatoria')
      return
    }

    // PRODUCTO DEFINITIVO
    const product = {
      id: editingProduct ? editingProduct.id : Date.now(),  // 👈 YA NO ES NULL
      name: name.trim(),
      description: description.trim(),
      price: priceNum,
      imageUrl: imageUrl.trim()
    }

    onSave(product)

    alert('Producto guardado correctamente')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      <label>Nombre
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Nombre del producto" 
        />
      </label>

      <label>Descripción
        <textarea 
          value={description} 
          onChange={e => setDescription(e.target.value)} 
          placeholder="Descripción breve"
        />
      </label>

      <label>Precio
        <input 
          value={price} 
          onChange={e => setPrice(e.target.value)} 
          placeholder="0.00" 
          type="number" 
          step="0.01" 
        />
      </label>

      <label>Imagen (URL)
        <input 
          value={imageUrl} 
          onChange={e => setImageUrl(e.target.value)} 
          placeholder="https://..." 
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn save">
          {editingProduct ? "Actualizar" : "Guardar"}
        </button>
      </div>

    </form>
  )
}

