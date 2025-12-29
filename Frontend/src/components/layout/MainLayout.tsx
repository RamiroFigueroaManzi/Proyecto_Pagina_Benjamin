import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="layout-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
