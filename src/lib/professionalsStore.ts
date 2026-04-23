import { useEffect, useState } from 'react';
import { PROFESSIONALS as DEFAULT_PROFESSIONALS } from '../constants';

export type ProfessionalRecord = {
  id: string;
  name: string;
  specialty: string;
  color: string;
  status: 'Activo' | 'En Pausa';
  email: string;
  phone: string;
  hours: string;
  retention: string;
  image: string;
};

const STORAGE_KEY = 'creare.professionals';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop';

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '.')
    .replace(/(^\.|\.$)/g, '');

const createId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `pro-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const enrichProfessional = (professional: typeof DEFAULT_PROFESSIONALS[number]): ProfessionalRecord => ({
  ...professional,
  email: `${professional.name.toLowerCase()}@lab.com`,
  phone: '+54 11 2345-6789',
  retention: '20%',
  hours: 'Lun, Mie, Vie (08:00 - 14:00)',
  image: `https://images.unsplash.com/photo-${professional.id === '1'
    ? '1494790108377-be9c29b29330'
    : professional.id === '2'
      ? '1507003211169-0a1dd7228f2d'
      : '1438761681033-6461ffad8d80'}?w=150&h=150&fit=crop`,
});

const createDefaultProfessionals = (): ProfessionalRecord[] => DEFAULT_PROFESSIONALS.map(enrichProfessional);

const normalizeProfessional = (
  professional: Partial<ProfessionalRecord> & { id: string },
  fallback?: ProfessionalRecord,
): ProfessionalRecord => {
  const base = fallback ?? createDefaultProfessionals()[0];
  const name = String(professional.name || base.name || 'Sin nombre');

  return {
    ...base,
    ...professional,
    id: String(professional.id),
    name,
    specialty: String(professional.specialty || base.specialty || ''),
    color: String(professional.color || base.color || 'bg-slate-500'),
    status: professional.status === 'En Pausa' ? 'En Pausa' : 'Activo',
    email: String(professional.email || (name ? `${slugify(name)}@lab.com` : '') || base.email || ''),
    phone: String(professional.phone || base.phone || ''),
    hours: String(professional.hours || base.hours || 'Lun, Mie, Vie (08:00 - 14:00)'),
    retention: String(professional.retention || base.retention || '20%'),
    image: String(professional.image || base.image || DEFAULT_IMAGE),
  };
};

const readProfessionals = (): ProfessionalRecord[] => {
  if (typeof window === 'undefined') {
    return createDefaultProfessionals();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const defaults = createDefaultProfessionals();
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    return defaults;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return createDefaultProfessionals();
    }

    return parsed.map((professional) => {
      const fallback = DEFAULT_PROFESSIONALS.find((item) => item.id === String(professional.id));
      return normalizeProfessional(
        {
          ...professional,
          id: String(professional.id || createId()),
        },
        fallback ? enrichProfessional(fallback) : undefined,
      );
    });
  } catch {
    return createDefaultProfessionals();
  }
};

const writeProfessionals = (professionals: ProfessionalRecord[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(professionals));
};

let cachedProfessionals = createDefaultProfessionals();
const listeners = new Set<(professionals: ProfessionalRecord[]) => void>();

const emit = (professionals: ProfessionalRecord[]) => {
  cachedProfessionals = professionals;
  listeners.forEach((listener) => listener(professionals));
};

export const getProfessionalsSnapshot = () => {
  if (typeof window === 'undefined') {
    return cachedProfessionals;
  }

  cachedProfessionals = readProfessionals();
  return cachedProfessionals;
};

export const updateProfessional = (id: string, patch: Partial<ProfessionalRecord>) => {
  const current = getProfessionalsSnapshot();
  const next = current.map((professional) => (
    professional.id === id
      ? normalizeProfessional(
          {
            ...professional,
            ...patch,
            id: professional.id,
          },
          professional,
        )
      : professional
  ));

  writeProfessionals(next);
  emit(next);
  return next;
};

export const createProfessional = (data: Partial<ProfessionalRecord>) => {
  const current = getProfessionalsSnapshot();
  const nextProfessional = normalizeProfessional({
    id: createId(),
    name: String(data.name || 'Sin nombre'),
    specialty: String(data.specialty || ''),
    color: String(data.color || 'bg-blue-500'),
    status: data.status === 'En Pausa' ? 'En Pausa' : 'Activo',
    email: String(data.email || ''),
    phone: String(data.phone || ''),
    hours: String(data.hours || 'Lun, Mie, Vie (08:00 - 14:00)'),
    retention: String(data.retention || '20%'),
    image: String(data.image || DEFAULT_IMAGE),
  });

  const next = [...current, nextProfessional];
  writeProfessionals(next);
  emit(next);
  return nextProfessional;
};

export const deleteProfessional = (id: string) => {
  const current = getProfessionalsSnapshot();
  const next = current.filter((professional) => professional.id !== id);
  writeProfessionals(next);
  emit(next);
  return next;
};

export const resetProfessionals = () => {
  const next = createDefaultProfessionals();
  writeProfessionals(next);
  emit(next);
  return next;
};

export const useProfessionals = () => {
  const [professionals, setProfessionals] = useState<ProfessionalRecord[]>(() => getProfessionalsSnapshot());

  useEffect(() => {
    setProfessionals(getProfessionalsSnapshot());

    const listener = (next: ProfessionalRecord[]) => setProfessionals(next);
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return [professionals, updateProfessional, resetProfessionals, createProfessional, deleteProfessional] as const;
};
