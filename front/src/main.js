
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
      console.log("Store in Mutatons",store.state.count);
    }
  }
})

Vue.prototype.url_server = 'http://127.0.0.1/edsa-server/LV-BaseApp/public/';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
