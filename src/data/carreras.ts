import type { Carrera } from '../types';
import { ingenieriaInformatica } from './ingInformatica';
import { arquitectura } from './arquitectura';
import { ingenieriaMecanica } from './ingMecanica';
import { ingenieriaCivil } from './ingCivil';
import { ingenieriaIndustrial } from './ingIndustrial';
import { ingenieriaElectronica } from './ingElectronica';
import { ingenieriaEnergiasRenovables } from './ingEnergiasRenovables';
import { gestionTecnologia } from './gestionTecnologia';
import { enfermeria } from './enfermeria';
import { anatomiaPatologica } from './anatomiaPatologica';
import { kinesiologia } from './kinesiologia';
import { nutricion } from './nutricion';
import { medicina } from './medicina';
import { abogacia } from './abogacia';
import { cienciaPolitica } from './cienciaPolitica';
import { gestionPublica } from './gestionPublica';
import { procurador } from './procurador';
import { ceremonialProtocolo } from './ceremonialProtocolo';
import { relacionesPublicas } from './relacionesPublicas';
import { educacionFisica } from './educacionFisica';
import { relacionesLaborales } from './relacionesLaborales';
import { trabajoSocial } from './trabajoSocial';
import { comunicacionSocial } from './comunicacionSocial';
import { administracion } from './administracion';
import { contadorPublico } from './contadorPublico';
import { economia } from './economia';
import { comercioInternacional } from './comercioInternacional';
import { animacionArteDigital } from './animacionArteDigital';
import { artesAudiovisuales } from './artesAudiovisuales';
import { artesEscenicas } from './artesEscenicas';
import { desarrolloVideojuegos } from './desarrolloVideojuegos';
import { disenoGraficoDigital } from './disenoGraficoDigital';
import { guionAudiovisual } from './guionAudiovisual';
import { locutorNacional } from './locutorNacional';
import { periodismoDeportivo } from './periodismoDeportivo';
import { publicidadComunicacion } from './publicidadComunicacion';
import { produccionMusical } from './produccionMusical';
import { produccionContenidos } from './produccionContenidos';
import { licAnimacionDigital } from './licAnimacionDigital';

export interface CarreraInfo {
  id: string;
  nombre: string;
  departamento: string;
  plan: string;
  disponible: boolean;
  datos?: Carrera;
}

