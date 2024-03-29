import axios from "axios"
import { polygon } from "leaflet"
const ActionType = {
    SET_CUR_LOCATION: 'SET_CUR_LOCATION',
    SET_MARKERS: 'SET_MARKERS',
    SET_WAYPOINTS: 'SET_WAYPOINTS',
    SET_POLYGON: 'SET_POLYGON',
    SET_CUR_LOCATION_GLOBE: 'SET_CUR_LOCATION_GLOBE',
    SET_OBJECT_MARKER: 'SET_OBJECT_MARKER',
    SET_CUR_MARKER_DETAIL: 'SET_CUR_MARKER_DETAIL',
}
const state = {
    curLocation: [47.41322, -1.219482],
    markers:[],
    waypoints: [],
    polygon: [],
    curLocationGlobe: {lng:115.1715031, lat:-8.8044337, height:10000000},
    objectMarker:[],

    curMarkerDetail: {},
  }
  
const mutations = {
    [ActionType.SET_CUR_LOCATION](state,data){
        state.curLocation = data
    },
    [ActionType.SET_MARKERS](state,data){
        state.markers = data
    },
    [ActionType.SET_WAYPOINTS](state,data){
        state.waypoints = data
    },
    [ActionType.SET_POLYGON](state,data){
        state.polygon = data
    },
    [ActionType.SET_CUR_LOCATION_GLOBE](state,data){
        state.curLocationGlobe = data
    },
    [ActionType.SET_OBJECT_MARKER](state,data){
        state.objectMarker = data
    },
    [ActionType.SET_CUR_MARKER_DETAIL](state,data){
        console.log(data)
        state.curMarkerDetail = data
    },
}
  
const actions = {
    addMarker({commit}, marker){
        console.log(marker)
        state.markers.push(marker)
    },
    addWayPoints({commit}, marker){
        state.waypoints.push(marker)
    },
    addPolygon({commit}, marker){
        state.polygon.push(marker)
    },
    addObjectMarker({commit}, marker){
        state.objectMarker.push(marker)
    }
}
  
const getters = {
}
  
export default {
    state,
    mutations,
    actions,
    getters
}