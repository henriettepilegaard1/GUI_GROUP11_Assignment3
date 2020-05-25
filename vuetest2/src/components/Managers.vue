<template>
    <div class="managers container">
    <br>
    <div class="clearfix">
        <h3 class="page-header" style="float: left;">Managers</h3>
    </div>
    <br>
    <div>
        <p>On this page you can add new managers by filling in the required fields.</p>
    </div>
    <hr class="mb-4">
    <br>
          <form v-on:submit="addManager" @submit.prevent="false" class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name*</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required v-model="manager.firstName">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <label for="lastName">Last name*</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required v-model="manager.lastName">
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="email">E-mail*</label>
            <input type="email" class="form-control" id="email" placeholder="" value="" required v-model="manager.email">
            <div class="invalid-feedback">
              Valid e-mail is required.
            </div>
          </div>

          <div class="col-md-6 mb-3">
            <label for="password">Password*</label>
            <input type="password" class="form-control" id="password" placeholder="" value="" required v-model="manager.password">
            <div class="invalid-feedback">
              Valid password is required.
            </div>
          </div>
        </div>
        
        <hr class="mb-4">

        <button class="btn btn-primary btn-lg btn-block" type="submit">Submit</button>
        <br>
        <br>
        <br>
      </form>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'addManager',
        data() {
            return {
                manager: {}
            };
        },
        methods: {
            addManager: function() {
            axios.post(`https://localhost:44368/api/Managers`, this.manager,
            {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + localStorage.getItem('token')  
                  }
            }
        
        )
        .then(response => {
          console.log(manager)
        })
        .catch(e => {
          this.errors.push(e)
        })
        }
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