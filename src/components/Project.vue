<template>
  <div id="project" class="bg-green">
    <div class="container pb-3 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl fw-bold">PROJECT</h2>
        <h3></h3>
      </div>
      <div class="row g-0 align-items-center mb-lg-4">
        <div class="col-6 col-md-3 mb-3 project-box">
          <a href="https://zhida.clicugo.com/C/tw/home">
            <div class="project-list">
              <div class="project-list-img-box">
                <img 
                  src="https://img.freepik.com/free-vector/happy-tourists-choosing-hotel-booking-room-online-flat-illustration_74855-10811.jpg?t=st=1653031087~exp=1653031687~hmac=921aa588a28d290df713568c88271fd0b41b69cb77da95c069f5b362626d7345&w=1800" 
                  class="project-list-img" 
                  :alt="t('project.accommodation.title')"
                >
                <div class="img-overlay">
                  <font-awesome-icon :icon="['fas', 'link']"/>
                </div>
              </div>
              <div class="text-white text-center mt-2">{{ t('project.accommodation.title') }}</div>
            </div>
          </a>
        </div>

        <div class="col-6 col-md-3 mb-3 project-box">
          <a href="https://demo-2.clicugo.com/C/tw/home">
            <div class="project-list">
              <div class="project-list-img-box">
                <img 
                  src="https://img.freepik.com/free-vector/hand-drawn-suitcase-background_23-2148045433.jpg?t=st=1653030984~exp=1653031584~hmac=5e3db39525ec32c97e7233c61c0913109d9746c9cf71edfa7d285649b28aeef3&w=1060" 
                  class="project-list-img" 
                  :alt="t('project.travelERP.title')"
                >
                <div class="img-overlay">
                  <font-awesome-icon :icon="['fas', 'link']"/>
                </div>
                <div class="project-list-highlight">
                  {{ t('project.travelERP.highlight') }}
                </div>
              </div>
              <div class="text-white text-center mt-2">{{ t('project.travelERP.title') }}</div>
            </div>
          </a>
        </div>

        <div class="col-12 col-md-3 mb-3 project-box">
          <a href="https://cdn.clicugo.com/lee/faq/#/">
            <div class="project-list">
              <div class="project-list-img-box">
                <img 
                  src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?t=st=1653030498~exp=1653031098~hmac=c91c60520c287487447fc88fc3b2c520ae9b33b8d5bf0a07801eadda198d4a96&w=1060" 
                  class="project-list-img" 
                  :alt="t('project.faq.title')"
                >
                <div class="img-overlay">
                  <font-awesome-icon :icon="['fas', 'link']"/>
                </div>
              </div>
              <div class="text-white text-center mt-2">{{ t('project.faq.title') }}</div>
            </div>
          </a>
        </div>

        <div class="col-12 col-md-3 mb-3 project-box">
          <div class="project-text">
            {{ t('project.travelERP.description') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>