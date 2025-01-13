<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top home-navbar"
        :class="{'change_color': scrollPosition > 300}"
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="100">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">{{ t('nav.title') }}</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#skill" v-scroll-to="{ element: '#skill', duration: 500, easing: 'linear' }">
                {{ t('nav.skills') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio" v-scroll-to="{ element: '#portfolio', duration: 500, easing: 'linear' }">
                {{ t('nav.portfolio') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience" v-scroll-to="{ element: '#experience', duration: 500, easing: 'linear' }">
                {{ t('nav.experience') }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education" v-scroll-to="{ element: '#education', duration: 500, easing: 'linear' }">
                {{ t('nav.education') }}
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/categories/posts">{{ t('nav.docs') }}</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'language']" />
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#" @click="changeLocale('zh-TW')">繁體中文</a></li>
                <li><a class="dropdown-item" href="#" @click="changeLocale('en')">English</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const scrollPosition = ref(null)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

const changeLocale = (lang) => {
  locale.value = lang
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<style lang="scss">
.change_color {
  background-color: #1f2229;
}

.home-navbar {
  .navbar-nav {
    .nav-link {
      &:hover {
        color: rgba(255,255,255,.75);
      }
      color: rgba(255,255,255,.5);
      text-decoration: none;
    }
  }
}
</style>