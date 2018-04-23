
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

const moduleA = {
  state: {
    count: 0,
    msn:"Teste Message"
  },
  mutations: {
    increment (state,txt) {      
      state.count++;
      console.log('Txt:',txt);
      console.log('Msn:',store.state.a.msn);
      console.log("Count: ",store.state.a.count);
    }
  }
}

const moduleB = {
  state: {
    // ...
  },
  mutations: {
    //...
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
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
