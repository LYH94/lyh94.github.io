<template>
  <div id="posts">
      <h2>製作一個 Vue 的履歷</h2>
      <p><b-badge variant="secondary" class="mr-2" v-for="badge in badges" :key="badge.id">{{ badge }}</b-badge></p>
      <h5 id="nav-1" class="mt-2 highlight">Vue-cli 的套件使用</h5>
      <div id="nav-a" v-for="npm in npms" :key="npm.id">
        <p># {{ npm.text }}</p>
        <a :href="npm.link">{{ npm.name }}</a>
      </div>
    <div class="pb-3 pb-lg-6">
      <h5 id="nav-2" class="highlight mt-4">Navbar、Footer 滾動監聽參考寫法</h5>
      <p># Navbar.vue 預設背景透明，滾動到一段距離之後添加背景色</p>
      <codemirror v-model="code1" :options="cmOptions"></codemirror>
    </div>
  </div>
</template>

<script>
import dedent from 'dedent'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/theme/dracula.css'
export default {
  data () {
    return {
      npms: [
        {
          text: '自我介紹 Introduce.vue 使用背景粒子效果',
          link: 'https://www.npmjs.com/package/particles.vue',
          name: 'particles.vue'
        },
        {
          text: '載入效果',
          link: 'https://www.npmjs.com/package/vue-loading-overlay',
          name: 'Vue Loading Overlay Component'
        },
        {
          text: 'Navbar 滾動效果',
          link: 'https://www.npmjs.com/package/vue-scrollto',
          name: 'vue-scrollto'
        },
        {
          text: '網頁動畫效果',
          link: 'https://www.npmjs.com/package/aos',
          name: 'aos'
        },
        {
          text: '程式碼效果',
          link: 'https://www.npmjs.com/package/vue-codemirror',
          name: 'vue-codemirror'
        },
        {
          text: '打字效果',
          link: 'https://www.npmjs.com/package/vue-typed-js',
          name: 'vue-typed-js'
        }
      ],
      badges: ['Vue cli', 'Scss', 'bootstrap-vue', 'aos'],
      code1: dedent`
      <template>
          <b-navbar toggleable="lg" type="dark" fixed="top" v-b-scrollspy="{offset:100, method:'auto'}" 
          :class="{change_color: scrollPosition > 300}" class="home-navbar">
      </template>
      
      <script>
      methods: {
        onActivate (target) {
          console.log('Receved Event: scrollspy::activate for target ', target)
        },
        updateScroll () {
          this.scrollPosition = window.scrollY
        }
      },
      created () {
        this.$root.$on('scrollspy::activate', this.onActivate)
      },
      mounted () {
        window.addEventListener('scroll', this.updateScroll)
      }
      <script>`,
      cmOptions: {
        tabSize: 2,
        mode: 'text/x-vue',
        theme: 'dracula',
        lineNumbers: true,
        line: true
      }
    }
  }
}
</script>
<style lang="scss">
  #posts p {
    margin: 0;
  }
  #nav-a a:hover {
    color: rgba(179, 44, 44, 0.75);
  }
  #nav-a a{
    color: rgb(189, 17, 17);
    text-decoration: none;
  }
  .highlight {
    background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #ffd000 50%);
    display: inline-block;
  }
</style>
