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
              <span class="material-icons mr-6-px">vertical_align_top</span>
              <span class="md-list-item-text">2021-04-28 【 Game Of Revovision 地圖玩法 】</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">1. 地圖板塊</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 65%">種類</md-table-head>
                    <md-table-head>數量</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>單通路 (直線)</md-table-cell>
                    <md-table-cell>100張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>單通路 (轉彎)</md-table-cell>
                    <md-table-cell>100張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>三叉路</md-table-cell>
                    <md-table-cell>100張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>草原</md-table-cell>
                    <md-table-cell>100張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>十字路</md-table-cell>
                    <md-table-cell>70張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>舊神之樹(死路)</md-table-cell>
                    <md-table-cell>18張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>港口(臨海、死路)</md-table-cell>
                    <md-table-cell>12張</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>合計</md-table-cell>
                    <md-table-cell>500張</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>* 每次表定活動結束時皆會統計各家族的總RV值 (全家族成員 RV值加總)</p>
                  <p>* 各家族地圖板塊數量 = 總RV值 / 10</p>
                  <p>* 活動結束後會有地圖板塊放置回合，各家族派人前往遊戲室隨機抽取若干版塊，依照合理的接續方式，放置在地圖上</p>
                  <p>* 所有家族的地圖板塊可以互相連接</p>
                  <p>* 若發生不能放置版塊的情況，可重新抽取新版塊</p>
                </md-content>

                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">2. 族長行動</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 20%">動作</md-table-head>
                    <md-table-head>詳細</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>移動</md-table-cell>
                    <md-table-cell>每個族長指示物在每個行動回合能在格子上進行移動來觸發各種事件，移動力 = 5 + (家族內成員 S級敏捷人數)</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>攻擊</md-table-cell>
                    <md-table-cell>
                      <p>當移動確定停留時，可對身邊1格內進行攻擊，可攻擊目標為</p>
                      <p>1. 白鬼:  若發起攻擊的族長 同時擁有 5位含以上的封臣 以及 5位含以上的S級力量家族成員，則可以消滅白鬼</p>
                      <p>2. 封地:  若發起攻擊，首先判斷被攻擊封地擁有者距離該封地的距離，若大於5格則直接佔領成功；反之以下一次遊戲的排名高低決定佔領成功/失敗</p>
                      <p>*  封地佔領成功:  獲得對方最高RV值成員的團體積分，對方則會損失相同團體積分</p>
                      <p>*  封地佔領失敗:  下一次的移動由對方為你做決定</p>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>港口乘船</md-table-cell>
                    <md-table-cell>當移動在港口上時，可以立即指定任何一個其他港口位移，並依照家族成員 S級體力人數 可以進行再動</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>回合結算</md-table-cell>
                    <md-table-cell>
                      <p>當所有動作執行完後，該回合最後停留的位置將會觸發以下對應事件: </p>
                      <p>1. 封地:  若該封地屬無人佔領，則判斷封臣數量是否大於封地數，若是，則可以將此封地佔領並享有下一次選秀 免費1人的特權 (君臨效果*2)</p>
                      <p>*  在三次選秀皆完畢後，改為直接增加團體積分 積分 = 家族成員內最高RV值</p>
                      <p>2. 舊神之樹:  停留在此樹可以選擇以下四種獎勵擇一:</p>
                      <p>*  A. 宣誓:  額外選擇一位家族成員成為封臣並給予所有封臣1點能力點</p>
                      <p>*  B. 祈禱:  直接增加團體積分10點</p>
                      <p>*  C. 預視:  下一輪遊戲 活動門檻降低一級</p>
                      <p>*  D. 搖視:  下一輪放置地圖板塊時可以任意選擇地圖板塊放置</p>
                    </md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>* 封地受到他人佔領的族長，會遭受團體積分損失，若家族成員內擁有S級精神成員 可降低損失為 = 最高RV成員值 / S級精神成員數</p>
                </md-content>

                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">3. 白鬼行動</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head style="width: 40%">條件</md-table-head>
                    <md-table-head>移動模式</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>移動3格距離可以碰觸(鄰近1格)到族長時</md-table-cell>
                    <md-table-cell>直接移動到該族長身邊並抓住</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>一般情況</md-table-cell>
                    <md-table-cell>往最接近的族長移動1格</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  <p>* 白鬼按照固定的移動模式，由北境長城出發</p>
                  <p>* 被白鬼碰觸到的族長，無法動作</p>
                  <p>* 白鬼無視地形，且優先待在非道路上</p>
                </md-content>
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">4. (事件)封印夜王</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-head>條件</md-table-head>
                    <md-table-head>獎勵</md-table-head>
                  </md-table-row><md-table-row>
                    <md-table-cell>10面獎牌同時放到北境長城上</md-table-cell>
                    <md-table-cell>尾牙表演由福委3人(Snow, Dada, Jack) 各自強制選7位同仁一同表演</md-table-cell>
                  </md-table-row>
                </md-table>

              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px">vertical_align_top</span>
              <span class="md-list-item-text">2021-03-27 【 遊戲結局與積分細則 】</span>
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
                    <md-table-cell>將10面獎牌放置到絕境長城</br>(帶有獎牌的族長們同時)</md-table-cell>
                    <md-table-cell>1. 八大家族共同勝利，所有人暫時先免除表演之義務</br>2. 由於族長們出色的表現與領導能力，尾牙由福委Dada, Snow, Jack各自選7人(強制)上台表演</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  原先全睿訊管理職皆有義務進行尾牙表演，但若經由一整年同仁的努力，以及族長們的良好領導</br>
                  能達成封印夜王的挑戰，代表族長們的團體建立能力十分優秀，那福委活動的宗旨就已經達成</br>
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
                    <li>D. (特殊加成) 家族成員一整年有兩次機會，參與戶外活動戶外額外 +2分</li>
                    <li>E. (特殊加成) 每一次活動預測冠軍成功的玩家會為團體積分 +1分</li>
                  </ul></br>
                  <ul>(獎牌積分)
                    <li>A. 有十張獎牌各自擁有固定的隱藏規則</li>
                    <li>B. 每面獎牌都有其相應的積分，只有在當年度結束活動總決算時才會計算</li>
                    <li>C. 同時獲得"工作不養閒人"與"團隊不養懶人"的獎牌時額外+100分</li>
                    <li>
                      <md-table class="news-table" style="display: block;">
                        <md-table-row>
                          <md-table-head style="width: 25%">獎牌名稱</md-table-head>
                          <md-table-head>積分</md-table-head>
                          <md-table-head style="width: 25%"></md-table-head>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>獨孤求敗</md-table-cell>
                          <md-table-cell>10</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/10.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>工作不養閒人</md-table-cell>
                          <md-table-cell>20</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/20.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>團隊不養懶人</md-table-cell>
                          <md-table-cell>30</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/30.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>寸草春暉</md-table-cell>
                          <md-table-cell>40</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/40.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>情投意合</md-table-cell>
                          <md-table-cell>50</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/50.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>九淺一深</md-table-cell>
                          <md-table-cell>60</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/60.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>如夢似幻</md-table-cell>
                          <md-table-cell>70</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/70.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>含辛茹苦</md-table-cell>
                          <md-table-cell>80</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/80.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>阿姨我不想努力了</md-table-cell>
                          <md-table-cell>90</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/90.png`" /></md-table-cell>
                        </md-table-row>
                        <md-table-row>
                          <md-table-cell>魚知水恩乃幸福之源</md-table-cell>
                          <md-table-cell>100</md-table-cell>
                          <md-table-cell><img class="arena-house-img" :src="`/static/imgs/trophy/100.png`" /></md-table-cell>
                        </md-table-row>
                      </md-table>
                    </li>
                  </ul>
                </md-content>
                <md-content>
                  PS. 如果有兩家族同時符合資格</br>
                  I. 先依照變動順序 後者符合資格者 覆蓋前者符合資格者</br>
                  II. 依照當前團體積分名次排序 排名靠後者得</br>
                  III. 若以上都相同 則由福委擲硬幣直接決定 (此規則適用所有同分情況)</br>
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
                <md-table class="news-table">
                  <md-table-toolbar>
                    <h1 class="md-title">4. 預測功能</h1>
                  </md-table-toolbar>
                  <md-table-row>
                    <md-table-cell>* 可至 『競技場』中預測每個月的活動哪一家族會得到冠軍</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>* 每季預測全中的玩家將會獲得額外1點能力值點數 (謙虛加成: 每一評等D能力再多加1點)</md-table-cell>
                  </md-table-row><md-table-row>
                    <md-table-cell>* 每一次預測中的玩家會為團體增加一點積分</md-table-cell>
                  </md-table-row>
                </md-table>

              </md-list>
            </md-list-item>

            <md-list-item md-expand>
              <span class="material-icons mr-6-px">vertical_align_top</span>
              <span class="md-list-item-text">2021-03-03 【 活動通則 】</span>
              <md-list slot="md-expand">
                <md-table class="news-table">
                  
                  <md-table-row>
                    <md-table-head style="width: 20%">條款</md-table-head>
                    <md-table-head>違反結果</md-table-head>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>§ 在活動過程中沒有確實以暱稱稱呼彼此</md-table-cell>
                    <md-table-cell>-1 團體積分</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>§ 在活動過程中將答案洩漏給非同家族的成員</br>§ 在活動過程惡意違反規則、不遵從柔性勸導</md-table-cell>
                    <md-table-cell>第一次就範:</br>將涉及家族 團體分數歸零、個人RV全數歸零 且該場次活動不計分，八大家族一起勝利的條件也取消</br>第二次就範:</br>涉及的家族全數直接尾牙表演，且不能享有任何福委獎勵</md-table-cell>
                  </md-table-row>
                  <md-table-row>
                    <md-table-cell>§ 在活動中針對特定人進行欺壓、惡意攻擊、或是違反自主意願行為</br>§ 在活動中以職權令人屈服、妥協或者辱罵他人</br>(可舉報、經由福委查實)</md-table-cell>
                    <md-table-cell>該家族族長與施加者直接尾牙表演、且更換族長帶領家族</md-table-cell>
                  </md-table-row>
                </md-table>
                <md-content>
                  各身份 TIPS:</br>
                  1. 睿訊同仁(非封臣): 各位在一年的活動中沒有任何負擔 請享受活動帶來的樂趣遊玩</br></br>
                  2. 管理職與封臣:  雖然有承擔著上台表演的可能性，但請勿使用職權命令他人服從，因為其他同仁並沒有義務幫助你們，請將心比心將同仁視為朋友、夥伴或家人</br>
                  如真有必須抗拒表演之因素，請用平等的心態 請求夥伴們的協助</br>
                </md-content>
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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="md-list-item-text">2021-05-10 【 五月 】 Season 2 選秀結果</span>
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
                    <md-table-cell>88</md-table-cell>
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
              <span class="material-icons mr-6-px">local_fire_department</span>
              <span class="md-list-item-text">2021-05-05 【 五月 】 競技運動月</span>
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
                <md-content>
                  <h3>3. 紅藍分隊</h3>
                  <p> * 每天的分隊由家族族長或封臣代理人執行 於競賽日前一日抽籤決定</p>
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