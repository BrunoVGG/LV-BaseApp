<template>
    <div class="container">
        <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
            </div>
            <div class="col-sm-6 col-md-4 col-md-offset-4">                
                <div class="account-wall">
                    <h1 class="text-center login-title">LOGIN AREA</h1>
                    <img class="profile-img" 
                    src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt="">
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
                    <router-link tag="a" to="/create_user">
                        Create Account
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Vuex from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

export default {
    name: 'Login',
    components:{
        Loading
    },
    data () {
        return {
            msg: 'Login',
            user:{
                email:'b.veigagg@gmail.com',
                password:'123456',
                repeat:''            
            },
            isLoading: false
        }
    },
    methods:{
        whenCancelled() {
            console.log("User cancelled the loader.")
        },
        Login(){
            console.log("Send New User",this.user);          
            
            this.isLoading = true;

            var data = {
                grant_type:'password',
                client_id:2,
                client_secret:'UDiIYcLYHvdwcObjgmIiqqjhMmxnEBrvsWlCIhiS',
                username:this.user.email,
                password:this.user.password,
                scope:''
            }

            var headers = {'Content-Type': "application/json"}  
            const url = this.url_server+'oauth/token'
            const url_system = this.url_server+'system/'
            axios.post(url,data,headers)
            .then(response => {
                this.isLoading = false;
                // JSON responses are automatically parsed.
                console.log('Deu certo =) ',response.data);
                localStorage.setItem('accessData', JSON.stringify(response.data));
                this.$router.push('system/');
            })
            .catch(e => {
                alert('Error =..(');
                this.isLoading = false;
            });
        }
    },
    mounted(){
        this.isLoading = false;
         $('.modal-backdrop.show').hide();
    }
}
</script>

<style lang="css">
    @import "../assets/bootstrap/css/bootstrap.min.css";
    @import "../assets/css/default.css";
</style>