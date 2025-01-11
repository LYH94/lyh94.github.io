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
              :key="education.key"
              class="col-12">
            <div class="card bg-light border-0 shadow-sm education-card hover-card">
              <div class="card-body">
                <div class="d-flex justify-content-between flex-wrap mb-3">
                  <h5 class="card-title fw-bold mb-0">{{ education.title }}</h5>
                  <span class="badge bg-primary">{{ education.date }}</span>
                </div>
                <div class="px-2">
                  <ul class="list-disc ps-4">
                    <li v-for="(highlight, index) in education.highlights" 
                        :key="index" 
                        class="mb-2 text-dark">
                      {{ highlight }}
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

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      educations: [
        {
          title: 'Conestoga College, Advanced Diploma, Software Engineering Technology',
          date: 'Sep 2023 ~ Present',
          highlights: [
            'Advanced Diploma program focusing on software development',
            'Specializing in web development, databases, and emerging technologies'
          ]
        },
        {
          title: 'National Taishan Vocational Training Center, Frontend Web Development',
          date: 'Aug 2020 – Feb 2021',
          highlights: [
            'Professional certification in Web Development',
            'Specialized training in modern frontend technologies'
          ]
        },
        {
          title: 'Shih Hsin University, Department of Tourism and Leisure Management',
          date: 'Sep 2012 – Jun 2016',
          highlights: [
            'Bachelor of Science in Tourism and Leisure Management',
            'Specialized in tourism and hospitality management'
          ]},
        {
          title: 'Sogang University, Korean Language Program',
          date: 'Aug 2018 – Nov 2018',
          highlights: [
            'Completed a 3-month intensive Korean language course, significantly improving my proficiency.'
          ]
        }
      ]
    }
  }
})
</script>
