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
              <span class="md-list-item-text">2021-12-24 【 福委 】 福委表演夥伴🎉</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">確定的表演夥伴人選</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 25%">福委</md-table-head>
                    <md-table-head>部門/人選</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Snow</md-table-cell>
                    <md-table-cell>
                      <p>IT01  -  Andy</p>
                      <p>IT01  -  Yuchen</p>
                      <p>IT03  -  Quake</p>
                      <p>IT04  -  White</p>
                      <p>IT04  -  Vic</p>
                      <!-- <p>IT01  -  Donem</p> -->
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Dada</md-table-cell>
                    <md-table-cell>
                      <p>IT02  -  Ryan</p>
                      <!-- <p>IT02  -  Hsiang</p> -->
                      <!-- <p>IT02  -  Duke</p> -->
                      <!-- <p>IT02  -  Kai</p> -->
                      <p>IT01  -  Henry</p>
                      <!-- <p>CS02  -  Roy</p> -->
                      <!-- <p>CS02  -  Jacob</p>
                      <p>CS02  -  Steven</p> -->
                      <p>CS03  -  Bruce</p>
                      <p>CS03  -  Sabrina</p>
                      <p>CS03  -  Rachel</p>
                      
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Jack</md-table-cell>
                    <md-table-cell>
                      <p>ADMIN - Tommy</p>
                      <p>CS01  - Yetta</p>
                      <p>CS02  - Teresa</p>
                      <p>CS02  - Jeff</p>
                      
                      <p>CHAT  - Gene</p>
                      <p>CHAT  - Mandy</p>
                      <p>CHAT  - Howard</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-12-24 【 結果 】最終年度賽制</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、排名總結</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>總結積分</md-table-head>
                    <md-table-head style="width: 25%">總結排名</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>700</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>584</md-table-cell>
                    <md-table-cell>II</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>551</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>535</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>534</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>502</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                  
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>455</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>438</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  
                </md-content>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">二、獎牌條件公開</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">獎牌</md-table-head>
                    <md-table-head></md-table-head>
                    <md-table-head>條件</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獨孤求敗</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/10.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 擁有個人RV值最高的家族成員</p>
                      <p>2. 且同為第一RV值的人員 不能分散在其他家族</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>工作不養閒人</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/20.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 參與數最高的家族</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>團隊不養懶人</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/30.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 全隊成員 體力&精神評等S級 加總總數最高</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>寸草春暉</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/40.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 與家族族長同單位工作 之成員的數量比例最高</p>
                      <p>2. 同單位成員數大於等於三人</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>情投意合</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/50.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 戰隊成員的各項能力值評級整體 最接近隊長</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>九淺一深</md-table-cell>
                   <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/60.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 家族累計的名次變動數最高</p>
                      <p>2. 變動數大於等於 9</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>如夢似幻</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/70.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 家族的女性總數最多</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>含辛茹苦</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/80.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 任何一次參與遊戲時 戰隊成員+傭顧成員的加總工號數最高</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>阿姨我不想努力了</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/90.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. 家族成員魅力S級成員數加總最多</p>
                      <p>2. 家族必須有三位以上魅力 S</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>魚知水恩乃幸福之源</md-table-cell>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/100.png`" /></md-table-cell>
                    <md-table-cell>
                      <p>1. (Rvall(skype) / 活動公開LINE群) 在活動當日感謝福委次數最多</p>
                      <p>2. 感謝福委次數 全成員加總至少達50次</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-12-17 【 結果 】建康舒活特別計畫</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、建康舒活總成績表</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>總得分 (減脂+減重)</md-table-head>
                    <md-table-head>活動加分</md-table-head>
                    <md-table-head>BMI符合人數</md-table-head>
                    <md-table-head>排名</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>43.88</md-table-cell>
                    <md-table-cell>+60</md-table-cell>
                    <md-table-cell>8</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>40.93</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>4</md-table-cell>
                    <md-table-cell>II</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>36.75</md-table-cell>
                    <md-table-cell>+36</md-table-cell>
                    <md-table-cell>5</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>27.07</md-table-cell>
                    <md-table-cell>+24</md-table-cell>
                    <md-table-cell>1</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>24.99</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>7</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>24.01</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>4</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>8.60</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>6</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>4.0</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>3</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                  <md-table-row style="background-color: rgb(237 220 177);">
                    <md-table-cell>福委+米奇</md-table-cell>
                    <md-table-cell>32.35 * 3 = 97.05</md-table-cell>
                    <md-table-cell>-</md-table-cell>
                    <md-table-cell>3</md-table-cell>
                    <md-table-cell>-</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">二、型男美女獎</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>符合BMI人數</md-table-head>
                    <md-table-head>獎勵</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>8</md-table-cell>
                    <md-table-cell><img src="/static/imgs/gold.png" style="width: 128px;"/></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>7</md-table-cell>
                    <md-table-cell>全員能力點數+3</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>6</md-table-cell>
                    <md-table-cell>全員能力點數+2</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>5</md-table-cell>
                    <md-table-cell>全員能力點數+1</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">三、破格加碼獎 (未有家族挑戰成功，改為前五名個人獎)</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>成員暱稱</md-table-head>
                    <md-table-head>成績</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>矮人族族長</md-table-cell>
                    <md-table-cell>18.40</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>小鳥胃☄☄</md-table-cell>
                    <md-table-cell>15.33</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>GoToSleep</md-table-cell>
                    <md-table-cell>11.18</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>福委</md-table-cell>
                    <md-table-cell>小惡魔</md-table-cell>
                    <md-table-cell>10.90</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>阿強</md-table-cell>
                    <md-table-cell>10.41</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">四、活動後家族積分</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>活動前家族積分</md-table-head>
                    <md-table-head>加分</md-table-head>
                    <md-table-head>活動後家族積分</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>370</md-table-cell>
                    <md-table-cell>+60</md-table-cell>
                    <md-table-cell>430</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>292</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>340</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>314</md-table-cell>
                    <md-table-cell>+36</md-table-cell>
                    <md-table-cell>350</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>184</md-table-cell>
                    <md-table-cell>+24</md-table-cell>
                    <md-table-cell>208</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>310</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>322</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>203</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>215</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>291</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>303</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>279</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>291</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

                        
            <md-list-item md-expand>
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
                      <p>自由活動於露天風呂+SPA水世界 / 室內溫泉三溫暖 / 加價湯屋（1H）</p>
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
                  <p>再由需要表演的五位族長從剩下 7 隻籤的籤筒中輪流再各抽出一隻籤， (7 - 5) 此時桶中會剩下 2 隻籤</p>
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