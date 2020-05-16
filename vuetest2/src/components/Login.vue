<template>
  <div>
    <form class="login" @submit.prevent="login">
        <h1>Log in</h1>
         <label>Username</label>
     <input required v-model="username" type="text" placeholder="Username"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      axios.post(`https://localhost:44368/api/account/login`, {
            Email: this.username,
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