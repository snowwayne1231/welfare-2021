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


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-11-19 【 睿訊9453 】 活動流程與獎勵</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">♨睿訊-9453 ♨</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">時間</md-table-head>
                    <md-table-cell>2022 / 01 / 08  08:00 ~ 15:00</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>地點</md-table-head>
                    <md-table-cell>陽明山天籟溫泉會館 / 金山鹿羽松牧場</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">一、時程規劃</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">時間</md-table-head>
                    <md-table-head colspan="2">行程</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>08:00</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>西湖捷運站2號出口集合開始點名</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>08:15</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>遊覽車出發前往天籟溫泉會館 / 金山鹿羽松牧場  (以下會有AB分流行程)</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head></md-table-head>
                    <md-table-head>A.天籟溫泉會館</md-table-head>
                    <md-table-head>B.鹿羽松牧場</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>09:30</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>團體Check In + 自費湯屋登記 + 自由換裝準備</p>
                      <p>（未搭公司遊覽車者請於9:15抵達）</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>搭車中..</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>09:40</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>自由活動於露天風呂+SPA水世界 / 加價湯屋（1H）</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>搭車中..</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>10:00</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>活動中..</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>抵達鹿羽松牧場 + 團體Check In</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>10:05</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>活動中..</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>入園餵食 + 參觀 + 拍照 + Chill</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>11:20</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>活動中..</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>指定休息區集合</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>11:30</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>活動中..</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>上車回往天籟溫泉會館</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>11:40</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>第一次公告 建議大家分流上岸洗漱</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>搭車中..</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>11:55</md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>第二次公告 請大家上岸洗漱</p>
                    </md-table-cell>
                    <md-table-cell style="width: 40%">
                      <p>抵達天籟溫泉會館</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head></md-table-head>
                    <md-table-head colspan="2">AB分流會合</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>12:10</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>天籟溫泉會館大廳集合，集合完畢前往天籟飯店</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>12:20</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>天籟飯店用餐</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>13:50</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>集合拍照</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>14:00</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>快樂回程</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>15:00</md-table-cell>
                    <md-table-cell colspan="2">
                      <p>公司下車 / 西湖捷運站下車（午班同仁如因遊覽車抵達公司超時，不記遲到）</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h2>活動獎勵：</h2>
                  <p>截止於 2021 / 11 / 19 日報名人數為75人 (超過70%公司同仁參加)</p>
                  <p>將於 聖誕節活動日 2021 / 12 / 24 (五) 當天，從<span style="color:red">需要表演的家族中抽出 2 家族免表演</span></p>
                  <h2>獎勵辦法：</h2>
                  <p>依照聖誕節當天名次順序製作籤數量，共計 15 隻籤</p>
                  <ul>
                    <li>第二名家族 5 隻籤</li>
                    <li>第四名家族 4 隻籤</li>
                    <li>第五名家族 3 隻籤</li>
                    <li>第七名家族 2 隻籤</li>
                    <li>第八名家族 1 隻籤</li>
                  </ul>
                  <p>由八位族長先依照名次順序輪流從籤筒中將帶有家族名稱的籤抽出， (15 - 8) 桶中會剩下 7 隻籤</p>
                  <p>再由需要表演的五位族長從勝 7 隻籤的籤筒中輪流再各抽出一隻籤， (7 - 5) 此時桶中會剩下 2 隻籤</p>
                  <p>I. 若桶內剩下的兩隻籤為不同的兩家族，則此兩家族就是可免去尾牙表演義務的家族</p>
                  <p>II. 若桶內剩下的兩隻籤為同家族，先恭喜此家族為免去表演義務之家族</p>
                  <p> 接著以同樣的數量將其餘四家族的籤重新放回籤筒，並由此四位家族族長輪流抽籤</p>
                  <p> 由第八名的家族族長開始逆序輪流抽取籤筒，直至剩下最後一隻籤為止，最後還在籤筒內的家族即可免去表演義務</p>
                  <h2>活動需知：</h2>
                  <p>1. 請穿著2021年度公司團服。</p>
                  <p>2. 當天報名泡湯同仁，請自備泳衣、泳帽、個人偏好的衛浴用品。 (會館附毛巾浴巾)</p>
                  <p>3. 當天報名牧場同仁，建議攜帶防曬 / 防蚊用品。</p>
                  <p>4. 如有 暈車 / 心臟病 / 高血壓等常備藥品也請隨身攜帶。</p>
                  <p>5. 當天活動如遇下雨 A:泡湯正常舉行 B:鹿羽松牧場改由其他室內活動(另行公告)。</p>
                  <p>6. 如遇不可抗力之因素如颱風、疫情，則延期或者取消(另行公告)。</p>
                  <p>7. 活動當日不可擅自離開團體，如遇特殊情形，請先找福委商量。</p>
                  <p>8. 攜伴費用為下表:（實際費用多退少補，並於當月薪資代扣）</p>
                  <md-table>
                    <md-table-row>
                      <md-table-cell>天籟溫泉露天風呂+SPA水世界</md-table-cell>
                      <md-table-cell>
                        <p>大人$ 980 / 小孩 $ 750  / 幼兒 免費</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>鹿羽松牧場</md-table-cell>
                      <md-table-cell>
                        <p>大人$ 950 / 小孩 $ 800  / 幼兒 免費</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="material-icons mr-6-px">build</span>
              <span class="md-list-item-text">2021-11-19 【 NEWS 】 年末活動計劃</span>
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
                  <md-table-row>
                    <md-table-cell>2022 / 01 / 08</md-table-cell>
                    <md-table-cell>睿訊9453</md-table-cell>
                    <md-table-cell>一起 Chill</md-table-cell>
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
                    <md-table-cell>READY PLAYER ONE</md-table-cell>
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
                            <p>遊戲模式：大亂鬥模式 (三條命、限時6分鐘、地圖ALL隨機、道具全開、角色全開)</p>
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
                          <md-table-cell>5v5晉級賽</md-table-cell>
                          <md-table-cell>
                            <p>參考遊戲網站： <a href="https://wildrift.leagueoflegends.com/zh-tw/news/" target="_blank">英雄聯盟:激鬥峽谷</a></p>
                            <p style="color: #dd0000">共執行 5 場次，每一場次 2 組參賽，各組派 5 人 (依晉級賽路程決定哪兩組對戰)</p>
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
                  <h2>活動各遊戲門檻</h2>
                  <md-table class="news-table smaller-table">
                    <md-table-row>
                      <md-table-head style="width: 25%">遊戲項目</md-table-head>
                      <md-table-head>門檻條件</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>全明星大亂鬥</md-table-cell>
                      <md-table-cell>
                        <p>I. 有造成擊飛他人</p>
                        <p>II. 擊飛數 > 死亡數</p>
                        <p>III. 擊飛數高於第二名 5 以上(含) / 擊飛數 9 人以上</p>
                        <p style="color: #9c7f52">(以上條件都是計算單一回合內)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>1-2 Switch</md-table-cell>
                      <md-table-cell>
                        <p>I. 任一小遊戲獲得勝利</p>
                        <p>II. 連續勝利</p>
                        <p>III. 全勝並且取得3勝以上(含)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>Overcooked</md-table-cell>
                      <md-table-cell>
                        <p>I. 兩回合皆有過關</p>
                        <p>II. 兩回合共得到五顆星以上(含)</p>
                        <p>III. 有一回合分數 > 福委試玩分數</p>
                        <p style="color: #9c7f52">(福委試玩分數於比賽當下公佈)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>激鬥峽谷</md-table-cell>
                      <md-table-cell>
                        <p>I. 有成功擊殺 / 助攻 / 敵方倒下兩座防禦塔</p>
                        <p>II. KDA >= 3.5</p>
                        <p>III. 達成 Legendary(8殺不死) / 達成 Panta Kill(5連殺)</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>

                <md-content>
                  <h2>電競明星 *** Super Star ***</h2>
                  <md-table class="news-table smaller-table">
                    <md-table-row>
                      <md-table-head style="width: 25%">遊戲項目</md-table-head>
                      <md-table-head>條件&獎勵</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>全明星大亂鬥</md-table-cell>
                      <md-table-cell>
                        <p>1. 單一回合擊飛數最高者+1勝場值</p>
                        <p>2. 兩回合加總擊飛最多對手的玩家再+2勝場值</p>
                        <p style="color: #9c7f52">(複數玩家擊飛數相同時則不加分)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>1-2 Switch</md-table-cell>
                      <md-table-cell>
                        <p>1. 每一場次擊敗對手最多的玩家+2勝場值</p>
                        <p>2. 綜觀所有場次中，某一單場擊敗最多對手的玩家再+2勝場值</p>
                        <p style="color: #9c7f52">(擊敗數相等時以勝率為第二排序原則)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>Overcooked</md-table-cell>
                      <md-table-cell>
                        <p>1.綜觀所有場次中，某一單回合的"突破百分率"最高的一組隊伍，每人+1勝場值</p>
                        <p style="color: #9c7f52">(突破百分率 = 關卡獲得分數 / 關卡三顆星分數要求)</p>
                        <p style="color: #9c7f52">(例: 某關卡三星分數要求為480，該組玩家過關分數為550分時，突破百分率 = 550 / 480 = 114.58%)</p>
                        <p style="color: #9c7f52">(若突破百分率相同，則加賽比拚)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>激鬥峽谷</md-table-cell>
                      <md-table-cell>
                        <p>1. 每一場次英雄擊殺數最多的玩家+2勝場值</p>
                        <p>2. 綜觀所有場次中，某一單場英雄擊殺數最多的玩家再+2勝場值</p>
                        <p style="color: #9c7f52">(若同擊殺數，則以助攻數當第二排序原則，死亡數當第三排序原則)</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                  <p>***(以上比較條件若仍無法判定時,則 後者條件符合者 覆蓋 前者條件符合者)***</p>
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