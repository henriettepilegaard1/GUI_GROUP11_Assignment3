import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.config.productionTip = true;
Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Models},
        {path: '/managers', component: Managers},
        {path: '/jobs', compnent: Jobs}
    ]
})

new Vue({
    router,
    template: `
        <div id="app>
        <nav class="navbar navbar-default">
            <div class="container">
                <div-class="navbar-header">
                    <button type="button" class="navbar-toogle collapsed" data-toggle="collapse" data-taget="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation </span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Models Management</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">Models</router-link></li>
                        <li><router-link to="/managers">Managers</router-link></li>
                        <li><router-link to="/jobs">Jobs</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
            <router-view></router-view> 
        </div>
    `
}).$mount('#app');
