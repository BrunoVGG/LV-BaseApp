<template>
    <div class="container">
        <menu-top></menu-top>
        DASHBOARD
    </div>
</template>

<script>
//import axios from 'axios'
//import VueAxios from 'vue-axios'

import menuTop from './Menu.vue'

export default {
  name: 'Dashboard',
  components:{
      menuTop
  },
  data () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style lang="css">
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/css/default.css";
</style>


