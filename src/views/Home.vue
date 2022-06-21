<template>
  <div id="home">
    <Navbar></Navbar>
    <Banner></Banner>
    <Project></Project>
    <skill></skill>
    <portfolio></portfolio>
    <experience></experience>
    <education></education>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Education from '../components/Education.vue'
import Experience from '../components/Experience.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import Portfolio from '../components/Portfolio.vue'
import Project from '../components/Project.vue'
import Skill from '../components/Skill.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: { Navbar, Banner, Project, Skill, Portfolio, Experience, Education, Footer }
}
</script>
