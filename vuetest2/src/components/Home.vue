<template>
  <div class="container">
    <img
      id="mlogo-img"
      src="/static/m.png"      
      class="mlogo-img"
    />
      <h3>{{content}}</h3>
      <p></p>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: 'Welcome Models and Managers'
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
  width: 300px;
  height: 300px;
}

</style>