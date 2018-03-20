import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/Login'
import CreateUser from '@/components/CreateUser'
import Dashboard from '@/components/system/Dashboard'
import Users from '@/components/system/Users'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create_user',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/system',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/system/users',
      name: 'Users',
      component: Users,
      requiresAuth: true
    }
  ]
})
