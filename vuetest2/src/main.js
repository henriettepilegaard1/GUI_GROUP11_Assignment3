// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Models from './components/Models'
import Managers from './components/Managers'
import Jobs from './components/Jobs'
import AddModel from './components/AddModel'
import Login from './components/Login'
import Home from './components/Home'
import {
  faUser,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faSignInAlt, faSignOutAlt);


Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
/*
Vue.use(vueResource)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/Login',alias: "/",  component: Login},
    {path: '/Home', component: Home},
    {path: '/Models', component: Models},
    {path: '/Managers', component: Managers},
    {path: '/Jobs', component: Jobs},
    {path: '/addModel', component: AddModel}
  ]
})
 eslint-disable no-new 
new Vue({
  router,
    el: '#app',
    router,
    render: h => h(App)
})
*/

