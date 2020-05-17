<template>
    <div class="models container">
    <br>
    <div class="clearfix">
        <h3 class="page-header" style="float: left;">Models</h3>
    </div>
    <div>
        <br>
        <p>On this page you will see a list of all models. You can click on any model to see if their details fit your needs. If none of the models fit, you can add a new model by clicking the button "Add new model".</p>
    </div>
    <br>
        <table class="table table-striped">
            <thead> 
                <tr>
                    <th bgcolor="#fff">First name</th>
                    <th bgcolor="#fff">Last name</th>
                    <th bgcolor="#fff">Email</th>
                    <th bgcolor="#fff">Phone number</th>
                </tr>
            </thead>
            <tr><td>&nbsp;</td></tr>
            <tbody>
                <!-- <tr v-for="model in models">
                    <td>{{model.firstName}}</td>
                    <td>{{model.lastName}}</td>
                    <td>{{model.email}}</td>
                    <td>{{model.phoneNo}}</td> 
                </tr>-->
            </tbody>
        </table>
        <button class="btn btn-primary" style="float: right; position: relative; top: 10px;">
            <router-link style="text-decoration: none; color: inherit;" to="/AddModel">Add new model</router-link> <!-- Remove html blue link color -->
        </button>
    </div>
</template>

<script>
//import axios from 'axios';
import Header from './Header';

    export default {
        name: 'models',
        components: {
            Header
        },
        data() {
            return {
                models: []
            }
        },
        methods: {
            fetchModels(){
                axois.get('/api/Models')
                    .then(function(response){
                        this.models = JSON.parse(response.body)
                    });
            }
        },
        created: function(){
            this.fetchModels
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
    .routerLink{
     text-decoration: none;
 }
</style>