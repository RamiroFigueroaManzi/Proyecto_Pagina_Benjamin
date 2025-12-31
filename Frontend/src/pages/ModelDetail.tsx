import { useParams } from 'react-router-dom';

export default function ModelDetail() {
  const { id } = useParams();

  return (
    <section>
      <h1>Detalle del modelo</h1>
      <p>ID del modelo: {id}</p>

      <p>(Esta pantalla la trabajaremos más adelante)</p>
    </section>
  );
}
