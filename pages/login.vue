<template>
  <div class="container login-page">
    <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <form @submit.prevent="login">
        <card class="card-login card-white">
          <template slot="header">
            <img src="img//card-primary.png" alt="" />
            <h1 class="card-title">Log in</h1>
          </template>

          <div>
            <base-input
              v-validate="'required|email'"
              name="email"
              :error="getError('email')"
              v-model="model.email"
              placeholder="Email"
              autocomplete="username"
              addon-left-icon="tim-icons icon-email-85"
            >
            </base-input>

            <base-input
              v-validate="'required|min:5'"
              name="password"
              :error="getError('password')"
              v-model="model.password"
              type="password"
              autocomplete="current-password"
              placeholder="Password"
              addon-left-icon="tim-icons icon-lock-circle"
            >
            </base-input>
          </div>

          <div slot="footer">
            <base-button native-type="submit" type="primary" class="mb-3" size="lg" block>
              Login
            </base-button>
            <div class="pull-left">
              <h6>
                <nuxt-link class="link footer-link" to="/register">
                  Create Account
                </nuxt-link>
              </h6>
            </div>
          </div>
        </card>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login-page',
  layout: 'auth',
  head () {
    return {
      title: 'Login',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  data() {
    return {
      model: {
        email: '',
        password: '',
        subscribe: true
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    async login() {
      let isValidForm = await this.$validator.validateAll();
      if (isValidForm) {
        const data = {
          email: this.model.email,
          password: this.model.password
        }
        this.$store.dispatch('user/login', data)

      }
    }
  }
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
