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
    <div class="introduce-box">
      <div class="home-photo" data-aos="zoom-in">
      </div>
      <vue-typed-js :strings="['李育瑄', '前端工程師']" :loop="true" :backDelay="1500" :typeSpeed="150">
        <h2>我是<span class="typing"></span></h2>
      </vue-typed-js>
      <div class="mt-2 about-me">
        <b-button variant="light" @click="show = !show">關於我<font-awesome-icon class="ml-2 about-icon" :icon="['fas', 'child']" /></b-button>
      </div>
      <transition name="top-left">
        <b-card class="mt-2 introduce-card" v-if="show">
        <p class="card-text">我想轉職成為前端工程師，是因為我第一次接觸到程式是在幫公司用 GoDaddy 建立官網，在架設網站的過程中，發現網站設計會影響使用者與公司的互動，良好的網站規劃可以提供使用者好的體驗，也能降低公司客服的工作量，自己越做越有心得後，先在 Udemy 上購買程式課程學習，後來希望轉職成為前端工程師，所以加入泰山職訓局，得到系統化的訓練，往下看看我的作品吧。</p>
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

<style lang="scss">
#introduce {
  overflow: hidden;
}
#tsparticles {
  height: 100vh;
  position: relative;
}
.typed-element {
  padding-top: 1rem;
  color: rgb(255, 255, 255);
}
.introduce-box {
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.introduce-card {
  background: transparent;
  color: #ece3d9;
}

.top-left-enter-active {
  animation: top-left 1s ease reverse;
}
.top-left-leave-active {
  animation: top-left 1s ease;
}

@keyframes top-left {
  0% {
  opacity: 1;
  }
  100% {
  opacity: 0;
  transform: skew(30deg, 20deg) translate(-100%, 20%);
  border-top-right-radius: 60%;
  border-bottom-right-radius: 60%;
  }
}

.home-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: url(../assets/images/bg/photo.png) no-repeat center/cover;
  filter: drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.7));
}

.about-icon {
  font-size: 20px;
}

.about-me .btn {
  background: lighten(#F2E9DE, 3%);
  border: 1px solid darken(#F2E9DE, 4%);
  box-shadow: 0px 2px 0 darken(#F2E9DE, 5%), 2px 4px 6px darken(#F2E9DE, 2%);
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.15s linear;
}

.about-me .btn:hover {
  background: (#F2E9DE, 1.5%);
  box-shadow: 1px 1px 2px rgba(#fff, .2);
  transition: all 0.25s linear;
}

@media (min-width: 992px) {
  .introduce-box {
    width: 50%;
  }
}
</style>
