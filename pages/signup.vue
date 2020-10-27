<template>
  <v-container fluid pa-0 id="signup" style="margin-top: 50px;">
    <v-layout row wrap>
      <v-flex
        xs12
        md12
        lg12
        style="display: flex; align-items: center; justify-content: center;"
      >
        <v-card class="elevation-10 pa-4" style="flex: 0 1 400px">
          <v-sheet id="login-sheet">
            <div class="login-block">
              <h1>Enter your Sign Up details</h1>
            </div>
            <v-form v-model="valid" class="mb-4">
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
              <v-text-field
                label="Email"
                v-model="email"
                required
                :rules="[rules.required, rules.email]"
                validate-on-blur
              >
              </v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :rules="[rules.required, rules.minLength]"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                hint="At least 8 characters"
                counter
                @click:append="showPassword = !showPassword"
                validate-on-blur
                v-on:keyup.enter="submit"
              >
              </v-text-field>
            </v-form>

            <v-btn
              :disabled="signUpDisabled"
              depressed
              class="primary mt-10"
              style="width: 100%"
              @click="submit"
            >
              Sign Up
              <v-progress-circular
                v-if="signUpInProgress"
                style="position: absolute; right: 30%;"
                indeterminate
                :size="22"
                color="#fff"
              ></v-progress-circular>
            </v-btn>
            <div class="mt-5 text-center">
              <span class="fs-13 dark-grey-text "
                >Already have an account?</span
              >
              <a
                class="text-right remember fs-13 "
                @click="$router.push('/signin')"
                >Go to login page</a
              >
            </div>
          </v-sheet>
        </v-card>
      </v-flex>
    </v-layout>
    <notifications group="signup" />
  </v-container>
</template>

<script>
const validators = {
  alphabet: /^[A-Za-z\s]+$/,
  email: /\S+@\S+\.\S+/,
  number: /^[\d]+$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
};

export default {
  layout: "fullscreen",
  name: "SignUp",
  computed: {
    signUpDisabled: function() {
      let invalidName =
        !isNaN(this.first_name) ||
        this.first_name == "" ||
        !isNaN(this.last_name) ||
        this.last_name == "";
      return (
        this.signUpInProgress ||
        this.email == "" ||
        this.password == "" ||
        invalidName
      );
    }
  },
  data() {
    return {
      alert: null,
      phoneNumberMask: "(###) ###-####",
      valid: false,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role: "Admin",
      phone_number: "",
      showPassword: false,
      signUpInProgress: false,
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
  mounted() {},
  methods: {
    submit() {
      this.alert = null;
      this.signUpInProgress = true;
      this.$store
        .dispatch("auth/signup", {
          email: this.email,
          password: this.password,
          first_name: this.first_name,
          last_name: this.last_name,
          role: "Admin"
        })
        .then(result => {
          this.signUpInProgress = false;
          this.$notify({
            group: "signup",
            type: "success",
            title: "Success",
            text: "Successfully registered"
          });
          this.$router.push("/signin");
        })
        .catch(error => {
          this.signUpInProgress = false;
          if (error.response && error.response.data) {
            this.$notify({
              group: "signup",
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
