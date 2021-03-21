<template>
  <footer id="footer">
    <div class="container-fluid h-100">
      <b-row class="text-center">
        <b-col>
          &copy; 2021 All rights reserved | This page is made by Lee
          <a href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=yuhsuanlee94@gmail.com"
            target="_blank" title="登入後即可直接寄信">
            <font-awesome-icon :icon="['far', 'envelope']" style="font-size: 16px; color: white;"/>
          </a>
        </b-col>
      </b-row>
    </div>
    <div id="go_top_page" class="animate__animated animate__bounce" style="animation-duration: 3s;" v-show="scrollPosition > 550">
      <a href="#"><font-awesome-icon :icon="['fas', 'chevron-up']" style="font-size: 16px; color: white;"/></a>
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

<style lang="scss">
#footer{
  padding: 40px 0;
  color: #fff;
  background: $blue;
}

#go_top_page {
  width: 40px;
  height: 40px;
  background: #ffc107;
  border-radius: 50%;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 9999;
}

#go_top_page a {
  display: block;
  text-align: center;
  line-height: 40px;
  color: #fff;
  text-decoration: none;
}
</style>
