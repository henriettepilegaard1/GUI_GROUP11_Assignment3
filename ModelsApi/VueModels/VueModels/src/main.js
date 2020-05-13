import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'

Vue.config.productionTip = true;
Vue.use(VueRouter)

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
            <router-link to="/managers">Managers</router-link>
            <router-link to="/jobs">Jobs</router-link>
        </div>
    `
}).$mount('#app');
