<style>
.center{
    position:fixed;
    width:780px;
    height:650px;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-200px;
}
    </style>
<template>
  <div class="center">
        <form class="login" @submit.prevent="Login">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>         
            <label for="email" class="sr-only">Email</label>
     <input required v-model="email" type="text" placeholder="Email"/> <br>
            <label for="password" class="sr-only">Password</label>
     <input required v-model="password" type="password" placeholder="Password"/> <br>
     <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
     <button style="width=75px" type="submit">Sign in</button>    
    </form>
  </div>

  
</template>

<script>
import axios from 'axios';

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      axios.post(`https://localhost:44368/api/account/login`, {
            Email: this.email,
            Password: this.password
        }, 
        {
            headers: { 
            'Content-Type': 'application/json'
            }
        }
    )
    .then(response => {
        console.log(response.data.jwt)
    })
    .catch(e => {
      this.errors.push(e)
    })
    }
  }
};
</script>

body: JSON.stringify(({
 email: username,
 password: password
 })
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>