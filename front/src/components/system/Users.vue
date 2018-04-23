<template>
    <div class="container container-system">
        <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
        <div class="container">
            <menu-top class="row"></menu-top>
            <div class="row">
                <div class="col-md-12">
                    <h1>
                        USERS
                    </h1>
                </div>
            </div>
            <div class="row">
                <table  v-if="users" class="table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th style="width: 36px;">
                            Edit
                        </th>
                        <th style="width: 36px;">
                            Remove
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in users">
                            <td>{{ index+1 }}</td>
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.created_at | date }}</td>
                            <td>{{ item.updated_at }}</td>
                            <td>
                                <button type="button" class="btn btn-info btn-list">Edit</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger btn-list">Remove</button>
                            </td>
                        </tr>                
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

import menuTop from './Menu.vue'

export default {
    name: 'Dashboard',
    components:{
        menuTop,
        Loading
    },
    data () {
        return {
            title: 'Users',
            users:null,
            isLoading: false
        }
    },
    mounted(){
        this.loadUsers();

        this.count = this.$store.state.count; 
    },
    methods:{        
        whenCancelled() {
            console.log("User cancelled the loader.")
        },
        loadUsers() {
            this.isLoading = true;
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/users'

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(url)
                .then(response => {
                    console.log("response", response);
                    this.users = response.data;
                    this.isLoading = false;
                })
                .catch(data => {
                    apiReturnError(response);
                    this.isLoading = false;
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