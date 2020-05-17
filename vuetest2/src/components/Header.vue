<template>
  <header class="header">
    <h1>Models Management</h1>
    <div id="nav">
      <router-link to="/Models">Models</router-link> |
      <router-link to="/Managers">Managers</router-link> |
      <router-link to="/Jobs">Jobs</router-link> |
      <router-link to="/Login">Log out</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  *{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .header {
    background: rgb(139, 151, 144);
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>