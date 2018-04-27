<template>
  <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
      <router-link to="/system/" class="nav-link text-left">
        <i class="fa fa-fw fa-dashboard"></i>
        <span class="nav-link-text">Dashboard</span>
      </router-link>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
      <router-link to="/system/users" class="nav-link text-left">
        <i class="fa fa-users"></i>
        <span class="nav-link-text">Consultores</span>
      </router-link>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
      <router-link to="/system/users" class="nav-link text-left">
        <i class="fa fa-users"></i>
        <span class="nav-link-text">Clientes</span>
      </router-link>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
      <router-link to="/system/users" class="nav-link text-left">
        <i class="fa fa-users"></i>
        <span class="nav-link-text">Skills</span>
      </router-link>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
      <router-link to="/system/users" class="nav-link text-left">
        <i class="fa fa-users"></i>
        <span class="nav-link-text">Users</span>
      </router-link>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
      <router-link to="/system/counter" class="nav-link text-left">
        <i class="fa fa-fw fa-table"></i>
        <span class="nav-link-text">
          Counters
          ({{ count }})
        </span>
      </router-link>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
      <router-link to="/system/blank_page" class="nav-link text-left">
        <i class="fa fa-fw fa-table"></i>
        <span class="nav-link-text">
          Blank Page
        </span>
      </router-link>
    </li>
  </ul>     
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

export default {
    name: 'MenuLeft',
    components:{
        Loading
    },
    data () {
        return {
            title: 'Menu',
            dataUser:null,
            name:'',
            user:null,
            count2:null,
            isLoading: false
        }
    },
    mounted(){
        this.startMenu();
    },
    methods:{
        startMenu(){
          var body = $('boby');
          console.log('boby',body);

                    "use strict"; // Start of use strict
          // Configure tooltips for collapsed side navigation
          $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
            template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
          })
          // Toggle the side navigation
          $("#sidenavToggler").click(function(e) {
            console.log('sidenavToggler');
            e.preventDefault();
            $("body").toggleClass("sidenav-toggled");
            $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
            $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
          });
          // Force the toggled class to be removed when a collapsible nav link is clicked
          $(".navbar-sidenav .nav-link-collapse").click(function(e) {
            e.preventDefault();
            $("body").removeClass("sidenav-toggled");
          });
          // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
          $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
            var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
          });
          // Scroll to top button appear
          $(document).scroll(function() {
            var scrollDistance = $(this).scrollTop();
            if (scrollDistance > 100) {
              $('.scroll-to-top').fadeIn();
            } else {
              $('.scroll-to-top').fadeOut();
            }
          });
          // Configure tooltips globally
          $('[data-toggle="tooltip"]').tooltip()
          // Smooth scrolling using jQuery easing
          $(document).on('click', 'a.scroll-to-top', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
          });
        }
    },
    computed: {
        count () {
            return this.$store.state.a.count
        }
    }
}
</script>