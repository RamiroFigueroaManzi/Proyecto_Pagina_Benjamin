import { useState } from 'react';
import { Model } from '../../../../data/models';
import './ModelModal.css';

interface Props {
  model: Model;
  onClose: () => void;
}

export default function ModelModal({ model, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((i) =>
      i === 0 ? model.images.length - 1 : i - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((i) =>
      i === model.images.length - 1 ? 0 : i + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {/* CARRUSEL */}
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevImage}>
            ‹
          </button>

          <img
            src={model.images[currentIndex]}
            alt={model.name}
            className="carousel-image"
          />

          <button className="carousel-btn right" onClick={nextImage}>
            ›
          </button>
        </div>

        {/* TEXTO */}
        <div className="modal-text">
          <h2>{model.name}</h2>
          <p>{model.description}</p>
        </div>
      </div>
    </div>
  );
}
