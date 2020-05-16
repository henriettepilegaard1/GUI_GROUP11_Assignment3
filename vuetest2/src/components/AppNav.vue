<template>
  <nav class="navbar navbar-expand-sm navbar-light navbar-jw">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#appnav"
      aria-controls="appnav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
        Models Management | 
    </a>

    <div class="collapse navbar-collapse" id="appnav">
      <div class="nav navbar-nav">
        <router-link
          to="Models"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Models
        </router-link>
        <router-link
          to="Managers"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Managers
        </router-link>
        <router-link
          to="Jobs"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Jobs
        </router-link>
        <router-link
          to="Login"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Login
        </router-link>
      </div>
      <ul class ="navbar-nav ml-auto">
        <li><router-link
          to="AddModel"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Add new model
        </router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>