// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 20
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
})

Vue.prototype.url_server = 'http://127.0.0.1/edsa-server/LV-BaseApp/public/';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  computed: {
    count () {
	    return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
    	store.commit('decrement')
    }
  }
})
