<template>
  <v-container fluid pa-0 id="login" style="margin-top: 50px;">
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
              <h1>Login to your account</h1>
            </div>
            <v-form v-model="valid" class="">
              <v-text-field
                class="mb-4"
                hint="Email"
                v-model="email"
                required
                persistent-hint
                :rules="[rules.required, rules.email]"
                validate-on-blur
              >
              </v-text-field>
              <v-text-field
                hint="Password"
                v-model="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                :rules="[rules.required, rules.minLength]"
                name="input-10-1"
                @click:append="showPassword = !showPassword"
                validate-on-blur
                persistent-hint
                v-on:keyup.enter="submit"
              >
              </v-text-field>
            </v-form>
            <!-- <a class="d-block text-right remember" @click="$router.push('/passwordreset')">Forgot password?</a> -->
            <v-btn
              depressed
              :disabled="signInDisabled"
              class="primary mt-10"
              style="width: 100%"
              @click="submit"
            >
              Log in
              <v-progress-circular
                v-if="signInProgress"
                style="position: absolute; right: 30%;"
                indeterminate
                :size="22"
                color="#fff"
              ></v-progress-circular>
            </v-btn>

            <div class="mt-5 text-center">
              <span class="fs-13 dark-grey-text">Need an Account?</span>
              <a
                class="text-right remember fs-13 "
                @click="$router.push('/signup')"
                >Create an account</a
              >
            </div>
          </v-sheet>
        </v-card>
      </v-flex>
    </v-layout>
    <notifications group="signin" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Login",
  layout: "fullscreen",
  data() {
    return {
      email: "",
      password: "",
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
      },
      signInProgress: false,
      valid: false,
      showPassword: false
    };
  },
  computed: {
    signInDisabled: function() {
      return this.signInProgress || this.email == "" || this.password == "";
    }
  },
  methods: {
    async submit() {
      this.signInProgress = true;
      this.$store
        .dispatch("auth/signin", {
          email: this.email,
          password: this.password
        })
        .then(result => {
          this.$store
            .dispatch("auth/profile")
            .then(result => {
              this.signInProgress = false;
              this.$notify({
                group: "signin",
                type: "success",
                title: "Success",
                text: "Successfully authenticated",
              });
              this.$router.push("/admin");
            })
            .catch(error => {
              this.signInProgress = false;
              if (error.response && error.response.data) {
                this.$notify({
                  group: "signin",
                  type: "error",
                  title: error.response.status,
                  text: error.response.data.error
                });
              }
            });
        })
        .catch(error => {
          this.signInProgress = false;
          if (error.response && error.response.data) {
            this.$notify({
              group: "signin",
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
