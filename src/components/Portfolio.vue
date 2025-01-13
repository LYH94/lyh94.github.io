<template>
  <div id="portfolio" class="bg-dark-blue">
    <div class="container pb-3 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl fw-bold">PORTFOLIO</h2>
        <h3></h3>
      </div>
      <div class="row">
        <div 
          v-for="info in portfolios" 
          :key="info.title"
          class="col-12 col-md-6 col-lg-4 mb-3"
        >
          <div
            class="card mb-2 h-100 portfolio-card"
            :data-aos="info.dataAos"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div class="position-relative">
              <img :src="info.img" :alt="t(info.titleKey)" class="card-img-top rounded-0">
              <div class="card-img-overlay d-flex justify-content-center align-items-center flex-column">
                <a :href="info.repo" target="_blank">
                  <font-awesome-icon 
                    class="icon mb-1 text-white" 
                    :icon="['fab', 'github']"
                  />
                </a>
                <p class="mb-0 text-white">github repo</p>
              </div>
            </div>
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">{{ t(info.titleKey) }}</h5>
                <div class="card-text">
                  <ul class="pl-3">
                    <li v-for="(textKey, index) in info.textKeys" :key="index">
                      {{ t(textKey) }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center">
                <a 
                  :href="info.link" 
                  class="btn-slide-layer"
                  target="_blank"
                >
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'

  const { t } = useI18n()

  library.add(faGithub)

  const portfolios = ref([
  {
    img: './portfolio/portfolio-01.png',
    titleKey: 'portfolio.vueEcommerce.title',
    textKeys: ['portfolio.vueEcommerce.text.0', 'portfolio.vueEcommerce.text.1', 'portfolio.vueEcommerce.text.2'],
    link: 'https://lyh94.github.io/Vue-Store/#/',
    skills: ['Vue', 'Bootstrap-Vue', 'Scss', 'Axios', 'Vue-cli', 'MongoDB', 'body-parser'],
    repo: 'https://github.com/LYH94/Vue-Store',
    dataAos: 'flip-right'
  },
  {
    img: './portfolio/portfolio-02.jpg',
    titleKey: 'portfolio.vuePomodoro.title',
    textKeys: ['portfolio.vuePomodoro.text.0', 'portfolio.vuePomodoro.text.1'],
    link: 'https://lyh94.github.io/Vue-Pomodoro/#/',
    skills: ['Vue', 'Vuex', 'Vue-router', 'Stylus', 'Pug', 'Vue-cli', 'localStorage', 'Bootstrap-Vue'],
    repo: 'https://github.com/LYH94/Vue-Pomodoro',
    dataAos: 'flip-right'
  },
  {
    img: './portfolio/portfolio-06.jpg',
    titleKey: 'portfolio.cssGarden.title',
    textKeys: ['portfolio.cssGarden.text.0', 'portfolio.cssGarden.text.1'],
    link: 'https://lyh94.github.io/css_zen-garden/',
    skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
    repo: 'https://github.com/LYH94/css_zen-garden',
    dataAos: 'flip-right'
  },
  {
    img: './portfolio/portfolio-04.jpg',
    titleKey: 'portfolio.cardGame.title',
    textKeys: ['portfolio.cardGame.text.0'],
    link: 'https://lyh94.github.io/jq-cards/index.html',
    skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
    repo: 'https://github.com/LYH94/jq-cards',
    dataAos: 'flip-left'
  },
  {
    img: './portfolio/portfolio-05.jpg',
    titleKey: 'portfolio.alienGame.title',
    textKeys: ['portfolio.alienGame.text.0'],
    link: 'https://lyh94.github.io/jq-alien_abduction/',
    skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
    repo: 'https://github.com/LYH94/jq-alien_abduction',
    dataAos: 'flip-left'
  },
  {
    img: './portfolio/portfolio-03.jpg',
    titleKey: 'portfolio.lineBot.title',
    textKeys: ['portfolio.lineBot.text.0', 'portfolio.lineBot.text.1'],
    link: 'https://github.com/LYH94/linebot-fruit_price',
    skills: ['Html', 'CSS', 'javaScript', 'Node.js', 'cheerio'],
    repo: 'https://github.com/LYH94/linebot-fruit_price',
    dataAos: 'flip-left'
  }
])
</script>