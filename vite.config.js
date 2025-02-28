import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/cicd-react-app/", // Change this to your GitHub repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
