var tipuesearch = {"pages": [{'title': 'About', 'text': '專題題目： 網際球賽機器人協同設計與模擬 \n Web-based Ball Game Robot Collaborative Design and Simulation \n 專題網站:  https://mde.tw/pj4102 \n 專題倉儲:  https://github.com/mdecycu/pj4102 \n 專題成員: \n 41023220 陳冠珉 \n 41023230 彭聖宗 \n 41023231 湛有杰  https://github.com/zhan-uj/pj4102 \n 41023232 雲敬家 \n 41071203 侯昀熙 \n \n 網際球賽機器人協同設計與模擬 \n 球賽設計: \n 競技場景中必須納入數位計時器與類比記分機構 \n 每場競技時間為 10 分鐘 \n 每隊球員機器人依照各組人數平均分為兩隊 \n 每位機器人球員必須同時具備踢球、取球與投球機構 \n 雙方陣營各有足球門與籃球框各一具 \n 球場中由裁判程式於開場時, 在球場正中央落下 10 球 \n 將球踢進對方球門者得 1 分, 將球投入對方籃框者得 5 分 \n 參考資料: \n https://github.com/mdecd2024/test-ag1 \n https://github.com/mdecd2023/2a3-pj3ag4 \n 球場參考規格: \n 競技球: 白色, 直徑 0.1m, 重量 0.5kg \n 場地: 長 4m x 寬 2.5m, 外圍以足夠高度之隱形柵欄區隔 \n 足球門: 長 0.6m, 高 0.3m, 寬 0.1m \n 籃板: 長 0.3m, 高 0.3m, 寬 0.1m, 位於足球門上方中央 \n 籃框: 由籃板向場內距離 0.1m, 內徑 0.2m, 框管直徑 0.02 \n 球員尺寸範圍: 長寬高各 0.2m, 重量 5kg \n 根據上述球場參考尺寸規格建置場景下載: \n cd2024_footbasketball_field_specification_step2.7z  (需要密碼) \n \n soccer field image from  public domain . \n', 'tags': '', 'url': 'About.html'}, {'title': '遊戲設計與改版', 'text': '', 'tags': '', 'url': '遊戲設計與改版.html'}, {'title': '機器人', 'text': '球員尺寸範圍: 長寬高各 0.2m, 重量 5kg \n', 'tags': '', 'url': '機器人.html'}, {'title': '圖檔-1', 'text': '', 'tags': '', 'url': '圖檔-1.html'}, {'title': '程式-1', 'text': '', 'tags': '', 'url': '程式-1.html'}, {'title': '球場', 'text': '場地: 長 4m x 寬 2.5m, 外圍以足夠高度之隱形柵欄區隔 \n 競技球: 白色, 直徑 0.1m, 重量 0.5kg \n', 'tags': '', 'url': '球場.html'}, {'title': '籃板', 'text': '籃板: 長 0.3m, 高 0.3m, 寬 0.1m, 位於足球門上方中央 \n 籃框: 由籃板向場內距離 0.1m, 內徑 0.2m, 框管直徑 0.02 \n', 'tags': '', 'url': '籃板.html'}, {'title': '足球門', 'text': '足球門: 長 0.6m, 高 0.3m, 寬 0.1m \n 圖檔 \n 程式 \n', 'tags': '', 'url': '足球門.html'}, {'title': '機械轉盤計分器', 'text': '', 'tags': '', 'url': '機械轉盤計分器.html'}, {'title': '圖檔-2', 'text': '', 'tags': '', 'url': '圖檔-2.html'}, {'title': 'Arduino', 'text': '', 'tags': '', 'url': 'Arduino.html'}, {'title': '電子計時器', 'text': '', 'tags': '', 'url': '電子計時器.html'}, {'title': '程式-2', 'text': '', 'tags': '', 'url': '程式-2.html'}, {'title': '協同設定', 'text': '', 'tags': '', 'url': '協同設定.html'}, {'title': '遊戲連線說明', 'text': '', 'tags': '', 'url': '遊戲連線說明.html'}, {'title': '倉儲維護', 'text': '\n 建立 \xa0 Replit \xa0 帳號 \n 登入 Email 驗證 \xa0 Replit \xa0 寄出的註冊確認電子郵件 \n 利用 import repository, 以 \xa0 cmsite \xa0 倉儲內容, 建立 repl \n 進入 .replit 檔案設定頁面, 將 main.py 設定為啟動程式 \n 在 shell 介面執行 git submodule update --init --recursive, 取下 \xa0 cmsite \xa0 倉儲中 cmsimde 子模組檔案 \n 在 shell 介面執行 pip install flask flask_cors bs4 lxml pelican markdown gevent, 安裝 cmsimde 所需要的模組 \n 按下 Run, 啟動 main.py \n 登入 \xa0 cmsite \xa0 動態網站, 修改管理者密碼, 修改標題與內容後, 以 generate_pages 將動態網頁內容轉為靜態格式 \n 利用 \xa0 Replit \xa0 中的 Version Control 功能, 將改版資料推向遠端倉儲 \n', 'tags': '', 'url': '倉儲維護.html'}, {'title': 'References', 'text': 'https://github.com/mdecd2024/test-ag1 \n https://github.com/mdecd2023/2a3-pj3ag4 \n soccer field image from\xa0 public domain . \n', 'tags': '', 'url': 'References.html'}, {'title': 'Score_counter', 'text': '機械轉盤計分器: \n 原始設計: \n \n 以 SolidWorks 設計繪圖:  scoreboard_solidworks_cd2023_pj3ag4.7z  (由  cd2023 pj3 2a 第四組 完成設計繪圖) \n 本專題將修改設計後納入步進馬達控制轉角, 並利用 Python 程式與 CoppeliaSim 場景伺服器賽局計分器同步作動. \n', 'tags': '', 'url': 'Score_counter.html'}, {'title': 'Brython', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};