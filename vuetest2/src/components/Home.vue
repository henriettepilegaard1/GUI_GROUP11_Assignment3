<template>
  <div>
  <header class="app-header">
    <appNav/>
  </header>
     <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppNav from "../components/AppNav.vue";

export default {
  components: {
    AppNav
  }
};
</script>

