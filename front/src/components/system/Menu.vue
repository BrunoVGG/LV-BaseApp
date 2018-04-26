    <template>
    <div>
        <loading :active.sync="isLoading" :can-cancel="true" :on-cancel="whenCancelled"></loading>
        <div id="menu-top" class="col-md-7">
            <ul>
                <li>
                    <router-link to="/system/">
                        <i class="icon-user"></i> Dashboard
                    </router-link>
                </li>
                <li>
                    <router-link to="/system/users">
                        <i class="icon-user"></i> Users
                    </router-link>
                </li>
                <li>
                    <router-link to="/system/counter">
                        <i class="icon-user"></i> Counter
                        ({{ count }})
                    </router-link>
                </li>
                <li>
                    <router-link to="/system/blank_page">
                        Blank Page
                    </router-link>
                </li>
                <li>
                    <router-link to="/system/blank_page2">
                        Blank Page 2
                    </router-link>
                </li>
            </ul>
        </div>

        <div v-if="dataUser" id="menu-top" class="col-md-5 text-right">
            <router-link to="/system/my_user">
                <img v-if="dataUser.avatar" :src="dataUser.avatar" style="max-width:50px">
                {{ dataUser.name }} 
            </router-link>
            | 
            <a href="#" v-on:click.prevent="logOut">
                <i class="icon-user"></i> LogOut
            </a>
        </div>
    </div>
       
</template>

<script>

import axios from 'axios'
//import VueAxios from 'vue-axios'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.min.css';

export default {
    name: 'Menu',
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

        this.dataUser = localStorage.getItem('user');

        if(!this.dataUser){
            this.getUser(); 
        } else{
            this.addMyUser();
        }  

    },
    methods:{
        whenCancelled() {
            console.log("User cancelled the loader.")
        },
        logOut(){
                this.isLoading = true;
                localStorage.removeItem('accessData');
                localStorage.removeItem('user');
                this.$router.push('/');
        },
        addMyUser(){
            this.dataUser = localStorage.getItem('user');
            this.dataUser = JSON.parse(this.dataUser);
            this.$store.state.user = this.dataUser;
        },
        getUser() {
            console.log("dataUser");
            var localData = JSON.parse(window.localStorage.accessData);
            var token = localData.access_token;
            const url = this.url_server+'api/system/user/data'

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    var dataUser = {
                        name:response.data.name,
                        email:response.data.email,
                        avatar:response.data.avatar
                    };

                    this.$store.state.user = dataUser;
                    var dataUser = JSON.stringify(dataUser);
                    
                    localStorage.setItem('user',dataUser);

                    this.addMyUser();                    
                })
                .catch(data => {
                    alert('Server Error...');
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