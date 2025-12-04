import React, { useState, useEffect } from "react";

export default function ModalProductForm({ product, onSave, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImageUrl(product.imageUrl);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...product,
      name,
      description,
      price: parseFloat(price),
      imageUrl
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Editar producto</h2>

        <form onSubmit={handleSubmit}>

          <label>Nombre</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>Descripción</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />

          <label>Precio</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />

          <label>Imagen (URL)</label>
          <input 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
          />

          <div className="modal-actions">
            <button type="button" className="btn delete" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn save">
              Guardar cambios
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
