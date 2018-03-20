<template>
    <div class="container">
        <menu-top></menu-top>
        <div class="well">
            <table  v-if="users" class="table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th style="width: 36px;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in users">
                        <td>{{ index+1 }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.updated_at }}</td>
                        <td>
                            <a href="user.html">Edit</a>
                            <a href="#myModal" role="button" data-toggle="modal">Remove</a>
                        </td>
                    </tr>                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'

import menuTop from './Menu.vue'

export default {
    name: 'Dashboard',
    components:{
        menuTop
    },
    data () {
        return {
            title: 'Dashboard',
            users:null
        }
    },
    mounted(){
        this.loadUsers();
    },
    methods:{
        loadUsers() {
            console.log("Load Users");
            var localData = JSON.parse(window.localStorage.accessData);
            console.log("localData",localData);
            var token = localData.access_token;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get('http://127.0.0.1/edsa-server/LV-BaseApp/back/public/api/system/users')
                .then(response => {
                    console.log("response", response);
                    this.users = response.data;
                })
                .catch(data => {
                    apiReturnError(response);
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