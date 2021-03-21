<template>
  <b-container fluid id="experience">
    <h1>工作經歷</h1>
    <b-card no-body class="overflow-hidden work-card" v-for="work in experiences" :key="work._id" :data-aos="work.dataAos" data-aos-easing="ease-out-cubic" :data-aos-duration="work.aosDuration">
      <b-row no-gutters>
        <b-col class="col-left" md="3">
          <div class="circle">{{ work.num }}</div>
          <b-card-body class="card-left">
            <h4 v-for="text in work.time" :key="text.id">{{ text }}
            </h4>
          </b-card-body>
        </b-col>
        <b-col md="9">
          <b-card-body class="card-right" :title="work.company">
            <b-card-text>
              <ul>
                <li class="work-duty" v-for="duties in work.duty" :key="duties._id">{{ duties }}</li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
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

<style lang="scss">
#experience {
  padding: 20px 30px;
  background:rgb(230, 229, 225);
}
.col-left .card-body{
  padding: 0.75rem 1.25rem 0.5rem 1.25rem;
}
.col-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.work-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: rgba(255, 255, 255, 0.3);
  background-clip: border-box;
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.work-card:hover {
  background-color: #fff;
}
.work-card:hover .card-right .card-title{
  display: inline-block;
  background: rgba(255, 193, 7, 0.6);
}

.work-duty {
  font-size: 18px;
  font-weight: 500;
}
.circle {
  width: 50px;
  height: 50px;
  background: rgba(218, 76, 29, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-weight: 500;
}
@media (min-width: 992px) {
  #experience {
    padding: 20px 90px;
  }
  .work-card:hover .circle {
    transform: scale(8);
    background: rgb(218, 76, 29, 0.3);
  }
  .work-card:hover .col-left {
    background: rgba(211, 211, 211, 0.3);
  }
  .work-card:hover .card-right .card-title{
    background: linear-gradient(180deg,rgba(255,255,255,0) 40%, rgba(255, 193, 7, 0.6) 60%);
  }
}
</style>
