export const state = () => ({

})

export const getters = {

}

export const mutations = {
}

export const actions = {

  login ({}, data) {
    this.$auth.loginWith('local', { data: data })
  },

  async logout({}) {
    await this.$auth.logout()
    this.$router.push('/')
  },

  async register(context, data) {
    await this.$axios.post('/auth/sign-up', data)
    context.dispatch('notify', 'User profile created successfully.')
    this.$router.push("/");
  },

  async updateProfile(context, data) {
    await this.$axios.put('/profile', data)
    await this.$auth.fetchUser()
    context.dispatch('notify', 'User profile successfully updated.')
  },


  notify ({}, message) {
    this._vm.$notify({
      message: message,
      timeout: 6000,
      icon: 'tim-icons icon-bell-55',
      horizontalAlign: 'right',
      verticalAlign: 'top',
      type: 'success'
    });
  }

}
