import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import Login from './components/Login';
import Models from './components/Models'
import Managers from './components/Managers'
import Jobs from './components/Jobs'
import AddModel from './components/AddModel'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    base: __dirname, 
    routes: [
        {
            path: '/Login',
            alias: "/",  
            component: Login
        },
        {
            path: '/Home', 
            component: Home
        },
        {
            path: '/Models', 
            component: Models
        },
        {
            path: '/Managers',
            component: Managers
        },
        {
            path: '/Jobs', 
            component: Jobs
        },
        {
            path: '/addModel',
            component: AddModel
        }
      ]
    })
    router.beforeEach((to, from, next) => 
    {
        const publicPages = ['/Login'];
        const authRequired = !publicPages.includes(to.path);
        const loggedIn = localStorage.getItem('token')
          // trying to access a restricted page + not logged in
          // redirect to login page
          if (authRequired && !loggedIn) 
            {
              next('/Login');
            } 
        else 
        {
            next();
        }
    })