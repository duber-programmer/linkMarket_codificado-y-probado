import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="chatbot">
      <button className="chat-button" onClick={() => setOpen(!open)}>💬</button>
      {open && (
        <div className="chat-window">
          <p><strong>Asistente</strong></p>
          <p>Hola! ¿En qué puedo ayudarte?</p>
          <div className="chat-actions">
            <button onClick={() => { navigate('/productos'); setOpen(false) }}>Ver productos</button>
            <button onClick={() => { navigate('/agregar'); setOpen(false) }}>Agregar producto</button>
          </div>
          <small className="muted">Chat simulado - ejemplo para evidencia</small>
        </div>
      )}
    </div>
  )
}
