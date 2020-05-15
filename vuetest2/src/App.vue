<template>
  <div>
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import AppNav from './components/AppNav'

export default {
  components: {
    AppNav
  }
}

</script>

<style>
  #app {
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
