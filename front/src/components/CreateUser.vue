<template>
  <div class="container">
      <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
      <div class="row">
          <div class="col-sm-6 col-md-4 col-md-offset-4">
          </div>
          <div class="col-sm-6 col-md-4 col-md-offset-4">
              <div class="account-wall">
                    <h1 class="text-center login-title uppercase">CREATE USER</h1>
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
                    <div class="text-center">
                        <router-link tag="a" to="/">
                            Login Area
                        </router-link>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

export default {
    name: 'CreateUser',
    components:{
        Loading
    },
    data () {
        return {
            newUser:{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
            },
            isLoading: false
        }
    },
    methods:{
            whenCancelled() {
                console.log("User cancelled the loader.")
            },
            sendNewUser(){
                console.log("Send New User",this.newUser);
                this.isLoading = true;
                const url = this.url_server+'api/user/create'
                var data = this.newUser;

                axios.post(url,this.newUser,data)
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data4
                    this.isLoading = false;
                    alert("New user created");
                    this.$router.push('/');
                })
                .catch(e => {
                    this.isLoading = false;
                    this.errors.push(e);
                    alert("Error... =(");
                });
            }
    }
}
</script>

<style lang="scss">
    @import "'../styles/login.scss'";
</style>