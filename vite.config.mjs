import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

// const cesiumSource = "node_modules/cesium/Build/Cesium";
// const cesiumBaseUrl = "cesiumStatic";

export default defineConfig({
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
        // viteStaticCopy({
        //     targets: [
        //       { src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
        //       { src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
        //       { src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
        //       { src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
        //     ],
        //   }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    // define: {
    //     CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl),
    // },
});
