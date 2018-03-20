<template>
    <div class="container">
        <menu-top></menu-top>
        <div class="well">
            <table class="table">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th style="width: 36px;"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Tompson</td>
                    <td>the_mark7</td>
                    <td>
                        <a href="user.html"><i class="icon-pencil"></i></a>
                        <a href="#myModal" role="button" data-toggle="modal"><i class="icon-remove"></i></a>
                    </td>
                </tr>                
            </tbody>
            </table>
        </div>
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
  },
    methods:{
        loadUsers(){
            console.log("Send New User",this.user);          

            var data = {
                grant_type:'password',
                client_id:2,
                client_secret:'DQAamKpvVwGNpFMGF4GDjODbrMzW3tcptNSEmGwi',
                username:this.user.email,
                password:this.user.password,
                scope:''
            }

            var headers = {'Content-Type': "application/json"}  
            const url = 'http://127.0.0.1/edsa-server/LV-BaseApp/back/public/oauth/token'

            axios.post(url,data,headers)
            .then(response => {
                // JSON responses are automatically parsed.
                console.log('Deu certo =) ',response.data);

                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('expires_in', response.data.expires_in);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                localStorage.setItem('token_type', response.data.token_type);
            })
            .catch(e => {
                console.log('Error =..(');
            });
        }
  }
}
</script>

<style lang="css">
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/css/default.css";
</style>