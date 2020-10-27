import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'cars-from-australia-persisted-v1.001',
  })(store)
}
