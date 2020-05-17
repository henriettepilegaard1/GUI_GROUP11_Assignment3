// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Models from './components/Models'
import Managers from './components/Managers'
import Jobs from './components/Jobs'
import AddModel from './components/AddModel'
import Login from './components/Login'
import axios from 'axios'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/Login', alias: "/", component: Login, meta: {hideNavigation: true}}, //hide header from login
    {path: '/Models', component: Models},
    {path: '/Managers', component: Managers},
    {path: '/Jobs', component: Jobs},
    {path: '/addModel', component: AddModel}
  ]
})

const instance = axios.create({
  baseURL: 'https://localhost:44368', //write /api/... instead of the whole url every time
});

axios.create();

/* eslint-disable no-new */
new Vue({
  router,
    el: '#app',
    router,
    render: h => h(App),
})
