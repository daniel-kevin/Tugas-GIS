import axios from "axios"
// import { useToast } from "vue-toastification"

// const toast = useToast()

const ActionType = {
    SET_AKSI: 'SET_AKSI',
}
const state = {
    aksi: 'CLICK',
  }
  
const mutations = {
    [ActionType.SET_AKSI](state,data){
        state.aksi = data
    },
}
  
const actions = {
}
  
const getters = {
}
  
export default {
    state,
    mutations,
    actions,
    getters
}