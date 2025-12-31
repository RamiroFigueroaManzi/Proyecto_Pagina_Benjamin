import { useState } from 'react';
import { models, Model } from '../data/models';
import ModelCard from '../components/catalog/ModelCard/ModelCard';
import ModelModal from '../components/catalog/ModelCard/ModelModal/ModelModal';


export default function Catalog() {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return (
    <section>
      <h1>Catálogo de Modelos</h1>

      <div
        style={{
          maxWidth: '900px',
          margin: '32px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}
      >
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            onSelect={setSelectedModel}
          />
        ))}
      </div>

      {selectedModel && (
        <ModelModal
          model={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </section>
  );
}
