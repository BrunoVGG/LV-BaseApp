<template>
    <div id="menu-top">
        <ul>
            <li>
                <router-link to="/system/">
                    <i class="icon-user"></i> Dashboard
                </router-link>
            </li>
            <li>
                <router-link to="/system/Users">
                    <i class="icon-user"></i> Users
                </router-link>
            </li>
            <li v-on:click.prevent="logOut">
                <a href="#">
                    <i class="icon-user"></i> LogOut
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

//import axios from 'axios'
//import VueAxios from 'vue-axios'

export default {
  name: 'Menu',
  data () {
    return {
      title: 'Menu'
    }
  },
  methods:{
      logOut(){
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_in');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('token_type');
            this.$router.push('/');
      }
  }
}
</script>

