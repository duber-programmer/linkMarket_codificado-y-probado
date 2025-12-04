import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Perfil</h1>

      {/* Tarjeta principal */}
      <div className="profile-card">
        <div className="profile-info">
          <img src="/profile.jpg" alt="Foto de perfil" className="avatar-img" />


          <div>
            <h2 className="profile-name">Duber Afanador</h2>
            <p className="profile-email">duberr390@gmail.com</p>
          </div>
        </div>

        <button className="btn-edit-profile">Editar Perfil</button>
      </div>

      {/* Acciones rápidas */}
      <h3 className="profile-section-title">Acciones rápidas</h3>

      <div className="profile-list">
        <div className="profile-item">📦 Mis órdenes</div>
        <div className="profile-item">💳 Métodos de pago</div>
      </div>

      {/* Cuenta */}
      <h3 className="profile-section-title">Cuenta</h3>

      <div className="profile-list">
        <div className="profile-item">✉️ Preferencias de correo</div>
        <div className="profile-item">📞 Número telefónico</div>
        <div className="profile-item">📦 Direcciones</div>
        <div className="profile-item">⚙️ Configuración</div>
      </div>

      {/* Soporte */}
      <h3 className="profile-section-title">Soporte</h3>

      <div className="profile-list">
        <div className="profile-item">❓ Centro de ayuda</div>
      </div>

      <button className="logout-btn-large">Cerrar sesión</button>

      <p className="profile-footer">LinkMarket v1.0.0</p>
    </div>
  );
}
