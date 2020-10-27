import  Vue from 'vue'

export const state = () => ({
  cars: [],
  filteredCars: [],
  paginatedCars: [],
  currency: 'USD',
  totalCars: 0,
  totalFilteredCars: 0,
  totalPages: 0,
  totalFilteredPages: 0,
  carPerPage: parseInt(process.env.CAR_PER_PAGE) || 36,
  currentPage: 1,
  totalVisible: 5,
  filterActive: false,
  filters: {},
  loader: false,
  carDetails: {},
  filterLoader: false,
  leftFilter: null,
  filterMax: 0,
  filterMin: 0
})


export const getters = {
  getCars: state => state.cars,
  getCurrency: state => state.currency,
  getTotalPages: state => state.totalPages,
  getTotalFilteredPages: state => state.totalFilteredPages,
  getTotalCars: state => state.totalCars,
  getCarPerPage: state => state.carPerPage,
  getPaginatedCars: state => state.paginatedCars,
  getCurrentPage: state => state.currentPage,
  getFilterActive: state => state.filterActive,
  getFilters: state => state.filters,
  getLoader: state => state.loader,
  getCarDetails: state => state.carDetails,
  getFilterLoader: state => state.filterLoader
}

export const mutations = {
  SET_CARS: (state, value) => { state.cars = value },
  SET_CURRENCY: (state, value) => { state.currency = value },
  SET_TOTAL_CARS: (state, value) => { state.totalCars = state.cars.length },
  SET_TOTAL_PAGES: (state, value) => { state.totalPages = Math.ceil( state.totalCars / state.carPerPage ) },
  SET_TOTAL_FILTERED_CARS: (state, value) => { state.totalFilteredCars = state.filteredCars.length },
  SET_TOTAL_FILTERED_PAGES: (state, value) => { state.totalFilteredPages = Math.ceil( state.totalFilteredCars / state.carPerPage ) },
  SET_CURRENT_PAGE: (state, value) => { state.currentPage = value },
  SET_PAGINATED_CARS: (state, value) => { state.paginatedCars = [...value]},
  SET_FILTERED_CARS: (state, value) => { state.filteredCars = [...value] },
  SET_FILTERS: (state, value) => {
    state.filterActive = true
    if (value.max || value.min) {
      let show = ''
      if (value.min && value.max) {
        show = `${value.min} - ${value.max}`
      } else if(value.min && !value.max) {
        show = `>= ${value.min}`
      } else if (value.max && !value.min) {
        show = `<= ${value.max}`
      }
      state.filters = Object.assign({}, {[value.type]: show })
    } else {
      state.filters = Object.assign({}, {[value.type]: value.value })
    }

  },

  REMOVE_FILTER: (state, value) => {
    if (Object.keys(state.filters).length === 1) {
      state.filterActive = false
    }

    Vue.delete(state.filters, value)
  },

  SET_FILTER_ACTIVE: (state, value) => { state.filterActive = value },
  SET_LOADER: (state, value) => { state.loader = value },
  SET_CAR_DETAILS: (state, value) => { state.carDetails = value },
  SET_FILTER_LOADER: (state, value) => { state.filterLoader = value },
  SET_LEFT_FILTER: (state, value) => { state.leftFilter = value },
  RESET_LEFT_FILTER: (state) => { state.leftFilter = null },
  RESET_FILTER: (state) => { state.filters = Object.assign({}, {}) },
  SET_FILTER_MAX: (state, value) => { state.filterMax = value },
  SET_FILTER_MIN: (state, value) => { state.filterMin = value },

}

