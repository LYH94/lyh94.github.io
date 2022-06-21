<template>
  <div id="experience" class="parallax">
    <b-container class="pb-5 pb-lg-6">
      <div class="title-box text-white">
        <h2 class="title text-lg-8xl font-weight-bold">EXPERIENCE</h2>
        <h3>工作經歷</h3>
      </div>
      <b-card no-body class="mb-3 experience-card" v-for="work in experiences" :key="work._id" :data-aos="work.dataAos" data-aos-easing="ease-out-cubic" :data-aos-duration="work.aosDuration">
        <b-row no-gutters>
          <b-col md="3" class="bg-pearl">
            <b-card-body>
              <h4 v-for="text in work.time" :key="text.id">{{ text }}
              </h4>
            </b-card-body>
          </b-col>
          <b-col md="9">
            <b-card-body :title="work.company">
              <b-card-text>
                <ul>
                  <li v-for="duties in work.duty" :key="duties._id">{{ duties }}</li>
                </ul>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        {
          num: '1',
          time: ['2019/05 ~ 2020/06'],
          company: '正啟貿易股份有限公司 / 特別助理',
          duty: ['負責公司 FB. IG 的社群，制定行銷方案提升產品 Syncfo 咖啡檢測儀、ICMC 國際咖啡大師賽的曝光度。', '經營公司官網， Shopify 電商平台，負責貿易進出口訂單管理，隨時優化客戶服務流程。', '與海外代理商書信往來，負責產品推廣，及客戶售後服務，協助準備公司自辦或協辦的大型活動，包含參加國內外展覽。', '2019 WOC 柏林參展時，負責的咖啡檢測儀獲得最佳新產品的獎項，成功提升公司產品的曝光度，展會後將銷售提升 2 倍。'],
          dataAos: ['fade-up'],
          aosDuration: '800'
        },
        {
          num: '2',
          time: ['2017/06 ~ 2018/08'],
          company: 'OH! Study 教育顧問中心 / 留遊學執行顧問',
          duty: ['負責海外學校美、加、英、紐、澳的學校申請、入學文件、處理簽證、住宿、接機、行前說明會、一般會計、行政事務、學生出國後的聯繫、協助解決問題等事項。', '支援公司的教育展及相關活動、參展、校園活動及說明會。'],
          dataAos: ['fade-up'],
          aosDuration: '900'
        },
        {
          num: '3',
          time: ['2016/06 ~ 2016/11', '2015/06 ~ 2015/10'],
          company: '美國黃石國家公園 / 餐飲服務生 / 飯店工作人員',
          duty: ['就學期間爭取到的海外企業實習機會', '負責餐飲部門工作，提供客人滿意的服務及團隊合作', '隨時提供專業的標準服務'],
          dataAos: ['fade-up'],
          aosDuration: '1000'
        }
      ]
    }
  }
}
</script>
