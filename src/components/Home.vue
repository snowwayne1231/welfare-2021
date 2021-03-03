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
              <span class="material-icons mr-6-px">vertical_align_top</span>
              <span class="md-list-item-text">2021-03-03 【 遊戲結局與積分細則 】</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">1. 遊戲結局</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">結局</md-table-head>
                    <md-table-head style="width: 25%">條件</md-table-head>
                    <md-table-head>結果</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>夜王襲來</md-table-cell>
                    <md-table-cell></md-table-cell>
                    <md-table-cell>1. 八家族中 團體積分+獎牌積分+家族成員RV值總和 進行排名，名次於1,3,6的家族可以免除表演義務</br>2. 獲得獎牌數量最高的家族可以免除表演義務</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>夜王被封印</md-table-cell>
                    <md-table-cell>將10面獎牌放置到絕境長城</md-table-cell>
                    <md-table-cell>1. 八大家族共同勝利，所有人暫時先免除表演之義務</br>2. 由於族長們出色的表現與領導能力，尾牙由福委Dada, Snow, Jack各自選7人(強制)上台表演</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  原先全睿訊管理職皆有義務進行尾牙表演，但若經由一整年同仁的努力，以及族長們的良好領導</br>
                  能達成封印夜王的挑戰，代表族長門的團體建立能力十分優秀，那福委活動的宗旨就已經達成</br>
                  最後則會由福委上台表演感謝各位一年的付出</br></br>
                  PS: 被福委選上一起表演的同仁請開心面對，這是一個光榮的時刻，共同歡慶睿訊人的優秀
                </md-content>
                </br></br>

                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">2. 積分規則</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">名稱</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>團隊積分</md-table-cell>
                    <md-table-cell>每一家族都有一個象徵團體的積分，經由活動的過程與家族成員的參與率來提升</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎牌積分</md-table-cell>
                    <md-table-cell>共有十面獎牌各自有不同獲得條件與積分加成</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>個人RV值</md-table-cell>
                    <md-table-cell>每位睿訊人都有一個，經由參與團體活動的熱忱度&表現來提升</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  如何獲得?</br>
                  <ul>(個人RV)
                    <li>A. 每場遊戲活動每家族內票選一位MVP選手+3</li>
                    <li>B. 每個遊戲門檻加分+2/+3/+4 ； 未達門檻+1參加獎勵</li>
                    <li>C. MVP只能從有達成遊戲門檻的人中票選</li>
                  </ul></br>
                  <ul>(團體積分)
                    <li>A. 家族成員每一人參加遊戲活動 +3</li>
                    <li>B. 每一次遊戲活動會依照名次 + [30 / 24 / 18 / 12 / 6 / 6 / 6 / 6] 分  (第三季*2)</li>
                    <li>C. (特殊加成) 值班人員一整年有一次機會，在因值班不能參與活動(戶外)時為團隊 +5分</li>
                    <li>D. (特殊加成) 家族成員每季第一次參與活動(戶外)額外 +2分</li>
                  </ul></br>
                  <ul>(獎牌積分)
                    <li>A. 有十張獎牌各自擁有固定的隱藏規則</li>
                    <li>B. 每面獎牌都有其相應的積分   PS: 同時獲得"工作不養閒人"與"團隊不養懶人"的獎牌時額外+100分</li>
                    <li>
                      <md-table class="news-table">
                        <md-table-row>
                          <md-table-head style="width: 25%">獎牌名稱</md-table-head>
                          <md-table-head>積分</md-table-head>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>獨孤求敗</md-table-cell>
                          <md-table-cell>10</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>工作不養閒人</md-table-cell>
                          <md-table-cell>20</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>團隊不養懶人</md-table-cell>
                          <md-table-cell>30</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>寸草春暉</md-table-cell>
                          <md-table-cell>40</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>情投意合</md-table-cell>
                          <md-table-cell>50</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>九淺一深</md-table-cell>
                          <md-table-cell>60</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>如夢似幻</md-table-cell>
                          <md-table-cell>70</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>含辛茹苦</md-table-cell>
                          <md-table-cell>80</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>阿姨我不想努力了</md-table-cell>
                          <md-table-cell>90</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>魚知水恩乃幸福之源</md-table-cell>
                          <md-table-cell>100</md-table-cell>
                        </md-table-row>
                      </md-table>
                    </li>
                  </ul>
                </md-content>
                </br></br>

                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">3. 獎勵與懲罰</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">類型</md-table-head>
                    <md-table-head style="width: 15%">區間</md-table-head>
                    <md-table-head>參考績分</md-table-head>
                    <md-table-head>獎懲辦法</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎勵</md-table-cell>
                    <md-table-cell>季度</md-table-cell>
                    <md-table-cell>團體積分 + 該次戶外活動的參與分</md-table-cell>
                    <md-table-cell>在該季外出的活動中當前排名前兩名的家族會享受更佳的活動體驗</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎勵</md-table-cell>
                    <md-table-cell>年度</md-table-cell>
                    <md-table-cell>團體積分 + 獎牌積分 + 個人RV值總和</md-table-cell>
                    <md-table-cell>在整年結算時排名第一的家族，全家族成員將獲得豪華獎品</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>懲罰</md-table-cell>
                    <md-table-cell>季度</md-table-cell>
                    <md-table-cell>團體積分 + 該次戶外活動的參與分</md-table-cell>
                    <md-table-cell>在該季外出的活動中當前排名最後兩名的家族可能會有不好的活動體驗</md-table-cell>
                  </md-table-row>
                </md-table>

              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px">vertical_align_top</span>
              <span class="md-list-item-text">2021-03-02 【 家族組成與選秀辦法 】</span>
              <md-list slot="md-expand">
                
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">1. 家族組成 (舉例)</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">家族</md-table-head>
                    <md-table-cell>家族B</md-table-cell>
                    <md-table-cell>家族C</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>族長</md-table-head>
                    <md-table-cell>1人</md-table-cell>
                    <md-table-cell>龜龜</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>封臣 (家族成員)</md-table-head>
                    <md-table-cell>3+人</md-table-cell>
                    <md-table-cell>海獅, 五臉</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>一般家人 (家族成員)</md-table-head>
                    <md-table-cell>10+人</md-table-cell>
                    <md-table-cell>寶寶, 貝貝, 寶貝</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>國民</md-table-head>
                    <md-table-cell>0-7人</md-table-cell>
                    <md-table-cell>國民1, 國民2, 國民3, ...</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  每個家族都有4種身份族長、封臣、家人、國民</br>
                  1. 族長與封臣: 需共同承擔遊戲勝負的後果 (尾牙表演)</br>
                  2. 家人: 幫助族長一同努力，但沒有額外負擔</br>
                  3. 國民: 暫時加入幫助族長參與遊戲，本身的數值不會加權到家族上，下一次選秀來臨時，可以回歸"自由民"的身分
                </md-content>
                </br>

                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">2. 選秀規則</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head></md-table-head>
                    <md-table-head colspan="2">選秀人數</md-table-head>
                    <md-table-head>選秀方式</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>第一次選秀</md-table-head>
                    <md-table-cell>家族選7名家族成員</br>(第一位加入為封臣)</md-table-cell>
                    <md-table-cell>自由民入境成為國民6-7名</md-table-cell>
                    <md-table-cell>由組長給予願望清單，並依清單唱名，</br>如有重複爭奪的成員由輪次落後的族長獲得</br>(去年MVP不能選擇)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>第二次選秀</md-table-head>
                    <md-table-cell>家族選3-4名家族成員</br>(第一位加入為封臣)</md-table-cell>
                    <md-table-cell>自由民入境成為國民2-3名</md-table-cell>
                    <md-table-cell>由當前團體積分排名靠後的族長優先選人</br>依序選到剩去年各組前三名MVP(24人)為止</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>第三次選秀</md-table-head>
                    <md-table-cell>各家族選3名家族成員</br>(第一位加入為封臣)</md-table-cell>
                    <md-table-cell>無自由民</md-table-cell>
                    <md-table-cell>由當前團體積分排名靠後的族長優先選人</br>除福委工作人員外所有人都會加入家族</md-table-cell>
                  </md-table-row>
                  
                </md-table>
                <md-content>
                  每一次選秀的順序依序為</br>
                  1. 家族族長選擇成員</br>
                  2. 福委選擇工作人員3~5名</br>
                  3. 自由民自由選擇入境各國</br>
                  PS: 每一次的選秀活動中，第一位加入該家族的成員會自動任命為"封臣"</br></br>
                </md-content>
                <md-content>
                  『國民入境』每個選秀階段保有自由民身分的人，能夠自己選擇某家族的國境入境成為該家族"國民"</br>
                  入境規則如下:</br>
                  1. RV值較低者擁有更大的優先權，若是在該家族滿員的情況，低RV值的人選擇加入會把最高RV值的人擠出該家族</br>
                  2. 每次選擇加入後不能再更改、除非被低RV值的人擠回自由民身分</br>
                </md-content></br></br>
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">3. 選秀成本</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 25%;">團體積分為正數</md-table-head>
                    <md-table-cell>消耗積分為該招募成員當前RV值</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>團體積分為負數</md-table-head>
                    <md-table-cell>消耗積分為該招募成員當前RV值 * 2</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px">vertical_align_top</span
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
                      <md-table-cell>04月 (17日 週六)</md-table-cell>
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
                      <md-table-cell>07月 (31日 週六)</md-table-cell>
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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="md-list-item-text">2021-02-24 【2021 Game of REVOVISION 各家族族長】</span>
              <md-list slot="md-expand">
                <img src="/static/imgs/news_2021022401.png" alt="Skyscraper">
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
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
        ['聊天管理組', 6, '黃忠政', 'Sky Huang'],
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