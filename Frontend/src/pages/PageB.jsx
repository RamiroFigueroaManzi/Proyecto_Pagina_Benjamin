import { useEffect, useState } from 'react';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Placeholder (después se conecta a Django)
    setUsuarios([
      { id: 1, nombre: 'Juan Pérez', email: 'juan@mail.com' },
      { id: 2, nombre: 'María Gómez', email: 'maria@mail.com' },
    ]);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Usuarios
      </h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

