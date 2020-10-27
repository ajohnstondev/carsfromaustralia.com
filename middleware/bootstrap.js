const route = async function (context) {
  console.log('bootstrap middleware', process.server, context.from)

  if (!process.server) {

    if (context.route.path === '/' && context.from && context.from.name !== 'car___en') {
      context.store.dispatch('cars/fetchCars')
    }

  } else {
    if (context.route.path === '/') {
      console.log('yyy')
      await context.store.dispatch('cars/fetchCars')
    }
  }
}


export default route