export const actions = {
  async fetchCars ({dispatch, commit}) {
    let { data } = await this.$axios.get('https://api.carsfromaustralia.com/api/cars')
    console.log(data);
    commit('SET_CARS', data)
    commit('SET_TOTAL_CARS', data)
    commit('SET_TOTAL_PAGES', data)
    dispatch('SET_CURRENT_PAGE', state.currentPage ? state.currentPage : 1)
  },

  SET_CURRENT_PAGE: ({commit, state}, value) => {
    const carPerPage = state.carPerPage
    const cars = [...state.cars]
    const start = value > 1 ? (value - 1) * carPerPage : 0
    const end = value === state.totalPages ? state.totalCars : value * carPerPage
    const newArr = cars.slice(start, end)
    commit('SET_CURRENT_PAGE', value)
    commit('SET_PAGINATED_CARS', newArr)
  },

  async filterCars ({dispatch, commit, state}, value) {
    commit('SET_FILTER_LOADER', true)
    // const filters = state.filters
    let filteredCars = []


    if (value.type === 'odometer') {
      filteredCars = state.cars.filter(car => compare(car[value.type], value.value) )
    } else if (value.type === 'price') {
      filteredCars = state.cars.filter( car => comparePrice(car[value.type]['USD'], value.value) )
    } else if (value.type === 'priceRange') {
      filteredCars = state.cars.filter( car => {
        if (value.min && value.max) {
          return car['price']['USD'] >= value.min && car['price']['USD'] <= value.max
        } else if (value.min && !value.max) {
          return car['price']['USD'] >= value.min
        } else if (!value.min && value.max) {
          return car['price']['USD'] <= value.max
        }

      })
    } else if (value.type === 'milageRange') {
      filteredCars = state.cars.filter( car => {
        if (value.min && value.max) {
          return car['odometer'] >= value.min && car['odometer'] <= value.max
        } else if (value.min && !value.max) {
          return car['odometer'] >= value.min
        } else if (!value.min && value.max) {
          return car['odometer'] <= value.max
        }

      })
    } else if (value.type === 'yearRange') {
      filteredCars = state.cars.filter( car => {
        if (value.min && value.max) {
          return car['year'] >= value.min && car['year'] <= value.max
        } else if (value.min && !value.max) {
          return car['year'] >= value.min
        } else if (!value.min && value.max) {
          return car['year'] <= value.max
        }

      })
    } else if (value.type === 'engine_size') {
      filteredCars = state.cars.filter( car => compareEngine(car[value.type], value.value) )
    } else if (value.type === 'year') {
      filteredCars = state.cars.filter( car => compareUsage(car[value.type], value.value) )
    } else {
      filteredCars = state.cars.filter(car => car[value.type].toLowerCase() === value.value.toLowerCase() )
    }

    commit('SET_FILTERS', value)
    commit('SET_FILTERED_CARS', filteredCars)
    commit('SET_TOTAL_FILTERED_CARS', filteredCars)
    commit('SET_TOTAL_FILTERED_PAGES', filteredCars)
    commit('SET_CURRENT_PAGE', 1)

    const start = 0
    const end = state.carPerPage
    const newArr = filteredCars.slice(start, end)
    commit('SET_PAGINATED_CARS', newArr)
    setTimeout(() => {commit('SET_FILTER_LOADER', false)}, 300)
  },

  SET_FILTERED_CURRENT_PAGE: ({commit, state}, value) => {

    const carPerPage = state.carPerPage
    const cars = [...state.filteredCars]
    const start = value > 1 ? (value - 1) * carPerPage : 0
    const end = value === state.totalFilteredPages ? state.totalFilteredCars : value * carPerPage
    const newArr = cars.slice(start, end)

    commit('SET_CURRENT_PAGE', value)
    commit('SET_PAGINATED_CARS', newArr)

  },

  async removeFilter ({dispatch, commit}, value) {
    commit('SET_FILTER_LOADER', true)
    await commit('RESET_FILTER')
    await commit('RESET_LEFT_FILTER')
    dispatch('reFilter')
    setTimeout(() => {commit('SET_FILTER_LOADER', false)}, 300)
  },

  reFilter ({commit, state}) {
    let filteredCars = [...state.cars]
    for (const [key, value] of Object.entries(state.filters)) {
      console.log(key, value)
      if (key === 'odometer') {
        filteredCars = filteredCars.filter( car => compare(car[key], value) )
      } else if (key === 'price') {
        filteredCars = filteredCars.filter( car => comparePrice(car[key]['USD'], value) )
      } else if (key === 'engine_size') {
        filteredCars = filteredCars.filter( car => compareEngine(car[key], value) )
      } else if (key === 'year') {
        filteredCars = filteredCars.filter( car => compareUsage(car[key], value) )
      } else {
        filteredCars = filteredCars.filter( car => car[key].toLowerCase() === value.toLowerCase() )
      }

    }

    commit('SET_FILTERED_CARS', filteredCars)
    commit('SET_TOTAL_FILTERED_CARS', filteredCars)
    commit('SET_TOTAL_FILTERED_PAGES', filteredCars)
    commit('SET_CURRENT_PAGE', 1)

    const start = 0
    const end = state.carPerPage
    const newArr = filteredCars.slice(start, end)
    commit('SET_PAGINATED_CARS', newArr)
  },

  async fetchCar({commit}, id) {
    let { data } = await this.$axios.get(`https://api.carsfromaustralia.com/api/cars/${id}`)
    commit('SET_CAR_DETAILS', data)
  }

}


function compare(post, value) {
  return post < value;
}

function comparePrice(price, value) {
  switch (value) {
    case 1:   return price < 1000;
    case 2:   return price >= 1001 && price <= 3000;
    case 3:  return price >= 3001 && price <= 5000;
    case 4:  return price >= 5001 && price <= 7000;
    case 5:  return price >= 7001 && price <= 10000;
    case 6:  return price >= 10001 && price <= 15000;
    case 7: return price > 15000;
  }
}

function compareUsage(year, value) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  switch (value) {
    case 1:   return age < 1;
    case 2:   return age >= 1 && age <= 3;
    case 3:   return age >= 4 && age <= 5;
    case 4:   return age >= 6 && age <= 8;
    case 5:   return age >= 9 && age <= 12;
    case 6:   return age >= 13;
    case 7:   return age >= 25;

  }
}

function compareEngine(engine, value) {
  switch (value) {
    case 1:
      return engine <= 1600;
    case 2:
      return engine <= 1800;
    case 3:
      return engine <= 2000;
    case 4:
      return engine <= 2500;
    case 5:
      return engine <= 3000;
    case 6:
      return engine <= 4500;
    case 7:
      return true;
  }
}