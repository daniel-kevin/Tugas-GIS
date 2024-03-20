<template>
    <div class="h-screen">
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
      </l-map>
    </div>
</template>
<script>
import leaflet, { polygon } from 'leaflet'
import {LMap, LTileLayer, LMarker, LControlScale, LPopup, LPolygon } from '@vue-leaflet/vue-leaflet'
import LRoutingMachine from './LRoutingMachine.vue';
import { mapState } from 'vuex';

export default {
  components:{
    LMap,
    LTileLayer,
    LMarker,LRoutingMachine,LControlScale, LPopup,
    LPolygon
  },
  computed: {
    ...mapState({
        aksi: s => s.main.aksi,
        curLocation: s => s.location.curLocation,
        markers: s => s.location.markers,
        waypoints: s => s.location.waypoints,
        polygon: s => s.location.polygon,
    }),
  },
  data(){
    return{
      map: '',
      zoom: 2,
      mapObject: null,
      center: [47.41322, -1.219482]
    }
  },
  mounted(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.setCurrentPosition)
      }
  },
  methods:{
    clickMap(e){
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
    onMapReady(){
      this.mapObject = this.$refs.map.leafletObject
      console.log(this.markers)
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
    }
  }
};
</script>