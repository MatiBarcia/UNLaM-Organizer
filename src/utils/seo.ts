import { useEffect } from 'react';

// Metadatos por ruta para buscadores. index.html trae los de la home; en una SPA,
// cada página los actualiza al montarse para que Google indexe cada carrera con su
// propio título, descripción y URL canónica (siempre en el dominio actual, aunque
// se entre por el viejo).

export const SITIO_URL = 'https://organizador-unlam.vercel.app';
export const SITIO_NOMBRE = 'Organizador UNLaM';

function setMeta(selector: string, attr: 'content' | 'href', valor: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, valor);
}

export function useSeo(titulo: string, descripcion: string, path: string) {
  useEffect(() => {
    const url = SITIO_URL + path;
    document.title = titulo;
    setMeta('meta[name="description"]', 'content', descripcion);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', titulo);
    setMeta('meta[property="og:description"]', 'content', descripcion);
    setMeta('meta[property="og:url"]', 'content', url);
  }, [titulo, descripcion, path]);
}
