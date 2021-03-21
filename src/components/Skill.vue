<template>
  <b-container fluid id="skill">
    <b-row class="skill-row py-3">
      <b-col class="skill-col" cols="6" md="3" v-for="skill in skills" :key="skill._id">
        <b-card
          class="skill-card"
          :data-aos="skill.dataAos" data-aos-easing="ease-out-cubic" data-aos-duration="600"
        >
          <div class="icon-center">
            <div class="icon-box">
              <font-awesome-icon class="skill-icon" :icon="skill.icon"/>
            </div>
          </div>
          <b-card-title class="mt-3 skill-title">{{ skill.title }}</b-card-title>
          <b-card-text class="flex-fill">
            <p class="m-0" v-for="t in skill.text" :key="t._id">{{ t }}</p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
          dataAos: ['fade-right']
        },
        {
          icon: ['fas', 'laptop-code'],
          title: '後端技術',
          text: ['Node.js', 'MongoDB'],
          dataAos: ['fade-left']
        },
        {
          icon: ['fas', 'pen-fancy'],
          title: '視覺設計',
          text: ['Photoshop', 'Illustrator', 'Figma', 'UI / UX'],
          dataAos: ['fade-right']
        },
        {
          icon: ['fas', 'language'],
          title: '語言能力',
          text: ['英文 TOEIC 820', '韓文 TOPIK 5級'],
          dataAos: ['fade-left']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#skill {
  background: $mainColor;
  overflow: hidden;
}
.intro {
  background: rgb(0, 0, 0);
  .card {
    background: rgb(0, 0, 0);
    color: #fff;
  }
}
.skill-card {
  height: 100%;
  border-radius: 0;
  background: transparent;
  color: #fff;
  border: none;
}
.skill-card .card-body {
  text-align: center;
}
.skill-card:hover {
  transition: all 0.1s;
  transform: scale(0.95, 0.95);
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 2px 5px 10px 1px rgba(0,0,0,0.25), -2px -5px 10px 1px rgba(0,0,0,0.22);
}
.skill-card:hover .icon-box{
  background: #22223b;
  box-shadow: 0 0 0px 8px rgb(206, 206, 206, 0.5);
}
.skill-card:hover svg {
  color: white;
  transition: all 0.65s;
  transform: rotateY(360deg);
}
.skill-title {
  color: #ffffff;
  font-size: 700;
}
.icon-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-box {
  width: 100px;
  height: 100px;
  background: rgb(245, 203, 34);
  box-shadow: 0 0 0px 8px rgb(245, 203, 34, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}
.skill-icon {
  font-size: 60px;
}

@media (max-width: 500px) {
  .skill-col {
    padding: 0;
  }
}

@media (min-width: 576px) {
  .skill-card {
    border-radius: 40px;
  }
  .skill-row {
    margin-right: 120px;
    margin-left: 120px;
  }
}
</style>
