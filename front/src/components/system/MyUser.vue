<template>
    <div class="container container-system">
        <div class="container">
            <menu-top class="row"></menu-top>
            <div class="row">
                <div class="col-md-12">
                    <h1>{{ title }}</h1>
                </div>
            </div>
            <div class="row">   
                <div class="col-md-4">
                    <form v-on:submit.prevent="updateUser" id="update-userdata-form" class="text-left">
                        <div class="form-group">
                            <label>Name</label>
                            <div class="input-group">
                                <input v-model="myUser.name" type="text" name="first_name" class="form-control" placeholder="First..." >                                
                            </div>
                        </div>		

                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="myUser.email" type="email" name="email_address" class="form-control input-sm" placeholder="Email address...">
                        </div>	

                        <button type="submit" name="submit_button" value="register" class="btn btn-success pull-right">
                            Update
                        </button>
                    
                    </form>
                </div>   
                <div class="col-md-4 col-md-offset-2">
                    <form v-on:submit.prevent="updateUser" id="update-password-form" class="text-left">
                        <div class="form-group">
                            <label>Old Password</label>
                            <div class="input-group">
                                <input v-model="myUser.password" type="password" name="password" class="form-control" placeholder="Old Password" >                                
                            </div>
                        </div>	
                        <div class="form-group">
                            <label>New Password</label>
                            <div class="input-group">
                                <input v-model="myUser.password" type="password" name="password" class="form-control" placeholder="New Password" >                                
                            </div>
                        </div>	
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <div class="input-group">
                                <input v-model="myUser.password_confirmation" type="password" name="password" class="form-control" placeholder="Confirm" >
                            </div>
                        </div>	                              	

                        <button type="submit" name="submit_button" value="register" class="btn btn-success pull-right">
                            Update Password
                        </button>
                    
                    </form>
                </div>   

            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'

import menuTop from './Menu.vue'

export default {
    name: 'MyUser',
    components:{
        menuTop
    },
    data () {
        return {
            title: 'My User',
            myUser:{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
            }
        }
    },
    mounted(){
        this.loadUser(); 
    },
    methods:{
        updateUser(){
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/my_user'
            var data = this.myUser;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                console.log("response", response);
                this.users = JSON.parse(response.data);
            })
            .catch(data => {
                alert("Server Error...");
                console.log(response);
            });

            this.show_list = true;
            this.show_form = false;
        },
        loadUser() {
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/myuser'

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(url)
            .then(response => {
                console.log("response", response);
                this.myUser = response.data;
            })
            .catch(data => {
                alert("Server Error...");
                console.log(response);
            });

            this.show_list = true;
            this.show_form = false;
        }
  }
}
</script>

<style lang="css">
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/css/default.css";
</style>