<template>
  <footer id="footer" class="bg-black text-white py-3">
    <div class="container-fluid h-100">
      <div class="row text-center">
        <div class="col">
          &copy; 2021 All rights reserved | This page is made by Lee
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=yuhsuanlee94@gmail.com"
            target="_blank" 
            title="登入後即可直接寄信">
            <font-awesome-icon :icon="['far', 'envelope']" style="font-size: 16px; color: white;"/>
          </a>
        </div>
      </div>
    </div>
    <div id="go_top_page" 
        class="animate__animated animate__bounce go_top_page" 
        style="animation-duration: 3s;" 
        v-show="scrollPosition > 550">
      <a href="#" class="d-block text-center">
        <font-awesome-icon :icon="['fas', 'chevron-up']" style="font-size: 16px; color: white;"/>
      </a>
    </div>
  </footer>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

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