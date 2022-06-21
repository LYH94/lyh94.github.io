<template>
<div id="education" class="bg-gray">
  <b-container class="pb-3 pb-lg-6">
    <div class="title-box text-white">
      <h2 class="title text-lg-8xl font-weight-bold">EDUCATION</h2>
      <h3>學歷</h3>
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
          title: '泰山職業訓練場, 前端網頁開發技術班',
          date: '2020/08 ~ 2021/02',
          content: '工作了一段時間之後，發現我所在的產業，在未來很容易被科技取代，想要趁年輕轉換跑道，想尋找不容易被 AI 替代的工作，研究了一段時間之後發現自己對於軟體工程師十分有興趣。所以為了實現當工程師的夢想，除了先上網自學基本知識，我選擇職訓課程幫助我入門，在職訓局學到了前端工程師的相關技能及知識，在職訓中也考取了網頁設計丙級，並且實際應用了所學的技術做出了多種作品。'
        },
        {
          title: '世新大學, 觀光系旅遊暨休閒事業管理',
          date: '2012/09 ~ 2016/06',
          content: '就學期間參與系上的世新觀光產學旅行社，從顧客諮詢、票務行政、產品研發與銷售，行銷策略策劃執行一手包辦。藉由學校提供的暑期企業實習、海外參訪等機會，大幅提升我的國際視野。'
        },
        {
          title: '韓國西江大學, 非學位課程, 韓國語',
          date: '2018/08~ 2018/11',
          content: '3個月的西江大學韓國語課程讓我在密集訓練下提升韓語實力。'
        }
      ]
    }
  }
}
</script>
