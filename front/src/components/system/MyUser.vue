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
                <section class="col-md-4">
                    <form v-on:submit.prevent="updateUser" id="update-userdata-form" class="text-left">
                        <div class="form-group">
                            <h2>Your Data</h2>
                        </div>    
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
                </section>     
                <section class="col-md-4 col-md-offset-2">
                    <form v-on:submit.prevent="updateUserPassword" id="update-password-form" class="text-left">
                        <div class="form-group">
                            <h2>Password</h2>
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
                </section>  
                <section class="col-md-4 col-md-offset-2">
                    <form v-on:submit.prevent="updateUserImage" id="update-image" class="text-left">
                        <div class="form-group">
                            <h2>Image</h2>
                        </div>
                        
                        <div class="form-group">
                            File Image 
                            <input @change="processFile($event)" name="myFile" type="file">
                            {{ myUser.imagem }}
                        </div>

                        <div class="form-group">    
                            <div class="input-group">                                        
                                <div v-if="!image">
                                    <label>Select an image</label>
                                    <input type="file" @change="onFileChange">
                                </div>
                                <div v-else>
                                    <img :src="image" style="max-width:230px" />  
                                    <div>{{ image }}</div>                                  
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
                image:''
            },
            image: ''
        }
    },
    mounted(){
        this.loadUser(); 
    },
    methods:{
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

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                console.log("response", response);
            })
            .catch(data => {
                alert("Server Error...");
                console.log(response);
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

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                console.log("response", response);
            })
            .catch(data => {
                alert("Server Error...");
                console.log(response);
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

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.put(url,data)
            .then(response => {
                console.log("response", response);
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
            const url = this.url_server+'api/system/myuser';

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

<style lang="css">
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/css/default.css";
</style>