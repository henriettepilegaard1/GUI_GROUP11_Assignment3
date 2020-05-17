<template>
  <div class="container">
    <img
      id="mlogo-img"
      src="/static/m.png"      
      class="mlogo-img"
    />
      <h3>{{content}}</h3>
      As one of our models you will be able to see a list of all your jobs and add expances to your jobs <br> 
      As one of our Managers you can do a lot of things: <br> 
      <div class="margien">      
        <ul> 
        <li><b>Add new Models</b></li>
        <li><b>Add new Managers, business might be booming</b></li>
        <li><b>Add or remove a job</b></li>
        <li><b>Add a model to a job - remember you might need several models for one job, depending on how demanding the customer is</b></li>
        <li><b>Remove a model from a job - your demanding customer might wanna go in a different direction :-)</b> </li>
        <li><b>See a list with all the jobs</b></li>
      </ul>
    </div>
      
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: 'This page is only for Models and Managers'
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style scoped>
*{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}

.mlogo-img
{
  width: 200px;
}

.margien
{
  margin-left:30px
}
</style>