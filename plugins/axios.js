import Vue from 'vue'
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // console.log('Making request to ' + config.url)
  })

  $axios.onResponse(response => {
    // console.log(response, response.request, response.request.responseURL)
  })

  $axios.onError(error => {
    // const code = parseInt(error.response && error.response.status)
    // console.log(code)

    Vue.prototype.$notify({
      message: error.response.data.error,
      timeout: 6000,
      icon: 'tim-icons icon-bell-55',
      horizontalAlign: 'right',
      verticalAlign: 'top',
      type: 'danger'
    });
  })
}