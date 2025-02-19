import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'node:url';


import path from "path"

export default defineConfig({
    optimizeDeps: {
        noDiscovery: true,
        include: ['yup']
    },
    commonjsOptions: {
        esmExternals: true,
     },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            // "@/": path.join(__dirname, "/resources/ts/src/"),
            // "@/": path.join(__dirname, "/resources/js/"),
            "~": path.join(__dirname, "/node_modules/"),
            '@': fileURLToPath(new URL('./resources/js/', import.meta.url)),
            yup: 'yup',

        },
    },
});
