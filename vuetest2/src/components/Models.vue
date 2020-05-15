<template>
    <div class="models container">
        <h1 class="page-header">Models</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="model in models">
                    <td>{{model.firstName}}</td>
                    <td>{{model.lastName}}</td>
                    <td>{{model.email}}</td>
                    <td>{{model.phoneNo}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'models',
        data() {
            return {
                models: []
            }
        },
        methods: {
            fetchModels(){
                this.$http.get('https://localhost:44368/index.html')
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
</style>