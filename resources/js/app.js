import './bootstrap';

import '../css/app.css'
import '../../node_modules/cesium/Build/Cesium/Widgets/widgets.css'
import '../../node_modules/vue-cesium/dist/index.css'

import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import store from './store/index'

// import Toast from 'vue-toastification'
// import 'vue-toastification/dist/index.css';

//3rd party components
import VueCesium from 'vue-cesium'

const app = createApp(App)
app.use(createStore(store))
// app.use(Toast)
app.use(VueCesium,{
    cesiumPath: '../../node_modules/cesium/Build/Cesium/Cesium.js',
    accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYmU5YWE5Yi1jZWZmLTQ4MGEtOGE2Mi05NDA0M2Y2M2Y3MzgiLCJpZCI6MjAyMTc0LCJpYXQiOjE3MTA1MDcwMzN9.Yjg4AP92Jef1STDeTVnzIxhcesvDeuFsWmSnLdGxLSE',
    locale: 'enUS' // change to English
})
app.mount('#app')