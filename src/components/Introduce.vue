<template>
  <b-container fluid id="introduce" class="p-0">
    <Particles
      id="tsparticles"
      :options="{
        background: {
          color: {
            value: '#000000'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
              parallax: {
                enable: false,
                force: 2,
                smooth: 10
              }
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: [
              '#3998D0',
              '#2EB6AF',
              '#A9BD33',
              '#FEC73B',
              '#F89930',
              '#F45623',
              '#D62E32',
              '#EB586E',
              '#9952CF'
            ]
          },
          links: {
            color: '#ffffff',
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1.5
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'destroy',
            random: true,
            speed: 2,
            straight: false
          },
          number: {
            value: 200,
            density: {
              enable: true,
              area: 700
            }
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 7
          }
        },
        detectRetina: true
      }"
    />
    <div>
      <div data-aos="zoom-in"></div>
      <div>
        <b-button variant="light" @click="show = !show">關於我<font-awesome-icon class="ml-2 about-icon" :icon="['fas', 'child']" /></b-button>
      </div>
      <transition name="top-left">
        <b-card v-if="show">
        <p>我想轉職成為前端工程師，是因為我第一次接觸到程式是在幫公司用 GoDaddy 建立官網，在架設網站的過程中，發現網站設計會影響使用者與公司的互動，良好的網站規劃可以提供使用者好的體驗，也能降低公司客服的工作量，自己越做越有心得後，先在 Udemy 上購買程式課程學習，後來希望轉職成為前端工程師，所以加入泰山職訓局，得到系統化的訓練，往下看看我的作品吧。</p>
        </b-card>
      </transition>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
