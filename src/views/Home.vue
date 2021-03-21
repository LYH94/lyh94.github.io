<template>
  <div id="home">
    <Navbar></Navbar>
    <introduce></introduce>
    <skill></skill>
    <portfolio></portfolio>
    <experience></experience>
    <education></education>
    <Footer></Footer>
  </div>
</template>

<script>
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Footer from '../components/Footer.vue'
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
  components: { Navbar, Introduce, Skill, Portfolio, Experience, Education, Footer }
}
</script>
