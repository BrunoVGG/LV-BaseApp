<template>
<div>    
    <!-- Navigation-->
    <menu-area></menu-area>
    <div id="page-top" class="content-wrapper">
      <div class="container-fluid">
        <!-- Breadcrumbs-->
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
        
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
              name:'Dashboard',
              link:'#',
              target:'',
              class:""
            },
            { 
              name:'My Dashboard',
              link:null,
              target:'',
              class:"active"
            }
        ]
      }
    },
    mounted(){
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
        }
    }
}
</script>
