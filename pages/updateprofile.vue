<template>
  <v-container fluid pa-0 id="login" class='mt-4 pa-4'>
    <v-layout row wrap>
      <v-flex
        xs12
        md12
        lg12
        style="display: flex; align-items: center; justify-content: center;"
      >
        <v-card class="elevation-10 pa-4" style="flex: 0 1 400px">
          <v-sheet id="login-sheet">
            <div class="login-block mb-2">
              <h1>Update Profile</h1>
            </div>
            <v-form v-model="valid" class="">
              <v-text-field
                label="Email"
                v-model="email"
                required
                persistent-hint
                :rules="[rules.required, rules.email]"
                validate-on-blur
              >
              </v-text-field>
              <v-text-field
                label="First Name"
                v-model="first_name"
                required
                :rules="[rules.required]"
                validate-on-blur
              >
              </v-text-field>
              <v-text-field
                label="Last Name"
                v-model="last_name"
                required
                :rules="[rules.required]"
                validate-on-blur
              >
              </v-text-field>
            </v-form>
            <v-btn
              depressed
              :disabled="updateProfileDisabled"
              class="primary mt-10"
              style="width: 100%"
              @click="submit"
            >
              Update Profile
              <v-progress-circular
                v-if="updateProfileInProgress"
                style="position: absolute; right: 30%;"
                indeterminate
                :size="22"
                color="#fff"
              ></v-progress-circular>
            </v-btn>
          </v-sheet>
        </v-card>
      </v-flex>
    </v-layout>
    <notifications group="updateprofile" />
  </v-container>
</template>

<script>
import cookie from 'js-cookie'

const validators = {
  alphabet: /^[A-Za-z\s]+$/,
  email: /\S+@\S+\.\S+/,
  number: /^[\d]+$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
};

export default {
  name: "UpdateProfile",
  computed: {
    updateProfileDisabled: function() {
      let invalidName =
        !isNaN(this.first_name) ||
        this.first_name == "" ||
        !isNaN(this.last_name) ||
        this.last_name == "";
      return this.updateProfileInProgress || this.email == "" || invalidName;
    },
  },
  beforeCreate () {
    if (!cookie.get('x-access-token')) {
      this.$router.push('/signin')
    }
  },
  data() {
    var user = {first_name: "", last_name: "", email: ""}
    if(typeof cookie.get('user_info') !== 'undefined') {
      user = JSON.parse(cookie.get('user_info'))
    }
    return {
      alert: null,
      phoneNumberMask: "(###) ###-####",
      valid: false,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_number: "",
      updateProfileInProgress: false,
      checkError: false,
      rules: {
        required: value => !!value || "Required.",
        onlyAlphabet: value =>
          validators.alphabet.test(value) || "Invalid value.",
        integer: value => validators.integer.test(value) || "Invalid value.",
        float: value => validators.float.test(value) || "Invalid value",
        minLength: value => value.length >= 8 || "Min 8 characters",
        email: value => /.+@.+\..+/.test(value) || "E-mail must be valid",
        emptyPhone: value => {
          if (value && value.length > 0) {
            return validators.phone.test(value) || "Phone must be valid";
          } else {
            return true;
          }
        }
      }
    };
  },
  methods: {
    submit() {
      this.alert = null;
      this.updateProfileInProgress = true;
      this.$store
        .dispatch("auth/updateprofile", {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
          phone_number: this.phone_number,
          role: "Admin"
        })
        .then(result => {
          this.updateProfileInProgress = false;
          this.$notify({
            group: "updateprofile",
            type: "success",
            title: "Success",
            text: "Successfully updated"
          });
        })
        .catch(error => {
          this.updateProfileInProgress = false;
          if (error.response && error.response.data) {
            this.$notify({
              group: "updateprofile",
              type: "error",
              title: error.response.status,
              text: error.response.data.error
            });
          }
        });
    }
  }
};
</script>
