<template>
  <div id="posts">
    <h2>Create a Vue Resume</h2>
    <p>
      <span v-for="badge in badges" 
            :key="badge" 
            class="badge bg-secondary me-2">
        {{ badge }}
      </span>
    </p>
    
    <h5 id="nav-1" class="mt-2 highlight">Usage of Vue Packages</h5>
    <div id="nav-a" v-for="npm in npms" :key="npm.link">
      <p># {{ npm.text }}</p>
      <a :href="npm.link">{{ npm.name }}</a>
    </div>

    <div class="pb-3 pb-lg-5">
      <h5 id="nav-2" class="highlight mt-4">Navbar, Footer scroll listener reference implementation</h5>
      <p># Navbar.vue default background transparent, adding background color after scrolling a certain distance</p>
      <codemirror v-model:value="code" :options="cmOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import "codemirror/theme/dracula.css";

const npms = ref([
  {
    text: 'About Me Introduce.vue with background particle effect',
    link: 'https://www.npmjs.com/package/particles.vue',
    name: 'particles.vue'
  },
  {
    text: 'Loading Effect',
    link: 'https://www.npmjs.com/package/vue-loading-overlay',
    name: 'Vue Loading Overlay Component'
  },
  {
    text: 'Navbar scroll effect',
    link: 'https://www.npmjs.com/package/vue-scrollto',
    name: 'vue-scrollto'
  },
  {
    text: 'Web animation effect',
    link: 'https://www.npmjs.com/package/aos',
    name: 'aos'
  },
  {
    text: 'Code result',
    link: 'https://www.npmjs.com/package/codemirror-editor-vue3',
    name: 'codemirror-editor-vue3'
  }
])

const badges = ref(['Vue 3', 'Scss', 'Bootstrap 5', 'aos'])

const code = ref(`
<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top"
      :class="{'bg-dark': scrollPosition > 300}">
    <!-- Navbar content -->
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollPosition = ref(0)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
<\/script>
`)

const cmOptions = ref({
  tabSize: 2,
  mode: 'text/x-vue',
  theme: 'dracula',
  lineNumbers: true,
  line: true
})
</script>

<style lang="scss">
#posts {
  p {
    margin: 0;
  }
}

#nav-a {
  a {
    color: rgb(189, 17, 17);
    text-decoration: none;
    
    &:hover {
      color: rgba(179, 44, 44, 0.75);
    }
  }
}

.highlight {
  background: linear-gradient(180deg, rgba(255,255,255,0) 50%, #ffd000 50%);
  display: inline-block;
}
</style>