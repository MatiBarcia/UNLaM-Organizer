import { useParams, Navigate } from 'react-router-dom';
import { CARRERAS } from '../data/carreras';
import { AppInner } from '../components/AppInner';
import { SITIO_NOMBRE, useSeo } from '../utils/seo';

export function CarreraPage() {
  const { id } = useParams<{ id: string }>();
  const carreraInfo = CARRERAS.find(c => c.id === id);

  const nombre = carreraInfo?.nombre ?? '';
  useSeo(
    `${nombre}: correlativas y plan de estudios UNLaM | ${SITIO_NOMBRE}`,
    `Mapa de correlativas de ${nombre} (plan ${carreraInfo?.plan ?? ''}) en la UNLaM. Marcá las materias aprobadas, mirá cuáles podés cursar y seguí tu progreso hasta recibirte.`,
    `/carrera/${id ?? ''}`,
  );

  if (!carreraInfo || !carreraInfo.disponible || !carreraInfo.datos) {
    return <Navigate to="/" replace />;
  }

  return <AppInner carrera={carreraInfo.datos} />;
}
