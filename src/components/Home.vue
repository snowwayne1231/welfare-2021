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
              <span class="md-list-item-text">2021-10-06 【 福委夥伴鎖定 】 提前暫定福委表演夥伴</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">預先鎖定人選，好讓大家有心理準備~</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 35%">福委</md-table-head>
                    <md-table-head>人選</md-table-head>
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
                      任何抗拒表演的人都有可能 * 7
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


            <md-list-item md-expand v-if="overDate('2021/10/07')">
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="md-list-item-text">2021-10-07 【 萬聖節 】 透抽遊戲</span>
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
                      <p>活動當天分別於12:30與15:30會有特定遊戲啟動</p>
                      <p>限時30分鐘內達到指定過關人數，即可全體獲得獎勵</p>
                      <p style="color:#a72600">(12:30場通關人數需達46人、15:30場通關人數需達60人)</p>
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
                      <p>1. 於12:30達成46人通關遊戲可獲乙次</p>
                      <p>2. 於15:30達成60人通關遊戲可再獲乙次</p>
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


            <md-list-item md-expand v-if="overDate('2021/10/01')">
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="material-icons mr-6-px">build</span>
              <span class="md-list-item-text">2021-10-06 【 十月 】睿訊微帕拉林匹克運動會</span>
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
                        <p>若犯規第一次會判對方發球、第二次之後直接由對方得一分</p>
                        <p style="color: #8b4d00;">犯規:</p>
                        <p>1. 短球﹕攻方運動員未能把球滾至對方區域</p>
                        <p>2. 高球﹕攻方運動員在發球時把球投至半空</p>
                        <p>3. 第三次發球﹕一位球員只能於半場中發球兩次，第三次為違規</p>
                        <p>4. 非法防守﹕一方球員走進對方範圍，都是違規行為</p>
                        <p>5. 觸摸眼罩﹕運動員在未經裁判同意下觸摸眼罩</p>
                        <p style="color: purple">6. 非法防守(RV版)﹕一方球員離開腳下初始範圍(範圍用膠帶區分)</p>
                        <p style="color: #8b4d00;">場次&回合:</p>
                        <p>全長24分鐘，分為上、下半場，每半場均長12分鐘、若24分鐘無法分出勝負，則進行3分鐘的加時賽，首先進球得分者勝</p>
                        <p style="color: #8b4d00;">計分:</p>
                        <p>每攻進一球得一分，較高分的一隊為勝方</p>
                        <p style="color: #8b4d00;">限制:</p>
                        <p>參賽者全程帶著盲人眼鏡(看不到)<span style="color: purple">；女性球員會帶弱視眼鏡(可微透光看到人形)</span></p>
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
                        <p>II.發生防守3球(含)以上</p>
                        <p>III.發生逆轉5次(含)以上</p>
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
              <span class="material-icons mr-6-px">build</span>
              <span class="md-list-item-text">2021-10-06 【 戰報 】桌游月-時光迴廊</span>
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
                    <md-table-cell><span style="color: red">III</span></md-table-cell>
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
                    <md-table-cell>159 <span style="color: red">+ 20 (綠古城)</span></md-table-cell>
                    <md-table-cell><span style="color: red">II</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>133</md-table-cell>
                    <md-table-cell>+42</md-table-cell>
                    <md-table-cell>+0</md-table-cell>
                    <md-table-cell>175</md-table-cell>
                    <md-table-cell><span style="color: red">IV</span></md-table-cell>
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
                  <!-- <md-table-row>
                    <md-table-cell colspan="3">等待投票中..</md-table-cell>
                  </md-table-row> -->
                  <md-table-row>
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
                  </md-table-row>
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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="material-icons mr-6-px">build</span>
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