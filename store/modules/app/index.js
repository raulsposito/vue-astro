import axios from 'axios'

export const namespaced = true

export const state = {
    sign: null,
    today: []
}

export const mutations = {
    SET_TODAY(state, value) {
        state.today = value
    },
    SET_SIGN(state, value) {
        state.sign = value
    }
}

export const actions = {
    GET_TODAY({ commit }) {
        axios.post('https://aztro.sameerkumar.website/?sign=aries&day=today')
        .then(response => {
            commit('SET_TODAY', response.data)
        })
    }
}
