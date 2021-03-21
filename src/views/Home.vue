<template>
  <div id="home">
    <Navbar></Navbar>
    <introduce></introduce>
    <skill></skill>
  </div>
</template>

<script>
import Introduce from '../components/Introduce.vue'
import Navbar from '../components/Navbar.vue'
import Skill from '../components/Skill.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: { Navbar, Introduce, Skill }
}
</script>
