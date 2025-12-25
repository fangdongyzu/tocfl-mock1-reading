const quizData = [
  // Part 1: Sentence Comprehension (1-15)
  {
    "id": 1,
    "part": 1,
    "question": "桌子上放著三種水果。",
    "image": "images/1.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 2,
    "part": 1,
    "question": "老王正畫著小天的臉。",
    "image": "images/2.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 3,
    "part": 1,
    "question": "他的房間很乾淨。",
    "image": "images/3.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 4,
    "part": 1,
    "question": "王小明把李天華三個字寫在紙上。",
    "image": "images/4.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 5,
    "part": 1,
    "question": "志明什麼球都玩，但是最喜歡玩足球。",
    "image": "images/5.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 6,
    "part": 1,
    "question": "小心！你杯子裡的水快要滿了！",
    "image": "images/6.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 7,
    "part": 1,
    "question": "過了前面的路口，再往前走一會兒就到醫院了。",
    "image": "images/7.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 8,
    "part": 1,
    "question": "我平常都六點起床，可是今天晚了半小時。",
    "image": "images/8.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 9,
    "part": 1,
    "question": "張先生開車的時候喜歡聽音樂。",
    "image": "images/9.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 10,
    "part": 1,
    "question": "這幾天晚上的風好大。",
    "image": "images/10.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 11,
    "part": 1,
    "question": "妹妹看完信以後，心情很愉快。",
    "image": "images/11.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 12,
    "part": 1,
    "question": "我們全家下個月就要搬到院子裡有大樹的房子住了。",
    "image": "images/12.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 13,
    "part": 1,
    "question": "因為媽媽怕高，所以沒和爸爸一起爬過山。",
    "image": "images/13.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 14,
    "part": 1,
    "question": "他們約好下課以後，先在學校門口見面，再一起去打球。",
    "image": "images/14.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 15,
    "part": 1,
    "question": "小美和朋友想到百貨公司買帽子，可是最後只買了點心就離開了。",
    "image": "images/15.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },

  // Part 2: Picture Description (16-30)
  {
    "id": 16,
    "part": 2,
    "question": "",
    "image": "images/16.png",
    "options": ["小狗正追著小貓。", "屋子裡面什麼都沒有。", "幾隻小鳥停在屋子上面。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 17,
    "part": 2,
    "question": "",
    "image": "images/17.png",
    "options": ["這裡有樹和一間房子。", "房子的前面停了幾輛車。", "有一些人站在房子旁邊。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 18,
    "part": 2,
    "question": "",
    "image": "images/18.png",
    "options": ["她正在休息。", "她在床上睡覺。", "她正寫著作業。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 19,
    "part": 2,
    "question": "",
    "image": "images/19.png",
    "options": ["短頭髮的小姐在喝酒。", "長頭髮的小姐穿裙子。", "穿裙子的小姐拿著皮包。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 20,
    "part": 2,
    "question": "",
    "image": "images/20.png",
    "options": ["小吃店九點以前休息。", "小吃店十二點開始休息。", "十二點以後可以去小吃店吃飯。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 21,
    "part": 2,
    "question": "",
    "image": "images/21.png",
    "options": ["一天吃三粒。", "三天吃一次。", "先吃飯再吃幾粒。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 22,
    "part": 2,
    "question": "",
    "image": "images/22.png",
    "options": ["中午以後買票比較貴。", "上午買兩張票要500元。", "想看電影要中午以後才行。"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 23,
    "part": 2,
    "question": "",
    "image": "images/23.png",
    "options": ["教室的門是關著的。", "這位老師今天穿裙子。", "這位老師的頭髮短短的。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 24,
    "part": 2,
    "question": "",
    "image": "images/24.png",
    "options": ["他們現在正在上課。", "他們從學校走出來。", "男孩走在女孩的前面。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 25,
    "part": 2,
    "question": "",
    "image": "images/25.png",
    "options": ["這家餐廳不賣飲料。", "餐廳裡一個人都沒有。", "這位女客人買了兩杯果汁。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 26,
    "part": 2,
    "question": "",
    "image": "images/26.png",
    "options": ["小美下午三點多才到旅館。", "在這兒住一晚要兩百多塊。", "小美帶了好幾件大的行李。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 27,
    "part": 2,
    "question": "",
    "image": "images/27.png",
    "options": ["那位男生正在賣麵包。", "等車的小姐拿著一袋水果。", "有一位小姐在第七十六號公車。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 28,
    "part": 2,
    "question": "",
    "image": "images/28.png",
    "options": ["王小姐買了三雙鞋子。", "這家店只賣鞋子和襪子。", "這家店也賣褲子和皮包。"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 29,
    "part": 2,
    "question": "",
    "image": "images/29.png",
    "options": ["李天明教台北人英文。", "李天明要找外國人學英文。", "李天明覺得學中文很便宜。"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 30,
    "part": 2,
    "question": "",
    "image": "images/30.png",
    "options": ["兩個人一起去，就有紅茶可以喝。", "一個人不到兩萬就可以去韓國旅行。", "三個人一起去的話，一共可以少給1000元。"],
    "answer": "B",
    "remark": ""
  },

  // Part 3: Gap Filling (31-40)
  {
    "id": 31,
    "part": 3,
    "question": "______ 著眼鏡的小女孩在看書。",
    "image": "",
    "options": ["穿", "帶", "戴"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 32,
    "part": 3,
    "question": "她一邊看書，一邊 ______ 筷子吃麵。",
    "image": "",
    "options": ["帶", "用", "找"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 33,
    "part": 3,
    "question": "那個小女孩 ______ 有一隻狗。",
    "image": "",
    "options": ["旁邊", "前邊", "後邊"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 34,
    "part": 3,
    "question": "那隻狗 ______ 睡覺。",
    "image": "",
    "options": ["在", "要", "是"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 35,
    "part": 3,
    "question": "小女孩 ______ 小狗是好朋友。",
    "image": "",
    "options": ["有", "跟", "一起"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 36,
    "part": 3,
    "question": "九月五日是小女孩的 ______。",
    "image": "",
    "options": ["生活", "生日", "星期日"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 37,
    "part": 3,
    "question": "大家都 ______ 她慶祝。",
    "image": "",
    "options": ["幫", "讓", "對"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 38,
    "part": 3,
    "question": "她 ______ 到很多禮物。",
    "image": "",
    "options": ["收", "寄", "借"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 39,
    "part": 3,
    "question": "所以，她今天非常 ______。",
    "image": "",
    "options": ["熱鬧", "舒服", "高興"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 40,
    "part": 3,
    "question": "她希望明年能 ______ 德國去玩。",
    "image": "",
    "options": ["到", "去", "來"],
    "answer": "A",
    "remark": ""
  },

  // Part 4: Paragraph Completion (41-45)
  {
    "id": 41,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["還告訴我", "頭有點兒痛", "很容易生病", "覺得很舒服", "更不舒服了", "多注意自己的身體"],
    "answer": "B",
    "remark": "Paragraph 1"
  },
  {
    "id": 42,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["還告訴我", "頭有點兒痛", "很容易生病", "覺得很舒服", "更不舒服了", "多注意自己的身體"],
    "answer": "E",
    "remark": "Paragraph 1"
  },
  {
    "id": 43,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["還告訴我", "頭有點兒痛", "很容易生病", "覺得很舒服", "更不舒服了", "多注意自己的身體"],
    "answer": "A",
    "remark": "Paragraph 1"
  },
  {
    "id": 44,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["還告訴我", "頭有點兒痛", "很容易生病", "覺得很舒服", "更不舒服了", "多注意自己的身體"],
    "answer": "C",
    "remark": "Paragraph 1"
  },
  {
    "id": 45,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["還告訴我", "頭有點兒痛", "很容易生病", "覺得很舒服", "更不舒服了", "多注意自己的身體"],
    "answer": "F",
    "remark": "Paragraph 1"
  },

  // Part 5: Reading Comprehension (46-50)
  {
    "id": 46,
    "part": 5,
    "question": "曾有一項調查發現，很多員工生病的時候不敢請假，因為他們擔心老闆會不高興，覺得他們沒有責任感。有人認為，員工會這麼想是公司的責任。一個好的公司應該能照顧員工，而不是讓他們拿健康去換錢。因此，讓員工有幸福感，應該是未來企業努力的方向。<br/>Q: 這篇文章說了什麼內容？",
    "image": "",
    "options": ["老闆應該給員工多一點兒假", "常關心別人的人更有責任感", "對公司有意見要勇敢說出來", "照顧身體比認真工作更重要"],
    "answer": "D",
    "remark": ""
  },
  {
    "id": 47,
    "part": 5,
    "question": "如果你每天都覺得身體很累，有一份報告或許可以告訴你原因。這份報告提到了下面幾種可能：不愛運動、水喝得不夠多、總是把事情想得太壞、不吃早餐、吃太多沒營養的食物等。以上幾點，只要簡單思考一下自己符合了幾項，再試著做出一些改變，想讓自己更健康一點也不難。<br/>Q: 在改善健康方面，下面哪一個是作者的建議？",
    "image": "",
    "options": ["要培養運動的好習慣", "想要吃什麼就吃什麼", "平常應該多做點好事", "吃早餐以後不要喝水"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 48,
    "part": 5,
    "question": "從前有一個地方很久都不下雨，人們不管怎麼求雨都沒有用。有一次，他們從很遠的地方，請來一位有智慧的老人，希望他可以幫幫忙。老人在附近走了走、看了看，然後告訴他們，請蓋一間小屋，讓他住進去三天，三天當中，他任何人都不見。結果，三天後真的下雨了。大家都問他是怎麼做到的，他只回答，只要自己的心安靜了，外面就安靜了，所以下雨了。<br/>Q: 這個故事告訴了我們什麼事？",
    "image": "",
    "options": ["先照顧自己，才能幫助別人", "想改變環境，就先改變心情", "年輕人應該要學會尊敬老人", "聰明的人知道什麼時候下雨"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 49,
    "part": 5,
    "question": "說到錢，每個人對它的想法、使用方式和重視程度都不一樣。有人說：「錢是沒有性格的，它在誰的手上就像誰」。這句話說得很有道理，人們因為對錢的看法不同，而選擇不同的生活方式。比方說，有的人喜歡看到銀行裡的數字不斷增加，所以每天努力工作，很少花錢；有的人覺得錢只要夠用就好，不必太在意工作，因為「自己的時間」，也是一種看不到的「錢」。<br/>D: 這段話說了下面哪件事？",
    "image": "",
    "options": ["錢比什麼都重要", "錢可以解決所有事情", "人人有自己對錢的看法", "錢得放在銀行裡才有價值"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 50,
    "part": 5,
    "question": "以前，電影院的門口常常出現一個牌子，要觀眾別帶外面買的食物進去，如果想吃東西，只能買電影院裡賣的食物。後來，新聞說，觀眾其實可以拒絕配合這些電影院的規矩。說到這個問題，我認為，電影院的要求不是沒有道理，因為電影結束以後，他們還得打掃那些垃圾。其次，如果有人帶了一些有奇怪味道的食物進電影院，也很容易影響其他看電影的人。<br/>D: 作者對在電影院裡吃東西的行為怎麼看？",
    "image": "",
    "options": ["應該要避免吃有特別味道的東西", "覺得吃什麼東西都是個人的自由", "認為電影院的要求沒有任何道理", "看電影的人都有責任要打掃垃圾"],
    "answer": "A",
    "remark": ""
  }
];