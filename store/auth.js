import api from '~/api'
import {setAuthToken, resetAuthToken} from '~/utils/auth'
import cookie from 'js-cookie'

const state = () => ({
  user: null,
  loading: false,
  passwordReseting: false,
  token: ''
})

const getters = {
  user: state => {
    return state.user
  },
  loading: state => {
    return state.loading
  },
  passwordReseting: state => {
    return state.passwordReseting
  },
}

const mutations = {
  set_user (store, data) {
    store.user = data
  },
  reset_user (store) {
    store.user = null
  }
}

const actions = {
  signup ({commit}, reqdata) {

    //remove auth token from axios header
    resetAuthToken()

    return api.auth.signup(reqdata)
      .then(response => {
        return response
      })
  },
  signin ({commit}, reqdata) {
    return api.auth.signin(reqdata)
      .then(response => {
        if(response.status === 200) {
            cookie.set('x-access-token', response.data.access_token, {expires: 7})
            setAuthToken(response.data.access_token)
        }
        return response
      })
  },
  profile ({commit}) {
    console.log('auth/profile', {Authorization: 'Bearer ' + cookie.get('x-access-token')})
    return api.profile.profile({Authorization: 'Bearer ' + cookie.get('x-access-token')})
      .then(response => {
        commit('set_user', response.data)
        cookie.set('user_info', response.data)
        return response
      })
      .catch(error => {
        commit('reset_user')
        cookie.remove('user_info', response.data)
        return error
      })
  },
  passwordreset ({commit}, reqdata) {
    return api.profile.passwordreset({Authorization: 'Bearer ' + cookie.get('x-access-token')}, reqdata)
      .then(response => {
        return response
      })
      .catch(error => {
        return error
      })
  },
  updateprofile ({commit}, reqdata) {
    return api.profile.updateprofile({Authorization: 'Bearer ' + cookie.get('x-access-token')}, reqdata)
      .then(response => {
        cookie.set('user_info', response.data)
        commit('set_user', response.data)
        return response
      })
      .catch(error => {
        cookie.remove('user_info', response.data)
        commit('reset_user')
        return error
      })
  },
  reset ({commit}) {
    cookie.remove('x-access-token')
    cookie.remove('user_info')
    commit('reset_user')
    resetAuthToken()
    return Promise.resolve()
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
