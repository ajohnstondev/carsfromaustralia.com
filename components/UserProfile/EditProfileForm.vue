<template>
  <card class="user-profile-update">
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="updateProfile">

      <div class="row">
        <div class="col-md-6">
          <base-input
                  v-validate="'required'"
                  :error="getError('First Name')"
                  type="text"
                  label="First Name"
                  name="First Name"
                  placeholder="First Name"
                  addon-left-icon="tim-icons icon-single-02"
                  v-model="user.first_name"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
                  v-validate="'required'"
                  :error="getError('Last Name')"
                  type="text"
                  label="Last Name"
                  name="Last Name"
                  placeholder="Last Name"
                  addon-left-icon="tim-icons icon-single-02"
                  v-model="user.last_name"
          >
          </base-input>
        </div>
      </div>

      <div class="row">

        <div class="col-md-12">
          <base-input
                  v-validate="'required|email'"
                  :error="getError('email')"
                  type="email"
                  label="Email address"
                  name="email"
                  placeholder="Email"
                  v-model="user.email"
                  addon-left-icon="tim-icons icon-email-85"
          >
          </base-input>
        </div>
      </div>


      <base-button native-type="submit" type="primary" class="btn-fill">
        Save
      </base-button>
    </form>
  </card>
</template>
<script>
  export default {

    data() {
      return {
        user: {}
      };
    },


    methods: {
      async updateProfile() {
        let isValidForm = await this.$validator.validateAll();
        if (isValidForm) {
          const data = {
            email: this.user.email,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
          }
          this.$store.dispatch('user/updateProfile', data)
        }

      },

      getError(fieldName) {
        return this.errors.first(fieldName);
      },
    },


    mounted() {
      this.user = Object.assign({}, this.$auth.user)
    }

  };
</script>
<style>
  .user-profile-update .form-group.has-danger .error, .input-group.has-danger .error {
    color: #ec250d !important;
  }
</style>
