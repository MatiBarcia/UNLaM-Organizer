import { useParams, Navigate } from 'react-router-dom';
import { CARRERAS } from '../data/carreras';
import { AppInner } from '../components/AppInner';

export function CarreraPage() {
  const { id } = useParams<{ id: string }>();
  const carreraInfo = CARRERAS.find(c => c.id === id);

  if (!carreraInfo || !carreraInfo.disponible || !carreraInfo.datos) {
    return <Navigate to="/" replace />;
  }

  return <AppInner carrera={carreraInfo.datos} />;
}
