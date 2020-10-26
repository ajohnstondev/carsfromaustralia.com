<template>
  <div class="container register-page">
    <div class="row">

      <div class="col-md-7 mx-auto">
        <form @submit.prevent="register">
          <card class="card-register card-white">
            <template slot="header">
              <img class="card-img" src="img/card-primary.png" alt="Card image"/>
              <h4 class="card-title">Register</h4>
            </template>

            <div class="row">
              <div class="col-md-6">
                <base-input
                        v-validate="'required'"
                        :error="getError('First Name')"
                        v-model="model.firstName"
                        name="First Name"
                        placeholder="First Name"
                        addon-left-icon="tim-icons icon-single-02"
                >
                </base-input>
              </div>

              <div class="col-md-6">
                <base-input
                        v-validate="'required'"
                        :error="getError('Last Name')"
                        v-model="model.lastName"
                        name="Last Name"
                        placeholder="Last Name"
                        addon-left-icon="tim-icons icon-single-02"
                >
                </base-input>
              </div>
            </div>

            <base-input
                    v-validate="'required|email'"
                    :error="getError('email')"
                    v-model="model.email"
                    name="email"
                    placeholder="Email"
                    autocomplete="username"
                    addon-left-icon="tim-icons icon-email-85"
            >
            </base-input>

            <base-input
                    v-validate="'required|min:5'"
                    :error="getError('password')"
                    v-model="model.password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autocomplete="new-password"
                    addon-left-icon="tim-icons icon-lock-circle"
            >
            </base-input>

            <!--<div class="row">-->
              <!--<div class="col-md-12">-->
                <!--<el-select-->
                        <!--v-validate="'required'"-->
                        <!--:error="getError('Role')"-->
                        <!--class="select-primary"-->
                        <!--placeholder="Select Role"-->
                        <!--v-model="model.role"-->
                <!--&gt;-->
                  <!--<el-option-->
                          <!--v-for="option in roles"-->
                          <!--class="select-primary"-->
                          <!--:value="option"-->
                          <!--:label="option"-->
                          <!--:key="option"-->
                  <!--&gt;-->
                  <!--</el-option>-->
                <!--</el-select>-->
              <!--</div>-->
            <!--</div>-->



            <!--<base-checkbox class="text-left">-->
            <!--I agree to the <a href="#something">terms and conditions</a>.-->
            <!--</base-checkbox>-->

            <base-button native-type="submit" slot="footer" type="primary" round block size="lg">
              Register
            </base-button>
          </card>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { BaseCheckbox } from '@/components';
  import { Select, Option } from 'element-ui';

  export default {
    name: 'register-page',
    layout: 'auth',
    auth: 'guest',
    head () {
      return {
        title: 'Register',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
      BaseCheckbox
    },

    data() {
      return {
        model: {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          role: 'User',
        },
        roles: ['Super Admin', 'Admin', 'User']
      };
    },

    methods: {

      getError(fieldName) {
        return this.errors.first(fieldName);
      },

      async register() {
        let isValidForm = await this.$validator.validateAll();
        if (isValidForm) {
          const data = {
            email: this.model.email,
            password: this.model.password,
            first_name: this.model.firstName,
            last_name: this.model.lastName,
            role: this.model.role
          }
          this.$store.dispatch('user/register', data)
        }
      }
    }
  };
</script>
<style>
  .register-page .el-select {
    width: 100% !important;
    margin-bottom: 30px;
  }

  .register-page .el-select .el-input__inner {
    border-color: rgba(29, 37, 59, 0.2) !important;
  }

</style>
