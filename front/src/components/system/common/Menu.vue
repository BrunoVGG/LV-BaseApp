<template>
  <div>
    <modal-logout></modal-logout>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <a class="navbar-brand text-left" href="index.html">SmartData</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <menu-left></menu-left>
        <ul class="navbar-nav sidenav-toggler">
          <li class="nav-item">
            <a class="nav-link text-center" id="sidenavToggler">
              <i class="fa fa-fw fa-angle-left"></i>
            </a>
          </li>
        </ul>
        <menu-top></menu-top>
      </div>
    </nav> 
  </div>      
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'
import menuLeft from './MenuLeft.vue'
import menuTop from './Menutop.vue'
import ModalLogout from './ModalLogout.vue'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

export default {
    name: 'Menu',
    components:{
        menuLeft,
        menuTop,
        ModalLogout
    }
}
</script>