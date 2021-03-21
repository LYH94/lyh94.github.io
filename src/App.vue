<template>
  <div id="app">
    <loading
      :active.sync="isLoading"
      :background-color="'#000'"
      :color="'#ff0'"
      :opacity= "1"
      :loader="'dots'"
    ></loading>
    <router-view/>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: true
    }
  },
  components: { Loading },
  mounted () {
    window.addEventListener('load', () => {
      this.isLoading = false
    })
  }
}
</script>
