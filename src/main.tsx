import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BUILD_ID } from './buildInfo';

const ensureFreshBuild = async () => {
  try {
    const response = await fetch(`/version.json?_ts=${Date.now()}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return;
    }

    const payload = (await response.json()) as { buildId?: string };
    const latestBuildId = payload.buildId;

    if (latestBuildId && latestBuildId !== BUILD_ID) {
      const nextUrl = `${window.location.pathname}?v=${latestBuildId}${window.location.hash}`;
      window.location.replace(nextUrl);
    }
  } catch {
    // If the version check fails, continue with the current build.
  }
};

void ensureFreshBuild();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
