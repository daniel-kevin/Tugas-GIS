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
        <MapVue class="col-span-5 h-full" @detail-click="handleEmitDetail($event)"/>
        <Globe class="col-span-5 max-h-screen"/>
        <NavigationVue class="col-span-2"/>
    </div>
    <modalComp
    :showing="modal"
    :show-close="true"
    @close="closeModal"
    >
        <div class="w-auto" v-if="dataModal">
            <div class="bg-blue-700 text-white text-center p-1">
               {{ markerDetail?.tipe_object?.nama }}
            </div>
            <div class="bg-white p-2 overflow-auto max-h-dvh">
                <Carousel :items-to-show="1" :wrap-around="true">
                    <Slide v-for="slide in markerDetail.gambar" :key="slide">
                        <div class="carousel__item">
                            <img :src="slide.url" alt="" class="w-full object-contain">
                        </div>
                    </Slide>

                    <template #addons>
                    <Navigation />
                    </template>
                </Carousel>
                <div class="text-2xl font-medium border-t-4 border-gray-300 mt-2 mb-1">
                    {{ markerDetail.nama }}
                </div>
                <div>
                    <div class="grid grid-cols-12">
                        <div class="font-bold col-span-2">
                            Alamat
                        </div>
                        <div class="col-span-10">
                            : {{ markerDetail.alamat }}
                        </div>
                    </div>
                    <div class="grid grid-cols-12">
                        <div class="font-bold col-span-2">
                            Telepon
                        </div>
                        <div class="col-span-10">
                            : {{ markerDetail.telepon }}
                        </div>
                    </div>
                </div>
                <div class="border-y-2 border-gray-300 py-2">
                    {{ markerDetail.desc }}
                </div>
                <!-- <div class="flex items-center overflow-auto h-32">
                    <div v-for="(d,i) in markerDetail.gambar" class="h-32 w-32">
                        <img :src="d.url" alt="" class="">
                    </div>
                </div> -->
            </div>
        </div>
    </modalComp>
</template>

<script>
import MapVue from './components/Map.vue'
import Globe from './components/Globe.vue'
import NavigationVue from './components/Navigation.vue'
import { Ion } from 'cesium'
import modalComp from './components/global/ModalComp.vue'
import { mapState } from 'vuex'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYmU5YWE5Yi1jZWZmLTQ4MGEtOGE2Mi05NDA0M2Y2M2Y3MzgiLCJpZCI6MjAyMTc0LCJpYXQiOjE3MTA1MDcwMzN9.Yjg4AP92Jef1STDeTVnzIxhcesvDeuFsWmSnLdGxLSE'
export default {
    components:{
        MapVue,Globe,NavigationVue,modalComp,
        Carousel,Slide,Pagination,Navigation,
    },
    computed:{
        ...mapState({
            aksi: s => s.main.aksi,
            curLocation: s => s.location.curLocation,
            markers: s => s.location.markers,
            waypoints: s => s.location.waypoints,
            polygon: s => s.location.polygon,
            objectMarker: s => s.location.objectMarker,
            modalShow: s => s.main.modal,
            markerDetail: s => s.location.curMarkerDetail,
        }),

    },
    data(){
        return{
            showGlobe:true,
            modal:false,
            dataModal: {}
        }
    },
    mounted(){
        axios.get('/api/object/get-object',{
            params:{
                tipe_object: 1
            }
        }).then((res) => {
            let data = res.data.data
            data.forEach((e) => {
                this.$store.dispatch('addObjectMarker',e)
            })
        })
    },
    methods:{
        closeModal(){
            this.modal = false
            console.log(this.markerDetail)
        },
        handleEmitDetail(data){
            this.modal = true
            this.dataModal = data
        }
    }
}
</script>