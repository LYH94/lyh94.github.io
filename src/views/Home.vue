<template>
  <div id="home">
    <Navbar></Navbar>
    <introduce></introduce>
    <skill></skill>
    <portfolio></portfolio>
  </div>
</template>

<script>
import Introduce from '../components/Introduce.vue'
import Navbar from '../components/Navbar.vue'
import Portfolio from '../components/Portfolio.vue'
import Skill from '../components/Skill.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: { Navbar, Introduce, Skill, Portfolio }
}
</script>
