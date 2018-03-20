<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
            </div>
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                <h1 class="text-center login-title">LOGIN AREA</h1>
                <div class="account-wall">
                    <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt="">
                    <form v-on:submit.prevent="Login" class="form-signin">
                        <input v-model="user.email" type="text" class="form-control" placeholder="Email" required autofocus>
                        <input v-model="user.password" type="password" class="form-control" placeholder="Password" required>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">
                            Sign in
                        </button>
                        <label class="checkbox pull-left">
                            <input type="checkbox" value="remember-me">
                            Remember me
                        </label>
                        <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                    </form>
                </div>
                <router-link tag="a" to="/create_user">
                Create Account
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login',
      user:{
          email:'b.veigagg@gmail.com',
          password:'123456',
          repeat:''
      }
    }
  },
  methods:{
    Login(){
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

            this.$router.push('system/');
        })
        .catch(e => {
            console.log('Error =..(');
        });
    }
  }
}
</script>

<style lang="css">
    @import "../assets/bootstrap/css/bootstrap.min.css";
    @import "../assets/css/default.css";
</style>