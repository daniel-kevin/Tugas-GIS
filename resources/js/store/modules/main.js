import axios from "axios"
// import { useToast } from "vue-toastification"

// const toast = useToast()

const ActionType = {
    SET_AKSI: 'SET_AKSI',
    SET_MODAL: 'SET_MODAL',
}
const state = {
    aksi: 'CLICK',
    modal: true,
  }
  
const mutations = {
    [ActionType.SET_AKSI](state,data){
        state.aksi = data
    },
    [ActionType.SET_MODAL](state,data){
        console.log(data)
        state.modal = data
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