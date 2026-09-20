import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Cambia este valor si el repositorio tiene otro nombre.
  base: '/https://github.com/mayron073/MR.git/'
});
