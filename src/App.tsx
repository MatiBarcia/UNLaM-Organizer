import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LandingPage } from './pages/LandingPage';
import { CarreraPage } from './pages/CarreraPage';

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/"            element={<LandingPage />} />
        <Route path="/carrera/:id" element={<CarreraPage />} />
        <Route path="*"            element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}
