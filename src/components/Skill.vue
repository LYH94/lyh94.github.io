<template>
  <div id="skill" class="position-relative bg-warning">
    <div class="container pb-3 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title display-1 fw-bold">SKILL</h2>
        <h3></h3>
      </div>
      <div class="overflow-hidden">
        <div class="row skill-row">
          <div class="col-6 col-md-3 mb-2" 
              v-for="skill in skills" 
              :key="skill._id">
            <div class="card h-100 skill-card"
                :data-aos="skill.dataAos" 
                data-aos-easing="ease-out-cubic" 
                data-aos-duration="600">
              <div class="card-body">
                <h5 class="card-title">
                  <span class="ribbon" :class="skill.class">
                    <font-awesome-icon :icon="skill.icon"/>
                  </span>
                  {{ t(skill.titleKey) }}
                </h5>
                <div class="card-text">
                  <ul class="list-square ps-3">
                    <li class="hover-blue mb-1 mb-lg-2" 
                        v-for="(t, index) in skill.text" 
                        :key="index">
                      {{ t }}
                    </li>
                  </ul>
                </div>
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
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faPenFancy, faLanguage } from '@fortawesome/free-solid-svg-icons'

const { t } = useI18n()

library.add(faCss3Alt, faLaptopCode, faPenFancy, faLanguage)

const skills = ref([
  {
    icon: ['fab', 'css3-alt'],
    titleKey: 'skills.frontend',
    text: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Vue.js'],
    dataAos: ['fade-right'],
    class: 'ribbon1'
  },
  {
    icon: ['fas', 'laptop-code'],
    titleKey: 'skills.backend',
    text: ['C', 'C++', 'C#', 'Node.js', 'MongoDB'],
    dataAos: ['fade-left'],
    class: 'ribbon2'
  },
  {
    icon: ['fas', 'pen-fancy'],
    titleKey: 'skills.design',
    text: ['Photoshop', 'Illustrator', 'Figma', 'UI / UX'],
    dataAos: ['fade-right'],
    class: 'ribbon3'
  },
  {
    icon: ['fas', 'language'],
    titleKey: 'skills.language',
    text: ['English', 'Chinese', 'Korean'],
    dataAos: ['fade-left'],
    class: 'ribbon4'
  }
])
</script>