<template>
    <div class="h-screen z-0">
      <l-map ref="map" v-model:zoom="zoom" :center="curLocation" @click="clickMap" @ready="onMapReady">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <LControlScale position="bottomleft"/>
        <template v-if="markers.length > 0">
          <template v-for="(marker,i) in markers">
            <LMarker
            :lat-lng="[marker.lat,marker.lng]">
            <LPopup>
              <div class="bg-orange-500 text-center text-white p-2 whitespace-nowrap min-w-f">
                {{ marker.title }}
              </div>
              <div class="bg-white shadow-md p-2">
                {{ marker.text }}
              </div>
            </LPopup>
          </LMarker>
          </template>
          <template v-if="waypoints.length > 1">
            <l-routing-machine :waypoints="waypoints" :mapObject="mapObject"/>
          </template>
        </template>
        <template v-if="polygon.length > 1">
          <l-polygon :lat-lngs="polygon" :color="'green'"></l-polygon>
        </template>
        <template v-if="objectMarker.length > 0">
          <template v-for="(marker,i) in objectMarker">
            <LMarker
            :lat-lng="[marker.latitude,marker.longitude]"
            :icon="hospitalIcon">
            <LPopup>
              <div class="min-w-fit">
                <div v-if="marker.gambar.length < 1" class="bg-gray-300 min-h-12 p-2 text-gray-500 min-w-16 grid items-center justify-items-center">
                  No Image Found
                </div>
                <div v-else class="min-h-12 min-w-16 max-w-full">
                  <img :src="marker.gambar[0].url" alt="">
                </div>
                <div class="bg-white p-2">
                  <div class="font-semibold text-sm whitespace-nowrap">
                    {{ marker.nama }}
                  </div>
                  <div class="grid grid-cols-12 mt-2">
                    <div class="text-xs text-gray-400 col-span-3">
                      Latitude
                    </div>
                    <div class="text-xs text-gray-400 col-span-9">
                      : {{ marker.latitude }}
                    </div>
                    <div class="text-xs text-gray-400 col-span-3">
                      Longitude
                    </div>
                    <div class="text-xs text-gray-400 col-span-9">
                      : {{ marker.longitude }}
                    </div>
                  </div>
                  <div @click="toggleModal(marker)" class="text-violet-700 font-bold mt-2 hover:cursor-pointer">
                    Lihat Detail
                  </div>
                </div>
              </div>
              <!-- <div class="bg-blue-800 text-center text-white p-2 whitespace-nowrap min-w-f">
                {{ marker.nama }}
              </div>
              <div class="bg-white shadow-md p-2 grid grid-cols-12 min-w-72">
                <div class="col-span-3">
                  Latitude 
                </div>
                <div class="col-span-9">
                  : {{ marker.latitude }}
                </div>
                <div class="col-span-3">
                  Longitude 
                </div>
                <div class="col-span-9">
                  : {{ marker.longitude }}
                </div>
                <div class="w-full col-span-12 text-center bg-blue-500 text-white hover:bg-blue-700 hover:cursor-pointer" @click="toggleModal(marker)">
                  Details...
                </div>
              </div> -->
            </LPopup>
          </LMarker>
          </template>
        </template>
      </l-map>
    </div>
</template>
<script>
import leaflet, { polygon } from 'leaflet'
import {LMap, LTileLayer, LMarker, LControlScale, LPopup, LPolygon, LIcon } from '@vue-leaflet/vue-leaflet'
import LRoutingMachine from './LRoutingMachine.vue';
import { mapState } from 'vuex';
import iconRS from '../../../resources/assets/img/hospital_marker.png'

export default {
  components:{
    LMap,
    LTileLayer,
    LMarker,LRoutingMachine,LControlScale, LPopup,
    LPolygon, LIcon
  },
  emits:['detailClick'],
  computed: {
    ...mapState({
        aksi: s => s.main.aksi,
        curLocation: s => s.location.curLocation,
        markers: s => s.location.markers,
        waypoints: s => s.location.waypoints,
        polygon: s => s.location.polygon,
        objectMarker: s => s.location.objectMarker,
    }),
  },
  data(){
    return{
      map: '',
      zoom: 15,
      mapObject: null,
      center: [47.41322, -1.219482],
      mapKey: 0,
      hospitalIcon: leaflet.icon({
        iconUrl: iconRS,
        iconSize: [32,37],
        iconAnchor: [16,-1]
      })
    }
  },
  mounted(){
    // if(navigator.geolocation){
    //     navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
    //   }
  },
  methods:{
    clickMap(e){
      console.log(this.curLocation)
      switch(this.aksi){
        case 'Aksi':
          break;
        case 'ADD_MARKER':
          this.$store.dispatch('addMarker',{lat: e.latlng.lat, lng: e.latlng.lng, text:'Test', title:'Test'})
          break;
        case 'ADD_WAYPOINTS':
          this.$store.dispatch('addWayPoints',{lat: e.latlng.lat, lng: e.latlng.lng, text:'Test', title:'Test'})
          break;
        case 'ADD_POLYGON':
          this.$store.dispatch('addPolygon',[e.latlng.lat,e.latlng.lng,])
          break;
        case 'ADD_CIRLCE':
          this.$store.dispatch('addCircle',[e.latlng.lat,e.latlng.lng,])
          break;
        default:
          break;
      }
      // this.waypoints.push({lat: e.latlng.lat, lng:e.latlng.lng})
      // console.log(this.waypoints)
    },
    async onMapReady(){
      this.mapObject = this.$refs.map.leafletObject
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
      }
    },
    setCurrentPosition(position){
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      this.center[0] = latitude
      this.center[1] = longitude
      this.$store.commit('SET_CUR_LOCATION', this.center)
      this.$store.commit('SET_CUR_LOCATION_GLOBE', {lng:longitude, lat:latitude, height:10000})
      this.$store.dispatch('addMarker',{lat: latitude, lng: longitude, text:'Latitude: '+latitude+'\n'+ 'Longitude: ' + longitude, title:'Current Position'})
      // this.markers.push({lat: latitude, lng: longitude, text:'Latitude: '+latitude+'\n'+ 'Longitude: ' + longitude, title:'Current Position'})
    },
    async toggleModal(data){
      console.log(data)
      this.$store.commit('SET_CUR_MARKER_DETAIL', data)
      this.$emit('detailClick', data)
    }
  }
};
</script>