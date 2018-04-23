<template>
    <div class="container container-system">
        <div class="container">
            <menu-top :data="null" class="row"></menu-top>
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
</template>

<script>

import menuTop from './Menu.vue'

// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex'

export default {
    name: 'Count',
    components:{
        menuTop
    },
    data () {
        return {
            count:null
        }
    },
    methods:{
        updateCount(){
            console.log("updateCount");
            this.$store.state.a.count = this.count;
        },
        add(){
            this.$store.state.a.msn = "My Message";
            this.$store.commit('increment','My Text');
            this.count = this.$store.state.a.count;
        }
    },
    mounted(){
        console.log('this.$store.state.a.count',this.$store.state.a.count);
        this.$store.commit('increment');
        this.count = this.$store.state.a.count;
    }
}
</script>

<style lang="css">
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/css/default.css";
    @import "../../assets/css/dashboard.css";
</style>


