<template>
  <div class="container">
      <div class="row">
          <div class="col-sm-6 col-md-4 col-md-offset-4">
          </div>
          <div class="col-sm-6 col-md-4 col-md-offset-4">
              <h1 class="text-center login-title uppercase">CREATE USER</h1>
              <div class="account-wall">
                  <form v-on:submit.prevent="sendNewUser" class="form-signin text-left">
                        <div class="form-group">
                            <div class="col-md-12">
                                <label for="name">Name:</label>
                                <input v-model="newUser.name" name="textinput" class="form-control input-md" id="name" type="text" placeholder="Name">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <label for="email">Email:</label>
                                <input v-model="newUser.email" name="textinput" class="form-control input-md" id="email" type="email" placeholder="Email">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <label for="name">Password:</label>
                                <input v-model="newUser.password" name="textinput" class="form-control input-md" id="password" type="password" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <label for="name">Repeat Password:</label>
                                <input v-model="newUser.password_confirmation" name="textinput" class="form-control input-md" id="reapeat-password" type="password" placeholder="Reapeat Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <button type="sumbmit" class="btn btn-success btn-lg col-md-12">Register</button>
                            </div>
                        </div>
                  </form>
              </div>
                <router-link tag="a" to="/">
                  Login
                </router-link>
          </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'CreateUser',
  data () {
    return {
      newUser:{
          name:'',
          email:'',
          password:'',
          password_confirmation:'',
      }
    }
  },
  methods:{
      sendNewUser(){
        console.log("Send New User",this.newUser);

        const url = this.url_server+'api/user/create'
        var data = this.newUser;

        axios.post(url,this.newUser,data)
        .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
            alert("New user created");
            this.$router.push('/');
        })
        .catch(e => {
        this.errors.push(e)
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
    @import "../assets/bootstrap/css/bootstrap.min.css";
    @import "../assets/css/default.css";
</style>