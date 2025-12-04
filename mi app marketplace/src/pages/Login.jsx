import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [role, setRole] = useState('usuario')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const res = onLogin(user, pass)

    if (res.ok) {
      localStorage.setItem("userRole", role)
      navigate("/home")
    } else {
      alert("Usuario o contraseña incorrectos")
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">

        <img 
  src="/logo.png" 
  alt="LinkMarket logo" 
  className="login-logo"
/>

<h1 className="login-title">Bienvenido de nuevo</h1>

        <p className="login-subtitle">Inicia sesión en tu cuenta de <strong>LinkMarket</strong></p>

        <form className="login-form" onSubmit={handleSubmit}>

          <label className="input-label">Usuario:
            <input 
              value={user} 
              onChange={e => setUser(e.target.value)} 
              placeholder="Ingresa tu usuario"
              className="input"
              required
            />
          </label>

          <label className="input-label">Contraseña:
            <input 
              type="password"
              value={pass} 
              onChange={e => setPass(e.target.value)} 
              placeholder="Ingresa tu contraseña"
              className="input"
              required
            />
          </label>

          <label className="input-label">Selecciona tu rol</label>
          <select 
            value={role} 
            onChange={e => setRole(e.target.value)} 
            className="input"
          >
            <option value="usuario">Usuario normal</option>
            <option value="vendedor">Vendedor</option>
          </select>

          <button className="btn-login" type="submit">Ingresar</button>

        </form>

      </div>
    </div>
  )
}
