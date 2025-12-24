import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RadialMenu from '../components/RadialMenu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RadialMenu />} />
        <Route path="/page-a" element={<h1>Página A</h1>} />
        <Route path="/page-b" element={<h1>Página B</h1>} />
        <Route path="/page-c" element={<h1>Página C</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
