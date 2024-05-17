var tipuesearch = {"pages": [{'title': 'About', 'text': '專題題目： 網際球賽機器人協同設計與模擬 \n Web-based Ball Game Robot Collaborative Design and Simulation \n \n 專題網站:  https://mde.tw/pj4102 \n 專題倉儲:  https://github.com/mdecycu/pj4102 \n 專題成員: \n 41023220 陳冠珉 \n 41023230 彭聖宗 \n 41023231 湛有杰  https://github.com/zhan-uj/pj4102 \n 41023232 雲敬家 \n 41071203 侯昀熙 \n \n 網際球賽機器人協同設計與模擬 \n 球賽設計: \n 每場競技時間為 10 分鐘 \n 每隊球員機器人依照各組人數平均分為兩隊 \n 雙方陣營各有足球門與籃球框各一具 \n 球場中由裁判程式於開場時, 在球場正中央落下 10 球 \n 將球踢進對方球門者得 1 分, 將球投入對方籃框者得 5 分 \n', 'tags': '', 'url': 'About.html'}, {'title': '遊戲設計與改版', 'text': '', 'tags': '', 'url': '遊戲設計與改版.html'}, {'title': '機器人', 'text': '球員尺寸範圍: 長寬高各 0.2m, 重量 5kg \n', 'tags': '', 'url': '機器人.html'}, {'title': '圖檔-1', 'text': '\n robot第一版.ttt \n \n robot第二版.ttt \n robot part.zip \n', 'tags': '', 'url': '圖檔-1.html'}, {'title': '程式-1', 'text': "第一版 \n from zmqRemoteApi_IPv6 import RemoteAPIClient\nimport keyboard\n\n# 创建客户端连接\nclient = RemoteAPIClient('localhost', 23000)\n\nprint('Program started')\n# 获取sim对象\nsim = client.getObject('sim')\n# 开始模拟\nsim.startSimulation()\nprint('Simulation started')\n\n# 定义设置轮子运动的函数\ndef setWheelMotion(leftSpeed, rightSpeed, up):\n    # 获取各个轮子和升降装置的对象\n    frontLeftWheel = sim.getObject('/frontLeftJoint1')\n    frontRightWheel = sim.getObject('/frontRightJoint1')\n    rearLeftWheel = sim.getObject('/rearLeftJoint1')\n    rearRightWheel = sim.getObject('/rearRightJoint1')\n    upanddown = sim.getObject('/upanddown')\n    # 设置各个轮子的目标速度\n    sim.setJointTargetVelocity(frontLeftWheel, leftSpeed)\n    sim.setJointTargetVelocity(frontRightWheel, rightSpeed)\n    sim.setJointTargetVelocity(rearLeftWheel, leftSpeed)\n    sim.setJointTargetVelocity(rearRightWheel, rightSpeed)\n    sim.setJointTargetVelocity(upanddown, up)\n\n# 初始化运动变量\nleftSpeed = 0\nrightSpeed = 0\nup = 0\n\n# 主循环\nwhile True:\n    # 检查键盘输入以设置前进和后退速度\n    if keyboard.is_pressed('w'):\n        leftSpeed = 10  # 前进\n        rightSpeed = 10  # 前进\n    elif keyboard.is_pressed('s'):\n        leftSpeed = -10  # 后退\n        rightSpeed = -10  # 后退\n    else:\n        leftSpeed = 0\n        rightSpeed = 0\n\n    # 检查键盘输入以设置转向速度\n    if keyboard.is_pressed('a'):\n        leftSpeed += 5  # 左转\n        rightSpeed -= 5  # 左转\n    elif keyboard.is_pressed('d'):\n        leftSpeed -= 5  # 右转\n        rightSpeed += 5  # 右转\n\n    # 检查键盘输入以设置升降速度\n    if keyboard.is_pressed('J'):\n        up = 10  # 上升\n    elif keyboard.is_pressed('K'):\n        up = -10  # 下降\n    else:\n        up = 0        \n\n    # 检查键盘输入以退出程序\n    if keyboard.is_pressed('q'):\n        break  # 退出\n\n    # 设置所有轮子的运动\n    setWheelMotion(leftSpeed, rightSpeed, up)\n\n# 停止模拟\nsim.stopSimulation()\n\n\n \n\n# Stop the simulation\nsim.stopSimulation()\n \n 第二版 \n from zmqRemoteApi_IPv6 import RemoteAPIClient\nimport keyboard\n\nclient = RemoteAPIClient('localhost', 23000)\n\nprint('Program started')\nsim = client.getObject('sim')\nsim.startSimulation()\nprint('Simulation started')\n\ndef setWheelMotion(leftSpeed, rightSpeed, up1, up2, up3):\n    # Set target velocity for each wheel\n    frontLeftWheel = sim.getObject('/frontLeftJoint')\n    frontRightWheel = sim.getObject('/frontRightJoint')\n    rearLeftWheel = sim.getObject('/rearLeftJoint')\n    rearRightWheel = sim.getObject('/rearRightJoint')\n    upanddown1 = sim.getObject('/upanddown1')\n    upanddown2 = sim.getObject('/upanddown2')\n    upanddown3 = sim.getObject('/upanddown3')\n    sim.setJointTargetVelocity(frontLeftWheel, leftSpeed)\n    sim.setJointTargetVelocity(frontRightWheel, rightSpeed)\n    sim.setJointTargetVelocity(rearLeftWheel, leftSpeed)\n    sim.setJointTargetVelocity(rearRightWheel, rightSpeed)\n    sim.setJointTargetVelocity(upanddown1,up1)\n    sim.setJointTargetVelocity(upanddown2,up2) \n    sim.setJointTargetVelocity(upanddown3,up3)\n# Initialize motion variables\nleftSpeed = 0\nrightSpeed = 0\nup1 = 0\nup2 = 0\nup3 = 0\n# Main loop\nwhile True:\n    # Check keyboard input\n    if keyboard.is_pressed('w'):\n        leftSpeed = 10  # Forward motion\n        rightSpeed = 10  # Forward motion\n    elif keyboard.is_pressed('s'):\n        leftSpeed = -10  # Backward motion\n        rightSpeed = -10  # Backward motion\n    else:\n        leftSpeed = 0\n        rightSpeed = 0\n\n    if keyboard.is_pressed('a'):\n        leftSpeed -= 5  # Left turn\n        rightSpeed += 5  # Left turn\n    elif keyboard.is_pressed('d'):\n        leftSpeed += 5  # Right turn\n        rightSpeed -= 5  # Right turn\n        \n    if keyboard.is_pressed('1'):\n        up1 = 1  # Forward motion\n    elif keyboard.is_pressed('3'):\n        up1 = -1  # Backward motion\n    else:\n        up1 = 0\n        \n    if keyboard.is_pressed('4'):\n        up2 = 1  # Forward motion\n    elif keyboard.is_pressed('6'):\n        up2 = -1  # Backward motion\n    else:\n        up2 = 0\n        \n    if keyboard.is_pressed('7'):\n        up3 = 1  # Forward motion\n    elif keyboard.is_pressed('9'):\n        up3 = -1  # Backward motion\n    else:\n        up3 = 0\n        \n    if keyboard.is_pressed('q'):\n        break  # Quit\n\n    # Set motion for all wheels\n    setWheelMotion(leftSpeed, rightSpeed, up1, up2, up3)\n\n# Stop the simulation\nsim.stopSimulation() \n", 'tags': '', 'url': '程式-1.html'}, {'title': '球場', 'text': '\n 場地: 長 4m x 寬 2.5m, 外圍以足夠高度之隱形柵欄區隔 \n 競技球: 白色, 直徑 0.1m, 重量 0.5kg \n 籃板: 長 0.3m, 高 0.3m, 寬 0.1m, 位於足球門上方中央 \n 籃框: 由籃板向場內距離 0.1m, 內徑 0.2m, 框管直徑 0.02 \n 足球門: 長 0.6m, 高 0.3m, 寬 0.1m \n', 'tags': '', 'url': '球場.html'}, {'title': '籃框程式', 'text': "function sysCall_init()\n    wheelJoint = sim.getObjectHandle('/joint1g')\n    rim1 = sim.getObject('/Cylinder1') \n    ball1 = sim.getObject('/ball1')\n    ball2 = sim.getObject('/ball2')\n    ball3 = sim.getObject('/ball3')\n    ball4 = sim.getObject('/ball4')\n    ball5 = sim.getObject('/ball5')\n    ball6 = sim.getObject('/ball6')\n    ball7 = sim.getObject('/ball7')\n    ball8 = sim.getObject('/ball8')\n    ball9 = sim.getObject('/ball9')\n    ball10 = sim.getObject('/ball10')\n\nend\n\nfunction sysCall_actuation()\n    collision1= sim.checkCollision(ball1,rim1)\n    collision2= sim.checkCollision(ball2,rim1)\n    collision3= sim.checkCollision(ball3,rim1)\n    collision4= sim.checkCollision(ball4,rim1)\n    collision5= sim.checkCollision(ball5,rim1)\n    collision6= sim.checkCollision(ball6,rim1)\n    collision7= sim.checkCollision(ball7,rim1)\n    collision8= sim.checkCollision(ball8,rim1)\n    collision9= sim.checkCollision(ball9,rim1)\n    collision10= sim.checkCollision(ball10,rim1)\n    if ( collision1 > 0) then\n        sim.setObjectPosition(ball1, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision2 > 0) then\n        sim.setObjectPosition(ball2, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision3 > 0) then\n        sim.setObjectPosition(ball3, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision4 > 0) then\n        sim.setObjectPosition(ball4, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision5 > 0) then\n        sim.setObjectPosition(ball5, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision6 > 0) then\n        sim.setObjectPosition(ball6, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision7 > 0) then\n        sim.setObjectPosition(ball7, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision8 > 0) then\n        sim.setObjectPosition(ball8, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision9 > 0) then\n        sim.setObjectPosition(ball9, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision10 > 0) then\n        sim.setObjectPosition(ball10, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-179.999)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n             end\n            end\n           end\n          end\n         end\n        end\n      end\n     end\n    end  \n  end\nend \n \n", 'tags': '', 'url': '籃框程式.html'}, {'title': '足球門程式', 'text': "function sysCall_init()\n    wheelJoint = sim.getObjectHandle('/joint1g')\n    door1 = sim.getObject('/Cuboid') \n    ball1 = sim.getObject('/ball1')\n    ball2 = sim.getObject('/ball2')\n    ball3 = sim.getObject('/ball3')\n    ball4 = sim.getObject('/ball4')\n    ball5 = sim.getObject('/ball5')\n    ball6 = sim.getObject('/ball6')\n    ball7 = sim.getObject('/ball7')\n    ball8 = sim.getObject('/ball8')\n    ball9 = sim.getObject('/ball9')\n    ball10 = sim.getObject('/ball10')\n\nend\n\nfunction sysCall_actuation()\n    collision1= sim.checkCollision(ball1,door1)\n    collision2= sim.checkCollision(ball2,door1)\n    collision3= sim.checkCollision(ball3,door1)\n    collision4= sim.checkCollision(ball4,door1)\n    collision5= sim.checkCollision(ball5,door1)\n    collision6= sim.checkCollision(ball6,door1)\n    collision7= sim.checkCollision(ball7,door1)\n    collision8= sim.checkCollision(ball8,door1)\n    collision9= sim.checkCollision(ball9,door1)\n    collision10= sim.checkCollision(ball10,door1)\n    if ( collision1 > 0) then\n        sim.setObjectPosition(ball1, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision2 > 0) then\n        sim.setObjectPosition(ball2, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision3 > 0) then\n        sim.setObjectPosition(ball3, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision4 > 0) then\n        sim.setObjectPosition(ball4, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision5 > 0) then\n        sim.setObjectPosition(ball5, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision6 > 0) then\n        sim.setObjectPosition(ball6, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision7 > 0) then\n        sim.setObjectPosition(ball7, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision8 > 0) then\n        sim.setObjectPosition(ball8, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision9 > 0) then\n        sim.setObjectPosition(ball9, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n    else if ( collision10 > 0) then\n        sim.setObjectPosition(ball10, -1, {0,0,0.25})\n        -- Rotate the wheel joint by 36 degrees\n        local currentAngle = sim.getJointPosition(wheelJoint)\n        local targetAngle = currentAngle + math.rad(-36)\n        sim.setJointTargetPosition(wheelJoint, targetAngle)\n             end\n            end\n           end\n          end\n         end\n        end\n      end\n     end\n    end  \n  end\nend \n \n", 'tags': '', 'url': '足球門程式.html'}, {'title': '機械轉盤計分器', 'text': '\n', 'tags': '', 'url': '機械轉盤計分器.html'}, {'title': '圖檔-2', 'text': '機械記分板與零件.zip \n', 'tags': '', 'url': '圖檔-2.html'}, {'title': 'Arduino', 'text': '', 'tags': '', 'url': 'Arduino.html'}, {'title': '電子計時器', 'text': '\n', 'tags': '', 'url': '電子計時器.html'}, {'title': '程式-2', 'text': "function sysCall_init()\n    t2=0\n    s0={1,1,1,0,1,1,1}\n    s1={0,0,1,0,0,1,0}\n    s2={1,0,1,1,1,0,1}\n    s3={1,0,1,1,0,1,1}\n    s4={0,1,1,1,0,1,0}\n    s5={1,1,0,1,0,1,1}\n    s6={1,1,0,1,1,1,1}\n    s7={1,0,1,0,0,1,0}\n    s8={1,1,1,1,1,1,1}\n    s9={1,1,1,1,0,1,1}\n    s={s0,s1,s2,s3,s4,s5,s6,s7,s8,s9}\n    \n    score(0,'a')\n    score(0,'b')\n    score(0,'c')\n    score(0,'d')\nend\n\nfunction score(x,y)\n    for i=0 ,9,1 do\n        if (x==i)then\n            for j = 0,6,1 do\n                local part = sim.getObject('./'..y..''..j..'')\n                if (s[i+1][j+1]==1) then\n                    sim.setShapeColor(part, nil, sim.colorcomponent_ambient_diffuse, {1, 0, 0})\n                else\n                    sim.setShapeColor(part, nil, sim.colorcomponent_ambient_diffuse, {0, 0, 0})\n                end\n            end\n        end\n    end\nend\n\nfunction sysCall_actuation()\n    \n    simulationTime = sim.getSimulationTime()\n    simulationTime1=600-simulationTime/3\n\n    t1=math.floor((simulationTime1/600)%10)\n    score(t1,'a')\n    t2=math.floor((simulationTime1/60)%10)\n    score(t2,'b')\n    t3=math.floor((simulationTime1/10)%6)\n    score(t3,'c')\n    t4=math.floor(simulationTime1%10)\n    score(t4,'d')\n    \n    if (simulationTime1<1)then\n        sim.pauseSimulation()\n    end\n    \n    p=sim.getSimulationState()\n    if(p==22)then\n        score(0,'a')\n        score(0,'b')\n        score(0,'c')\n        score(0,'d')\n    end\n        \n    \nend \n", 'tags': '', 'url': '程式-2.html'}, {'title': '協同設定', 'text': '', 'tags': '', 'url': '協同設定.html'}, {'title': '遊戲連線說明', 'text': '', 'tags': '', 'url': '遊戲連線說明.html'}, {'title': '倉儲維護', 'text': '\n 建立 \xa0 Replit \xa0 帳號 \n 登入 Email 驗證 \xa0 Replit \xa0 寄出的註冊確認電子郵件 \n 利用 import repository, 以 \xa0 cmsite \xa0 倉儲內容, 建立 repl \n 進入 .replit 檔案設定頁面, 將 main.py 設定為啟動程式 \n 在 shell 介面執行 git submodule update --init --recursive, 取下 \xa0 cmsite \xa0 倉儲中 cmsimde 子模組檔案 \n 在 shell 介面執行 pip install flask flask_cors bs4 lxml pelican markdown gevent, 安裝 cmsimde 所需要的模組 \n 按下 Run, 啟動 main.py \n 登入 \xa0 cmsite \xa0 動態網站, 修改管理者密碼, 修改標題與內容後, 以 generate_pages 將動態網頁內容轉為靜態格式 \n 利用 \xa0 Replit \xa0 中的 Version Control 功能, 將改版資料推向遠端倉儲 \n \n', 'tags': '', 'url': '倉儲維護.html'}, {'title': 'References', 'text': 'https://github.com/mdecd2024/test-ag1 \n https://github.com/mdecd2023/2a3-pj3ag4 \n soccer field image from\xa0 public domain . \n', 'tags': '', 'url': 'References.html'}, {'title': 'Score_counter', 'text': '機械轉盤計分器: \n 原始設計: \n \n 以 SolidWorks 設計繪圖:  scoreboard_solidworks_cd2023_pj3ag4.7z  (由  cd2023 pj3 2a 第四組 完成設計繪圖) \n 本專題將修改設計後納入步進馬達控制轉角, 並利用 Python 程式與 CoppeliaSim 場景伺服器賽局計分器同步作動. \n', 'tags': '', 'url': 'Score_counter.html'}, {'title': 'Brython', 'text': 'cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};