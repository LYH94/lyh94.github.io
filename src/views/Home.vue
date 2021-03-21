<template>
  <div id="home">
    <Navbar></Navbar>
    <introduce></introduce>
  </div>
</template>

<script>
import Introduce from '../components/Introduce.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar, Introduce },
  name: 'Home'
}
</script>
