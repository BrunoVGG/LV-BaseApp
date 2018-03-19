import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/Login'
import CreateUser from '@/components/CreateUser'
import AuthorizedClients from '@/components/AuthorizedClients'
import Clients from '@/components/Clients'
import PersonalAccessTokens from '@/components/PersonalAccessTokens'

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
      path: '/auth',
      name: 'AuthorizedClients',
      component: AuthorizedClients
    },
    {
      path: '/Clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/PersonalAccessTokens',
      name: 'ptokens',
      component: PersonalAccessTokens
    }
  ]
})
