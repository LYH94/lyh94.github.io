<template>
<div id="education" class="bg-gray">
  <b-container class="pb-3 pb-lg-6">
    <div class="title-box text-white">
      <h2 class="title text-lg-8xl font-weight-bold">EDUCATION</h2>
      <h3></h3>
    </div>
    <div class="education-box">
      <div v-for="education in educations" :key="education.key">
        <div class="bg-rose-red text-white p-3">{{ education.title }} - {{ education.date }}</div>
        <div class="p-3">{{ education.content }}</div>
      </div>
    </div>
  </b-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      educations: [
        {
          title: 'Conestoga College, Advanced Diploma, Software Engineering Technology',
          date: 'Sep 2023 ~ Present',
          content: 'I am currently enrolled in the Software Engineering Technology program at Conestoga College. This comprehensive, hands-on curriculum equips me with a strong foundation in programming languages and emerging technologies, including web development, databases, business intelligence, and cybersecurity. Through this program, I am gaining expertise in designing and developing software solutions for diverse domains such as mobile applications, embedded systems, Internet of Things (IoT), simulations, and big data. With its practical approach and emphasis on industry-relevant skills, this program is preparing me for a successful career in software development and engineering.'
        },
        {
          title: 'National Taishan Vocational Training Center, Frontend Web Development',
          date: 'Aug 2020 – Feb 2021',
          content: 'After realizing my previous industry faced the risk of being replaced by advancing technology, I decided to transition to a field less susceptible to automation. Through research, I discovered my passion for software engineering. To build a solid foundation, I started with self-paced online courses and later pursued vocational training to deepen my knowledge of frontend development. During this program, I obtained a Junior Web Designer Certification and applied my skills to create various projects.'
        },
        {
          title: 'Shih Hsin University, Department of Tourism and Leisure Management',
          date: 'Sep 2012 – Jun 2016',
          content: 'During my studies, I actively participated in the university’s tourism lab, where I managed customer consultations, ticketing, administrative work, and marketing strategies. These experiences allowed me to hone my organizational skills and execute marketing plans effectively. Additionally, internships and overseas study opportunities provided by the school significantly broadened my global perspective.'
        },
        {
          title: 'Sogang University, Korean Language Program',
          date: 'Aug 2018 – Nov 2018',
          content: 'Completed a 3-month intensive Korean language course, significantly improving my proficiency.'
        }
      ]
    }
  }
}
</script>
