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
          :key="info._id"
          class="col-12 col-md-6 col-lg-4 mb-3"
        >
          <div
            class="card mb-2 h-100 portfolio-card"
            :data-aos="info.dataAos"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
          >
            <div class="position-relative">
              <img :src="info.img" :alt="info.title" class="card-img-top rounded-0">
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
                <h5 class="card-title">{{ info.title }}</h5>
                <div class="card-text">
                  <ul class="pl-3">
                    <li v-for="(item, index) in info.text" :key="index">
                      {{item}}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center">
                <a 
                  :href="info.link" 
                  class="btn btn-outline-warning"
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

<script>
export default {
  data () {
    return {
      portfolios: [
        {
          img: './portfolio/portfolio-01.png',
          title: 'Vue E-Commerce Website',
          text: ['Features: Product browsing, adding items to cart, user registration/login, and order submission.', 'Frontend: Vue CLI, BootstrapVue, Responsive Web Design, Axios for API requests.', 'Backend: Node.js, MongoDB.'],
          link: 'https://lyh94.github.io/Vue-Store/#/',
          skills: ['Vue', 'Bootstrap-Vue', 'Scss', 'Axios', 'Vue-cli', 'MongoDB', 'body-parser'],
          repo: 'https://github.com/LYH94/Vue-Store',
          dataAos: ['flip-right']
        },
        {
          img: './portfolio/portfolio-02.jpg',
          title: 'Vue Pomodoro Timer',
          text: ['Features: Timer with To-Do List, alarm sound selection, and PWA support.', 'Built with Vuex and Vue Router.'],
          link: 'https://lyh94.github.io/Vue-Pomodoro/#/',
          skills: ['Vue', 'Vuex', 'Vue-router', 'Stylus', 'Pug', 'Vue-cli', 'localStorage', 'Bootstrap-Vue'],
          repo: 'https://github.com/LYH94/Vue-Pomodoro',
          dataAos: ['flip-right']
        },
        {
          img: './portfolio/portfolio-06.jpg',
          title: 'CSS ZEN GARDEN',
          text: ['Created a forest-themed page using only CSS and vanilla JavaScript without altering the HTML structure or using plugins.', 'Implemented animations with @keyframes and parallax scrolling effects.'],
          link: 'https://lyh94.github.io/css_zen-garden/',
          skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
          repo: 'https://github.com/LYH94/css_zen-garden',
          dataAos: ['flip-right']
        },
        {
          img: './portfolio/portfolio-04.jpg',
          title: 'Tourist Spot Matching Card Game',
          text: ['A card-matching game created with jQuery and CSS 3D transformations.'],
          link: 'https://lyh94.github.io/jq-cards/index.html',
          skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
          repo: 'https://github.com/LYH94/jq-cards',
          dataAos: ['flip-left']
        },
        {
          img: './portfolio/portfolio-05.jpg',
          title: 'Alien Cow Abduction Game',
          text: ['A DOM manipulation and animation practice game where cows appear randomly.'],
          link: 'https://lyh94.github.io/jq-alien_abduction/',
          skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
          repo: 'https://github.com/LYH94/jq-alien_abduction',
          dataAos: ['flip-left']
        },
        {
          img: './portfolio/portfolio-03.jpg',
          title: 'LINE Chatbot',
          text: ['A chatbot integrated with a seasonal produce website.', 'Deployed on Heroku using Node.js.'],
          link: 'https://github.com/LYH94/linebot-fruit_price',
          skills: ['Html', 'CSS', 'javaScript', 'Node.js', 'cheerio'],
          repo: 'https://github.com/LYH94/linebot-fruit_price',
          dataAos: ['flip-left']
        }
      ]
    }
  }
}
</script>
