<template>
  <div id="experience" class="parallax">
    <div class="container pb-5 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl fw-bold">EXPERIENCE</h2>
        <h3></h3>
      </div>
      
      <div class="card mb-3 experience-card" 
          v-for="work in experiences" 
          :key="work._id"
          :data-aos="work.dataAos"
          data-aos-easing="ease-out-cubic"
          :data-aos-duration="work.aosDuration">
        <div class="row g-0">
          <div class="col-md-3 bg-pearl">
            <div class="card-body">
              <h4 v-for="text in work.time" :key="text">{{ text }}</h4>
            </div>
          </div>
          
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">{{ work.company }}</h5>
              <div class="card-text">
                <ul>
                  <li v-for="duties in work.duty" :key="duties">{{ duties }}</li>
                </ul>
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
  data () {
    return {
      experiences: [
        {
          num: '1',
          time: ['Apr 2021 - Jul 2023'],
          company: 'Riversoft Inc. / Frontend Developer',
          duty: ['Developed user-friendly web pages using Vue.js, focusing on intuitive navigation and optimizing for accessibility.', 'Collaborated with clients to define and implement the overall visual design and structure of websites.', 'Gathered client feedback and worked on adjustments to create customized solutions that fit their requirements.', 'Ensured the technical feasibility of UI/UX designs and optimized applications for maximum speed and scalability.']
        },
        {
          num: '2',
          time: ['May 2019 - Jun 2020'],
          company: 'Global Eyes Corporation / Product Marketing Manager',
          duty: ['Managed the product development and strategic direction for the Syncfo Coffee Analyzer, driving innovation and market relevance.', 'Established a Shopify website for Syncfo, leading to a remarkable 40% increase in sales.', 'Actively involved in managing and optimizing social media channels for four brands—Syncfo, Atilla, ICMC, and Cafe Bank—enhancing brand visibility and engagement.', 'During the 2019 WOC Berlin exhibition, successfully increased product sales by 2x post-exhibition by showcasing award-winning products.'],
          dataAos: ['fade-up'],
          aosDuration: '800'
        },
        {
          num: '3',
          time: ['2017/06 ~ 2018/08'],
          company: 'OH! Study Education Consulting Center / Study Abroad Consultant',
          duty: ['Assisted students with school applications, visa processing, accommodation, and pre-departure guidance for destinations like the US, Canada, UK, New Zealand, and Australia.', 'Supported educational fairs, campus activities, and presentations.'],
          dataAos: ['fade-up'],
          aosDuration: '900'
        },
        {
          num: '4',
          time: ['2016/06 ~ 2016/11', '2015/06 ~ 2015/10'],
          company: 'Yellowston National park / Xanterra Travel Collection / Summer Internship',
          duty: ['Secured an overseas internship during university.', 'Maintained professional standards in service quality and teamwork.'],
          dataAos: ['fade-up'],
          aosDuration: '1000'
        }
      ]
    }
  }
})
</script>
