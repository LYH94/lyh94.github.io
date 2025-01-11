<template>
  <div id="app">
    <loading 
      v-model:active="isLoading"
      :is-full-page="true"
      :background-color="'#000'"
      :color="'#ff0'"
      :opacity="1"
      :loader="'dots'"
    />
    <router-view/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const isLoading = ref(true)

onMounted(() => {
  if (document.readyState === 'complete') {
    isLoading.value = false
  } else {
    window.addEventListener('load', () => {
      isLoading.value = false
    }, { once: true })
  }
})
</script>