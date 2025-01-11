<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top home-navbar"
        :class="{'change_color': scrollPosition > 300}"
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="100">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Lee's Resume</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav ms-auto">
            <!-- <li class="nav-item">
              <a class="nav-link" href="#introduce" v-scroll-to="{ element: '#introduce', duration: 500, easing: 'linear' }">About Me</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#skill" v-scroll-to="{ element: '#skill', duration: 500, easing: 'linear' }">Professional Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio" v-scroll-to="{ element: '#portfolio', duration: 500, easing: 'linear' }">Web Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience" v-scroll-to="{ element: '#experience', duration: 500, easing: 'linear' }">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education" v-scroll-to="{ element: '#education', duration: 500, easing: 'linear' }">Education</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/categories/posts">Articles</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  setup() {
    const scrollPosition = ref(null)

    const updateScroll = () => {
      scrollPosition.value = window.scrollY
    }

    onMounted(() => {
      window.addEventListener('scroll', updateScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', updateScroll)
    })

    return {
      scrollPosition
    }
  }
})
</script>

<style lang="scss">
.change_color {
  background-color: #1f2229;
}

.home-navbar {
  .navbar-nav {
    .nav-link {
      &:hover {
        color: rgba(255,255,255,.75);
      }
      color: rgba(255,255,255,.5);
      text-decoration: none;
    }
  }
}
</style>