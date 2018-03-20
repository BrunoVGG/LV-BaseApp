import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/Login'
import CreateUser from '@/components/CreateUser'

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
    }
  ]
})
