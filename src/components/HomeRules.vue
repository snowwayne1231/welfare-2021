<template>
  <div class="home bg-img">
    <md-card class="home-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">
            <span>王國公告(規範)</span>
          </div>
          <div class="md-subhead">
            <span>bulletin of the kingdom</span>
          </div>
          <div class="note" style="width:100%;">
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

          </md-list>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      expandSingle: true,
    }
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>