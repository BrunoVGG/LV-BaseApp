import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'vue-router'
import Login from '@/components/Login'
import CreateUser from '@/components/CreateUser'
import Dashboard from '@/components/system/Dashboard'
import Users from '@/components/system/Users'
import MyUser from '@/components/system/MyUser'
import Counter from '@/components/system/Counter'
import BlankPage from '@/components/system/BlankPage'
import BlankPage2 from '@/components/system/BlankPage2'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/login'
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
    },
    {
      path: '/system/my_user',
      name: 'MyUser',
      component: MyUser,
      requiresAuth: true
    },
    {
      path: '/system/counter',
      name: 'Counter',
      component: Counter,
      requiresAuth: true
    },
    {
      path: '/system/blank_page',
      name: 'BlankPage',
      component: BlankPage,
      requiresAuth: true
    },
    {
      path: '/system/blank_page2',
      name: 'BlankPage2',
      component: BlankPage2,
      requiresAuth: true
    }
  ]
})
