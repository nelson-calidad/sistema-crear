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

const enrichProfessional = (professional: typeof DEFAULT_PROFESSIONALS[number]): ProfessionalRecord => ({
  ...professional,
  email: `${professional.name.toLowerCase()}@lab.com`,
  phone: '+54 11 2345-6789',
  retention: '20%',
  hours: 'Lun, Mié, Vie (08:00 - 14:00)',
  image: `https://images.unsplash.com/photo-${professional.id === '1'
    ? '1494790108377-be9c29b29330'
    : professional.id === '2'
      ? '1507003211169-0a1dd7228f2d'
      : '1438761681033-6461ffad8d80'}?w=150&h=150&fit=crop`,
});

const createDefaultProfessionals = (): ProfessionalRecord[] => DEFAULT_PROFESSIONALS.map(enrichProfessional);

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

    return parsed.map((professional) => ({
      ...enrichProfessional(DEFAULT_PROFESSIONALS.find((item) => item.id === String(professional.id)) || DEFAULT_PROFESSIONALS[0]),
      ...professional,
      id: String(professional.id),
      name: String(professional.name || 'Sin nombre'),
      specialty: String(professional.specialty || ''),
      color: String(professional.color || 'bg-slate-500'),
      status: professional.status === 'En Pausa' ? 'En Pausa' : 'Activo',
      email: String(professional.email || ''),
      phone: String(professional.phone || ''),
      hours: String(professional.hours || ''),
      retention: String(professional.retention || ''),
      image: String(professional.image || ''),
    }));
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
      ? {
          ...professional,
          ...patch,
          id: professional.id,
        }
      : professional
  ));

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

  return [professionals, updateProfessional, resetProfessionals] as const;
};
