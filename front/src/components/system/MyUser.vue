<template>
<div>    
    <!-- Navigation-->
    <menu-area></menu-area>
    <div id="page-top" class="content-wrapper">
      <div class="container-fluid">
        <!-- Breadcrumbs-->
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
        <!-- Content-->
        <div class="container container-system">
            <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
            <div class="container">
                <div class="row">   
                    <section class="col-md-4">
                        <form v-on:submit.prevent="updateUser" id="update-userdata-form" class="text-left">
                            <div class="form-group">
                                <h2>My Data</h2>
                            </div>    
                            <div class="form-group">
                                <label>Name</label>
                                <div class="input-group">
                                    <input v-model="myUser.name" type="text" name="first_name" 
                                    class="form-control" placeholder="First..." required>                                
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input v-model="myUser.email" type="email" name="email_address"
                                class="form-control input-sm" placeholder="Email address..." required>
                            </div>
                            <button type="submit" name="submit_button" value="register" 
                            class="btn btn-success pull-right">
                                Update
                            </button>                    
                        </form>
                    </section>     
                    <section class="col-md-4 col-md-offset-2">
                        <form v-on:submit.prevent="updateUserPassword" id="update-password-form" 
                        class="text-left">
                            <div class="form-group">
                                <h2>Password</h2>
                            </div>    
                            <div class="form-group">
                                <label>New Password</label>
                                <div class="input-group">
                                    <input v-model="myUser.password" type="password" name="password" 
                                    class="form-control" placeholder="New Password" required >                                
                                </div>
                            </div>	
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <div class="input-group">
                                    <input v-model="myUser.password_confirmation" type="password" 
                                    name="password" class="form-control" placeholder="Confirm" required >
                                </div>
                            </div>
                            <button type="submit" name="submit_button" value="register" 
                            class="btn btn-success pull-right">
                                Update Password
                            </button>                    
                        </form>
                    </section>  
                    <section class="col-md-4 col-md-offset-2">
                        <form v-on:submit.prevent="updateUserImage" id="update-image" 
                        class="text-left">
                            <div class="form-group">
                                <h2>Image</h2>
                            </div>
                            <div class="form-group">  
                                <img v-if="!image && myUser.avatar" :src="myUser.avatar" style="max-width:230px">
                            </div>  
                            <div class="form-group">    
                                <div class="input-group">                                        
                                    <div v-if="!image">
                                        <label>Select an image</label>
                                        <input type="file" @change="onFileChange">
                                    </div>
                                    <div v-else>
                                        <img :src="image" style="max-width:230px" required />                          
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">  
                                <button type="submit" name="submit_button" value="register" class="btn btn-success">
                                    Update Image
                                </button> 
                                <button  v-if="image" type="button" name="submit_button" value="register"
                                class="btn btn-danger pull-right" @click="removeImage">
                                    Remove
                                </button> 
                            </div>
                        </form>
                    </section>

                </div>
            </div>
        </div>
        <!-- END Content-->
      </div>
      <!-- /.container-fluid-->
      <!-- /.content-wrapper-->
      <footer-area></footer-area>
    </div>
</div>    
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import menuArea from './common/Menu.vue'
import FooterArea from './common/Footer.vue'
import Breadcrumb from './common/Breadcrumb.vue'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

import "../../../node_modules/chart.js/dist/Chart.min.js";
import "../../../node_modules/datatables/media/js/jquery.dataTables.js";


export default {
    name: 'MyUser',
    components:{
        Loading,
        menuArea,
        FooterArea,
        Breadcrumb
    },
    data () {
        return {
            title: 'My User',
            myUser:{
                name:'',
                email:'',
                password:'',
                password_confirmation:'',
                image:''
            },
            image: '',
            isLoading: false,
            breadcrumbs:[
                { 
                    name:'My User',
                    link:'#',
                    target:'',
                    class:''
                },
                { 
                    name:'Update',
                    link:null,
                    target:'',
                    class:"active"
                }
            ]
        }
    },
    mounted(){
        this.loadUser(); 
        this.$store.state.general.breadcrumbs=this.breadcrumbs;
    },
    methods:{
        fetchData() {
            this.isLoading = true;
            // AJAX example with axios
            axios.post('/api').then((response)=>{
                this.isLoading = false                
            })
        },
        whenCancelled() {
            console.log("User cancelled the loader.")
        },
        processFile(event) {
            this.myUser.imagem = event.target.files[0]
        },
        updateUser(){
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/myuser'
            var data = {
                    name:this.myUser.name,
                    email:this.myUser.email
                };
            this.isLoading = true;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                console.log("response", response);
                this.isLoading = false;

                this.updateLocalStorage();
            })
            .catch(response => {
                alert("Server Error...");
            });

            this.show_list = true;
            this.show_form = false;
        },
        updateUserPassword(){
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/myuser/password'
            var data = {
                    password:this.myUser.password,
                    password_confirmation:this.myUser.password_confirmation
                };

            this.isLoading = true;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                console.log("response", response);
                this.isLoading = false;
            })
            .catch(response => {
                alert("Server Error...");
                this.isLoading = false;
            });

            this.show_list = true;
            this.show_form = false;
        },
        updateUserImage(){
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/myuser/image'
            var data = {
                    password:this.myUser.password,
                    image:this.image,
                    user_image:this.myUser.imagem
                };
            this.isLoading = true;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                this.isLoading = false;
                var dataUser = localStorage.getItem('user');
                dataUser = JSON.parse(dataUser);
                dataUser.avatar = data.image;
                this.$store.state.user.avatar = dataUser.avatar;

                dataUser = JSON.stringify(dataUser);
                localStorage.setItem('user',dataUser);
            })
            .catch(data => {
                alert("Server Error...");
                this.isLoading = false;
            });

            this.show_list = true;
            this.show_form = false;
        },
        updateLocalStorage(){
            var dataUser = localStorage.getItem('user');
            dataUser = JSON.parse(dataUser);
            dataUser.avatar = this.myUser.avatar;
            dataUser.name = this.myUser.name;
            dataUser = JSON.stringify(dataUser);
            localStorage.setItem('user',dataUser);

            this.$store.state.user.name = this.myUser.name;
        },
        loadUser() {
            var myUser = localStorage.user;
            this.myUser = JSON.parse(myUser);
        },
        loadUserDB() {
            
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/myuser';
            this.isLoading = true;
    
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(url)
            .then(response => {
                console.log("response", response);
                this.myUser = response.data;
                this.isLoading = false;
            })
            .catch(data => {
                alert("Server Error...");
                console.log(response);
                this.isLoading = false;
            });

            this.show_list = true;
            this.show_form = false;
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
        reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
            
        }
    }
}
</script>