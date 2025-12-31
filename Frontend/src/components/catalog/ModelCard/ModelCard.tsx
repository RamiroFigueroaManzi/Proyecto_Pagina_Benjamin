import { Model } from '../../../data/models';
import './ModelCard.css';

interface Props {
  model: Model;
  onSelect: (model: Model) => void;
}

export default function ModelCard({ model, onSelect }: Props) {
  return (
    <div
      className="model-card"
      onClick={() => onSelect(model)}
    >
      <img
  src={model.coverImage}
  alt={model.name}
  className="model-card-image"
/>


      <div className="model-card-content">
        <h3>{model.name}</h3>
        <p>{model.description}</p>
      </div>
    </div>
  );
}
