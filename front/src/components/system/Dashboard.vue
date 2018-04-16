<template>
    <div class="container container-system">
        <div class="container">
            <menu-top :data="null" class="row"></menu-top>
            <div class="row">
                <div class="col-md-12">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <a class="info-tiles tiles-inverse has-footer" href="#">
                        <div class="tiles-heading">
                            <div class="pull-left">Orders</div>
                            <div class="pull-right">
                                <div id="tileorders" class="sparkline-block"><canvas width="39" height="13" style="display: inline-block; width: 39px; height: 13px; vertical-align: top;"></canvas></div>
                            </div>
                        </div>
                        <div class="tiles-body">
                            <div class="text-center">1,275</div>
                        </div>
                        <div class="tiles-footer">
                            <div class="pull-left">manage orders</div>
                            <div class="pull-right percent-change">+20.7%</div>
                        </div>
                    </a>
                </div>
                
                <div class="col-md-3">
                    <a class="info-tiles tiles-green has-footer" href="#">
                        <div class="tiles-heading">
                            <div class="pull-left">Revenues</div>
                            <div class="pull-right">
                                <div id="tilerevenues" class="sparkline-block"><canvas width="40" height="13" style="display: inline-block; width: 40px; height: 13px; vertical-align: top;"></canvas></div>
                            </div>
                        </div>
                        <div class="tiles-body">
                            <div class="text-center">$71,250</div>
                        </div>
                        <div class="tiles-footer">
                            <div class="pull-left">go to accounts</div>
                            <div class="pull-right percent-change">+17.2%</div>
                        </div>
                    </a>
                </div>    
                
                <div class="col-md-3">
                    <a class="info-tiles tiles-blue has-footer" href="#">
                        <div class="tiles-heading">
                            <div class="pull-left">Tickets</div>
                            <div class="pull-right">
                                <div id="tiletickets" class="sparkline-block"><canvas width="13" height="13" style="display: inline-block; width: 13px; height: 13px; vertical-align: top;"></canvas></div>
                            </div>
                        </div>
                        <div class="tiles-body">
                            <div class="text-center">1,500</div>
                        </div>
                        <div class="tiles-footer">
                            <div class="pull-left">see all tickets</div>
                            <div class="pull-right percent-change">+10.3%</div>
                        </div>
                    </a>
                </div>
                
                <div class="col-md-3">
                    <a class="info-tiles tiles-midnightblue has-footer" href="#">
                        <div class="tiles-heading">
                            <div class="pull-left">Members</div>
                            <div class="pull-right">
                                <div id="tilemembers" class="sparkline-block"><canvas width="39" height="13" style="display: inline-block; width: 39px; height: 13px; vertical-align: top;"></canvas></div>
                            </div>
                        </div>
                        <div class="tiles-body">
                            <div class="text-center">6,500</div>
                        </div>
                        <div class="tiles-footer">
                            <div class="pull-left">manage members</div>
                            <div class="pull-right percent-change">-11.1%</div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
//import axios from 'axios'
//import VueAxios from 'vue-axios'

import menuTop from './Menu.vue'

export default {
  name: 'Dashboard',
  components:{
      menuTop
  },
  data () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style lang="css">
    @import "../../assets/bootstrap/css/bootstrap.min.css";
    @import "../../assets/css/default.css";
    @import "../../assets/css/dashboard.css";
</style>


