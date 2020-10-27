import Vue from 'vue'
import Router from 'vue-router'

const SignUp = () => import('pages/signup')
const Login = () => import('pages/signin')
const ResetPassword = () => import('pages/passwordreset')

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [

    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: {
        hideNavigation: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        hideNavigation: true
      }
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword,
      meta: {
        hideNavigation: true
      }
    },
  ]
})

export default router
