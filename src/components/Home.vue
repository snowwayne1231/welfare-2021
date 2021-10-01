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



            <md-list-item md-expand v-if="overDate('2021/10/01')">
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-10-01 【 十月 】睿訊微帕拉林匹克運動會</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 25%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>時間</md-table-cell>
                    <md-table-cell>2021 / 10 / 12 ~ 2021 / 10 / 21</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>地點</md-table-cell>
                    <md-table-cell>辦公室</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>遊戲項目</md-table-cell>
                    <md-table-cell>
                      <p>* 硬地滾球</p>
                      <p>* 盲人門球</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h2>活動辦法</h2>
                  <ul>
                    <li>各家族族長請於 10 / 08 中午 12:00 以前將各個場次的上場人員進行安排</li>
                    <li>每場次各家族皆會派一人參與，依照不同遊戲將獲得不同的"勝場值"
                      <md-table class="news-table smaller-table">
                        <md-table-toolbar>
                          <h1 class="md-title">勝場值公式:</h1>
                        </md-table-toolbar>
                        <md-table-row>
                          <md-table-cell>硬地滾球</md-table-cell>
                          <md-table-cell>獲勝隊伍每人+1、勝利隊伍中達成"防守"與"逆轉"的次數最多者再+1</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>盲人門球</md-table-cell>
                          <md-table-cell>獲勝隊伍每人+1、勝利隊伍中得分最多的選手再+1</md-table-cell>
                        </md-table-row>
                      </md-table>
                    </li>
                    <!-- <li>詳細場次表會以雲端Excel 呈現，各家族族長皆有權限更動</li>
                    <li>09 / 30 最後一場結束後會馬上結算勝場值，由大到小進行排名排序，第一名可得60團體積分第二名48團體積分..以此類推</li>
                    <li style="color: #d04740;">(進入第三季，各項活動的家族團體積分會相較第一、二季乘上2倍)</li>
                    <li>(結算後於當日下午15:30至遊戲室進行地圖板塊移動)</li> -->
                  </ul> 
                  <h2>活動規則&玩法</h2>
                  <ul>
                    <li>
                      <h3>硬地滾球</h3>
                      <div>
                        <p style="color: #8b4d00;">基本:</p>
                        <p>四人一隊每人持2顆色球、隊伍自己安排進攻順序輪流投擲色球、先功方先投擲一顆目標球再接著投擲色球</p>
                        <p>把藍色或紅色的球投向稱為目標球的旁邊</p>
                        <p>投目標球時不可出界，否則會把投擲權給予對方</p>
                        <p>若未能把藍球或紅球投向白球旁邊，他們要再擲直至成功為止</p>
                        <p>不可把球投出界外，否則再擲以及失分</p>
                        <p>靠近白色球的藍色球或紅色球的一方便可得分，接近的球愈多分數愈高；最高分者為勝方</p>
                        <p style="color: #8b4d00;">場次&回合:</p>
                        <p>每一場次會玩5局、每局雙方各擲8顆球+先手方投擲目標球</p>
                        <p style="color: #8b4d00;">計分:</p>
                        <p>單局中雙方球都投擲完畢時，計算最接近目標球的色球數量，有多少顆色球比對方最靠近的色球還近的每一球皆算一分</p>
                        <p>5局遊戲最後加總分數來比較輸贏</p>
                        <p style="color: #8b4d00;">限制:</p>
                        <p>參賽者全程只能坐在滾輪椅上移動</p>
                        <p style="color: #8b4d00;">優秀動作說明:</p>
                        <p>1. 防守: 在自己投擲完成功靠近目標球後，並換對手擲球時，使對方1人以上連續投擲皆無法換邊</p>
                        <p>2. 逆轉: 在自己投擲時擊中目標球，並使其目標球因移動而轉換與之最近距離為己方球</p>

                      </div>
                    </li>
                    <li>
                      <h3>盲人門球</h3>
                      <div>
                        <p style="color: #8b4d00;">基本:</p>
                        <p>四人一隊，由三人下場比賽、一人站在場外使用聲音輔助場內隊員</p>
                        <p>將球用滾地的方式攻入對方球門</p>
                        <p>若犯規第一次會判對方發球、第二次直接由對方得一分</p>
                        <p style="color: #8b4d00;">犯規:</p>
                        <p>1. 短球﹕攻方運動員未能把球滾至對方區域</p>
                        <p>2. 高球﹕攻方運動員在發球時把球投至半空</p>
                        <p>3. 第三次發球﹕一位球員只能於半場中發球兩次，第三次為違規</p>
                        <p>4. 非法防守﹕一方球員走進對方範圍，都是違規行為</p>
                        <p>5. 觸摸眼罩﹕運動員在未經裁判同意下觸摸眼罩</p>
                        <p style="color: #8b4d00;">場次&回合:</p>
                        <p>全長24分鐘，分為上、下半場，每半場均長12分鐘、若24分鐘無法分出勝負，則進行3分鐘的加時賽，首先進球得分者勝</p>
                        <p style="color: #8b4d00;">計分:</p>
                        <p>每攻進一球得一分，較高分的一隊為勝方</p>
                        <p style="color: #8b4d00;">限制:</p>
                        <p>參賽者全程帶著盲人眼鏡(看不到)</p>
                        <p>參賽者只能在一地磚的前後距離內橫向移動，超出由裁判制止並由輔導員協助回到區域中(大會議室)</p>
                      </div>
                    </li>
                  </ul>
                  <h2>門檻條件</h2>
                  <md-table class="news-table smaller-table">
                    <md-table-row>
                      <md-table-head style="width: 20%">項目</md-table-head>
                      <md-table-head>門檻</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>硬地滾球</md-table-cell>
                      <md-table-cell>
                        <p>I.無出界</p>
                        <p>II.發生單次防守3球(含)以上</p>
                        <p>III.發生逆轉4次(含)以上</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>盲人門球</md-table-cell>
                      <md-table-cell>
                        <p>I. 無犯規</p>
                        <p>II. 單人得分超過(含)5分</p>
                        <p>III. 單人得分超過10分</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-09-30 【 戰報 】桌游月-時光迴廊</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、桌游月-時光迴廊 賽後排名總結</h1>
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
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>74</md-table-cell>
                    <md-table-cell>+99</md-table-cell>
                    <md-table-cell>+6</md-table-cell>
                    <md-table-cell>179</md-table-cell>
                    <md-table-cell>II</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>124</md-table-cell>
                    <md-table-cell>+87</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>212</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>36</md-table-cell>
                    <md-table-cell>+75</md-table-cell>
                    <md-table-cell>+2</md-table-cell>
                    <md-table-cell>113</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>48</md-table-cell>
                    <md-table-cell>+60</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>108</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>102</md-table-cell>
                    <md-table-cell>+51</md-table-cell>
                    <md-table-cell>+2</md-table-cell>
                    <md-table-cell>155</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>105</md-table-cell>
                    <md-table-cell>+51</md-table-cell>
                    <md-table-cell>+3</md-table-cell>
                    <md-table-cell>159</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>133</md-table-cell>
                    <md-table-cell>+42</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>175</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>42</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>+2</md-table-cell>
                    <md-table-cell>92</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>活動優勝家族為: 蘭尼斯特 !! </p>
                  <p>二、預測成功名單：</p>
                </md-content>
                <md-table>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                  </md-table-row><md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell><md-table-cell>
                      <p>愛你</p>
                      <p>街友</p>
                      <p>牛年大吉,牛轉乾坤</p>
                      <p>哇</p>
                      <p>油炸包龍星</p>
                      <p>睿恩</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell><md-table-cell>
                      <p>卓耿</p>
                      <p>艾利森</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>坦格利安</md-table-cell><md-table-cell>
                      <p>狼皮羊</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>史塔克</md-table-cell><md-table-cell>
                      <p>走位有如霍金般風騷</p>
                      <p>傳話仔</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell><md-table-cell>
                      <p>本機使用者</p>
                      <p>給我一杯酒</p>
                      <p>精靈</p>
                    </md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>徒利</md-table-cell><md-table-cell>
                      <p>天竺鼠阿比</p>
                      <p>聲林之王</p>
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
                    <md-table-cell>佛度有緣人</md-table-cell>
                    <md-table-cell>白金</md-table-cell>
                  </md-table-row> -->
                </md-table>

                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">四、獎牌異動與提示</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">獎牌</md-table-head>
                    <md-table-head>相應積分</md-table-head>
                    <md-table-head>當前獲得家族</md-table-head>
                    <md-table-head>條件提示</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獨孤求敗</md-table-cell>
                    <md-table-cell>10</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>跟活動的門檻達成(成果)有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>工作不養閒人</md-table-cell>
                    <md-table-cell>20</md-table-cell>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>跟活動出賽人員有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>團隊不養懶人</md-table-cell>
                    <md-table-cell>30</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>跟家族成員的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>寸草春暉</md-table-cell>
                    <md-table-cell>40</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>跟家族成員所在組別有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>情投意合</md-table-cell>
                    <md-table-cell>50</md-table-cell>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>跟家族成員與族長的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>九淺一深</md-table-cell>
                    <md-table-cell>60</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>跟每次活動排名有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>如夢似幻</md-table-cell>
                    <md-table-cell>70</md-table-cell>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>
                      <p style="color: #c50101">***該獎牌應不會再異動直接公布條件***</p>
                      <p style="color: #c50101">1. 家族的女性成員總數最多</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>含辛茹苦</md-table-cell>
                    <md-table-cell>80</md-table-cell>
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
                    <md-table-cell>跟家族成員的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>魚知水恩乃幸福之源</md-table-cell>
                    <md-table-cell>100</md-table-cell>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>跟心有關</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <!-- <span class="material-icons mr-6-px">local_fire_department</span> -->
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-09-17 【 戰報 】【 新增MVP票選結果 】趣味競技月</span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">一、趣味競技月 賽後排名總結</h1>
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
                    <md-table-cell>66</md-table-cell>
                    <md-table-cell>+39</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>105</md-table-cell>
                    <md-table-cell>IV</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>98</md-table-cell>
                    <md-table-cell>+33</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>132</md-table-cell>
                    <md-table-cell>II</md-table-cell>
                  </md-table-row>
                  
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>67</md-table-cell>
                    <md-table-cell>+63</md-table-cell>
                    <md-table-cell>+5</md-table-cell>
                    <md-table-cell>135</md-table-cell>
                    <md-table-cell>I</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>24</md-table-cell>
                    <md-table-cell>+39</md-table-cell>
                    <md-table-cell>+1</md-table-cell>
                    <md-table-cell>64</md-table-cell>
                    <md-table-cell>VII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>18</md-table-cell>
                    <md-table-cell>39</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>57</md-table-cell>
                    <md-table-cell>VIII</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>16</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>64</md-table-cell>
                    <md-table-cell>VI</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>89</md-table-cell>
                    <md-table-cell>+36</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>125</md-table-cell>
                    <md-table-cell>III</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>30</md-table-cell>
                    <md-table-cell>+48</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>78</md-table-cell>
                    <md-table-cell>V</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>活動優勝家族為: 坦格利安 !! </p>
                  <p>二、預測成功名單：</p>
                </md-content>
                <md-table>
                  <md-table-row>
                    <md-table-head>家族</md-table-head>
                    <md-table-head>預測人</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell><md-table-cell>珂珂</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell><md-table-cell>🖕上班滑起來📱</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>坦格利安</md-table-cell><md-table-cell>
                      <p>悲傷滷肉飯</p>
                      <p>異世界轉生的中二生活</p>
                      <p>小鳥胃☄☄</p>
                      <p>乂☆煞氣a丁尼☆乂</p>
                      <p>🥺🥺🥺🥺🥺</p>
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
                  <!-- <md-table-row>
                    <md-table-cell colspan="3">等待投票中..</md-table-cell>
                  </md-table-row> -->
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>佛度有緣人</md-table-cell>
                    <md-table-cell>白金</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>貨拉拉拉不拉拉不拉多</md-table-cell>
                    <md-table-cell>鑽石</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>包子入侵</md-table-cell>
                    <md-table-cell>一般</md-table-cell>
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
                    <md-table-cell>🖕上班滑起來📱</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>阿強</md-table-cell>
                    <md-table-cell>大師</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>海獅會害怕</md-table-cell>
                    <md-table-cell>白金</md-table-cell>
                  </md-table-row>
                </md-table>

                <md-table>
                  <md-table-toolbar>
                    <h1 class="md-title">四、新獲獎牌通知</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>獎牌名稱</md-table-head>
                    <md-table-head>獲得家族</md-table-head>
                    <md-table-head>獎牌派出時間</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/60.png`" />九淺一深</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>第二輪選秀完有符合"某條件" ( 9 ) 以上</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/80.png`" />含辛茹苦</md-table-cell>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell>第二輪選秀完第一個遊戲結束</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/90.png`" />阿姨我不想努力了</md-table-cell>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>第二輪選秀完第一個遊戲結束</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>所有獎牌的"派出時間"都已經過，還有一張獎牌未派出『魚知水恩乃幸福之源』,目前尚未有家族獲得，是因為還未有家族達成獲得條件</p>
                  <p>而以上"派出時間"剛剛到的獎牌，有可能是之前已經符合條件了。</p>
                  <p>現在，已全數獎牌都符合派出時間，請家族成員只需推理其"獲得條件"即可。</p>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <!-- <span class="material-icons mr-6-px">local_fire_department</span> -->
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-09-15 【 九月 】【 Edition Ver.4 】 桌游月-時空迴廊 </span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 25%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>時間</md-table-cell>
                    <md-table-cell>2021 / 09 / 22 ~ 2021 / 09 / 30</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>地點</md-table-cell>
                    <md-table-cell>辦公室</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>遊戲項目</md-table-cell>
                    <md-table-cell>
                      <p>* 五子棋 (十九世紀</p>
                      <p>* 德州撲克 (二十世紀</p>
                      <p>* 狼人真言 (二十一世紀</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h2>活動辦法</h2>
                  <ul>
                    <li>各家族族長請於 09 / 17 中午 12:00 以前將各個場次的上場人員進行安排</li>
                    <li>每場次各家族皆會派一人參與，依照不同遊戲將獲得不同的"勝場值"
                      <md-table class="news-table smaller-table">
                        <md-table-toolbar>
                          <h1 class="md-title">勝場值公式:</h1>
                        </md-table-toolbar>
                        <md-table-row>
                          <md-table-cell>五子棋</md-table-cell>
                          <md-table-cell>每場次會對弈三盤, 每盤獲勝即獲得1分勝場值</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>德州撲克</md-table-cell>
                          <md-table-cell>每場次初始籌碼 10000 結算時【(剩餘籌碼數量 - 初始籌碼) / 5000 (無條件進位)】將會轉換為勝場值</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>狼人真言</md-table-cell>
                          <md-table-cell>
                            <p>每場次玩3局謎題，每一謎題</p>
                            <p>* 場內獲勝方每人+1勝場值；</p>
                            <p>* 當場內謎題被解答時，場外可以猜誰是先知，猜對+1勝場值；</p>
                            <p>* 當場內謎題未被解答時，場外可以猜謎題內容是甚麼，猜對+1勝場值；</p>
                          </md-table-cell>
                        </md-table-row>
                      </md-table>
                    </li>
                    <li>詳細場次表會以雲端Excel 呈現，各家族族長皆有權限更動</li>
                    <li>09 / 30 最後一場結束後會馬上結算勝場值，由大到小進行排名排序，第一名可得60團體積分第二名48團體積分..以此類推</li>
                    <li style="color: #d04740;">(進入第三季，各項活動的家族團體積分會相較第一、二季乘上2倍)</li>
                    <li>(結算後於當日下午15:30至遊戲室進行地圖板塊移動)</li>
                  </ul> 
                  <h2>活動規則&玩法</h2>
                  <ul>
                    <li>
                      <h3>五子棋</h3>
                      <div>
                        <p>基本:</p>
                        <p>由黑棋先行，黑白雙方輪流落子在棋盤的交叉點。</p>
                        <p>先在棋盤上形成橫、直、或縱的連續五個棋子者（連五）為勝</p>
                        <p>延伸:</p>
                        <p style="color:#dd0000">採用國際規則SWAP</p>
                        <p>由先手者下2黑1白子，接著由後手者選擇 A.使用白子並下一白子 或 B.使用黑子直接換手</p>
                        <p>賽制: (每場次)</p>
                        <md-table>
                          <md-table-row>
                            <md-table-cell><img style="max-width:800px; width: 100%;" :src="`/static/imgs/rules/renju_1.jpg`" /></md-table-cell>
                          </md-table-row>
                          <md-table-row>
                            <md-table-cell><img style="max-width:800px; width: 100%;" :src="`/static/imgs/rules/renju_2.jpg`" /></md-table-cell>
                          </md-table-row>
                          <md-table-row>
                            <md-table-cell><img style="max-width:800px; width: 100%;" :src="`/static/imgs/rules/renju_3.jpg`" /></md-table-cell>
                          </md-table-row>
                          <md-table-row>
                            <md-table-cell><img style="max-width:800px; width: 100%;" :src="`/static/imgs/rules/renju_4.jpg`" /></md-table-cell>
                          </md-table-row>
                        </md-table>
                      </div>
                      
                    </li>
                    <li>
                      <h3>德州撲克</h3>
                      <div>
                        <p>基本: 請參考網址 (<a href="https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%B7%9E%E6%92%B2%E5%85%8B" target="_blank">德州撲克</a>)</p>
                        <p>延伸:</p>
                        <p style="color:#6214f9">*** 採用無限注玩法 (注碼沒有任何限制，但最少下注是"大盲"金額) ***</p>
                        <p>每一輪到自己時可執行四個以下動作 1.蓋牌(fold) 2.跟牌(call) 3.加注(raise) 4.梭哈(All-in)</p>
                        <p>Fold : 放棄自己已經注入彩池的籌碼並棄掉手牌</p>
                        <p>Call : 跟注將面前籌碼加到等同上一位玩家的此輪注碼</p>
                        <p style="color:#6214f9">*** Raise : 加注，任意加到比上一位玩家更高的注碼 ***</p>
                        <p>All-in: 下注自己所有籌碼，此時會將彩池籌碼分離，並且可獲得到底開牌勝負的權利</p>
                        <p style="color:#6214f9">*** 每一輪有15秒時間可以思考，若時間超過15秒無法決策，先由荷官給予第一次警告提醒，再過5秒無法決策直接算棄牌 ***</p>
                        <p>賽制: (每場次)</p>
                        <p>八人同時上桌，從荷官左手邊開始小盲大盲注，計時20分鐘</p>
                        <p>再以下三種情況時都會結算成績</p>
                        <p>(1)時間結束</p>
                        <p>(2)撲克牌全數用盡 <span style="color: #6214f9">*** (6副撲克牌) ***</span></p>
                        <p>(3)一人獨贏全場</p>
                      </div>
                    </li>
                    <li>
                      <h3>狼人真言</h3>
                      <div>
                        <p>基本:</p>
                        <md-table class="news-table smaller-table">
                          <md-table-row>
                            <md-table-cell style="width: 20%">玩家數</md-table-cell>
                            <md-table-cell>《 8 》</md-table-cell>
                          </md-table-row>
                          <md-table-row>
                            <md-table-cell>角色牌數</md-table-cell>
                            <md-table-cell><span style="color: #6214f9">***《 9 》一張村長、一張先知、三張狼人、四張村民 ***</span></md-table-cell>
                          </md-table-row>
                          <md-table-row>
                            <md-table-cell>陣營</md-table-cell>
                            <md-table-cell>
                              <p>1. 村莊 > 想辦法念出魔法咒語，並保護先知</p>
                              <p>2. 狼人 > 隱藏自己並阻礙村莊找到魔法咒語，或者殺掉先知</p>
                            </md-table-cell>
                          </md-table-row>
                          <md-table-row>
                            <md-table-cell>玩法</md-table-cell>
                            <md-table-cell>
                              <p>1. 每人抽取一張身分牌從9張抽走8張，抽到村長時立即翻開身分牌，並將剩下來的1張牌當成自己的真實身份；(若村長無人抽到則洗牌重抽)</p>
                              <p> * 接著所有人天黑請閉眼，由村長優先起來觀看魔法咒語，此時魔法咒語會有2個，請村長從2個魔法咒語中選擇其一</p>
                              <p> * 村長閉眼後，由先知起來觀看村長選擇的魔法咒語</p>
                              <p style="color:#6214f9"> * 先知閉眼後，由狼人起來觀看村長選擇的魔法咒語</p>
                              <p> * 狼人閉眼後，天亮請睜眼，遊戲開始</p>
                              <p>2. 村長: 負責回答所有人輪流的問答，並回答 (是、不是、很接近、無相關) 其中一項，不能回答其他的話</p>
                              <p>3. 村民: 負責輪流對村長提問跟魔法咒語有關的線索，並念出魔法咒語</p>
                              <p>4. 狼人: 負責干擾村民使他們不易知道魔法咒語，並隱藏自己</p>
                              <p>5. 遊戲過程由村長左手邊第一位玩家開始輪流對村長發問，直到時間結束或唸出魔法咒語，才會進入第一階段結束</p>
                              <p>6. 當第一階段結束時，有兩種情況 A. 魔法咒語被念出  B. 時間到，無法解出魔法咒語</p>
                              <p>__6-A. 魔法咒語被念出時，村莊陣營暫時獲得勝利，但狼人有一次機會選擇一位村民刺殺，如果該村民為"先知"，則狼人最終勝利</p>
                              <p>__6-B. 時間到時，狼人暫時獲得勝利，村民們有一次機會，選擇一位玩家指認，如果該玩家為狼人，則村莊獲得最終勝利</p>
                            </md-table-cell>
                          </md-table-row>
                        </md-table>
                        <p>賽制: (每場次)</p>
                        <p>八人同時遊玩，共三道魔法咒語，每一魔法咒語持續6分鐘</p>
                        <p>遊戲結束時有兩種可能:</p>
                        <p>1. 魔法咒語解開:</p>
                        <p> * 場內狼人討論並在1分鐘內找先知，場外也同時討論提交答案誰是先知</p>
                        <p>2. 時間結束，魔法咒語未被解開:</p>
                        <p> * 用黑布蓋住直播，並讓現場好人觀看魔法咒語，接著場內好人討論並在1分鐘內指認狼人，場外則討論提交魔法咒語</p>
                        <p> * (場內的玩家不能在討論時講到"魔法咒語"，如有違此規，當次活動該家族勝場值歸0且該局的場外不進行勝場值加分)</p>
                        <p></p>
                      </div>
                    </li>
                  </ul>
                  <h2>門檻條件</h2>
                  <md-table class="news-table smaller-table">
                    <md-table-row>
                      <md-table-head style="width: 20%">項目</md-table-head>
                      <md-table-head>門檻</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>五子棋</md-table-cell>
                      <md-table-cell>
                        <p>I.對弈至少15手</p>
                        <p>II.獲勝時使用雙四或活三沖四</p>
                        <p>III.斷定5手之後獲勝且無須落子已成定局(宣告時請裁判檢查)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>德州撲克</md-table-cell>
                      <md-table-cell>
                        <p>I. 一次跟到底開牌勝負</p>
                        <p>II. 不開牌贏得獎池 (偷雞)</p>
                        <p>III. 一次 ALL-IN 贏下獎池至少20000以上籌碼 (無論是否開牌)</p>
                      </md-table-cell>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>狼人真言</md-table-cell>
                      <md-table-cell>
                        <p style="color:#6214f9">I. (1).提一個問題使村長回答:是 / (2).擔任村長</p>
                        <p>II. (1).擔任好人陣營抓到狼人 / (2).擔任狼人並獲勝 (完成其一即可)</p>
                        <p>III. (1).擔任村民念出魔法咒語 / (2).三局全勝 (完成其一即可)</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>
              </md-list>
            </md-list-item>
            

            <md-list-item md-expand>
              <!-- <span class="material-icons mr-6-px">local_fire_department</span> -->
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-09-10 【 獎牌提示 】 獎牌條件提示 </span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-row>
                    <md-table-head style="width: 20%">獎牌</md-table-head>
                    <md-table-head>相應積分</md-table-head>
                    <md-table-head>啟動時間</md-table-head>
                    <md-table-head>條件提示</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>獨孤求敗</md-table-cell>
                    <md-table-cell>10</md-table-cell>
                    <md-table-cell>第一次活動結算 (T2</md-table-cell>
                    <md-table-cell>跟活動的門檻達成(成果)有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>工作不養閒人</md-table-cell>
                    <md-table-cell>20</md-table-cell>
                    <md-table-cell>第二次活動結算 (T3</md-table-cell>
                    <md-table-cell>跟活動出賽人員有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>團隊不養懶人</md-table-cell>
                    <md-table-cell>30</md-table-cell>
                    <md-table-cell>第二次活動結算 (T3</md-table-cell>
                    <md-table-cell>跟家族成員的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>寸草春暉</md-table-cell>
                    <md-table-cell>40</md-table-cell>
                    <md-table-cell>第一輪選秀 (T1</md-table-cell>
                    <md-table-cell>跟家族成員所在組別有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>情投意合</md-table-cell>
                    <md-table-cell>50</md-table-cell>
                    <md-table-cell>第二輪選秀 (T4</md-table-cell>
                    <md-table-cell>跟家族成員與族長的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>九淺一深</md-table-cell>
                    <md-table-cell>60</md-table-cell>
                    <md-table-cell>第二輪選秀 (T4</md-table-cell>
                    <md-table-cell>跟每次活動排名有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>如夢似幻</md-table-cell>
                    <md-table-cell>70</md-table-cell>
                    <md-table-cell>第一輪選秀 (T1</md-table-cell>
                    <md-table-cell>
                      <p style="color: #c50101">***該獎牌應不會再異動直接公布條件***</p>
                      <p style="color: #c50101">1. 家族的女性成員總數最多</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>含辛茹苦</md-table-cell>
                    <md-table-cell>80</md-table-cell>
                    <md-table-cell>第二輪選秀完第一活動結算 (T5</md-table-cell>
                    <md-table-cell>跟家族成員的工號有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>阿姨我不想努力了</md-table-cell>
                    <md-table-cell>90</md-table-cell>
                    <md-table-cell>第二輪選秀完第一活動結算 (T5</md-table-cell>
                    <md-table-cell>跟家族成員的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>魚知水恩乃幸福之源</md-table-cell>
                    <md-table-cell>100</md-table-cell>
                    <md-table-cell>第一次活動結算 (T2</md-table-cell>
                    <md-table-cell>跟心有關</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h2>關於啟動時間</h2>
                  <p> * 啟動時間指的是該獎牌至少符合此時間點，才會派發到符合條件的家族上</p>
                  <h2>關於隱藏條件</h2>
                  <p> * 每一個獎牌都有其相應的條件，這些條件都是絕對客觀、可紀錄、且可數值化、量化的</p>
                  <p> * 符合條件後並且過了啟動時間就會派發到該家族身上，於每一次活動後結算</p>
                  <p> * 除了符合條件外，由於條件本身是可以量化的，所以會有"最貼近"，"最符合"的家族出現時有可能發生獎牌置換</p>
                  <h2>尚未派發獎牌之特別優惠</h2>
                  <p><img class="arena-house-img" :src="`/static/imgs/trophy/100.png`" /> 魚知水恩乃幸福之源</p>
                  <p> * 因應疫情，整年度的Outing活動皆以取消，原先此獎牌條件的基本數值<span style="color:red">為50次</span>，現在直接<span style="color:red">降到30次</span></p>
                  <p> * 額外提示: 依照歷年的福委活動經驗，此條件的發生率，<span style="color:red">戶外的活動發生機率會高於辦公室內的活動</span></p>
                  <p> * 額外提示2: 目前此數值領先的家族為: <span style="color:red">馬泰爾、拜拉席恩</span></p>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="md-list-item-text">2021-05-14 【 健康舒活特別計畫 】【 Edition Ver.2 】 個資條款&獎勵辦法</span>
              <md-list slot="md-expand">
                <!--  -->
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h3>一、活動內容異動</h3>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">項目</md-table-head>
                    <md-table-head>修改前</md-table-head>
                    <md-table-head>修改後定案</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>1. 測量體重 & 報名</md-table-cell>
                    <md-table-cell>各自找福委報名 + 測量</md-table-cell>
                    <md-table-cell><p>找 Mavis 報名+測量 開放時間為 5/17 - 5/31 的每日平日下午3~4點</p><p style="color: red;">夜班人員請私敲 Mavis 預約報名時間</p></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2. 個資公開方式</md-table-cell>
                    <md-table-cell>必須公開自己的體重/體脂才能獲得額外獎勵</md-table-cell>
                    <md-table-cell>
                      <p>只要報名都能挑戰額外獎勵</p>
                      <p style="color: red;">統一由 Mavis 紀錄&計算個人成績，所有人的體重/體脂數值不對外公開</p>
                      <p>最終只會列出各家族整體加總之成積，與個人達成之門檻&排序</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>3. 身高登入方式</md-table-cell>
                    <md-table-cell>自己輸入</md-table-cell>
                    <md-table-cell>
                      <p style="color: red;">統一由 Mavis 取公司歷年健康檢查之身高</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>4. 測量須知</md-table-cell>
                    <md-table-cell>無</md-table-cell>
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
                      <md-table-cell>原年度賽制裡 八大家族排名競賽，所獲得之團體積分與個人RV</md-table-cell>
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
                      <md-table-cell><p>由 Mickey, Dada, Snow, Jack 四人所得之分數再乘3 (12人份) 來設立標準分數</p><p>家族報名成員全部加總之分數大於等於此標準分數</p></md-table-cell>
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