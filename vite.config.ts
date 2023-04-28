import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src', 'index.tsx'),
            name: 'ThinAirReactComponents',
            formats: ['es', 'cjs'],
            fileName: 'index'
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            },
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/vars.module.scss";'
            }
        }
    }
})
