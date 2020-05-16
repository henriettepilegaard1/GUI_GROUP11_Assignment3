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
import Home from './components/Home'


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

/* eslint-disable no-new */
new Vue({
  router,
    el: '#app',
    router,
    render: h => h(App)
})
