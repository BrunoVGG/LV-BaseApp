<template>
    <div>
        <div id="menu-top" class="col-md-8">
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
                <li>
                    <router-link to="/system/my_user">
                        <i class="icon-user"></i> My Users
                    </router-link>
                </li>
                <li v-on:click.prevent="logOut">
                    <a href="#">
                        <i class="icon-user"></i> LogOut
                    </a>
                </li>
            </ul>
        </div>

        <div v-if="dataUser" id="menu-top" class="col-md-4">
            {{ dataUser.name }} / {{ dataUser.email }}
        </div>
    </div>   
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'

export default {
  name: 'Menu',
  data () {
    return {
      title: 'Menu',
      dataUser:null
    }
  },
  mounted(){

    this.dataUser = localStorage.getItem('user');

    if(!this.dataUser){
        this.getUser(); 
    } else{
        this.addMyUser();
    }  

  },
  methods:{
    logOut(){
            localStorage.removeItem('accessData');
            localStorage.removeItem('user');
            this.$router.push('/');
    },
    addMyUser(){
        this.dataUser = localStorage.getItem('user');
        this.dataUser = JSON.parse(this.dataUser);
    },
    getUser() {
        console.log("dataUser");
        var localData = JSON.parse(window.localStorage.accessData);
        var token = localData.access_token;
        const url = this.url_server+'api/system/user/data'

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        axios.get(url)
            .then(response => {
                console.log(response.data);
                var dataUser = {
                    name:response.data.name,
                    email:response.data.email
                };

                var dataUser = JSON.stringify(dataUser);
                localStorage.setItem('user',dataUser);

                this.addMyUser();
                
            })
            .catch(data => {
                alert('Server Error...');
            });

    }
  }
}
</script>