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
        })
        .catch(e => {
            console.log('Error =..(');
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    margin-top: 20px;
    padding: 20px 0px 20px 0px;
    margin-bottom: 10px;
    background-color: #f7f7f7;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    border-top:1px solid #cccccc42;
}
.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}
</style>
