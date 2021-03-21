<template>
<b-container fluid id="education">
  <b-container>
    <h1 class="project-name">學歷</h1>
    <div id="timeline">
    <div class="timeline-item">
      <div class="timeline-icon">
        <font-awesome-icon class="icon" :icon="['fas', 'graduation-cap']"/>
      </div>
      <div class="timeline-content">
        <h4>泰山職業訓練場, 前端網頁開發技術班</h4>
        <span>2012/09 ~ 2016/06</span>
        <p>
        工作了一段時間之後，發現我所在的產業，在未來很容易被科技取代，想要趁年輕轉換跑道，想尋找不容易被 AI 替代的工作，研究了一段時間之後發現自己對於軟體工程師十分有興趣。所以為了實現當工程師的夢想，除了先上網自學基本知識，我選擇職訓課程幫助我入門，在職訓局學到了前端工程師的相關技能及知識，在職訓中也考取了網頁設計丙級，並且實際應用了所學的技術做出了多種作品。
        </p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-icon">
        <font-awesome-icon class="icon" :icon="['fas', 'graduation-cap']"/>
      </div>
      <div class="timeline-content right">
        <h4>世新大學, 觀光系旅遊暨休閒事業管理</h4>
        <span>2012/09 ~ 2016/06</span>
        <p>
          就學期間參與系上的世新觀光產學旅行社，從顧客諮詢、票務行政、產品研發與銷售，行銷策略策劃執行一手包辦。藉由學校提供的暑期企業實習、海外參訪等機會，大幅提升我的國際視野。
        </p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-icon">
          <font-awesome-icon class="icon" :icon="['fas', 'graduation-cap']"/>
      </div>
    <div class="timeline-content">
      <h4>韓國西江大學, 非學位課程, 韓國語</h4>
      <span>2018/08~ 2018/11</span>
      <p>
      西江大學韓國語讓我在密集訓練下提升韓語實力。
      </p>
    </div>
    </div>
    </div>
  </b-container>
</b-container>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#education {
  background: #E8E6DA;
}

// Timeline
#timeline {
  width: 100%;
  position: relative;
  padding: 0 10px;
  transition: all .4s ease;

  &:before {
    content:"";
    width: 3px;
    height: 100%;
    background:#51555f;
    left: 50%;
    top: 0;
    position: absolute;
  }

  &:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
  }

  .timeline-item {
    margin-bottom: 50px;
    position: relative;
    &:after, &:before {
      content: '';
      display: block;
      width: 100%;
      clear: both;
    }

    .timeline-icon {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      left: 50%;
      background: #51555f;
      margin-left: -23px;
      border-radius: 50%;
      .icon {
        padding: 6px;
        margin-top: 3px;
        color: #fff;
      }
    }

    .timeline-content {
      width: 45%;
      background: #fff;
      padding: 20px;
      box-shadow: 0 3px 0 rgba(0,0,0,0.1);
      border-radius: 5px;
      transition: all .5s ease;
      h4 {
        padding: 15px;
        background: #bd7070;
        color: #fff;
        margin: -20px -20px 0 -20px;
        font-weight: 500;
        border-radius: 3px 3px 0 0;
      }
      span {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
      p {
        margin-top: 10px;
      }
      &:before {
        content: '';
        position: absolute;
        left: 45%;
        top: 20px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left:7px solid #bd7070;
      }

      &.right {
        float: right;

        &:before {
          content: '';
          right: 45%;
          left: inherit;
          border-left: 0;
          border-right: 7px solid #bd7070;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #timeline {
    padding: 0px;
    width: 90%;
    &:before {
      left: 0;
    }

    .timeline-item {
      .timeline-content {
        width: 90%;
        float: right;
        &:before, &.right:before {
          left: 10%;
          margin-left: -6px;
          border-left: 0;
          border-right: 7px solid #bd7070;
        }
      }

      .timeline-icon {
        left: 0;
      }
    }
  }
}
</style>
