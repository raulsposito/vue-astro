import axios from 'axios'

const actions = {
    GET_TODAY({ commit }) {
        axios.post('https://aztro.sameerkumar.website/?sign=aries&day=today')
        .then(response => {
            commit('SET_TODAY', response.data)
        })
    }
}

export default actions