export const CARRERAS: CarreraInfo[] = [
  // ── Ingeniería e Investigaciones Tecnológicas ─────────────────────────
  {
    id: 'ing-informatica',
    nombre: 'Ingeniería en Informática',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2026',
    disponible: true,
    datos: ingenieriaInformatica,
  },
  {
    id: 'arquitectura',
    nombre: 'Arquitectura',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2015',
    disponible: true,
    datos: arquitectura,
  },
  {
    id: 'ing-mecanica',
    nombre: 'Ingeniería Mecánica',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2015',
    disponible: true,
    datos: ingenieriaMecanica,
  },
  {
    id: 'ing-civil',
    nombre: 'Ingeniería Civil',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2025',
    disponible: true,
    datos: ingenieriaCivil,
  },
  {
    id: 'ing-industrial',
    nombre: 'Ingeniería Industrial',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2024',
    disponible: true,
    datos: ingenieriaIndustrial,
  },
  {
    id: 'ing-electronica',
    nombre: 'Ingeniería Electrónica',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2023',
    disponible: true,
    datos: ingenieriaElectronica,
  },
  {
    id: 'ing-energias-renovables',
    nombre: 'Ingeniería en Energías Renovables',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2024',
    disponible: true,
    datos: ingenieriaEnergiasRenovables,
  },
  {
    id: 'lic-gestion-tecnologia',
    nombre: 'Licenciatura en Gestión de Tecnología',
    departamento: 'Ingeniería e Investigaciones Tecnológicas',
    plan: '2011',
    disponible: true,
    datos: gestionTecnologia,
  },

  // ── Salud ────────────────────────────────────────────────────────────
  {
    id: 'medicina',
    nombre: 'Medicina',
    departamento: 'Salud',
    plan: '2023',
    disponible: true,
    datos: medicina,
  },
  {
    id: 'lic-enfermeria',
    nombre: 'Licenciatura en Enfermería',
    departamento: 'Salud',
    plan: '2016',
    disponible: true,
    datos: enfermeria,
  },
  {
    id: 'lic-kinesiologia',
    nombre: 'Licenciatura en Kinesiología y Fisiatría',
    departamento: 'Salud',
    plan: '2011',
    disponible: true,
    datos: kinesiologia,
  },
  {
    id: 'lic-nutricion',
    nombre: 'Licenciatura en Nutrición',
    departamento: 'Salud',
    plan: '2011',
    disponible: true,
    datos: nutricion,
  },
  {
    id: 'tec-anatomia-patologica',
    nombre: 'Tecnicatura Universitaria en Anatomía Patológica',
    departamento: 'Salud',
    plan: '2022',
    disponible: true,
    datos: anatomiaPatologica,
  },

  // ── Ciencias Económicas ────────────────────────────────────────────────
  {
    id: 'contador-publico',
    nombre: 'Contador Público',
    departamento: 'Ciencias Económicas',
    plan: '2018',
    disponible: true,
    datos: contadorPublico,
  },
  {
    id: 'lic-administracion',
    nombre: 'Licenciatura en Administración',
    departamento: 'Ciencias Económicas',
    plan: '2018',
    disponible: true,
    datos: administracion,
  },
  {
    id: 'lic-economia',
    nombre: 'Licenciatura en Economía',
    departamento: 'Ciencias Económicas',
    plan: '2023',
    disponible: true,
    datos: economia,
  },
  {
    id: 'lic-comercio-internacional',
    nombre: 'Licenciatura en Comercio Internacional',
    departamento: 'Ciencias Económicas',
    plan: '2018',
    disponible: true,
    datos: comercioInternacional,
  },

  // ── Humanidades y Ciencias Sociales ───────────────────────────────────
  {
    id: 'lic-comunicacion',
    nombre: 'Licenciatura en Comunicación Social',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2009',
    disponible: true,
    datos: comunicacionSocial,
  },
  {
    id: 'lic-relaciones-publicas',
    nombre: 'Licenciatura en Relaciones Públicas',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2009',
    disponible: true,
    datos: relacionesPublicas,
  },
  {
    id: 'lic-relaciones-laborales',
    nombre: 'Licenciatura en Relaciones Laborales',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2008',
    disponible: true,
    datos: relacionesLaborales,
  },
  {
    id: 'lic-trabajo-social',
    nombre: 'Licenciatura en Trabajo Social',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2009',
    disponible: true,
    datos: trabajoSocial,
  },
  {
    id: 'prof-lic-educacion-fisica',
    nombre: 'Profesorado y Licenciatura en Educación Física',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2000',
    disponible: true,
    datos: educacionFisica,
  },
  {
    id: 'tec-ceremonial-protocolo',
    nombre: 'Técnico Universitario en Ceremonial y Protocolo',
    departamento: 'Humanidades y Ciencias Sociales',
    plan: '2007',
    disponible: true,
    datos: ceremonialProtocolo,
  },

  // ── Derecho y Ciencias Políticas ──────────────────────────────────────
  {
    id: 'abogacia',
    nombre: 'Abogacía',
    departamento: 'Derecho y Ciencias Políticas',
    plan: '2018',
    disponible: true,
    datos: abogacia,
  },
  {
    id: 'procurador',
    nombre: 'Procurador',
    departamento: 'Derecho y Ciencias Políticas',
    plan: '2010',
    disponible: true,
    datos: procurador,
  },
  {
    id: 'lic-ciencia-politica',
    nombre: 'Licenciatura en Ciencia Política',
    departamento: 'Derecho y Ciencias Políticas',
    plan: '2005',
    disponible: true,
    datos: cienciaPolitica,
  },
  {
    id: 'tec-gestion-publica',
    nombre: 'Tecnicatura Universitaria en Gestión Pública',
    departamento: 'Derecho y Ciencias Políticas',
    plan: '2010',
    disponible: true,
    datos: gestionPublica,
  },

  // ── Artes y Medios de Comunicación ──────────────────────────────────────
  {
    id: 'tec-animacion-arte-digital',
    nombre: 'Tecnicatura Universitaria en Animación y Arte Digital',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2020',
    disponible: true,
    datos: animacionArteDigital,
  },
  {
    id: 'lic-animacion-digital',
    nombre: 'Licenciatura en Animación Digital',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2024',
    disponible: true,
    datos: licAnimacionDigital,
  },
  {
    id: 'tec-artes-audiovisuales',
    nombre: 'Tecnicatura Universitaria en Artes Audiovisuales',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2019',
    disponible: true,
    datos: artesAudiovisuales,
  },
  {
    id: 'tec-artes-escenicas',
    nombre: 'Tecnicatura Universitaria en Artes Escénicas',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2019',
    disponible: true,
    datos: artesEscenicas,
  },
  {
    id: 'tec-desarrollo-videojuegos',
    nombre: 'Tecnicatura Universitaria en Desarrollo de Videojuegos',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2024',
    disponible: true,
    datos: desarrolloVideojuegos,
  },
  {
    id: 'tec-diseno-grafico-digital',
    nombre: 'Tecnicatura Universitaria en Diseño Gráfico y Digital',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2023',
    disponible: true,
    datos: disenoGraficoDigital,
  },
  {
    id: 'tec-guion-audiovisual',
    nombre: 'Tecnicatura Universitaria en Guion Audiovisual',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2021',
    disponible: true,
    datos: guionAudiovisual,
  },
  {
    id: 'tec-locutor-nacional',
    nombre: 'Locutor Nacional',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2010',
    disponible: true,
    datos: locutorNacional,
  },
  {
    id: 'tec-periodismo-deportivo',
    nombre: 'Tecnicatura Universitaria en Periodismo Deportivo Integral',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2020',
    disponible: true,
    datos: periodismoDeportivo,
  },
  {
    id: 'tec-publicidad-comunicacion',
    nombre: 'Tecnicatura Universitaria en Publicidad y Comunicación Estratégica',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2025',
    disponible: true,
    datos: publicidadComunicacion,
  },
  {
    id: 'tec-produccion-musical',
    nombre: 'Tecnicatura Universitaria en Producción Musical',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2025',
    disponible: true,
    datos: produccionMusical,
  },
  {
    id: 'tec-produccion-contenidos',
    nombre: 'Tecnicatura Universitaria en Producción de Contenidos para la Comunicación',
    departamento: 'Artes y Medios de Comunicación',
    plan: '2024',
    disponible: true,
    datos: produccionContenidos,
  },
];

export const DEPARTAMENTOS = [...new Set(CARRERAS.map(c => c.departamento))];
