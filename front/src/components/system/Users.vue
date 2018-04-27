<template>
<div>    
    <!-- Navigation-->
    <menu-area></menu-area>
    <div id="page-top" class="content-wrapper">
      <div class="container-fluid">
        <!-- Breadcrumbs-->
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
        
        <div class="container container-system">
            <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
            <div class="container">                
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
                            <th class="hidden-xs">#</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th class="hidden-xs">Email</th>
                            <th class="hidden-sm hidden-xs">Created</th>
                            <th class="hidden-sm hidden-xs">Updated</th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Remove
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in users">
                                <td class="hidden-xs">{{ index+1 }}</td>
                                <td>{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td class="hidden-xs">{{ item.email }}</td>
                                <td class="hidden-sm hidden-xs">{{ item.created_at }}</td>
                                <td class="hidden-sm hidden-xs">{{ item.updated_at }}</td>
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
    name: 'BlackPage',
    components:{
        menuArea,
        FooterArea,
        Breadcrumb,
        Loading
    },
    data () {
      return {
        isLoading: false,
        breadcrumbs:[
            { 
              name:'Users',
              link:'#',
              target:'',
              class:""
            }
        ],
        users:null
      }
    },
    mounted(){
      this.loadUsers();
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
        loadUsers() {
            this.isLoading = true;
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/users'

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(url)
                .then(response => {
                    console.log("response", response);
                    this.isLoading = false;
                    this.users = response.data;
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
