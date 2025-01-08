<template>
  <b-container fluid id="othernavabr">
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <b-navbar-brand to="/">Lee's Resume(Technologies Used)</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/categories">Categories</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#othernavabr .navbar {
  background: #1f2229;
}
</style>
