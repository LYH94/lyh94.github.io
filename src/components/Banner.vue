<template>
  <div id="banner" class="bg-black">
    <div class="banner-container">
      <Vue3Lottie :animationData="animationData" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import animationData from '@/assets/json/developer.json'

export default defineComponent({
  name: 'Banner',
  data() {
    return {
      animationData,
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    }
  }
})
</script>
