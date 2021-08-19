<template>
  <div class="home bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>王國公告(歷史)</span>
          </div>
          <div class="md-subhead">
            <span>bulletin of the kingdom</span>
          </div>
          <div class="note">
            <md-button class="md-icon-button backnews" to="/" title="最新公告">
              <md-icon>arrow_back</md-icon>
            </md-button>
          </div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content>
        <div class="list">
          <md-list :md-expand-single="expandSingle">

                      
            <md-list-item md-expand>
              <span class="md-list-item-text">2021-05-13 【 五月 】【 Edition Ver.2 】 Season 2 選秀結果</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h3>一、選秀後團體積分表</h3>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">家族</md-table-head>
                    <md-table-head>選秀前值</md-table-head>
                    <md-table-head>招募消耗</md-table-head>
                    <md-table-head>選秀後積分</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>105</md-table-cell>
                    <md-table-cell>
                      <p style="color: blue;">(免) = 公主道車神</p>
                      <p>(-10) =  天竺鼠阿比 </p>
                      <p>(- 6) = 11111</p>
                    </md-table-cell>
                    <md-table-cell>89</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>95</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = 矮人族族長</p>
                      <p style="color: blue;">(免) =  瘋狂小傑森 </p>
                      <p>(- 7) = 意修尼</p>
                    </md-table-cell>
                    <md-table-cell>88 <span style="color: red;">+ 10(舊神之樹) = 98</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>61</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = 小鳥胃☄☄</p>
                      <p style="color: purple;">(免) = 🥺🥺🥺🥺🥺</p>
                      <p style="color: blue;">(免) = 異世界轉生的中二生活</p>
                      <p style="color: blue;">(免) = 天虎令</p>
                      <p style="color: green;">(半)(- 5) = 乂☆煞氣a丁尼☆乂</p>
                      <p>(離職)(+ 5) = John</p>
                      <p>(離職)(+ 6) = Sron</p>
                    </md-table-cell>
                    <md-table-cell>67</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>78</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = 精靈</p>
                      <p>(- 7) = 寶可夢大師</p>
                      <p style="color: green;">(半)(- 5) = 秋芭比母捏牛</p>
                    </md-table-cell>
                    <md-table-cell>66</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>43</md-table-cell>
                    <md-table-cell>
                      <p style="color: blue;">(免) = 涅法雷姆</p>
                      <p>(- 8) = 熱血沸騰洗廁所殺手</p>
                      <p>(- 5) = 我心已打烊</p>
                    </md-table-cell>
                    <md-table-cell>30</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>52</md-table-cell>
                    <md-table-cell>
                      <p>(- 8) = 卓耿</p>
                      <p>(-11) = 忍者龜頭痛</p>
                      <p>(- 9) = 源辣讚讚</p>
                    </md-table-cell>
                    <md-table-cell>24</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>39</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = 貓貓貓頭鷹</p>
                      <p>(-14) = ↗統神端火鍋↙</p>
                      <p>(- 7) = Bbrr</p>
                    </md-table-cell>
                    <md-table-cell>18</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>29</md-table-cell>
                    <md-table-cell>
                      <p>(- 1) = 石少甫</p>
                      <p style="color: green;">(半)(- 5) = 奶油綜合菇</p>
                      <p>(- 7) = 貨拉拉拉不拉拉不拉多</p>
                    </md-table-cell>
                    <md-table-cell>16</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p style="color: purple;">(免) 福委工作人員特權</p>
                  <p style="color: blue;">(免) 佔領封地招募獎勵</p>
                  <p style="color: green;">(半) 母親節問答五折獎勵</p>
                  <h3>二、第二季國民入境開跑</h3>
                  <p>時間: 2021 / 05 / 10 12:00 ~ 2021 / 05 / 14 12:00</p>
                  <p>請各國自由民在指定期間內自由選擇家族入境</p>
                  <p>時間到未選擇家族的自由民，將由福委發配於主觀認定之落後家族</p>
                </md-content>
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-04-28 【 五月 】 選秀 Season 2 (讓媽媽看見你)</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">選秀 Season 2 事前準備流程</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 25%">日期時間</md-table-head>
                    <md-table-head>準備階段</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 04 / 28</md-table-cell>
                    <md-table-cell>各國國民重新尋找明君</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 04 / 29</md-table-cell>
                    <md-table-cell>公布第二季選秀名單於 : BAR(酒吧) > 懸賞單</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 05</md-table-cell>
                    <md-table-cell>各家族族長提交願望清單</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p> *  如發現自己自動離開家族請別驚慌，自由國民們可以在S2重新選擇族長</p>
                  <p> *  請在選賞單上的S2選秀人員務必於當日到場，如不克參加請找代理人協助</p>
                  <p> *  更詳細的資訊會在 Email 公告</p>
                </md-content>
                
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-04-28 【 四月戰報v.2 】城市尋寶 - 天璇之密</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、天璇之密 賽後排名總結</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>活動前總分</md-table-head>
                    <md-table-head>活動加分</md-table-head>
                    <md-table-head>預測加分</md-table-head>
                    <md-table-head>總結</md-table-head>
                    <md-table-head style="width: 8%">總結排名</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>+12</md-table-cell>
                    <md-table-cell>+65</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>78</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>+26</md-table-cell>
                    <md-table-cell>+59</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>85 <span style="color: red;">+ 10(舊神之樹)</span></md-table-cell>
                    <md-table-cell><span style="color: red;">II</span></md-table-cell>
                  </md-table-row>
                  
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>+13</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>61</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>0</md-table-cell>
                    <md-table-cell>+52</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>52</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>+3</md-table-cell>
                    <md-table-cell>+36</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>39</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>-2</md-table-cell>
                    <md-table-cell>+31</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>29</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>+59</md-table-cell>
                    <md-table-cell>+46</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>105</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>+2</md-table-cell>
                    <md-table-cell>+41</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>43</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>活動優勝家族為: 馬泰爾 !! </p>
                  <p>二、預測成功名單：</p>
                </md-content>
                <md-table>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell><md-table-cell>海獅會害怕</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">三、天璇之密 家族內部 票選MVP人員</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>MVP</md-table-head>
                    <md-table-head>最佳門檻</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>佛度有緣人</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>異世界轉生的中二生活</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>銅鬚布萊恩</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>肖恩</md-table-cell>
                    <md-table-cell>一般</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>睿訊伏黑惠</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>來治星星的我</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>阿強</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>阿龍</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>


            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-03-29 【 四月 】 城市尋寶</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">城市尋寶 流程表</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 12%">時間</md-table-head>
                    <md-table-head>進程</md-table-head>
                    <md-table-head>備註</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>8:30</md-table-cell>
                    <md-table-cell>工作人員 Stand By</md-table-cell>
                    <md-table-cell></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>8:45 - 9:00</md-table-cell>
                    <md-table-cell>集合時間 (正常人原9:00算遲到、夜班人員延長到9:15)</md-table-cell>
                    <md-table-cell>家族可以先進行安裝APP與輸入序號事宜</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>9:00 - 9:20</md-table-cell>
                    <md-table-cell>出發時間 (原則上等家族人員到齊才能出發、最晚等到9:20分)</md-table-cell>
                    <md-table-cell>遲到條款會再之後說明</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>9:20 - 13:45</md-table-cell>
                    <md-table-cell>解謎時間</md-table-cell>
                    <md-table-cell>如無法在時間內完成將暫停遊戲並前往終點集合</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>13:45 - 14:00</md-table-cell>
                    <md-table-cell>集合 x 拍照 x 發放午班值班人員餐盒</md-table-cell>
                    <md-table-cell></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>14:00 - 15:00</md-table-cell>
                    <md-table-cell>前往餐廳 "小魏川菜館" 輕鬆用餐</md-table-cell>
                    <md-table-cell></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>15:00</md-table-cell>
                    <md-table-cell>快樂解散</md-table-cell>
                    <md-table-cell></md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">各家族 小天使分配表</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 30%">家族</md-table-head>
                    <md-table-head>小天使</md-table-head>
                    <md-table-head>家族成員人數 / 參加分</md-table-head>
                    <md-table-head>季獎勵結算分</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>Vic Lee</md-table-cell>
                    <md-table-cell>5 / 25</md-table-cell>
                    <md-table-cell>59 + 25 = 84</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>Dada</md-table-cell>
                    <md-table-cell>6 / 30</md-table-cell>
                    <md-table-cell>13 + 30 = 43</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>Castle</md-table-cell>
                    <md-table-cell>7 / 35</md-table-cell>
                    <md-table-cell>26 + 35 = 61</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>Mickey</md-table-cell>
                    <md-table-cell>3 / 15</md-table-cell>
                    <md-table-cell>3 + 15 = 18</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>Yusi</md-table-cell>
                    <md-table-cell>6 / 30</md-table-cell>
                    <md-table-cell>12 + 30 = 42</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>Bella</md-table-cell>
                    <md-table-cell>5 / 25</md-table-cell>
                    <md-table-cell>2 + 25 = 27</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>Snow</md-table-cell>
                    <md-table-cell>5 / 25</md-table-cell>
                    <md-table-cell>0 + 25 = 25</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>Jack</md-table-cell>
                    <md-table-cell>4 / 20</md-table-cell>
                    <md-table-cell>-2 + 20 = 18</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>季獎勵與懲罰:</p>
                  <p>*. 依上述表格顯示第一季活動能享受較佳活動體驗的家族為: 徒利、提利爾 家族</p>
                  <p>*. 第一季活動可能會體驗到較不好活動體驗的家族為: 史塔克、艾林 家族</p>
                </md-content>
                <md-content>
                  <p>特別條款:</p>
                  <p>1. 發生作弊行為並經查實，比照官網通則「在活動過程惡意違反規則」</p>
                  <p>2. 活動當日遲到者，綁定參與尾牙表演 (最後所在家族)</p>
                  <p>3. 已報名卻未到者扣除所在家族團體積分5分並加上遲到的條款</p>
                </md-content>
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-03-29 【 三月戰報 】睿訊之國的闖關者</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">睿訊之國的闖關者 賽後排名總結</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>活動前總分</md-table-head>
                    <md-table-head>活動加分</md-table-head>
                    <md-table-head>預測加分</md-table-head>
                    <md-table-head>總結</md-table-head>
                    <md-table-head style="width: 8%">總結排名</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>-5</md-table-cell>
                    <md-table-cell>+54</md-table-cell>
                    <md-table-cell>+10</md-table-cell>
                    <md-table-cell>59</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>-34</md-table-cell>
                    <md-table-cell>+47</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>13</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>-17</md-table-cell>
                    <md-table-cell>+42</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>26</md-table-cell>
                    <md-table-cell>II</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>-34</md-table-cell>
                    <md-table-cell>+36</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>3</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>-19</md-table-cell>
                    <md-table-cell>+30</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>12</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>-30</md-table-cell>
                    <md-table-cell>+30</md-table-cell>
                    <md-table-cell>+2</md-table-cell>
                    <md-table-cell>2</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>-31</md-table-cell>
                    <md-table-cell>+30</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>0</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>-35</md-table-cell>
                    <md-table-cell>+30</md-table-cell>
                    <md-table-cell>+3</md-table-cell>
                    <md-table-cell>-2</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>活動優勝家族為: 徒利家族 !! </p>
                  <p>*** 特別修改預測單季全中獎勵由 "送造型"改為送"能力點數" ***</p>
                  <p>(因為實在沒時間加功能了, 最新訊息請查閱最新修改後的"遊戲結局與積分細則")</p>
                  <p>預測成功名單：</p>
                </md-content>
                <md-table>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head>史塔克</md-table-head><md-table-cell>生氣買個包＄</md-table-cell>
                    <md-table-head>艾林</md-table-head><md-table-cell>卓耿</md-table-cell>
                    <md-table-head>艾林</md-table-head><md-table-cell>八拉崩巴</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-head>艾林</md-table-head><md-table-cell>還敢下來阿冰鳥</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>HA↗HA↘HA↗HA↘</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>傑西</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-head>徒利</md-table-head><md-table-cell>洲子街大地主</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>公主道車神</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>天竺鼠阿比</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-head>徒利</md-table-head><md-table-cell>11111</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>二姐</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>包子入侵</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-head>徒利</md-table-head><md-table-cell>肥宅</md-table-cell>
                    <md-table-head>徒利</md-table-head><md-table-cell>平民</md-table-cell>
                    <md-table-head>蘭尼斯特</md-table-head><md-table-cell>楊伯麟</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-head>蘭尼斯特</md-table-head><md-table-cell>街友</md-table-cell>
                    <md-table-head>提利爾</md-table-head><md-table-cell>睿訊五條悟</md-table-cell>
                    <md-table-head>拜拉席恩</md-table-head><md-table-cell>㊣上班只為交朋友㊣</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-head>馬泰爾</md-table-head><md-table-cell>吉米花</md-table-cell>
                    <md-table-cell></md-table-cell><md-table-cell></md-table-cell>
                    <md-table-cell></md-table-cell><md-table-cell></md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">睿訊之國的闖關者 家族內部 票選MVP人員</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>MVP</md-table-head>
                    <md-table-head>最佳門檻</md-table-head>
                    <md-table-head>最佳場次</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>佛度有緣人</md-table-cell>
                    <md-table-cell>白金</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(方塊)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>誰比我會喝飲料</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(梅花)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>銅鬚布萊恩</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(黑桃)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>賈德</md-table-cell>
                    <md-table-cell>白金</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(方塊)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>睿訊五條悟</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(紅心)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>㊣上班只為吃便當㊣</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(黑桃)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>阿強</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(梅花)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>🚀握不住的他🚀</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                    <md-table-cell>睿訊之國的闖關者(黑桃)</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-03-19 【 NEWS 】 睿訊之國的闖關者MVP票選開跑</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 25%">時刻</md-table-head>
                    <md-table-head>投票</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021年03月22號 12:00</md-table-cell>
                    <md-table-cell>開始各家族組內人員進行MVP投票 (每人最多三票)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021年03月26號 16:00 </md-table-cell>
                    <md-table-cell>關閉投票通道並統計</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021年03月29號 15:00 </md-table-cell>
                    <md-table-cell>公佈獲得MVP人員</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>期間內對自己所在家族人員進行投票，選出你心中最能CARRY家族的人員吧！</p>
                  <p>* 每人最多3票 在期間內都可以任意配置/修改投票的人選 (家族成員右上方的盾牌標記就是選中的記號)</p>
                  <p>* 各家族MVP只會產生一位得票數最高者，該成員會獲得3點RV值獎勵</p>
                  <p>* 票數相當時以家族族長直接裁定誰為MVP</p>
                </md-content>
              </md-list>
            </md-list-item>
            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-03-15 【 NEWS 】 睿訊之國的闖關者時間表&門檻 與 預測功能開放</span>
              <md-list slot="md-expand">
                <md-content>
                  <img src="/static/imgs/timetable.jpg" >
                </md-content>
                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 12%">時刻</md-table-head>
                    <md-table-head>馬泰爾</md-table-head>
                    <md-table-head>艾林</md-table-head>
                    <md-table-head>蘭尼斯特</md-table-head>
                    <md-table-head>史塔克</md-table-head>
                    <md-table-head>提利爾</md-table-head>
                    <md-table-head>拜拉席恩</md-table-head>
                    <md-table-head>坦格利安</md-table-head>
                    <md-table-head>徒利</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/15 - 12:30</md-table-cell>
                    <md-table-cell>🚀握不住的他🚀</md-table-cell>
                    <md-table-cell>貂</md-table-cell>
                    <md-table-cell>HSU</md-table-cell>
                    <md-table-cell>源辣讚讚</md-table-cell>
                    <md-table-cell>珂珂</md-table-cell>
                    <md-table-cell>艾利森</md-table-cell>
                    <md-table-cell>瑞塔</md-table-cell>
                    <md-table-cell>肥宅</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/15 - 15:30</md-table-cell>
                    <md-table-cell>海獅會害怕</md-table-cell><md-table-cell>誰比我會喝飲料</md-table-cell><md-table-cell>牛年大吉,牛轉乾坤</md-table-cell><md-table-cell>↗統神端火鍋↙</md-table-cell><md-table-cell>深有牛奶糖</md-table-cell><md-table-cell>姜太公今天不想釣魚</md-table-cell><md-table-cell>薇薇安</md-table-cell><md-table-cell>公主道車神</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/16 - 8:30</md-table-cell>
                    <md-table-cell>寶可夢大師</md-table-cell><md-table-cell>我阿姨也癢</md-table-cell><md-table-cell>涅法雷姆</md-table-cell><md-table-cell>神聖平板不容侵犯</md-table-cell><md-table-cell>薄荷草莓廢柴</md-table-cell><md-table-cell>㊣上班只為吃便當㊣</md-table-cell><md-table-cell>脾氣最好的姐姐 ◉‿◉</md-table-cell><md-table-cell>二姐</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/16 - 12:30</md-table-cell>
                    <md-table-cell>妳好漂亮</md-table-cell><md-table-cell>貂</md-table-cell><md-table-cell>我心已打烊</md-table-cell><md-table-cell>乂☆煞氣a丁尼☆乂</md-table-cell><md-table-cell>沒收功就罵髒話</md-table-cell><md-table-cell>貓在鋼琴上睡著了</md-table-cell><md-table-cell>悲傷滷肉飯</md-table-cell><md-table-cell>肥宅</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/17 - 12:30</md-table-cell>
                    <md-table-cell>貨拉拉拉不拉拉不拉多</md-table-cell><md-table-cell>異世界轉生的中二生活</md-table-cell><md-table-cell>Super Hero</md-table-cell><md-table-cell>傳話仔</md-table-cell><md-table-cell>我不是LUKE鴨</md-table-cell><md-table-cell>㊣上班只為交朋友㊣</md-table-cell><md-table-cell>系統管理員</md-table-cell><md-table-cell>洲子街大地主</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/17 - 15:30</md-table-cell>
                    <md-table-cell>吉米花</md-table-cell><md-table-cell>誰比我會喝飲料</md-table-cell><md-table-cell>肖恩</md-table-cell><md-table-cell>走位有如霍金般風騷</md-table-cell><md-table-cell>睿訊五條悟</md-table-cell><md-table-cell>OSUTTE</md-table-cell><md-table-cell>吃肥褲撐破</md-table-cell><md-table-cell>11111</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/18 - 8:30</md-table-cell>
                    <md-table-cell>Bbrr</md-table-cell><md-table-cell>八拉崩巴</md-table-cell><md-table-cell>賈德</md-table-cell><md-table-cell>佛度有緣人</md-table-cell><md-table-cell>超越時空的傳奇</md-table-cell><md-table-cell>㊣上班只為等放飯㊣</md-table-cell><md-table-cell>污辱米糕</md-table-cell><md-table-cell>天竺鼠阿比</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/18 - 12:30</md-table-cell>
                    <md-table-cell>熱血旋轉花花愛心破壞者</md-table-cell><md-table-cell>異世界轉生的中二生活</md-table-cell><md-table-cell>HSU</md-table-cell><md-table-cell>HAWK</md-table-cell><md-table-cell>我不是LUKE鴨</md-table-cell><md-table-cell>🖕上班滑起來📱</md-table-cell><md-table-cell>阿強</md-table-cell><md-table-cell>水晶女皇</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/19 - 12:30</md-table-cell>
                    <md-table-cell>給我一杯酒</md-table-cell><md-table-cell>我阿姨也癢</md-table-cell><md-table-cell>楊伯麟</md-table-cell><md-table-cell>傳話仔</md-table-cell><md-table-cell>深海大巨鰻♥想不想嘗嘗</md-table-cell><md-table-cell>來治星星的我</md-table-cell><md-table-cell>天虎令</md-table-cell><md-table-cell>包子入侵</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/19 - 15:30</md-table-cell>
                    <md-table-cell>阿龍</md-table-cell><md-table-cell>還敢下來阿冰鳥</md-table-cell><md-table-cell>哇</md-table-cell><md-table-cell>此用戶暱稱被屏蔽</md-table-cell><md-table-cell>霸霸</md-table-cell><md-table-cell>㊣上班來潛水餵魚的㊣</md-table-cell><md-table-cell>小小電磁小象幫幫</md-table-cell><md-table-cell>銅鬚布萊恩</md-table-cell>
                  </md-table-row>
                </md-table>

                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 12%">時刻</md-table-head>
                    <md-table-head>馬泰爾</md-table-head>
                    <md-table-head>艾林</md-table-head>
                    <md-table-head>蘭尼斯特</md-table-head>
                    <md-table-head>史塔克</md-table-head>
                    <md-table-head>提利爾</md-table-head>
                    <md-table-head>拜拉席恩</md-table-head>
                    <md-table-head>坦格利安</md-table-head>
                    <md-table-head>徒利</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/22 - 12:30</md-table-cell>
                    <md-table-cell>龜龜</md-table-cell><md-table-cell>Acacia_Power</md-table-cell><md-table-cell>賈德</md-table-cell><md-table-cell>源辣讚讚</md-table-cell><md-table-cell>超越時空的傳奇</md-table-cell><md-table-cell>艾利森</md-table-cell><md-table-cell>給你500</md-table-cell><md-table-cell>HA↗HA↘HA↗HA↘</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/22 - 15:30</md-table-cell>
                    <md-table-cell>都是1</md-table-cell><md-table-cell>多喝水沒事</md-table-cell><md-table-cell>哇</md-table-cell><md-table-cell>生氣買個包＄</md-table-cell><md-table-cell>山裡阿巴</md-table-cell><md-table-cell>㊣上班來潛水餵魚的㊣</md-table-cell><md-table-cell>李阿莫</md-table-cell><md-table-cell>平民</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/23 - 8:30</md-table-cell>
                    <md-table-cell>寶可夢大師</md-table-cell>
                    <md-table-cell>奶油綜合菇</md-table-cell>
                    <md-table-cell>油炸包龍星</md-table-cell>
                    <md-table-cell>雞排要切不要辣</md-table-cell>
                    <md-table-cell>瘋狂小傑森</md-table-cell>
                    <md-table-cell>㊣上班只為吃便當㊣</md-table-cell>
                    <md-table-cell>狼皮羊</md-table-cell>
                    <md-table-cell>包子入侵</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/23 - 12:30</md-table-cell>
                    <md-table-cell>龜龜</md-table-cell>
                    <md-table-cell>野人男子漢</md-table-cell>
                    <md-table-cell>油炸包龍星</md-table-cell>
                    <md-table-cell>神聖平板不容侵犯</md-table-cell>
                    <md-table-cell>睿訊伏黑惠</md-table-cell>
                    <md-table-cell>🖕上班滑起來📱</md-table-cell>
                    <md-table-cell>熱血沸騰洗廁所殺手</md-table-cell>
                    <md-table-cell>HA↗HA↘HA↗HA↘</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/24 - 12:30</md-table-cell>
                    <md-table-cell>給我一杯酒</md-table-cell>
                    <md-table-cell>野人男子漢</md-table-cell>
                    <md-table-cell>睿恩</md-table-cell>
                    <md-table-cell>乂☆煞氣a丁尼☆乂</md-table-cell>
                    <md-table-cell>深海大巨鰻♥想不想嘗嘗</md-table-cell>
                    <md-table-cell>貓在鋼琴上睡著了</md-table-cell>
                    <md-table-cell>系統管理員</md-table-cell>
                    <md-table-cell>洲子街大地主</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/24 - 15:30</md-table-cell>
                    <md-table-cell>秋芭比母捏牛</md-table-cell>
                    <md-table-cell>鞋鞋你愛我</md-table-cell>
                    <md-table-cell>街友</md-table-cell>
                    <md-table-cell>西米拉拉非</md-table-cell>
                    <md-table-cell>一級弓箭手</md-table-cell>
                    <md-table-cell>姜太公今天不想釣魚</md-table-cell>
                    <md-table-cell>吃肥褲撐破</md-table-cell>
                    <md-table-cell>聲林之王</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/25 - 8:30</md-table-cell>
                    <md-table-cell>TRXC🚀🌕</md-table-cell>
                    <md-table-cell>安度因烏瑞恩</md-table-cell>
                    <md-table-cell>膨風的眼鏡犬</md-table-cell>
                    <md-table-cell>佛度有緣人</md-table-cell>
                    <md-table-cell>薄荷草莓廢柴</md-table-cell>
                    <md-table-cell>㊣上班只為等放飯㊣</md-table-cell>
                    <md-table-cell>脾氣最好的姐姐◉‿◉</md-table-cell>
                    <md-table-cell>二姐</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/25 - 12:30</md-table-cell>
                    <md-table-cell>本機使用者</md-table-cell>
                    <md-table-cell>卓耿</md-table-cell>
                    <md-table-cell>Super Hero</md-table-cell>
                    <md-table-cell>走位有如霍金般風騷</md-table-cell>
                    <md-table-cell>珂珂</md-table-cell>
                    <md-table-cell>來治星星的我</md-table-cell>
                    <md-table-cell>阿強</md-table-cell>
                    <md-table-cell>傑西</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/26 - 12:30</md-table-cell>
                    <md-table-cell>龜龜</md-table-cell>
                    <md-table-cell>忍者龜頭痛</md-table-cell>
                    <md-table-cell>愛你</md-table-cell>
                    <md-table-cell>↗統神端火鍋↙</md-table-cell>
                    <md-table-cell>沒收功就罵髒話</md-table-cell>
                    <md-table-cell>㊣上班只為交朋友㊣</md-table-cell>
                    <md-table-cell>侯統癢</md-table-cell>
                    <md-table-cell>水晶女皇</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>03/26 - 15:30</md-table-cell>
                    <md-table-cell>海獅會害怕</md-table-cell>
                    <md-table-cell>奶油綜合菇</md-table-cell>
                    <md-table-cell>牛年大吉,牛轉乾坤</md-table-cell>
                    <md-table-cell>史塔克潮靈</md-table-cell>
                    <md-table-cell>意修尼</md-table-cell>
                    <md-table-cell>OSUTTE</md-table-cell>
                    <md-table-cell>阿強</md-table-cell>
                    <md-table-cell>銅鬚布萊恩</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">睿訊之國的闖關者 各花色遊戲門檻</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 12%"></md-table-head>
                    <md-table-head>黑桃</md-table-head>
                    <md-table-head>方塊</md-table-head>
                    <md-table-head>紅心</md-table-head>
                    <md-table-head>梅花</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Level - 1</md-table-cell>
                    <md-table-cell>持續為隊友加油</md-table-cell>
                    <md-table-cell>有作答正確思路</md-table-cell>
                    <md-table-cell>描述時使多數人開口笑</md-table-cell>
                    <md-table-cell>存活</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Level - 2</md-table-cell>
                    <md-table-cell>兩次連勝</md-table-cell>
                    <md-table-cell>14分內答對</md-table-cell>
                    <md-table-cell>2場都勝利</md-table-cell>
                    <md-table-cell>10分內完成任務+存活</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>Level - 3</md-table-cell>
                    <md-table-cell>三次連勝</md-table-cell>
                    <md-table-cell>7分內答對</md-table-cell>
                    <md-table-cell>擔任白板猜出答案</md-table-cell>
                    <md-table-cell>5分鐘內完成+存活</md-table-cell>
                  </md-table-row>
                </md-table>  
                
                <md-content>
                  <h1>預測功能開放中</h1>
                  <p>1. 可至 『競技場』中預測每個月的活動哪一家族會得到冠軍</p>
                  <p>2. 每季預測全中的玩家將會獲得額外1點能力值點數 (謙虛加成: 每一評等D能力再多加1點)</p>
                  <p>3. 每一次預測中的玩家會為團體增加一點積分</p>
                </md-content>
              </md-list>
            </md-list-item>
            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-03-09 【 NEWS 】 睿訊之國的闖關者 與 獎牌結算公告</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">睿訊之國的闖關者 排名方式</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%"></md-table-head>
                    <md-table-head>關卡獲勝次數</md-table-head>
                    <md-table-head>名次</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>家族A</md-table-cell>
                    <md-table-cell>18</md-table-cell>
                    <md-table-cell>1</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>家族C</md-table-cell>
                    <md-table-cell>15</md-table-cell>
                    <md-table-cell>2</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>家族B</md-table-cell>
                    <md-table-cell>10</md-table-cell>
                    <md-table-cell>3</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  1. 依照各家族在20場關卡活動中獲勝的總數排序名次</br>
                  2. 獲勝次數相等時依照參賽者全體的"達成門檻率"為第二排序</br>
                  3. 兩者皆相同時由福委擲硬幣決定</br>
                </md-content>
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">獎牌結算</h1>
                  </md-table-toolbar>
                </md-table>
                <md-content>
                  1. 每次活動過後1~2周時間內會做一次結算，並且執行"發出"or"移動" 獎牌</br>
                  2. 每次更新後會在"競技場"下方公示獎牌結算的時間，不會再另行公告獎牌的異動</br>
                </md-content>
              </md-list>
            </md-list-item>
            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
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

            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span
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
                      <md-table-cell>趣味運動競技月</md-table-cell>
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
                      <md-table-cell>12月 (18日 週六)</md-table-cell>
                      <md-table-cell>溫泉之旅</md-table-cell>
                    </md-table-row>
                  </md-table>
                </div>
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
    
  }
}
</script>