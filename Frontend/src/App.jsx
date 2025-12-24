import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        <Route path="/page-c" element={<PageC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
