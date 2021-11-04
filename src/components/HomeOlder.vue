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
              <span class="md-list-item-text">2021-09-15 【 九月 】 桌游月-時空迴廊 </span>
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
              <!-- <span class="material-icons mr-6-px">local_fire_department</span> -->
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-09-10 【 教學 】 能力點數詳細 </span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h2>如何使用能力點數</h2>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-cell colspan="2"><img :src="`/static/imgs/ability.jpg`" /></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head style="width: 20%">區域</md-table-head>
                    <md-table-head>詳細說明</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>A</md-table-cell>
                    <md-table-cell>當前可使用的能力點數餘額，按下確定後就無法再次更改</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>B</md-table-cell>
                    <md-table-cell>使用+與-號來對當前能力編輯，在未按下"確定"之前都可以任意調適</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>C</md-table-cell>
                    <md-table-cell>能力五象圖，黃色底為初始自己設定的能力值等級，藍色底色為能力點數額外加成的能力</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <h2>如何獲得能力點數</h2>
                  <p>以目前來說，有三種可以獲得能力點數的管道</p>
                  <p>1. 族長使用"宣誓"並讓家族成員一員成為封臣時，所有封臣皆可獲得</p>
                  <p>2. 單季活動競賽全數預測冠軍成功，該成員可獲得</p>
                  <p>3. 健康舒活計劃中得到相應名次</p>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px"></span>
              <span class="md-list-item-text">2021-09-10 【 選秀 】 Season 3 選秀結果</span>
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
                    <md-table-cell>125</md-table-cell>
                    <md-table-cell>
                      <p>(-10) = 洲子街大地主</p>
                      <p>(-13) =  薇薇安 </p>
                    </md-table-cell>
                    <md-table-cell>102</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell>132</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = 超越時空的傳奇</p>
                      <p style="color: blue;">(免) =  沒收功就罵髒話 </p>
                      <p>(-10) =  深有牛奶糖 </p>
                      <p>(- 0) = VC</p>
                      <p>(離職)(+ 6) = 霸霸</p>
                      <p>(離職)(+ 5) = 一級弓箭手</p>
                    </md-table-cell>
                    <md-table-cell>133</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell>135</md-table-cell>
                    <md-table-cell>
                      <p style="color: blue;">(免) = 脾氣最好的姐姐 ◉‿◉</p>
                      <p>(-11) = 污辱米糕</p>
                    </md-table-cell>
                    <md-table-cell>124</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell>105</md-table-cell>
                    <md-table-cell>
                      <p style="color: blue;">(免) = 給我一杯酒</p>
                      <p style="color: blue;">(免) = HA↗HA↘HA↗HA↘</p>
                    </md-table-cell>
                    <md-table-cell>105</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell>78</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = 愛你</p>
                      <p style="color: blue;">(免) = 哇</p>
                      <p style="color: blue;">(免) = 牛年大吉,牛轉乾坤</p>
                      <p>(-14) = HSU</p>
                      <p>(-10) = 吃肥褲撐破</p>
                      <p>(離職)(+ 5) = 我心已打烊</p>
                      <p>(離職)(+10) = 熱血沸騰洗廁所殺手</p>
                      <p>(離職)(+ 5) = 涅法雷姆</p>
                    </md-table-cell>
                    <md-table-cell>74</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell>64</md-table-cell>
                    <md-table-cell>
                      <p>(-14) = 姜太公今天不想釣魚</p>
                      <p>(-14) = ㊣上班只為交朋友㊣</p>
                    </md-table-cell>
                    <md-table-cell>36</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell>57</md-table-cell>
                    <md-table-cell>
                      <p style="color: purple;">(免) = GoToSleep</p>
                      <p>(-15) = 走位有如霍金般風騷</p>
                      <p>(-16) = 傳話仔</p>
                      <p>(離職)(+16) = 貓貓貓頭鷹</p>
                    </md-table-cell>
                    <md-table-cell>42</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell>64</md-table-cell>
                    <md-table-cell>
                      <p style="color: blue;">(免) = 《鞋鞋你愛我》</p>
                      <p>(-13) = 八拉崩巴</p>
                      <p>(- 4) = 小鼠吉</p>
                      <p>(離職)(+ 1) = 石少甫</p>
                    </md-table-cell>
                    <md-table-cell>48</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p style="color: purple;">(免) 福委工作人員特權</p>
                  <p style="color: blue;">(免) 佔領封地招募獎勵</p>
                  <h2>二、第二季結束預測獎勵</h2>
                  <p>針對第二季"所有"活動皆預測冠軍正確的成員，給與能力點數獎勵，獎勵如下表:</p>
                  
                  <md-table>
                    <md-table-row>
                      <md-table-head>家族</md-table-head>
                      <md-table-head>成員</md-table-head>
                      <md-table-head>獎勵點數</md-table-head>
                    </md-table-row>
                    <md-table-row>
                      <md-table-cell>提利爾</md-table-cell><md-table-cell>珂珂</md-table-cell><md-table-cell>1</md-table-cell>
                    </md-table-row><md-table-row>
                      <md-table-cell>拜拉席恩</md-table-cell><md-table-cell>🖕上班滑起來📱</md-table-cell><md-table-cell>1</md-table-cell>
                    </md-table-row><md-table-row>
                      <md-table-cell>坦格利安</md-table-cell><md-table-cell>
                        <p>悲傷滷肉飯</p>
                        <p>異世界轉生的中二生活</p>
                        <p>小鳥胃☄☄</p>
                        <p>乂☆煞氣a丁尼☆乂</p>
                        <p>🥺🥺🥺🥺🥺</p>
                      </md-table-cell>
                      <md-table-cell>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                      </md-table-cell>
                    </md-table-row>
                  </md-table>
                </md-content>
              </md-list>
            </md-list-item>

            
            <md-list-item md-expand>
              <span class="md-list-item-text">2021-08-17 【 八月 】 健康舒活特別計劃 第二梯隊再開! </span>
              <md-list slot="md-expand">
                <md-content>
                  <h3> *** 因新冠肺炎疫情而延誤之特別計畫又再度開跑拉 ! ***</h3>
                  <p>無論您是因為居家無法報名或是對自己原先成果不滿意，現在都將有機會再度跟著老師動吃動!</p>
                </md-content>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title"></h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>活動時間</md-table-cell>
                    <md-table-cell>
                      延長至 2021/12/17
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>第二梯隊報名時間</md-table-cell>
                    <md-table-cell>
                      2021/08/17 開始報名至 2021/09/03
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>結算時間</md-table-cell>
                    <md-table-cell>
                      <div>
                        <p>* 第一梯結算日期為 10/01 ~ 10/15</p>
                        <p>* 第二梯結算日期為 12/06 ~ 12/17</p>
                      </div>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>活動方法</md-table-cell>
                    <md-table-cell>
                      <div>
                        <p>1. 報名時間內，於週一~週五之間每日下午3~4點找Mavis登記報名（夜班同仁請私訊Mavis另外約時間）</p>
                        <p>2. 選擇挑戰項目：體重 or 體脂肪</p>
                      </div>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>活動目標</md-table-cell>
                    <md-table-cell>
                      <div>
                        <p>1. 增 / 減體重：以公司儀器測量計算為準，取活動報名時紀錄與活動結束時之差距數</p>
                        <p>2. 減體脂：以公司儀器測量計算為準，取活動報名時紀錄與活動結束時之減少數值，沒有上下限。</p>
                      </div>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>分數計算公式</md-table-cell>
                    <md-table-cell>
                      <div>
                        <p>1. 體重：增加或減少的kg數</p>
                        <p>2. 體脂：減少之體脂率 x 100 x 1.531</p>
                        <p> * （女生條款：上述兩項最終分數再加乘x 1.58）</p>
                      </div>
                    </md-table-cell>
                  </md-table-row>
                  
                </md-table>
                <md-content>
                  <h3>*** 獎勵 ***</h3>
                  <p>1. 型男美女獎：家族成員中最多人符合BMI值正常範圍（18.5 – 24）</p>
                  <p>2. 破格加碼獎：家族全員分數高於（福委3人+Mickey分數) x 3</p>
                  <p>(獎勵內容與條件並無變動)</p>
                </md-content>
                
                
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="md-list-item-text">2021-08-18 【 九月 】 選秀 Season 3 </span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">選秀 Season 3</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 25%">日期時間</md-table-head>
                    <md-table-head></md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 /09 /10  15:00</md-table-cell>
                    <md-table-cell>
                      <div>
                        <p>選秀規則:</p>
                        <p>1. 各家族首位加入的成員身分為「封臣」，其餘為一般家人</p>
                        <p>2. 由當前團體積分落後的家族優先選擇</p>
                        <p>3. 此次選秀各家族可輪流補充2人</p>
                        <p>4. 若因人員離職,導致家族人數缺少,將於上述流程選完後,再給予選上相應人數</p>
                        <p>5. 被選擇的成員需與族長進行「默契大考驗」，成功乙次即可加入，最多失敗三次</p>
                        <p>6. 若默契大考驗失敗三次，該成員需與其他同輪次家族同時進行第二部分默契考驗以決定進入哪一家族</p>
                      </div>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p> *  如發現自己自動離開家族請別驚慌，自由國民們可以在S3重新選擇族長</p>
                  <p> *  請S3選秀人員務必於當日到場，如不克參加請找代理人協助</p>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="md-list-item-text">2021-05-17 【 五月 】【 Edition Ver.3 】 競技運動月 </span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">1. 競技項目</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">項目</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>軟彈槍 無間道</md-table-cell>
                    <md-table-cell>
                      <div>
                        <p>每場次最多玩3個小回合 每回合5分鐘 率先獲得2回合勝利即勝出</p>
                        <p>遊戲分為紅藍兩隊各4人，兩隊陣營分開對抗，每人隨機抽取一張身分牌</p>
                        <p>身分:</p>
                        <ul>
                          <li>國王x1</li>
                          <li>護衛x3</li>
                        </ul>
                        <p>裝備:</p>
                        <ul>
                          <li>國王: (軟彈槍) + (背心+正反面各一背包指示物) + (國王指示物)</li>
                          <li>護衛: (軟彈槍) + (背心+正反面各一背包指示物)</li>
                        </ul>
                        <p>勝利條件:</p>
                        <ul>
                          <li style="color: #ad1800;">擊破對方國王指示物，並且保護我方國王指示物不被破壞</li>
                        </ul>

                        <p>回合結算:</p>
                        <p>1. 每回合結束時計算背包指示物破壞情況</p>
                          <ul>
                            <li>a. 當前方背包指示物被破壞時，背心反過來穿讓前後背包指示物交換位置</li>
                            <li style="color: #ad1800;">b. 當前後兩個背包指示物都被破壞時</li>
                              <ul>國王:
                                <li style="color: #ad1800;">下一個回合開始不能使用軟彈槍</li>
                              </ul>
                              <ul>護衛:
                                <li style="color: #ad1800;">出局</li>
                              </ul>
                          </ul>
                          
                        <p>2. 當回合結束時計算國王指示物破壞數</p>
                          <ul>
                            <li>a. 成功破壞對方數量大於己方 = 勝利</li>
                            <li>b. 雙方破壞數相同 = 平手</li>
                          </ul>
                        
                        <p>門檻: 團隊拿下一回合勝利 / 兩個背包無損 / 最終勝利且背包無損</p>

                        <p>(如果第3回合還未分勝負進入驟死戰)</p>
                        <p>(驟死戰: 不計時，其中一方國王指示物先被破壞就輸，且全員會復活)</p>
                        <p>(禁止扭打、肢體接觸、跳躍由福委制止、只能用軟彈槍攻擊指示物)</p>
                      </div>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>眼疾手快</md-table-cell>
                    <md-table-cell>
                      <p>每一場8家族各1人，分紅藍兩組4v4</p>
                      <p>接棒基本規則: </p>
                      <ul>
                        <li>僅能使用單、雙手接棒並投入籃中，並且最後僅計算籃子內的棒數</li>
                        <li>棒子開始掉落前不可碰觸棒子</li>
                        <li>雙腳必須站立在橙色圓圈中，不可呈現趴、跪、坐 等姿勢，可以彎腰與屈膝</li>
                        <li>對於上述無規範之外範疇，福委酌情判斷是否為惡意 破壞遊戲公平行為，並擁有最終定奪權</li>
                      </ul>
                      <p>勝利條件:<span style="color: #ad1800;">接棒數 總和 較高的一方勝利</span></p>
                      <p>門檻: 接到 3 / 7 / 10 棒</p>
                      <p>(假設平局進入 負重驟死PK戰)</p>
                      <p>(雙方按照自訂棒次輪流 雙手負重進行遊戲 同棒次選手單次贏過對手則立即獲勝)</p>
                      <p><span style="color: #ad1800;">第二周的比賽額外給單場最高棒+1勝場數 (複數成員則全+)</span></p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>投籃機</md-table-cell>
                    <md-table-cell>
                      <p>每一場8家族各1人，分成紅藍兩組4v4</p>
                      <p>紅藍兩組人分開 由紅方4人優先進行，藍方可以自由選擇是否先進場觀看，在紅方進行到第三人時，會通知藍方4人進場</p>
                      <p>總成績於投籃機上分數之加總<span style="color: #ad1800;">(女性同仁條款: 最終分數+75分)</span></p>
                      <p>勝利條件: <span style="color: #ad1800;">由分數加總 較高的一方獲勝</span></p>
                      
                      <p>門檻: 分數100+ / 分數300+ / 分數500+</p>
                      <p>(分數相同會進入 雙方最高分的兩人驟死戰)</p>
                      <p><span style="color: #ad1800;">第二周的比賽 額外給最高分+1勝場數 (複數成員則全+)</span></p>
                    </md-table-cell>
                  </md-table-row> 
                </md-table>
                <md-content>
                  <h3>2. 家族排名</h3>
                  <p> * 每一場次的勝利都可為家族爭取 1 分的勝場分</p>
                  <p> * 第二周的比賽 (眼疾手快 / 投籃機) 會額外給單場最高分 額外再 1 分的勝場分</p>
                  <p> * 家族競賽的排名 由最後加總的勝場分排序，如果勝場分相同則以家族成員的門檻達成率當次排序原則</p>
                </md-content>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">3. 紅藍分隊</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 15%">家族</md-table-head>
                    <md-table-head>軟彈槍 無間道</md-table-head>
                    <md-table-head>眼疾手快</md-table-head>
                    <md-table-head>投籃機</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>艾林</md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>馬泰爾</md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>蘭尼斯特</md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>史塔克</md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>提利爾</md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>拜拉席恩</md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>坦格利安</md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>徒利</md-table-cell>
                    <md-table-cell><span style="color: blue;">藍隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                    <md-table-cell><span style="color: red;">紅隊</span></md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-head colspan="4">陣線整理</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell style="width: 15%"></md-table-cell>
                    <md-table-cell>
                      <table>
                        <tbody>
                          <tr>
                            <td style="color: red;">艾林</td>
                            <td rowspan="4" style="text-align: center;">VS</td>
                            <td style="color: blue;">蘭尼斯特</td>
                          </tr>
                          <tr><td style="color: red;">馬泰爾</td><td style="color: blue;">拜拉席恩</td></tr>
                          <tr><td style="color: red;">史塔克</td><td style="color: blue;">坦格利安</td></tr>
                          <tr><td style="color: red;">提利爾</td><td style="color: blue;">徒利</td></tr>
                        </tbody>
                      </table>
                    </md-table-cell>
                    <md-table-cell>
                      <table>
                        <tbody>
                          <tr>
                            <td style="color: red;">馬泰爾</td>
                            <td rowspan="4" style="text-align: center;">VS</td>
                            <td style="color: blue;">艾林</td>
                          </tr>
                          <tr><td style="color: red;">蘭尼斯特</td><td style="color: blue;">史塔克</td></tr>
                          <tr><td style="color: red;">拜拉席恩</td><td style="color: blue;">提利爾</td></tr>
                          <tr><td style="color: red;">徒利</td><td style="color: blue;">坦格利安</td></tr>
                        </tbody>
                      </table>
                    </md-table-cell>
                    <md-table-cell>
                      <table>
                        <tbody>
                          <tr>
                            <td style="color: red;">艾林</td>
                            <td rowspan="4" style="text-align: center;">VS</td>
                            <td style="color: blue;">馬泰爾</td>
                          </tr>
                          <tr><td style="color: red;">蘭尼斯特</td><td style="color: blue;">提利爾</td></tr>
                          <tr><td style="color: red;">史塔克</td><td style="color: blue;">拜拉席恩</td></tr>
                          <tr><td style="color: red;">徒利</td><td style="color: blue;">坦格利安</td></tr>
                        </tbody>
                      </table>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-table class="news-table smaller-table">
                  <md-table-toolbar>
                    <h1 class="md-title">4. 時刻表</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">日期</md-table-head>
                    <md-table-head style="width: 20%">時間</md-table-head>
                    <md-table-head>項目</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 17 (一)</md-table-cell>
                    <md-table-cell>15 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 18 (二)</md-table-cell>
                    <md-table-cell>08 : 30</md-table-cell>
                    <md-table-cell>投籃機</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 19 (三)</md-table-cell>
                    <md-table-cell>15 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 20 (四)</md-table-cell>
                    <md-table-cell>08 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 21 (五)</md-table-cell>
                    <md-table-cell>15 : 30</md-table-cell>
                    <md-table-cell>投籃機</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 24 (一)</md-table-cell>
                    <md-table-cell>12 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 24 (一)</md-table-cell>
                    <md-table-cell>15 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 25 (二)</md-table-cell>
                    <md-table-cell>08 : 30</md-table-cell>
                    <md-table-cell>投籃機</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 25 (二)</md-table-cell>
                    <md-table-cell>12 : 30</md-table-cell>
                    <md-table-cell>投籃機</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 26 (三)</md-table-cell>
                    <md-table-cell>08 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 26 (三)</md-table-cell>
                    <md-table-cell>12 : 30</md-table-cell>
                    <md-table-cell>眼疾手快</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 27 (四)</md-table-cell>
                    <md-table-cell>12 : 30</md-table-cell>
                    <md-table-cell>投籃機</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>2021 / 05 / 27 (四)</md-table-cell>
                    <md-table-cell>15 : 30</md-table-cell>
                    <md-table-cell>投籃機</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-list>
            </md-list-item>

                      
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