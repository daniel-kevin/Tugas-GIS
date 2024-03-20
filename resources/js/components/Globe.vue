<template>
    <div ref="globeContainer">
        <vc-config-provider accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYmU5YWE5Yi1jZWZmLTQ4MGEtOGE2Mi05NDA0M2Y2M2Y3MzgiLCJpZCI6MjAyMTc0LCJpYXQiOjE3MTA1MDcwMzN9.Yjg4AP92Jef1STDeTVnzIxhcesvDeuFsWmSnLdGxLSE">
            <vc-viewer :animation="animation" :camera="camera" @ready="ready">
                <VcPrimitiveTileset assetId="2275207" :accessToken="'a'"></VcPrimitiveTileset>
                <vc-entity ref="entity" :position="curLocationGlobe" description="Current Position" id="MarkerCurPos" :billboard.sync="{}">
                    <vc-graphics-billboard
                    :image="markerImage"
                    :scale="0.05"
                    :show="true"
                    :distance-display-condition="{ near: 0, far: 20000000 }"
                    :horizontal-origin="0"
                    ></vc-graphics-billboard>
                </vc-entity>
            </vc-viewer>
        </vc-config-provider>
    </div>
</template>
<script>
// import Globe from 'globe.gl';
import { mapState } from 'vuex';
import markerImage from '../../../resources/assets/img/marker.png'
import marker3Png from '../../../resources/assets/img/marker3.png'
export default{
    computed: {
        ...mapState({
            aksi: s => s.main.aksi,
            curLocation: s => s.location.curLocation,
            markers: s => s.location.markers,
            waypoints: s => s.location.waypoints,
            polygon: s => s.location.polygon,
            curLocationGlobe: s => s.location.curLocationGlobe,
        }),
    },
    data(){
        return{
            globeDiv: null,
            camera: {
            position: {
                lng: 104.06,
                lat: 30.67,
                height: 2000
            },
            heading: 360,
            pitch: -90,
            roll: 0
            },
            animation: false,
            markerImage: markerImage
        }
    },
    mounted(){
        this.initData()

        // viewer.camera.flyTo({
        //     destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        //     orientation: {
        //         heading: CesiumMath.toRadians(0.0),
        //         pitch: CesiumMath.toRadians(-15.0),
        //     }
        // });
    },
     methods:{
        async initData(){ 
            // const globe = Globe()
            // globe(this.$refs.globeContainer).globeImageUrl(
            //   "//unpkg.com/three-globe/example/img/earth-night.jpg"
            // )
            // this.$refs.globeContainer.addEventListener('click', (event) => {
            //     const rect = event.target.getBoundingClientRect();
            //     const x = event.clientX - rect.left;
            //     const y = event.clientY - rect.top;
            //     const latLng = globe.pointOfViewToLatLng(x, y);
            //     console.log("Latitude:", latLng.lat);
            //     console.log("Longitude:", latLng.lng);
            // });
        },
        handleClick(event){
            console.log(event)
        },
        ready(cesiumInstance){
            const { Cesium, viewer } = cesiumInstance
            // Get Cesium and viewer instances here, then execute the relevant logic code
            this.camera.position.lng = this.curLocationGlobe.lng
            this.camera.position.lat =  this.curLocationGlobe.lat
            this.camera.position.height = this.curLocationGlobe.height
            this.animation = true
        }
     }
}
</script>