<template>
  <ul class="navbar-nav ml-auto">
    <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-fw fa-envelope"></i>
        <span class="d-lg-none">Messages
          <span class="badge badge-pill badge-primary">12 New</span>
        </span>
        <span class="indicator text-primary d-none d-lg-block">
          <i class="fa fa-fw fa-circle"></i>
        </span>
      </a>
      <div class="dropdown-menu" aria-labelledby="messagesDropdown">
        <h6 class="dropdown-header">New Messages:</h6>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <strong>David Miller</strong>
          <span class="small float-right text-muted">11:21 AM</span>
          <div class="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <strong>Jane Smith</strong>
          <span class="small float-right text-muted">11:21 AM</span>
          <div class="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <strong>John Doe</strong>
          <span class="small float-right text-muted">11:21 AM</span>
          <div class="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item small" href="#">View all messages</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-fw fa-bell"></i>
        <span class="d-lg-none">Alerts
          <span class="badge badge-pill badge-warning">6 New</span>
        </span>
        <span class="indicator text-warning d-none d-lg-block">
          <i class="fa fa-fw fa-circle"></i>
        </span>
      </a>
      <div class="dropdown-menu" aria-labelledby="alertsDropdown">
        <h6 class="dropdown-header">New Alerts:</h6>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <span class="text-success">
            <strong>
              <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
          </span>
          <span class="small float-right text-muted">11:21 AM</span>
          <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <span class="text-danger">
            <strong>
              <i class="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
          </span>
          <span class="small float-right text-muted">11:21 AM</span>
          <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">
          <span class="text-success">
            <strong>
              <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
          </span>
          <span class="small float-right text-muted">11:21 AM</span>
          <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item small" href="#">View all alerts</a>
      </div>
    </li>
    <li class="nav-item">
      <form class="form-inline my-2 my-lg-0 mr-lg-2">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="Search for...">
          <span class="input-group-append">
            <button class="btn btn-primary" type="button">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    </li>
    <li class="nav-item dropdown">
      <a v-if="dataUser" class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <img id="avatar-menu" v-if="dataUser.avatar" :src="dataUser.avatar">
        <span class="d-lg-none">Alerts
          <span class="badge badge-pill badge-warning">6 New</span>
        </span>
      </a>
      <ul class="dropdown-menu" aria-labelledby="alertsDropdown">
        <li>
          <router-link to="/system/my_user" class="dropdown-item">
            <span class="text-success">
                <i class="fa fa-user"></i> 
                My User
            </span>          
          </router-link>
        </li>
        <div class="dropdown-divider"></div>
        <li>
          <a v-on:click.prevent="logOutModal" class="dropdown-item" href="#">
            <span class="text-danger">
                <i class="fa fa-fw fa-sign-out"></i> 
                Log Out
            </span>          
          </a> 
        </li>       
      </ul>
    </li>    
  </ul>   
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

export default {
    name: 'MenuTop',
    components:{
        Loading
    },
    data () {
        return {
            title: 'Menu',
            dataUser:null,
            name:'',
            user:null,
            count2:null,
            isLoading: false
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
        whenCancelled() {
          console.log("User cancelled the loader.")
        },
        logOutModal(){
          $('#exampleModal').modal('show');
        },
        addMyUser(){
          this.dataUser = localStorage.getItem('user');
          this.dataUser = JSON.parse(this.dataUser);
          this.$store.state.user = this.dataUser;
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
                    email:response.data.email,
                    avatar:response.data.avatar
                };

                this.$store.state.user = dataUser;
                var dataUser = JSON.stringify(dataUser);
                
                localStorage.setItem('user',dataUser);

                this.addMyUser();                    
            })
            .catch(data => {
                alert('Server Error...');
            });

        }
    },
    computed: {
        count () {
            return this.$store.state.a.count
        }
    }
}
</script>