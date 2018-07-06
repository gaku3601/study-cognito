import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cognito from '@/cognito'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Confirm from '@/components/Confirm'
import ForceChangePassword from '@/components/ForceChangePassword'
import PasswordReset from '@/components/PasswordReset'
import SendKey from '@/components/SendKey'
import ForgotPassword from '@/components/ForgotPassword'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  cognito.isAuthenticated()
    .then(session => {
      next()
    })
    .catch(session => {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })
}

const logout = (to, from, next) => {
  cognito.logout()
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ForceChangePassword
    },
    {
      path: '/passwordreset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/sendkey',
      name: 'SendKey',
      component: SendKey
    },
    {
      path: '/forgotpassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    { path: '/logout',
      beforeEnter: logout
    }
  ]
})
