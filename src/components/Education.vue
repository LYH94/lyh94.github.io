<template>
  <div id="education" class="bg-gray">
    <div class="container pb-3 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl fw-bold">EDUCATION</h2>
        <h3></h3>
      </div>
      
      <div class="education-box">
        <div class="row g-4">
          <div v-for="education in educations" 
              :key="education.id"
              class="col-12">
            <div class="card bg-light border-0 shadow-sm education-card hover-card">
              <div class="card-body">
                <div class="d-flex justify-content-between flex-wrap mb-3">
                  <h5 class="card-title fw-bold mb-0">{{ t(education.titleKey) }}</h5>
                  <span class="badge bg-primary">{{ t(education.dateKey) }}</span>
                </div>
                <div class="px-2">
                  <ul class="list-disc ps-4">
                    <li v-for="highlightKey in education.highlightKeys" 
                        :key="highlightKey" 
                        class="mb-2 text-dark">
                      {{ t(highlightKey) }}
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

const { t } = useI18n()

const educations = ref([
  {
    id: 'conestoga',
    titleKey: 'education.conestoga.title',
    dateKey: 'education.conestoga.date',
    highlightKeys: [
      'education.conestoga.highlights.0',
      'education.conestoga.highlights.1'
    ]
  },
  {
    id: 'taishan',
    titleKey: 'education.taishan.title',
    dateKey: 'education.taishan.date',
    highlightKeys: [
      'education.taishan.highlights.0',
      'education.taishan.highlights.1'
    ]
  },
  {
    id: 'shu',
    titleKey: 'education.shu.title',
    dateKey: 'education.shu.date',
    highlightKeys: [
      'education.shu.highlights.0',
      'education.shu.highlights.1'
    ]
  },
  {
    id: 'sogang',
    titleKey: 'education.sogang.title',
    dateKey: 'education.sogang.date',
    highlightKeys: [
      'education.sogang.highlights.0'
    ]
  }
])
</script>