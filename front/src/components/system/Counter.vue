<template>
<div>    
    <!-- Navigation-->
    <menu-area></menu-area>
    <div id="page-top" class="content-wrapper">
      <div class="container-fluid">
        <!-- Breadcrumbs-->
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
        <div class="container container-system">
            <div class="row">
                <div class="col-md-12">
                    <h1>
                        Count by 
                        <a href="https://vuex.vuejs.org/en/" target="_blank">
                            Vuex
                        </a>
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    {{ count }} = 
                    <input v-model="count" v-on:change="updateCount" type="number" >
                    <button v-on:click="add()">Add</button>
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
import { mapState } from 'vuex'
import menuArea from './common/Menu.vue'
import FooterArea from './common/Footer.vue'
import Breadcrumb from './common/Breadcrumb.vue'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

import "../../../node_modules/chart.js/dist/Chart.min.js";
import "../../../node_modules/datatables/media/js/jquery.dataTables.js";


export default {
    name: 'Counter',
    components:{
        menuArea,
        FooterArea,
        Breadcrumb,
        Loading
    },
    data () {
      return {
        count:null,
        isLoading: false,
        breadcrumbs:[
            { 
              name:'Counter',
              link:'#',
              target:'',
              class:""
            },
            { 
              name:'Exemple',
              link:null,
              target:'',
              class:"active"
            }
        ]
      }
    },
    mounted(){
      this.$store.state.general.breadcrumbs=this.breadcrumbs;
      console.log('this.$store.state.a.count',this.$store.state.a.count);
      this.$store.commit('increment');
      this.count = this.$store.state.a.count;
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
                updateCount(){
            console.log("updateCount");
            this.$store.state.a.count = this.count;
        },
        add(){
            this.$store.state.a.msn = "My Message";
            this.$store.commit('increment','My Text');
            this.count = this.$store.state.a.count;
        }
    }
}
</script>

<style lang="scss">
@import '../../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
