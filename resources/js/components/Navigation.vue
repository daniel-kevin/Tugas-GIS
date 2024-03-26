<template>
    <div>
        <div class="sticky top-0 bg-gray-100 w-full border h-full  p-2">
            <div class="shadow-md">
                <div class="bg-fuchsia-700 rounded-t-md p-2 text-white text-center">
                    Aksi
                </div>
                <div class="grid grid-cols-2 h-1/2 p-2 gap-4 bg-white rounded-b-md">
                    <div @click="handleClick('CLICK')" :class="`grid justify-center border border-fuchsia-700 rounded-md hover:cursor-pointer hover:scale-110 duration-500 hover:border-fuchsia-700 hover:bg-fuchsia-700 transition-colors group ${isActive('CLICK')?'bg-fuchsia-700 text-white':'text-fuchsia-700'}`">
                        <div class="grid justify-center">
                            <CursorArrowRaysIcon class="w-5 h-5 group-hover:text-white duration-500 transition-colors"/>
                        </div>
                        <div class="font-semibold group-hover:text-white duration-500 transition-colors  text-sm">
                            Click
                        </div>
                    </div>
                    <div @click="handleClick('ADD_MARKER')" :class="`grid justify-center border border-fuchsia-700 rounded-md hover:cursor-pointer hover:scale-110 duration-500 hover:border-fuchsia-700 hover:bg-fuchsia-700 transition-colors group ${isActive('ADD_MARKER')?'bg-fuchsia-700 text-white':'text-fuchsia-700'}`">
                        <div class="grid justify-center">
                            <MapPinIcon class="w-5 h-5 group-hover:text-white duration-500 transition-colors"/>
                        </div>
                        <div class="font-semibold group-hover:text-white duration-500 transition-colors  text-sm">
                            Tambah Marker
                        </div>
                    </div>
                    <div @click="handleClick('ADD_WAYPOINTS')" :class="`grid justify-center border border-fuchsia-700 rounded-md hover:cursor-pointer hover:scale-110 duration-500 hover:border-fuchsia-700 hover:bg-fuchsia-700 transition-colors group ${isActive('ADD_WAYPOINTS')?'bg-fuchsia-700 text-white':'text-fuchsia-700'}`">
                        <div class="grid justify-center">
                            <MapIcon class="w-5 h-5 group-hover:text-white duration-500 transition-colors"/>
                        </div>
                        <div class="font-semibold group-hover:text-white duration-500 transition-colors  text-sm">
                            Cari Rute
                        </div>
                    </div>
                    <div @click="handleClick('ADD_POLYGON')" :class="`grid justify-center border border-fuchsia-700 rounded-md hover:cursor-pointer hover:scale-110 duration-500 hover:border-fuchsia-700 hover:bg-fuchsia-700 transition-colors group ${isActive('ADD_POLYGON')?'bg-fuchsia-700 text-white':'text-fuchsia-700'}`">
                        <div class="grid justify-center">
                            <StopIcon class="w-5 h-5 group-hover:text-white duration-500 transition-colors"/>
                        </div>
                        <div class="font-semibold group-hover:text-white duration-500 transition-colors  text-sm">
                            Buat Polygon
                        </div>
                    </div>
                    <div @click="handleClick('ADD_CIRCLE')" :class="`grid justify-center border border-fuchsia-700 rounded-md hover:cursor-pointer hover:scale-110 duration-500 hover:border-fuchsia-700 hover:bg-fuchsia-700 transition-colors group ${isActive('ADD_CIRCLE')?'bg-fuchsia-700 text-white':'text-fuchsia-700'}`">
                        <div class="grid justify-center">
                            <PlusCircleIcon class="w-5 h-5 group-hover:text-white duration-500 transition-colors"/>
                        </div>
                        <div class="font-semibold group-hover:text-white duration-500 transition-colors  text-sm">
                            Buat Lingkaran
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="grid grid-cols-3 gap-2">
            <div class="border border-white">
                aaaaaaaaaaaaaaa
            </div>
            <div>
                bbbbbbbbbbbb
            </div>
            <div>
                ccccccccccccc
            </div>
        </div> -->
    </div>
</template>
<script>
import { CursorArrowRaysIcon, MapPinIcon, MapIcon, StopIcon,PlusCircleIcon } from '@heroicons/vue/24/solid'
import { mapState } from 'vuex'; 

export default{
    components:{
        CursorArrowRaysIcon, MapPinIcon, MapIcon, StopIcon, PlusCircleIcon
    },
    computed: {
        ...mapState({
            aksi: s => s.main.aksi,
        }),
    },
    methods:{
        handleClick(action){
            this.$store.commit('SET_AKSI', action)
            console.log(this.aksi)
        },
        isActive(action){
            if(this.aksi == action){
                return true
            }
            else{
                return false
            }
        }
    }
}
</script>