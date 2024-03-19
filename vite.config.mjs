import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// const cesiumSource = "node_modules/cesium/Build/Cesium";
// const cesiumBaseUrl = "cesiumStatic";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        // viteStaticCopy({
        //     targets: [
        //       { src: `${cesiumSource}/ThirdParty`, dest: cesiumBaseUrl },
        //       { src: `${cesiumSource}/Workers`, dest: cesiumBaseUrl },
        //       { src: `${cesiumSource}/Assets`, dest: cesiumBaseUrl },
        //       { src: `${cesiumSource}/Widgets`, dest: cesiumBaseUrl },
        //     ],
        //   }),
    ],
    // define: {
    //     CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl),
    // },
});
