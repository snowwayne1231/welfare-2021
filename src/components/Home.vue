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
          <div class="note" style="width:100%;">
            <md-button class="md-icon-button history" to="/rules" title="年度賽制規範">
              <md-icon>assignment</md-icon>
            </md-button>
            <md-button class="md-icon-button history" to="/olderinfo" title="歷史公告">
              <md-icon>history</md-icon>
            </md-button>
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div class="list">
          <md-list :md-expand-single="expandSingle">


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span><span class="material-icons mr-6-px">vertical_align_top</span>
              <span class="md-list-item-text">2021-10-22 【 福委夥伴鎖定 】 提前暫定福委表演夥伴</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">預先鎖定人選，好讓大家有心理準備~</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 35%">福委</md-table-head>
                    <md-table-head>部門/人選</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Snow</md-table-cell>
                    <md-table-cell>
                      <p>CS02  -  Bella</p>
                      <p>IT01  -  Andy</p>
                      <p>CS01  -  Upton</p>
                      <p>CS01  -  Lin</p>
                      <p>CS01  -  Moore</p>
                      <p>IT04  -  White</p>
                      <p>IT04  -  Vic</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Dada</md-table-cell>
                    <md-table-cell>
                      <p>CS01     -  Rita</p>
                      <p>IT02     -  Ryan</p>
                      <p>運維中心  -  Luke</p>
                      <p>CS02     -  Jenny</p>
                      <p>CS02     -  Lora</p>
                      <p>任何抗拒表演or沒表演過的人都有可能 * 2</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Jack</md-table-cell>
                    <md-table-cell>
                      <p>ADMIN - Tommy</p>
                      <p>CS02  - Teresa</p>
                      <p>CS01  - Yetta</p>
                      <p>CHAT  - Gene</p>
                      <p>CHAT  - Mandy</p>
                      <p>CS02  - Jeff</p>
                      <p>** 正在尋覓美若天仙的少女中... **</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>*** 此公告不定時更新，請同仁們密切關注 ***</p>
                </md-content>

              </md-list>
            </md-list-item>


            <md-list-item md-expand v-if="overDate('2021/10/22')">
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="md-list-item-text">2021-10-22 【 十一月 】 READY PLAYER ONE</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 25%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>時間</md-table-cell>
                    <md-table-cell>2021 / 11 / 17 ~ 2021 / 12 / 03</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>地點</md-table-cell>
                    <md-table-cell>辦公室電視牆 / 大會議室 / 遊戲室</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>遊戲項目</md-table-cell>
                    <md-table-cell>
                      <p>* 全明星大亂鬥</p>
                      <p>* 1-2 switch</p>
                      <p>* Overcooked</p>
                      <p>* 激鬥峽谷</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h2>活動辦法</h2>
                  <ul>
                    <li>各家族族長請於 10 / 21 下午 15:30 地圖板塊執行時抽籤分組，每兩家族一組，共四組</li>
                    <li>
                      <p>每款遊戲中，人員不可重複參加同款遊戲，若重複參加同款遊戲第一次扣2分勝場值，第二次之後每次扣3勝場值</p>
                      <p style="color: #bd0000">*** 除了此兩情況不會扣分 ： 一、任何晉級賽的第五場 二、遊戲為激鬥峽谷  ***</p>
                    </li>
                    <li>
                      <md-table class="news-table smaller-table">
                        <md-table-toolbar>
                          <h1 class="md-title">賽制 & 勝場值:</h1>
                        </md-table-toolbar>
                        <md-table-row>
                          <md-table-head>項目</md-table-head>
                          <md-table-head>賽制</md-table-head>
                          <md-table-head>規則與玩法</md-table-head>
                          <md-table-head>勝場值公式</md-table-head>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>全明星大亂鬥</md-table-cell>
                          <md-table-cell>單場2v2v2v2</md-table-cell>
                          <md-table-cell>
                            <p>參考遊戲網站： <a href="https://www.smashbros.com/TC/" target="_blank">任天堂明星大亂鬥</a></p>
                            <p style="color: #dd0000">共執行 4 場次，每一場次 4 組參賽，各組派2人</p>
                            <p>遊戲模式：大亂鬥模式 (三條命、限時6分鐘、場地完全隨機)</p>
                            <p>每場次進行兩回合遊戲，排名以團隊存活的順序排名</p>
                            <p>整個賽季同組人員於大亂鬥角色不能選相同</p>
                            <p>(建議每組至少練習16+角色池、彼此溝通不重複選角)</p>
                          </md-table-cell>
                          <md-table-cell>
                            <p>* 每回合結算</p>
                            <ul>
                              <li>第一名+3</li>
                              <li>第二名+2</li>
                              <li>第三名+1</li>
                            </ul>
                            <p>* 單場次最高可能+6</p>
                          </md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>1-2 switch</md-table-cell>
                          <md-table-cell>4v4晉級賽</md-table-cell>
                          <md-table-cell>
                            <p>參考遊戲網站： <a href="https://www.nintendo.tw/switch/1-2-switch/" target="_blank">1-2 switch</a></p>
                            <p style="color: #dd0000">共執行 5 場次，每一場次 2 組參賽，各組派 4 人 (依晉級賽路程決定哪兩組對戰)</p>
                            <p>遊戲模式： 派對模式 (類似大富翁每一小遊戲獲勝可以擲一骰子，先到終點勝)</p>
                            <p>每一小遊戲對戰時，第一棒雙方各自自選派一人對戰</p>
                            <p>接著從第二棒開始由上一棒輸的一方決定自己出戰的人與指定對方應戰的人</p>
                            <p>出戰限制: 同一組人中、最高出賽回數與最低出賽回數的人不能差距到3回</p>
                            <p>(例.甲組中 A君已出賽2回、而BCD君都還未出賽時，A君不能再出賽)</p>
                            <p>(必須BCD君各自都出賽1次，A君才能再度出賽)</p>
                          </md-table-cell>
                          <md-table-cell>
                            <p>晉級賽總排名</p>
                            <ul>
                              <li>第一名+20</li>
                              <li>第二名+14</li>
                              <li>第三名+10</li>
                              <li>第四名+6</li>
                            </ul>
                            <p style="color:#dd0000">總排名為五場次結束才會確定</p>
                          </md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>Overcooked</md-table-cell>
                          <md-table-cell>4v4晉級賽</md-table-cell>
                          <md-table-cell>
                            <p>參考遊戲網站： <a href="https://www.team17.com/games/overcooked/" target="_blank">Overcooked</a></p>
                            <p style="color: #dd0000">共執行 5 場次，每一場次 2 組參賽，各組派 4 人 (依晉級賽路程決定哪兩組對戰)</p>
                            <p>遊戲模式： 指定相同關卡，取遊戲內分數總和較高方勝</p>
                            <p>每場次共進行兩回合遊戲</p>
                            <p>每回合開賽前會有兩分鐘時間練習，並給予兩分鐘時間進行討論</p>
                          </md-table-cell>
                          <md-table-cell>
                            <p>晉級賽總排名</p>
                            <ul>
                              <li>第一名+20</li>
                              <li>第二名+14</li>
                              <li>第三名+10</li>
                              <li>第四名+6</li>
                            </ul>
                            <p style="color:#dd0000">總排名為五場次結束才會確定</p>
                          </md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>激鬥峽谷</md-table-cell>
                          <md-table-cell>4v4晉級賽</md-table-cell>
                          <md-table-cell>
                            <p>參考遊戲網站： <a href="https://wildrift.leagueoflegends.com/zh-tw/news/" target="_blank">英雄聯盟:激鬥峽谷</a></p>
                            <p style="color: #dd0000">共執行 5 場次，每一場次 2 組參賽，各組派 4 人 (依晉級賽路程決定哪兩組對戰)</p>
                            <p>遊戲模式： 標準(招喚峽谷)、自由選角(無BP)</p>
                            <p>選手自備手機及帳號，一局決勝</p>
                            <p>若比賽超過30分鐘，則使用破塔數量 > 人頭擊殺 > 吃兵數，進行勝負判定</p>
                          </md-table-cell>
                          <md-table-cell>
                            <p>晉級賽總排名</p>
                            <ul>
                              <li>第一名+20</li>
                              <li>第二名+14</li>
                              <li>第三名+10</li>
                              <li>第四名+6</li>
                            </ul>
                            <p style="color:#dd0000">總排名為五場次結束才會確定</p>
                          </md-table-cell>
                        </md-table-row>
                      </md-table>
                    </li>
                    <li>詳細賽程與場次表會以雲端Excel呈現，會陸續與各家族族長一起安排競賽的班表</li>
                  </ul>
                </md-content>
                <md-content>
                  <h2>活動各遊戲門檻 (11月17號遊戲開始前公開)</h2>
                  <md-table class="news-table smaller-table">
                    <md-table-row>
                      <md-table-head style="width: 25%">遊戲項目</md-table-head>
                      <md-table-head>門檻條件</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>全明星大亂鬥</md-table-cell>
                      <md-table-cell>
                        <p>I. </p>
                        <p>II. </p>
                        <p>III. </p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>1-2 Switch</md-table-cell>
                      <md-table-cell>
                        <p>I. </p>
                        <p>II. </p>
                        <p>III. </p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>Overcooked</md-table-cell>
                      <md-table-cell>
                        <p>I. </p>
                        <p>II. </p>
                        <p>III. </p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>激鬥峽谷</md-table-cell>
                      <md-table-cell>
                        <p>I. </p>
                        <p>II. </p>
                        <p>III. </p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>
                
              </md-list>
            </md-list-item>

            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="material-icons mr-6-px">build</span>
              <span class="md-list-item-text">2021-10-20 【 戰報 】睿訊微帕拉林匹克運動會</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、睿訊微帕拉林匹克運動會 賽後排名總結</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>活動前總分</md-table-head>
                    <md-table-head>活動加分</md-table-head>
                    <md-table-head>預測加分</md-table-head>
                    <md-table-head>總結團體積分</md-table-head>
                    <md-table-head>團體積分 + RV值 + 獎牌積分</md-table-head>
                    <md-table-head>總結</md-table-head>
                    <md-table-head style="width: 8%">總結排名</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>108</md-table-cell>
                    <md-table-cell>+96</md-table-cell>
                    <md-table-cell>+5</md-table-cell>
                    <md-table-cell>209 <span style="color: red">+10 (離職人員RV值)</span></md-table-cell>
                    <md-table-cell>219 + 185 + 0</md-table-cell>
                    <md-table-cell>404</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>155</md-table-cell>
                    <md-table-cell>+78</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>233</md-table-cell>
                    <md-table-cell>233 + 200 + 40 + 80</md-table-cell>
                    <md-table-cell>553</md-table-cell>
                    <md-table-cell>II</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>179</md-table-cell>
                    <md-table-cell>+66</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>245 <span style="color: red">+19 (離職人員RV值)</span></md-table-cell>
                    <md-table-cell>264 + 183 + 0</md-table-cell>
                    <md-table-cell>447</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>92</md-table-cell>
                    <md-table-cell>+57</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>149</md-table-cell>
                    <md-table-cell>149 + 202 + 50</md-table-cell>
                    <md-table-cell>401</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>212</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>+3</md-table-cell>
                    <md-table-cell>263</md-table-cell>
                    <md-table-cell>263 + 232 + 100 + 90 + 30 + 10</md-table-cell>
                    <md-table-cell>725</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>179</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>+7</md-table-cell>
                    <md-table-cell>234</md-table-cell>
                    <md-table-cell>234 + 202 + 0</md-table-cell>
                    <md-table-cell>436</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>175</md-table-cell>
                    <md-table-cell>+45</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>220 <span style="color: red">+25 (離職人員RV值)</span></md-table-cell>
                    <md-table-cell>245 + 186 + 0</md-table-cell>
                    <md-table-cell>431</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>113</md-table-cell>
                    <md-table-cell>+45</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>158</md-table-cell>
                    <md-table-cell>158 + 208 + 70 + 60 + 20</md-table-cell>
                    <md-table-cell>516</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>活動優勝家族為: 艾林 !! </p>
                  <p>二、預測成功名單：</p>
                </md-content>
                <md-table>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                  </md-table-row><md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell><md-table-cell>
                      <p>賈德</p>
                      <p>膨風的眼鏡犬</p>
                      <p>肖恩</p>
                      <p>愛你</p>
                      <p>街友</p>
                      <p>哇</p>
                      <p>HSU</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>坦格利安</md-table-cell><md-table-cell>
                      <p>瑞塔</p>
                      <p>乂☆煞氣a丁尼☆乂</p>
                      <p>小鳥胃☄☄</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>艾林</md-table-cell><md-table-cell>
                      <p>誰比我會喝飲料</p>
                      <p>八拉崩巴</p>
                      <p>貂</p>
                      <p>小鼠吉</p>
                      <p>多喝水沒事</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">三、家族內部 票選MVP人員</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>MVP</md-table-head>
                    <md-table-head>最佳門檻</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell colspan="3">等待投票中..</md-table-cell>
                  </md-table-row>
                  <!-- <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>走位有如霍金般風騷</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>牛年大吉,牛轉乾坤</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>我不是LUKE鴨</md-table-cell>
                    <md-table-cell>白金</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>㊣上班只為交朋友㊣</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>薇薇安</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>野人男子漢</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>系統管理員</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>海獅會害怕</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row> -->
                </md-table>

                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">四、獎牌異動與提示</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">獎牌</md-table-head>
                    <md-table-head>相應積分</md-table-head>
                    <md-table-head>異動前家族</md-table-head>
                    <md-table-head>當前獲得家族</md-table-head>
                    <md-table-head>備註</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獨孤求敗</md-table-cell>
                    <md-table-cell>10</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>工作不養閒人</md-table-cell>
                    <md-table-cell>20</md-table-cell>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>因"精靈"離職原擁有者馬泰爾家族數值降低</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>團隊不養懶人</md-table-cell>
                    <md-table-cell>30</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>寸草春暉</md-table-cell>
                    <md-table-cell>40</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>
                      <p>蘭尼斯特與徒利本都是100%同單位，因IT2新人加入艾林家族只剩徒利家族符合100%同單位家人</p>
                      <p style="color: #c50101">***該獎牌應不會再異動直接公布條件***</p>
                      <p style="color: #c50101">1. 與家族族長同單位工作 之成員的數量比例最高</p>
                      <p style="color: #c50101">2. 同單位成員數大於等於三人</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>情投意合</md-table-cell>
                    <md-table-cell>50</md-table-cell>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>因提利爾家族"瘋狂小傑森&睿訊伏黑惠"離職與新加入家人的能力值而降低</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>九淺一深</md-table-cell>
                    <md-table-cell>60</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>
                      <p style="color: #c50101">***該獎牌此次登錄第一次有手誤、直接公布條件避免爭議***</p>
                      <p style="color: #c50101">1. 家族累計的名次變動數最高</p>
                      <p style="color: #c50101">2. 變動數大於等於 9</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>如夢似幻</md-table-cell>
                    <md-table-cell>70</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>
                      <p style="color: #c50101">***該獎牌應不會再異動直接公布條件***</p>
                      <p style="color: #c50101">1. 家族的女性成員總數最多</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>含辛茹苦</md-table-cell>
                    <md-table-cell>80</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>
                      <p style="color: #c50101">***該獎牌應不會再異動直接公布條件***</p>
                      <p style="color: #c50101">1. 任何一次參與遊戲時 戰隊成員+傭顧成員的加總工號數最高</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>阿姨我不想努力了</md-table-cell>
                    <md-table-cell>90</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>條件排序異動</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>魚知水恩乃幸福之源</md-table-cell>
                    <md-table-cell>100</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>--</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="material-icons mr-6-px">build</span>
              <span class="md-list-item-text">2021-10-20 【 NEWS 】 年末活動計劃</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、剩餘活動詳情</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">時間</md-table-head>
                    <md-table-head>活動名稱</md-table-head>
                    <md-table-head>詳情</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 10 / 13 - 21</md-table-cell>
                    <md-table-cell>睿訊微帕拉林匹克運動會</md-table-cell>
                    <md-table-cell>公司內部兩項帕運項目競賽</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 10 / 29</md-table-cell>
                    <md-table-cell>萬聖節 - 透抽遊戲</md-table-cell>
                    <md-table-cell>公司內部共同挑戰遊戲，非競賽</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 11 / 10 - 2021 / 12 / 03</md-table-cell>
                    <md-table-cell>READY PLAYER ONE</md-table-cell>
                    <md-table-cell>公司內部多項電玩競賽</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 12 / 17</md-table-cell>
                    <md-table-cell>健康舒活計劃結算</md-table-cell>
                    <md-table-cell>公司內部競賽 & 年度賽制總決算</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 12 / 24</md-table-cell>
                    <md-table-cell>聖誕節特別企劃</md-table-cell>
                    <md-table-cell>歡慶聖誕節 & 公佈年度結果</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">二、年度家族競賽倒數計時</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">有競賽的活動</md-table-head>
                    <md-table-head>可獲取獎勵</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>睿訊微帕拉林匹克運動會</md-table-cell>
                    <md-table-cell>
                      <p>* 第一名積分60、第二名48分、第三名36分、第四名24分、第五名之後12分</p>
                      <p>* 個人RV值依表現加成 1 ~ 4</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拖椅子的狗電競月</md-table-cell>
                    <md-table-cell>
                      <p>* 第一名積分60、第二名48分、第三名36分、第四名24分、第五名之後12分</p>
                      <p>* 個人RV值依表現加成 1 ~ 4</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>健康舒活計劃結算</md-table-cell>
                    <md-table-cell>
                      <p>* 第一名積分60、第二名48分、第三名36分、第四名24分、第五名之後12分</p>
                      <p>* 老闆破格加碼豪華獎</p>
                      <p>* 家族免死金牌</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>* 最終獎牌條件的結算會以"健康舒活計劃結算"之後為最終數據</p>
                  <p>* 若持有獎牌的家族族長在結算時，於地圖板塊上站立於"絕境長城"會視為將獎牌放到北境上，結算不會獲得獎牌積分增益</p>
                </md-content>
                <md-content>
                  <h3>三、競技場積分全揭露</h3>
                  <p>*** 此次更新後，於"競技場"頁面將家族團體積分、個人Rv值總和、獎牌積分小記同時都納入當前排序</p>
                  <p>*** 注意！當前排序不等於最後結果，尤其獎牌每次活動都有可能因為條件符合情況而異動</p>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-10-08 【 萬聖節 】 透抽遊戲</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、活動詳情</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%"></md-table-head>
                    <md-table-head>詳情</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>時間</md-table-cell>
                    <md-table-cell>2021 / 10 / 29 12:30 ~ 16:00</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>地點</md-table-cell>
                    <md-table-cell>辦公區&大會議室</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>活動</md-table-cell>
                    <md-table-cell>
                      <p>活動當天有裝扮者可以參加"透抽遊戲"</p>
                      <p>(預設主題為"魷魚遊戲"，若有家族想改裝扮主題可以提前告知福委)</p>
                      <p>活動當天分別於12:30與15:30會有特定遊戲啟動</p>
                      <p>限時30分鐘內達到指定過關人數，即可全體獲得獎勵</p>
                      <p style="color:purple">(12:30場通關人數需達31人、15:30場通關人數需達56人)</p>
                      <p> * 特別優待 : 選擇裝扮"學生運動服"或"福委主觀認定精心裝扮者"在參與透抽遊戲時會獲得2次生命</p>
                      <p> * 特別優待2: 生命用完還想繼續挑戰者，可找福委抽"拍照任務"完成即可得到1次生命</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">二、活動流程</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">時間</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>12:00</md-table-cell>
                    <md-table-cell>
                      <p>請各家族先集合好裝扮者一起找福委登記生命值才可以參加12:30場次的遊戲</p>
                      
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>12:30</md-table-cell>
                    <md-table-cell>
                      <p>1. 第一關遊戲開始，請參賽者依當下指示分批進行遊戲</p>
                      <p>2. 遊戲中請遵照福委的判定，如失敗減去生命值請原地坐下、或立即離開遊戲區域</p>
                      <p> * (如有爭議請該場遊戲結束後與福委反應，調錄影紀錄回看)</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>13:00</md-table-cell>
                    <md-table-cell>
                      <p>第一關結束，可以在下一個關卡來之前找福委抽取"拍照任務"</p>
                      <p>完成拍照任務並回報&上傳照片至RV-ALL可以獲得1生命值 來應對下午的關卡</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>15:00</md-table-cell>
                    <md-table-cell>
                      <p>請各家族集合好上午未報到的裝扮者一起登記領取生命值才可以參加15:30場次的遊戲</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>15:30</md-table-cell>
                    <md-table-cell>
                      <p>第二關遊戲開始，請參賽者依當下指令進行遊戲</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>16:00</md-table-cell>
                    <md-table-cell>
                      <p>活動結束，結算並執行獎勵辦法</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">三、獎勵</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎勵條件</md-table-cell>
                    <md-table-cell>
                      <p style="color:purple">1. 於12:30達成31人通關遊戲可獲乙次</p>
                      <p style="color:purple">2. 於15:30達成56人通關遊戲可再獲乙次</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎勵內容</md-table-cell>
                    <md-table-cell>
                      <p>1. 有機率增加免表演排名的名次</p>
                      <p>2. 如果兩場透抽遊戲都有過關，且兩次數字都落在無效區(0,1,3,6)的話，11月電競月活動排名第一家族可獲得免死金牌</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎勵方法</md-table-cell>
                    <md-table-cell>
                      <p>各家族派遣1人在畫板寫一數字 1~9，抽籤決定其中一人的數字抽出來當"乘數"，</p>
                      <p>再把其餘7個數字相加後乘此乘數 接著餘除 8 會得到一數字 0~7</p>
                      <p>此數字即是新增的可以免去表演的排名名次</p>
                      <p>假設 此數字為0, 1, 3, 6 則為無效；數字為2, 4, 5, 7才會有效新增獎勵</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獎勵方法舉例</md-table-cell>
                    <md-table-cell>
                      <p>1. 原先免表演名次為1 , 3 , 6</p>
                      <p><img src="/static/imgs/hallowe/ex1.jpg" /></p>
                      <p>2. 假設遊戲兩場都達過關人數，且產生兩數字 4 與 7</p>
                      <p><img src="/static/imgs/hallowe/ex2.jpg" /></p>
                      <p>3. (假設)結果賽季最終1,3,4,6,7排名的家族都可以免去表演，只由2,5,8名表演</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  
                </md-content>
                
              </md-list>
            </md-list-item>


             <md-list-item md-expand>
              <!-- <span class="material-icons mr-6-px">local_fire_department</span> -->
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-10-05 【 健康舒活特別計畫 】 個資條款&獎勵辦法</span>
              <md-list slot="md-expand">
                <!--  -->
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h3>一、活動內容</h3>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>1. 測量體重 & 報名</md-table-cell>
                    <md-table-cell><p>找 Mavis 報名+測量 開放時間為 5/17 - 5/31 的每日平日下午3~4點</p><p style="color: red;">夜班人員請私敲 Mavis 預約報名時間</p></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2. 個資公開方式</md-table-cell>
                    <md-table-cell>
                      <p>只要報名都能挑戰額外獎勵</p>
                      <p style="color: red;">統一由 Mavis 紀錄&計算個人成績，所有人的體重/體脂數值不對外公開</p>
                      <p>最終只會列出各家族整體加總之成積，與個人達成之門檻&排序</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>3. 身高登入方式</md-table-cell>
                    <md-table-cell>
                      <p style="color: red;">統一由 Mavis 取公司歷年健康檢查之身高</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>4. 測量須知</md-table-cell>
                    <md-table-cell>
                      <p>測量時 請脫去多餘衣物，只著單件上衣與單件褲子，<span style="color: red;">如果身體有特殊情況需要加著衣物，請主動告知Mavis並記錄原因</span></p>
                      <p>測量時 請卸下所有身上所有導電物、非必要飾品、刻意加重重量之物品</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h3>二、競賽與獎勵說明</h3>
                  <p>此計畫將分別有三項不同的競賽各自有不同的結算方式:</p>
                  <md-table class="news-table smaller-table">
                    <md-table-row>
                      <md-table-head style="width: 15%">項目</md-table-head>
                      <md-table-head>結算</md-table-head>
                      <md-table-head>獎勵</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>1. 家族活動競賽</md-table-cell>
                      <md-table-cell><p>每位報名參賽者個人皆由 期初 測量之 (體重/體脂) 以及 期末測量之 (體重/體脂) 轉換為"分數"</p><p>接著家族的總分依照所有該家族報名成員將此分數加總</p></md-table-cell>
                      <md-table-cell>原年度賽制裡 八大家族排名競賽，所獲得之團體積分</md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>2. 型男美女獎</md-table-cell>
                      <md-table-cell><p>由報名家族成員中，最多符合BMI標準值的人數為第一排序</p><p>若BMI標準人數相同，第二排序為 體重/體脂 轉換之分數</p></md-table-cell>
                      <md-table-cell>
                        <p>第一名: 家族免死金牌</p>
                        <p>第二名: 家族全員 +3 能力點數</p>
                        <p>第三名: 家族全員 +2 能力點數</p>
                        <p>第四名: 家族全員 +1 能力點數</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>3. 破格加碼獎</md-table-cell>
                      <md-table-cell>
                        <p>由 Mickey, Dada, Snow, Jack 四人所得之分數再乘3 (12人份) 來設立標準分數</p>
                        <p>家族報名成員全部加總之分數大於等於此標準分數</p>
                        <p style="color:purple">；若八大家族總分全數低於標準分數，則取全公司前五名(個人)</p>
                      </md-table-cell>
                      <md-table-cell>
                        <p>國內豪華旅遊兩天一夜</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>
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
    overDate(str) {
      var condi = new Date(str);
      var now = new Date();
      return now.getTime() - condi.getTime() > 0;
    }
  }
}
</script>