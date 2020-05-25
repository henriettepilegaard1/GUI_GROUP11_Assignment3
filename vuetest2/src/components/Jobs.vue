<template>
    <div class="jobs container">
    <br>
    <div class="clearfix">
        <h3 class="page-header" style="float: left;">Jobs</h3>
    </div>
    <div>
        <br>
        <p>On this page you will see a list of your jobs if you are a model. If you are a manager, you will see a complete list of all jobs. You can click any job to show further details and what models are assigned to the job.</p>
    </div>
    <br>
        <table class="table table-striped">
            <thead> 
                <tr>
                    <th bgcolor="#fff">Customer</th>
                    <th bgcolor="#fff">Start Date</th>
                    <th bgcolor="#fff">Days</th>
                    <th bgcolor="#fff">Location</th>
                </tr>
            </thead>
            <tr><td>&nbsp;</td></tr>
            <tbody>
                <tr v-for="job in jobs" v-bind:key="job.efJobId">
                    <td>{{job.customer}}</td>
                    <td>{{job.startDate}}</td>
                    <td>{{job.days}}</td>
                    <td>{{job.location}}</td> 
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" style="float: right; position: relative; top: 10px;">
            <router-link style="text-decoration: none; color: inherit;" to="/AddJob">Add new job</router-link> <!-- Remove html blue link color -->
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header';

    export default {
        name: 'jobs',
        components: {
            Header
        },
        data: function() {
            return {
                jobs: []
            }
        },
        methods: {
            fetchJobs(){
                axois.get(`https://localhost:44368/api/Jobs`,
                    {
                        hearders: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token') 
                        }
                    }
                ).then((response)=>{
                        console.log(response.data); 
                        this.jobs = response.data; 
                        console.log(this.jobs[0].efJobId);
                        }
                    ).catch(e => {
                    console.log("wrong"); 
                });
            }
        },
        mounted(){
            this.fetchJobs();
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