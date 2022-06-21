<template>
  <div id="skill" class="relative bg-warning">
    <b-container class="pb-3 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl font-weight-bold">SKILL</h2>
        <h3>技能</h3>
      </div>
      <div class="overflow-hidden">
        <b-row class="skill-row">
          <b-col class="mb-2" cols="6" md="3" v-for="skill in skills" :key="skill._id">
            <b-card class="h-100 skill-card"
              :data-aos="skill.dataAos" data-aos-easing="ease-out-cubic" data-aos-duration="600"
            >
              <b-card-title >
                <span class="ribbon" :class="skill.class">
                  <font-awesome-icon :icon="skill.icon"/>
                </span>
                {{ skill.title }}
              </b-card-title>
              <b-card-text>
                <ul class="list-square pl-3">
                  <li class="hover-blue mb-1 mb-lg-2" v-for="t in skill.text" :key="t._id">{{ t }}</li>
                </ul>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {
          icon: ['fab', 'css3-alt'],
          title: '前端開發',
          text: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Vue.js'],
          dataAos: ['fade-right'],
          class: 'ribbon1'
        },
        {
          icon: ['fas', 'laptop-code'],
          title: '後端技術',
          text: ['Node.js', 'MongoDB'],
          dataAos: ['fade-left'],
          class: 'ribbon2'
        },
        {
          icon: ['fas', 'pen-fancy'],
          title: '視覺設計',
          text: ['Photoshop', 'Illustrator', 'Figma', 'UI / UX'],
          dataAos: ['fade-right'],
          class: 'ribbon3'
        },
        {
          icon: ['fas', 'language'],
          title: '語言能力',
          text: ['英文 TOEIC 820', '韓文 TOPIK 5級'],
          dataAos: ['fade-left'],
          class: 'ribbon4'
        }
      ]
    }
  }
}
</script>
