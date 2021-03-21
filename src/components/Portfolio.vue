<template>
  <b-container fluid id="portfolio">
    <b-row class="portfolio-row m-0">
      <b-col class="portfolio-col" cols="12" md="6" lg="4" v-for="info in portfolios" :key="info._id">
        <b-card
          class="portfolio-card"
          :data-aos="info.dataAos" data-aos-easing="ease-out-cubic" data-aos-duration="800"
        >
        <b-card
          overlay
          :img-src="info.img"
          img-alt="Card Image"
          text-variant="white"
          title="Github repo"
          class="portfolio-img"
        >
          <b-card-text>
            <a :href="info.repo" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'github']"/></a>
          </b-card-text>
        </b-card>
          <b-card-title>{{ info.title }}</b-card-title>
          <b-card-text class="flex-fill">
            <ul>
              <li v-for="li in info.text" :key="li._id">{{li}}</li>
            </ul>
            <h5 class="text-center"><b-badge pill variant="light" v-for="badge in info.skills" :key="badge">{{ badge }}</b-badge></h5>
          </b-card-text>
          <p class="text-center"><b-button :href="info.link" variant="outline-warning" target="_blank">DEMO</b-button></p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      portfolios: [
        {
          img: './portfolio/portfolio-01.png',
          title: 'Vue 電商網站',
          text: ['可瀏覽商品，將商品加入購物車、註冊/登入會員、送出訂單', '前端使用 Vue CLI、BootstrapVue、Responsive Web Design、Axios與後台要資料', '後端使用Node.js、MongoDB'],
          link: 'https://lyh94.github.io/Vue-Store/#/',
          skills: ['Vue', 'Bootstrap-Vue', 'Scss', 'Axios', 'Vue-cli', 'MongoDB', 'body-parser'],
          repo: 'https://github.com/LYH94/Vue-Store',
          dataAos: ['flip-right']
        },
        {
          img: './portfolio/portfolio-02.jpg',
          title: 'Vue 番茄鐘',
          text: ['使用 Vuex 和 Vue-router', '番茄鐘計時器包含 To Do List ，可以選擇鬧鐘聲音', '支援 PWA'],
          link: 'https://lyh94.github.io/Vue-Pomodoro/#/',
          skills: ['Vue', 'Vuex', 'Vue-router', 'Stylus', 'Pug', 'Vue-cli', 'localStorage', 'Bootstrap-Vue'],
          repo: 'https://github.com/LYH94/Vue-Pomodoro',
          dataAos: ['flip-right']
        },
        {
          img: './portfolio/portfolio-06.jpg',
          title: 'CSS ZEN GARDEN',
          text: ['不更改 html 結構，不使用套件使用純 css 切板、原生 js，做出森林風格的頁面。', '使用 @keyframes 動畫、滾動視差效果'],
          link: 'https://lyh94.github.io/css_zen-garden/',
          skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
          repo: 'https://github.com/LYH94/css_zen-garden',
          dataAos: ['flip-right']
        },
        {
          img: './portfolio/portfolio-04.jpg',
          title: '景點配對翻牌遊戲',
          text: ['使用 jQuery、CSS 3D 製作的翻牌遊戲。'],
          link: 'https://lyh94.github.io/jq-cards/index.html',
          skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
          repo: 'https://github.com/LYH94/jq-cards',
          dataAos: ['flip-left']
        },
        {
          img: './portfolio/portfolio-05.jpg',
          title: '外星人綁架乳牛小遊戲',
          text: ['使用 jQuery 練習 DOM 操作和動畫製作的遊戲，乳牛會隨機出現'],
          link: 'https://lyh94.github.io/jq-alien_abduction/',
          skills: ['Html', 'CSS', 'jQuery', 'keyframes'],
          repo: 'https://github.com/LYH94/jq-alien_abduction',
          dataAos: ['flip-left']
        },
        {
          img: './portfolio/portfolio-03.jpg',
          title: 'LINE 機器人',
          text: ['可查詢當季好蔬果網站的 LINE 機器人', '部署到 Heroku', '使用 Node.js'],
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

<style lang="scss">
#portfolio {
  background: $mainColor;
}
.portfolio-row {
  padding: 2rem 2rem;
}
.portfolio-col {
  margin-bottom: 1rem;
}
.portfolio-card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.1);
  .card-body{
  display: flex;
  flex-direction: column;
  padding: 0;
  }
  .card-title{
  text-align: center;
  margin-top: 8px;
  }
  .badge {
  display: none;
  margin-right: 3px;
  transition: 5s;
  }
}

.demo-icon {
  box-shadow: 2px 2px 0 #f27c7c;
}
.portfolio-card:hover .badge {
  display: inline-block;
}
.icon {
  font-size: 40px;
}
.portfolio-card .btn {
  box-shadow: 2px 2px 0 #ffc107;
  &:hover {
    box-shadow: none;
  }
}
.portfolio-img .card-text a{
  text-decoration:none;
  color: #ffffff;
}
.portfolio-img .card-body{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.portfolio-card:hover .portfolio-img .card-body{
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.portfolio-img .card-title,
.portfolio-img .card-text {
  display: none;
}
.portfolio-img,
.portfolio-img .card-img {
  border-radius: 20px;
}
.portfolio-card:hover .portfolio-img .card-title,
.portfolio-card:hover .portfolio-img .card-text {
  display: block;
}
</style>
