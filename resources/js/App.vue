<template>
    <!-- <div class="h-dvh p-2 overflow-auto flex">
        <div class="w-2/3 h-full grid grid-cols-2">
            <div class="">
                <MapVue/>
            </div>
            <div v-if="showGlobe" class="">
                <Globe/>
            </div>        
        </div>
        <div class="w-1/3">
            <Navigation/>
        </div>
    </div> -->
    <div class="h-dvh grid grid-cols-12">
        <MapVue class="col-span-5 h-full"/>
        <Globe class="col-span-5"/>
        <Navigation class="col-span-2"/>
    </div>
</template>

<script>
import MapVue from './components/Map.vue'
import Globe from './components/Globe.vue'
import Navigation from './components/Navigation.vue'
import { Ion } from 'cesium'

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYmU5YWE5Yi1jZWZmLTQ4MGEtOGE2Mi05NDA0M2Y2M2Y3MzgiLCJpZCI6MjAyMTc0LCJpYXQiOjE3MTA1MDcwMzN9.Yjg4AP92Jef1STDeTVnzIxhcesvDeuFsWmSnLdGxLSE'
export default {
    components:{
        MapVue,Globe,Navigation
    },
    data(){
        return{
            showGlobe:true
        }
    }
}
</script>