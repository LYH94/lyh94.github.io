<template>
  <div id="navabr">
    <b-navbar toggleable="lg" type="dark" fixed="top" v-b-scrollspy="{offset:100, method:'auto'}" :class="{change_color: scrollPosition > 300}" class="home-navbar">
      <b-navbar-brand to="/">李育瑄的履歷表</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-scroll-to="{ element: '#introduce', duration: 500, easing: 'linear' }">自我介紹</b-nav-item>
          <b-nav-item v-scroll-to="{ element: '#skill', duration: 500, easing: 'linear' }">專業技能</b-nav-item>
          <b-nav-item v-scroll-to="{ element: '#portfolio', duration: 500, easing: 'linear' }">網頁作品</b-nav-item>
          <b-nav-item v-scroll-to="{ element: '#experience', duration: 500, easing: 'linear' }">個人經歷</b-nav-item>
          <b-nav-item><router-link to="/categories/posts">文章</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollPosition: null
    }
  },
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
}
</script>

<style lang="scss">
  .change_color {
    background-color:#1f2229;
  }
  .home-navbar .navbar-nav .nav-link:hover a{
    color: rgba(255,255,255,.75);
  }
  .home-navbar .navbar-nav .nav-link a{
    color: rgba(255,255,255,.5);
    text-decoration: none;
  }
</style>
