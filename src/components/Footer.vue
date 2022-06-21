<template>
  <footer id="footer" class="bg-black text-white py-3">
    <b-container fluid class="h-100">
      <b-row class="text-center">
        <b-col>
          &copy; 2021 All rights reserved | This page is made by Lee
          <a href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=yuhsuanlee94@gmail.com"
            target="_blank" title="登入後即可直接寄信">
            <font-awesome-icon :icon="['far', 'envelope']" style="font-size: 16px; color: white;"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
    <div id="go_top_page" class="animate__animated animate__bounce go_top_page" style="animation-duration: 3s;" v-show="scrollPosition > 550">
      <a href="#" class="d-block text-center"><font-awesome-icon :icon="['fas', 'chevron-up']" style="font-size: 16px; color: white;"/></a>
    </div>
  </footer>
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
