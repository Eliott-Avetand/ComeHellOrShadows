import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        define: {
            "process.env": env
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, './src'),
                "@actions": path.resolve(__dirname, './src/actions'),
                "@assets": path.resolve(__dirname, './src/assets'),
                "@components": path.resolve(__dirname, './src/components'),
                "@config": path.resolve(__dirname, './src/config'),
                "@contexts": path.resolve(__dirname, './src/contexts'),
                "@reducers": path.resolve(__dirname, './src/reducers'),
                "@services": path.resolve(__dirname, './src/services'),
                "@styles": path.resolve(__dirname, './src/styles'),
                "@views": path.resolve(__dirname, './src/views'),
            }
        }
    }
});
