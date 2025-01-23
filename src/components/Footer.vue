<template>
  <footer id="footer" class="bg-black text-white py-3">
    <div class="container-fluid h-100">
      <div class="row text-center">
        <div class="col">
          {{ t('footer.copyright') }} | {{ t('footer.madeby') }}
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=yuhsuanlee94@gmail.com"
            target="_blank" 
            :title="t('footer.email.tooltip')">
            <font-awesome-icon :icon="['far', 'envelope']" class="social-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/yuhsuan-lee-120683176/" 
            target="_blank"
            :title="t('footer.linkedin.tooltip')" class="ms-2">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon"/>
            <span> Let's Connect</span>
          </a>
        </div>
      </div>
    </div>
    <div id="go_top_page" 
        class="animate__animated animate__bounce go_top_page" 
        :style="{ 'animation-duration': '3s' }" 
        v-show="scrollPosition > 550">
      <a href="#" class="d-block text-center">
        <font-awesome-icon :icon="['fas', 'chevron-up']" class="social-icon"/>
      </a>
    </div>
  </footer>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
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
</script>