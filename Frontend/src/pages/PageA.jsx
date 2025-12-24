export default function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Dashboard
      </h1>

      <p style={{ marginBottom: '2rem', color: '#555' }}>
        Bienvenido al sistema. Desde acá podés acceder a las principales secciones.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={cardStyle}>
          <h3>Usuarios</h3>
          <p>Gestión de usuarios del sistema</p>
        </div>

        <div style={cardStyle}>
          <h3>Reportes</h3>
          <p>Visualización de información general</p>
        </div>

        <div style={cardStyle}>
          <h3>Configuración</h3>
          <p>Ajustes del sistema</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: '1rem',
  borderRadius: '8px',
  background: '#f8fafc',
  border: '1px solid #e2e8f0',
  width: '220px',
};
