<template>
  <div id="banner" class="bg-black">
    <div class="banner-container">
      <lottie :options="defaultOptions" v-on:animCreated="handleAnimation"/>
    </div>
  </div>
</template>

<script>
import animationData from '@/assets/json/developer.json'

export default {
  name: 'Banner',
  data () {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
    }
  }
}
</script>
