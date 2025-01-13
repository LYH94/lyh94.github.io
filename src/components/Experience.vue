<template>
  <div id="experience" class="parallax">
    <div class="container pb-5 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl fw-bold">EXPERIENCE</h2>
        <h3></h3>
      </div>
      
      <div class="card mb-3 experience-card"
        v-for="work in experiences"
        :key="work.id"
        :data-aos="work.dataAos"
        data-aos-easing="ease-out-cubic"
        :data-aos-duration="work.aosDuration">
        <div class="row g-0">
          <div class="col-md-3 bg-pearl">
            <div class="card-body">
              <h4 v-for="timeKey in work.timeKeys" :key="timeKey">
                {{ t(timeKey) }}
              </h4>
            </div>
          </div>
          
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">{{ t(work.companyKey) }}</h5>
              <div class="card-text">
                <ul>
                  <li v-for="dutyKey in work.dutyKeys" :key="dutyKey">
                    {{ t(dutyKey) }}
                  </li>
                </ul>
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

const { t } = useI18n()

const experiences = ref([
  {
    id: '1',
    timeKeys: ['experience.riversoft.time'],
    companyKey: 'experience.riversoft.company',
    dutyKeys: [
      'experience.riversoft.duty.0',
      'experience.riversoft.duty.1',
      'experience.riversoft.duty.2',
      'experience.riversoft.duty.3'
    ],
    dataAos: 'fade-up',
    aosDuration: '700'
  },
  {
    id: '2',
    timeKeys: ['experience.globalEyes.time'],
    companyKey: 'experience.globalEyes.company',
    dutyKeys: [
      'experience.globalEyes.duty.0',
      'experience.globalEyes.duty.1',
      'experience.globalEyes.duty.2',
      'experience.globalEyes.duty.3'
    ],
    dataAos: 'fade-up',
    aosDuration: '800'
  },
  {
    id: '3',
    timeKeys: ['experience.ohStudy.time'],
    companyKey: 'experience.ohStudy.company',
    dutyKeys: [
      'experience.ohStudy.duty.0',
      'experience.ohStudy.duty.1'
    ],
    dataAos: 'fade-up',
    aosDuration: '900'
  },
  {
    id: '4',
    timeKeys: [
      'experience.yellowstone.time.0',
      'experience.yellowstone.time.1'
    ],
    companyKey: 'experience.yellowstone.company',
    dutyKeys: [
      'experience.yellowstone.duty.0',
      'experience.yellowstone.duty.1'
    ],
    dataAos: 'fade-up',
    aosDuration: '1000'
  }
])
</script>