import { useNavigate } from 'react-router-dom';

export default function RadialMenu() {
  const navigate = useNavigate();

  const go = (path) => () => navigate(path);

  return (
    <svg
      viewBox="0 0 300 300"
      width="300"
      height="300"
      style={{ maxWidth: '100%' }}
    >
      {/* Gajo 1 */}
      <path
        d="M150 30 L190 80 A80 80 0 0 1 110 80 Z"
        fill="#e11d48"
        onClick={go('/page-a')}
        style={{ cursor: 'pointer' }}
      />

      {/* Gajo 2 */}
      <path
        d="M270 150 L220 190 A80 80 0 0 1 220 110 Z"
        fill="#e11d48"
        onClick={go('/page-b')}
        style={{ cursor: 'pointer' }}
      />

      {/* Gajo 3 */}
      <path
        d="M150 270 L110 220 A80 80 0 0 1 190 220 Z"
        fill="#e11d48"
        onClick={go('/page-c')}
        style={{ cursor: 'pointer' }}
      />
      <path
        d="M150 30 L190 80 A80 80 0 0 1 110 80 Z"
        fill="#e11d48"
        onClick={go('/page-d')}
        style={{ cursor: 'pointer' }}
      />

      {/* Centro */}
      <circle
        cx="150"
        cy="150"
        r="30"
        fill="#22c55e"
        onClick={go('/home')}
        style={{ cursor: 'pointer' }}
      />
    </svg>
  );
}
