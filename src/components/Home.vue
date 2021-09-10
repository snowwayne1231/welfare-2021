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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
              <span class="md-list-item-text">2021-09-10 【 教學 】 能力點數詳細 </span>
              <md-list slot="md-expand">
                <md-table class="news-table smaller-table">
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
              <span class="material-icons mr-6-px">local_fire_department</span>
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
                    <md-table-cell>活動的門檻達成(成果)有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>工作不養閒人</md-table-cell>
                    <md-table-cell>20</md-table-cell>
                    <md-table-cell>第二次活動結算 (T3</md-table-cell>
                    <md-table-cell>活動出賽人員有關</md-table-cell>
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
                    <md-table-cell>跟家族成員的能力值有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>九淺一深</md-table-cell>
                    <md-table-cell>60</md-table-cell>
                    <md-table-cell>第二輪選秀 (T4</md-table-cell>
                    <md-table-cell>跟每次活動結果有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>如夢似幻</md-table-cell>
                    <md-table-cell>70</md-table-cell>
                    <md-table-cell>第一輪選秀 (T1</md-table-cell>
                    <md-table-cell>跟家族成員有關</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>含辛茹苦</md-table-cell>
                    <md-table-cell>80</md-table-cell>
                    <md-table-cell>第二輪選秀完第一活動結算 (T5</md-table-cell>
                    <md-table-cell>跟家族成員有關</md-table-cell>
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
                  <p> * 因應疫情，整年度的Outing活動皆以取消，原先此條件的基本數值<span style="color:red">為50次</span>，現在直接降到<span style="color:red">30次</span></p>
                  <p> * 額外提示: 依照歷年的福委活動經驗，此條件的發生率，戶外的活動時發生率會高於辦公室內的活動</p>
                  <p> * 額外提示2: 目前此數值領先的家族為: <span style="color:red">馬泰爾、拜拉席恩</span></p>
                </md-content>
              </md-list>
            </md-list-item>


            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="material-icons mr-6-px">build</span>
              <span class="md-list-item-text">2021-09-10 【 九月 】 桌游月-時空迴廊 Ver.2 </span>
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
                    <li>每場次各家族皆會派一人參與，依照不同遊戲將獲得不同的"勝場值"</br>
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
                      </div>
                    </li>
                    <li>
                      <h3>德州撲克</h3>
                      <div>
                        <p>基本: 請參考網址 (<a href="https://zh.wikipedia.org/wiki/%E5%BE%B7%E5%B7%9E%E6%92%B2%E5%85%8B" target="_blank">德州撲克</a>)</p>
                        <p>延伸:</p>
                        <p style="color:#dd0000">採用彩池限注玩法</p>
                        <p>每一輪到自己時只能執行三個以下動作 1.蓋牌(fold) 2.跟牌(call) 3.加注(raise)</p>
                        <p>Fold : 放棄自己已經注入彩池的籌碼並棄掉手牌</p>
                        <p>Call : 跟注將面前籌碼加到等同上一位玩家的此輪注碼</p>
                        <p>Raise : 加注，每個人加注的籌碼數不能大於當前彩池籌碼數，且不能對自己加注的籌碼再加注</p>
                        <p> * (Ex: 假設大盲200小盲100，初始輪第一個喊加注的人只能選擇加注到300或200，因為初始彩池=大盲+小盲=200+100)</p>
                        <p> * (Ex: 假設初始第一人已加注300，初始輪第二個喊加注的人可以選擇加到600，因大小盲300+上一位加注300，當前彩池應等於600)</p>
                        <p>All-in: 與一般規則相同，當可加注金額大於自己所持有的所有籌碼時，可選擇All-in，此時會將彩池籌碼分離，並且可獲得到底開牌勝負的權利</p>
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
                            <md-table-cell>《 9 》一張村長、兩張先知、三張狼人、三張村民</md-table-cell>
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
                              <p> * 村長閉眼後，由狼人起來觀看村長選擇的魔法咒語</p>
                              <p> * 狼人閉眼後，由先知起來觀看村長選擇的魔法咒語</p>
                              <p> * 先知閉眼後，天亮請睜眼，遊戲開始</p>
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
                      </div>
                    </li>
                  </ul>
                </md-content>
              </md-list>
            </md-list-item>

            
            <md-list-item md-expand>
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="md-list-item-text">2021-09-08 【 戰報 】趣味競技月</span>
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
                  <md-table-row><md-table-cell colspan="3">等待投票中..</md-table-cell></md-table-row>
                  <!-- <md-table-row>
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
                  </md-table-row> -->
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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <!-- <span class="material-icons mr-6-px">build</span> -->
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
    
  }
}
</script>