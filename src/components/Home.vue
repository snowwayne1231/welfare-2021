<template>
  <div class="home bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>王國公告</span>
          </div>
          <div class="md-subhead">
            <span>bulletin of the kingdom</span>
          </div>
          <div class="note"></div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div class="list">
          <md-list :md-expand-single="expandSingle">
            <md-list-item md-expand>
              <span class="material-icons mr-6-px"> local_fire_department </span
              ><span class="md-list-item-text"
                >2021-02-10 【2021 Game of REVOVISION 年度活動時間表】</span
              >
              <md-list slot="md-expand">
                <div>
                  <md-table class="news-table">
                    <md-table-row>
                      <md-table-head style="width: 25%">Season 1</md-table-head>
                      <md-table-head>S1 Events</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>02月 (26日 週五)</md-table-cell>
                      <md-table-cell>元宵賞燈選人才</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>03月 (整月)</md-table-cell>
                      <md-table-cell>睿訊之國的闖關者</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>04月 (週六)</md-table-cell>
                      <md-table-cell>城市尋寶</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-head>Season 2</md-table-head>
                      <md-table-head>S2 Events</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>05月 (07日 週五)</md-table-cell>
                      <md-table-cell>讓媽媽看見你</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>05月 (整月)</md-table-cell>
                      <md-table-cell>趣味運動月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>06月 (11日 週五)</md-table-cell>
                      <md-table-cell>舌尖上的屈原</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>07月 (週六)</md-table-cell>
                      <md-table-cell>逆流而上 向陽而生 </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-head>Season 3</md-table-head>
                      <md-table-head>S3 Events</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>08月 (06日 週五)</md-table-cell>
                      <md-table-cell>爸爸在找你</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>09月 (整月)</md-table-cell>
                      <md-table-cell>至尊桌遊月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>10月 (1日 週五)</md-table-cell>
                      <md-table-cell>全明星運動會</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>11月 (整月)</md-table-cell>
                      <md-table-cell>統神電競月</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>12月 (8日 週六)</md-table-cell>
                      <md-table-cell>溫泉之旅</md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px">
                local_fire_department
              </span>
              <span class="md-list-item-text"
                >2021-02-22 【2020 REVOVISION 年度 Team Building 活動票選 MVP人員】</span
              >

              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">2020 Team Building MVP</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>Department</md-table-head>
                    <md-table-head>Name</md-table-head>
                    <md-table-head>Name(EN)</md-table-head>
                  </md-table-row>
                  <md-table-row v-for="(v, idx) in mvp2020" :key="idx">
                    <md-table-cell>{{ v[0] }}</md-table-cell>
                    <md-table-cell>{{ v[2] }}</md-table-cell>
                    <md-table-cell>{{ v[3] }}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px">
                local_fire_department
              </span>
              <span class="md-list-item-text"
                >2021-02-24 【2021 Game of REVOVISION 各家族族長】</span
              >

              <md-list slot="md-expand">
                <img src="/static/imgs/news_2021022401.png" alt="Skyscraper">
              </md-list>
            </md-list-item>
          </md-list>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      expandSingle: true,
      mvp2020: [
        ['值班客服一組', 3, '鄒宜君', 'Candy Tsou'],
        ['值班客服一組', 6, '吳婉寧', 'Linda Wu'],
        ['值班客服一組', 4, '陳孟伶', 'Lynn Chen'],
        ['值班客服一組', 2, '許雅玲', 'Rita Hsu'],
        ['值班客服一組', 2, '劉祥軒', 'Upton Liu'],
        ['值班客服一組', 3, '楊馥華', 'Vivian Yang'],
        ['值班客服三組', 1, '林宛諭', 'Alison Lin'],
        ['值班客服三組', 5, '余采疄', 'Cailin Yu'],
        ['值班客服三組', 3, '高薇雯', 'Evelyn Kao'],
        ['值班客服三組', 1, '朱書賢', 'Kevin Chu'],
        ['值班客服二組', 4, '施佩儀', 'Bella Shih'],
        ['值班客服二組', 2, '譚奇勝', 'Jacob Tan'],
        ['值班客服二組', 4, '楊嘉進', 'Jeffrey Yang'],
        ['值班客服二組', 4, '謝蕓楨', 'Jenny Hsieh'],
        ['值班客服二組', 4, '陳孟成', 'Roy Chen'],
        ['值班客服二組', 1, '郭誠馥', 'Steven Kuo'],
        ['值班技術一組', 2, '張士駿', 'Grey Chang'],
        ['值班技術一組', 5, '許玉暉', 'Henry Hsu'],
        ['值班技術一組', 3, '全士芃', 'Peter Chuang'],
        ['值班技術一組', 6, '黃海威', 'Turtle Huang'],
        ['值班技術三組', 3, '蔡偉豪', 'Andy Tsai'],
        ['值班技術三組', 4, '李承哲', 'Fred Lee'],
        ['值班技術三組', 3, '邱柏洋', 'Quake Chiu'],
        ['值班技術三組', 1, '李修鳳', 'Sharon Lee'],
        ['值班技術二組', 5, '俞安', 'Andy Yu'],
        ['值班技術二組', 1, '駱文傑', 'Jack Lo'],
        ['值班技術二組', 3, '宋長洲', 'Ryan Sung'],
        ['值班技術二組', 1, '許嘉維', 'Vic Hsu'],
        ['值班技術四組', 1, '何俊達', 'Dada Ho'],
        ['值班技術四組', 5, '王彥翔', 'David Wang'],
        ['值班技術四組', 5, '曾若慈', 'Helen Tseng'],
        ['值班技術四組', 3, '楊深有', 'Kevin Yang'],
        ['值班技術四組', 4, '李家維', 'Vic Lee'],
        ['值班技術四組', 1, '謝智宇', 'White Hsieh'],
        ['架構發展事業部', 4, '蘇穎珊', 'Susan Su'],
        ['產品服務處', 6, '趙御尊', 'Chester Chao'],
        ['產品服務處', 1, '楊劭儀', 'Hako Yang'],
        ['產品服務處', 5, '蔡浩緯', 'Jason Tsai'],
        ['產品服務處', 6, '高意修', 'Tommy Kao'],
        ['產品服務處', 2, '王彥穎', 'Yetta Wang'],
        ['系統管理組', 6, '林永鋒', 'Dennis Lin'],
        ['聊天管理組', 3, '黃瑋顥', 'Howard Huang'],
        ['聊天管理組', 5, '方科登', 'Jack Fun'],
        ['聊天管理組', 4, '焦小紅', 'Jessie Chiao'],
        ['資料庫管理組', 2, '徐銘鴻', 'Leo Hsu'],
        ['運維中心', 5, '楊伯麟', 'Luke Yang'],
        ['運維中心', 1, '侯統揚', 'Mickey Hou'],
        ['運維中心', 2, '丁于希', 'Yusi Ting'],
        ['開發組', 2, '蔡玥箮', 'Ariel Tsai'],
        ['開發組', 1, '程晉鴻', 'Castle Cheng'],
        ['風險管理處', 3, '吳雅雯', 'Lucy Wu'],
        ['風險管理處', 4, '陳炫佳', 'Steve Chen'],
        ['風險管理處', 2, '張振華', 'Walter Chang']
      ]
    }
  },
  mounted() {
    // console.log(this);
    // this.sendMessage();
  },
  // computed: {
  //   ...mapState(['user'])
  // },
  methods: {
    sendMessage(evt) {
      // this.$store.dispatch('wsEmitMessage', {act: 123, payload: {}});
    }
  }
}
</script>