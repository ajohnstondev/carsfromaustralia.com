export const state = () => ({
  cars: [],
  filteredCars: [],
  paginatedCars: [],
  currency: 'USD',
  totalCars: 0,
  totalPages: 0,
  carPerPage: parseInt(process.env.CAR_PER_PAGE) || 36,
  currentPage: 1,
  totalVisible: 5,
})

export const getters = {
  getCars: state => state.cars,
  getCurrency: state => state.currency,
  getTotalPages: state => state.totalPages,
  getTotalCars: state => state.totalCars,
  getCarPerPage: state => state.carPerPage,
  getPaginatedCars: state => state.paginatedCars,
  getCurrentPage: state => state.currentPage,
}

export const mutations = {
  SET_CARS: (state, value) => { state.cars = value },
  SET_CURRENCY: (state, value) => { state.currency = value },
  SET_TOTAL_CARS: (state, value) => { state.totalCars = state.cars.length },
  SET_TOTAL_PAGES: (state, value) => { state.totalPages = Math.ceil( state.totalCars / state.carPerPage ) },
  SET_CURRENT_PAGE: (state, value) => { state.currentPage = value },
  SET_PAGINATED_CARS: (state, value) => { state.paginatedCars = [...value]}

}

export const actions = {
  async fetchCars (context) {
    let { data } = await this.$axios.get('https://api.carsfromaustralia.com/api/cars')
    context.commit('SET_CARS', data)
    context.commit('SET_TOTAL_CARS', data)
    context.commit('SET_TOTAL_PAGES', data)
    context.dispatch('SET_CURRENT_PAGE', state.currentPage ? state.currentPage : 1)
  },

  SET_CURRENT_PAGE: ({state, commit}, value) => {
    const carPerPage = state.carPerPage
    const cars = [...state.cars]
    const start = value > 1 ? (value - 1) * carPerPage : 0
    const end = value === state.totalPages ? state.totalCars : value * carPerPage
    const newArr = cars.slice(start, end)
    commit('SET_CURRENT_PAGE', value)
    commit('SET_PAGINATED_CARS', newArr)

    console.log(carPerPage, start, end, value, state.cars.length, state.paginatedCars.length, newArr.length)
  }
}