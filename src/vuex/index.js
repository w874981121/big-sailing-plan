import Vue from 'vue'
import Vuex from 'vuex'
import {
    index,
} from "../api/api";
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        unlockNumber: 0,
        showActivityRules: false, //规则弹窗的显示状态
        showAttendance: false, //签到弹窗的显示状态
        showIslands: false, //显示小岛组件
        showTasks: false, //任务栏状态
        showIslandsTisp: false, // 岛屿提示框状态
        showLandmarkTisp: false, // 地标提示框状态
        newIslandId: 0, //当前点击哪个小岛
        newLandmarkId: 0, // 当前点击的地标
        userInfo: {}, // 接口返回的用户信息对象
        can_unlock: false, //当前是否可以点击进入新的岛屿
        indexData: {}, //里程信息
        showReceiveTips: false, //提示里程未领取
        treasureList: {
            showTreasure: false,
            list: []
        }, //宝箱数据
        //岛屿相关数据列表
        isLandsList: [{
            id: 1, //本地操作id
            gId: 1, // 与接口交互使用的ID
            name: "雅典娜岛",
            brightState: false, //当前岛屿点亮状态
            landmarkIds: [1, 2, 3], // 当前岛屿包含的地标id
            landmarkGids: [], //接口返回的包含关系
            describe: "雅典娜岛是智慧之岛，想挑战思维，提升自我的航海家千万不要错过，解锁这里一定会给你带来新的思维颠覆与升级～",
            describeTomorrow: "雅典娜岛是智慧之岛，想挑战思维，提升自我的航海家千万不要错过，解锁这里一定会给你带来新的思维颠覆与升级～，明天才能开启哦",
            x: 1.6,
            y: 4.2,
            trianglePositionX: 1,
            iconPosition: {
                x: 0,
                y: -0.8
            }

        }, {
            id: 2,
            gId: 4,
            name: "阿波罗岛",
            brightState: false,
            landmarkIds: [4, 5, 6],
            describe: "阿波罗岛是希望之岛，这里可以治愈一切阴霾，也能带你一起憧憬未来，总之解锁这里，一切都会变得好起来～",
            describeTomorrow: "阿波罗岛是希望之岛，这里可以治愈一切阴霾，也能带你一起憧憬未来，总之解锁这里，一切都会变得好起来～，明天才能开启哦",
            x: 2.4,
            y: 5.6,
            trianglePositionX: 2.3,
            iconPosition: {
                x: 0,
                y: -0.4
            }
        }, {
            id: 3,
            gId: 6,
            name: "赫尔墨斯岛",
            brightState: false,
            landmarkIds: [7, 8, 9, 10],
            describe: "赫尔墨斯岛是高能之岛，这里有数百万知乎网友最认可的内容，看到就是赚到，怎么能不解锁这里～",
            describeTomorrow: "赫尔墨斯岛是高能之岛，这里有数百万知乎网友最认可的内容，看到就是赚到，怎么能不解锁这里～，明天才能开启哦",
            x: 2.8,
            y: 8,
            trianglePositionX: 3.6,
            iconPosition: {
                x: 0,
                y: -1.2
            }
        }, {
            id: 4,
            gId: 3,
            name: "赫拉岛",
            brightState: false,
            landmarkIds: [11, 12, 13],
            describe: "赫拉岛是爱与美之岛，热爱一切美好事物，想努力营造幸福的你，赶快解锁这里，连空气也会变甜一些哦～",
            describeTomorrow: "赫拉岛是爱与美之岛，热爱一切美好事物，想努力营造幸福的你，赶快解锁这里，连空气也会变甜一些哦～，明天才能开启哦",
            x: 2.8,
            y: 8,
            trianglePositionX: 1,
            iconPosition: {
                x: 0,
                y: -1.6
            }
        }, {
            id: 5,
            gId: 5,
            name: "赫菲斯岛",
            brightState: false,
            landmarkIds: [14, 15, 16, 17],
            describe: "赫菲斯岛是奇趣之岛，这里不会让你的好奇心无处安放，解锁这里，打开无数让你直拍大腿的惊喜～",
            describeTomorrow: "赫菲斯岛是奇趣之岛，这里不会让你的好奇心无处安放，解锁这里，打开无数让你直拍大腿的惊喜～，明天才能开启哦",
            x: 1,
            y: 7.4,
            trianglePositionX: 1.6,
            iconPosition: {
                x: 0,
                y: -2
            }
        }, {
            id: 6,
            gId: 2,
            name: "波塞冬岛",
            brightState: false,
            landmarkIds: [18, 19, 20, 21],
            describe: "波塞冬岛是权威之岛，想了解专业领域，与权威人士交流的航海家，立即解锁这里收获更深度的解答吧～",
            describeTomorrow: "波塞冬岛是权威之岛，想了解专业领域，与权威人士交流的航海家，立即解锁这里收获更深度的解答吧～，明天才能开启哦",
            x: 1,
            y: 6,
            trianglePositionX: 1,
            iconPosition: {
                x: 0,
                y: 0
            }
        }],


        //地标相关列表
        landmarkList: [{
            id: 1,
            gId: 1,
            mileage: 100,
            name: "雾思迷宫",
            brightState: false, //当前地标点亮状态
            imgUsl: "landmark-1.png",
            describe: "劝你不要深入思考（勿思）的思维迷宫",
            imgSrc: "poster_1.jpg",
            problems: [{
                text: "有什么细思恐极但非恐怖向的图片？ >",
                url: "https://www.zhihu.com/question/24957313/answer/1003400973"
            }, {
                text: "有哪些悖论一下子就吸引了你？ >",
                url: "https://www.zhihu.com/question/68018644/answer/1320688663"
            }, {
                text: "你破获过最大或是最离奇的案件是怎样的？ >",
                url: "https://www.zhihu.com/question/20910139/answer/220999104"
            }],
            trianglePositionX: 2,
            x: 1.4, //提示框显示位置坐标
            y: 1.6,
        }, {
            id: 2,
            gId: 2,
            mileage: 300,
            name: "社畜丛林",
            brightState: false,
            imgUsl: "landmark-2.png",
            describe: "当代社畜百态尽在其中",
            imgSrc: "poster_2.jpg",
            problems: [{
                text: "有哪些细微但是高效有用的习惯？ >",
                url: " https://www.zhihu.com/question/27353387"
            }, {
                text: "要怎样努力，才能成为很厉害的人？ >",
                url: "https://www.zhihu.com/question/22921426/answer/23330366"
            }, {
                text: "在工作和生活中你有哪些「黑色」的经验？ >",
                url: "https://www.zhihu.com/question/22544594/answer/30522623"
            }],
            trianglePositionX: 2,
            x: 3.5,
            y: 3.4
        }, {
            id: 3,
            gId: 3,
            mileage: 300,
            name: "摘星栈道",
            brightState: false,
            imgUsl: "landmark-3.png",
            describe: "早知道这些知识和事情就",
            imgSrc: "poster_3.jpg",
            problems: [{
                text: "一个人旅行应该怎样自拍？ >",
                url: "https://www.zhihu.com/question/22425541"
            }, {
                text: "厉害的人的思维模式与普通人之间差别在哪？ >",
                url: "https://www.zhihu.com/question/301459876/answer/1193305648"
            }, {
                text: "你听过哪些反智的鸡汤？ >",
                url: "https://www.zhihu.com/question/65218492/answer/231324396"
            }],
            trianglePositionX: 1,
            x: 1,
            y: 5
        }, {
            id: 4,
            gId: 11,
            mileage: 100,
            name: "机甲墓地",
            brightState: false,
            imgUsl: "landmark-4.png",
            describe: "即使早晚被迭代，这些散落的工业机甲也总要有一个坐标",
            imgSrc: "poster_4.jpg",
            problems: [{
                text: "有哪些优秀的「一句话科幻」？ >",
                url: "https://www.zhihu.com/question/42507398/answer/152268935"
            }, {
                text: "有哪些你想发明却已经被人发明了的东西？ >",
                url: "https://www.zhihu.com/question/31937124/answer/854045621"
            }, {
                text: "哪些单机手机游戏让你惊呼「太好玩了」？ >",
                url: "https://www.zhihu.com/question/25984324/answer/727952266"
            }],
            trianglePositionX: 2,
            x: 1.8,
            y: 1.5
        }, {
            id: 5,
            gId: 12,
            mileage: 300,
            name: "灵药之舟",
            brightState: false,
            imgUsl: "landmark-5.png",
            describe: "不被理解的「无病呻吟」，这里总有你的「解药」",
            imgSrc: "poster_5.jpg",
            problems: [{
                text: "恋人之间的最好状态是怎样的？ >",
                url: "https://www.zhihu.com/question/31997695/answer/345029155"
            }, {
                text: "有什么办法可以让人一分钟从消极的情绪中走出来？ >",
                url: "https://www.zhihu.com/question/24340654/answer/39282202"
            }, {
                text: "如果有了一亿人民币，你们还会上学/工作吗？ >",
                url: "https://www.zhihu.com/question/339944846/answer/800346260"
            }],
            trianglePositionX: 2,
            x: 3.4,
            y: 3.6
        }, {
            id: 6,
            gId: 13,
            mileage: 500,
            name: "斯高易塔",
            brightState: false,
            imgUsl: "landmark-6.png",
            describe: "意想不到，看完惊呼「斯高易」的前沿科技都在这里",
            imgSrc: "poster_6.jpg",
            problems: [{
                text: "有哪些两句不相连的诗，可以组合成一句极品诗句？ >",
                url: "https://www.zhihu.com/question/359948448/answer/931534426"
            }, {
                text: "有哪些「还有这种操作？ >」的故事？ >",
                url: "https://www.zhihu.com/question/60347845/answer/193819452"
            }, {
                text: "哪些历史人物的实际年龄让人震惊或观感错乱？ >",
                url: "https://www.zhihu.com/question/40301819/answer/972060222"
            }],
            trianglePositionX: 2,
            x: 1.4,
            y: 6
        }, {
            id: 7,
            gId: 18,
            mileage: 100,
            name: "高赞岛",
            brightState: false,
            imgUsl: "landmark-7.png",
            describe: "湖经江河而平静，如同经历一切后藏起的秘密",
            imgSrc: "poster_7.jpg",
            problems: [{
                text: "有文化可以有多可怕？ >",
                url: "https://www.zhihu.com/question/50200915/answer/120450390"
            }, {
                text: "生活中有哪些行为是高情商的表现？ >",
                url: "https://www.zhihu.com/question/35215759/answer/1311351742"
            }, {
                text: "一句话的信息量能大到什么程度？ >",
                url: "https://www.zhihu.com/question/358861765/answer/954049007"
            }],
            trianglePositionX: 2,
            x: 2,
            y: 1.4
        }, {
            id: 8,
            gId: 19,
            mileage: 200,
            name: "预言神庙",
            brightState: false,
            imgUsl: "landmark-8.png",
            describe: "高能神预言都在这里",
            imgSrc: "poster_8.jpg",
            problems: [{
                text: "你知道哪些很准的神预言？ >",
                url: "https://www.zhihu.com/question/48944599/answer/137847124"
            }, {
                text: "知乎用户有哪些预言最终被证实了？ >",
                url: "https://www.zhihu.com/question/265334984/answer/1095944712"
            }, {
                text: "可以留下一个你对未来的预言吗？ >",
                url: "https://www.zhihu.com/question/295698554/answer/1143895559"
            }],
            trianglePositionX: 2,
            x: 3,
            y: 3
        }, {
            id: 9,
            gId: 20,
            mileage: 500,
            name: "潘多拉古堡",
            brightState: false,
            imgUsl: "landmark-9.png",
            describe: "如同潘多拉一样美丽而惊险的古堡",
            imgSrc: "poster_9.jpg",
            problems: [{
                text: "男生一觉醒来发现自己变成了妹子，会干什么？ >",
                url: "https://www.zhihu.com/question/298563043/answer/768282200"
            }, {
                text: "如何防止被理发师刺杀？ >",
                url: "https://www.zhihu.com/question/399960047/answer/1431708924"
            }, {
                text: "《王者荣耀》的英雄到现实世界，会从事什么职业？ >",
                url: "https://www.zhihu.com/question/375776899/answer/1517250193"
            }],
            trianglePositionX: 2,
            x: 1.6,
            y: 6
        }, {
            id: 10,
            gId: 21,
            mileage: 200,
            name: "985无人区",
            brightState: false,
            imgUsl: "landmark-10.png",
            imgSrc: "poster_10.jpg",
            problems: [{
                text: "知乎在各个领域有哪些值得关注的用户？ >",
                url: "https://www.zhihu.com/question/20237807/answer/1503072633"
            }, {
                text: "如何迅速定位某个领域的最佳书籍？ >",
                url: "https://www.zhihu.com/question/21247659/answer/17653986	"
            }, {
                text: "已知人类发生的有益的基因突变有哪些呢？ >",
                url: "https://www.zhihu.com/question/22306798/answer/481485643"
            }],
            describe: "",
            trianglePositionX: 1,
            x: 0.6,
            y: 4.1
        }, {
            id: 11,
            gId: 8,
            mileage: 100,
            name: "破晓之城",
            brightState: false,
            imgUsl: "landmark-11.png",
            describe: "怦然心动便是爱在破晓",
            imgSrc: "poster_11.jpg",
            problems: [{
                text: "女朋友或妻子是逗逼，是种怎样的体验？ >",
                url: "https://www.zhihu.com/question/35580938/answer/80873845"
            }, {
                text: "在爱情中，你所经历的「亮点」有哪些？ >",
                url: "https://www.zhihu.com/question/19783207/answer/12950101"
            }, {
                text: "情侣之间如何才能每天过得很甜？ >",
                url: "https: //www.zhihu.com/question/307721987/answer/572910846	"
            }],
            trianglePositionX: 2,
            x: 1.8,
            y: 2
        }, {
            id: 12,
            gId: 9,
            mileage: 200,
            name: "日落峡谷",
            brightState: false,
            imgUsl: "landmark-12.png",
            describe: "念念不忘，必有回响，有爱就终不会到底",
            imgSrc: "poster_12.jpg",
            problems: [{
                text: "思念到极致是什么感觉？ >",
                url: "https://www.zhihu.com/question/31914864/answer/88571793"
            }, {
                text: "努力学习的意义到底在哪里？ >",
                url: "https://www.zhihu.com/question/27513493/answer/119732285"
            }, {
                text: "爸爸可以有多疼爱女儿？ >",
                url: "https://www.zhihu.com/question/296480612/answer/610509098"
            }],
            trianglePositionX: 2,
            x: 2.4,
            y: 4.2
        }, {
            id: 13,
            gId: 10,
            mileage: 500,
            name: "夜幕之港",
            brightState: false,
            imgUsl: "landmark-13.png",
            describe: "家是夜幕降临前最安心的港湾",
            imgSrc: "poster_13.jpg",
            problems: [{
                text: "如何成为一个优秀的男朋友？ >",
                url: "https://www.zhihu.com/question/26753619/answer/34280535"
            }, {
                text: "有一天你感觉女友不再那么完美怎么办？ >",
                url: "https://www.zhihu.com/question/298645716/answer/529356160"
            }, {
                text: "你正在经历怎样的婚姻生活？ >",
                url: "https://www.zhihu.com/question/335946791/answer/1025677763"
            }],
            trianglePositionX: 2,
            x: 1.2,
            y: 7
        }, {
            id: 14,
            gId: 14,
            mileage: 100,
            name: "答主岛",
            brightState: false,
            imgUsl: "landmark-14.png",
            describe: "不明觉厉的艺术宝藏都在这里",
            imgSrc: "poster_14.jpg",
            problems: [{
                text: "你在知乎上发现了哪些「宝藏答主」？ >",
                url: "https://www.zhihu.com/question/360090373/answer/931156507"
            }, {
                text: "知乎上有哪些让你受益匪浅的专业回答？ >",
                url: "https://www.zhihu.com/question/316890910/answer/631642594"
            }, {
                text: "知乎有哪些经典「神回答」？ >",
                url: "https://www.zhihu.com/question/23758237/answer/157492923"
            }],
            trianglePositionX: 2,
            x: 0.2,
            y: 7
        }, {
            id: 15,
            gId: 15,
            mileage: 100,
            name: "乐之源泉",
            brightState: false,
            imgUsl: "landmark-15.png",
            describe: "在知乎不能错过的独家精神放松领地",
            imgSrc: "poster_15.jpg",
            problems: [{
                text: "为什么没人写东北人是霸道总裁的小说？ >",
                url: "https://www.zhihu.com/question/337970710/answer/776346588"
            }, {
                text: "在酒吧喊一次“这轮酒我请”大概得花多少钱？ >",
                url: "https://www.zhihu.com/question/279194092/answer/408439915	"
            }, {
                text: "你听过哪些商标被抢注的“糗事”？ >",
                url: "https://www.zhihu.com/question/351180302/answer/863120501"
            }],
            trianglePositionX: 1,
            x: 1,
            y: 5.1
        }, {
            id: 16,
            gId: 16,
            mileage: 200,
            name: "匿名岛",
            brightState: false,
            imgUsl: "landmark-16.png",
            describe: "有料的事，先匿再说",
            imgSrc: "poster_16.jpg",
            problems: [{
                text: "有哪些你只能匿名说出来的秘密？ >",
                url: "https://www.zhihu.com/question/265583638/answer/609949683"
            }, {
                text: "情侣第一次睡在一起什么感觉？ >",
                url: "https://www.zhihu.com/question/323640622/answer/897076214"
            }, {
                text: "马化腾写代码的水平如何？ >",
                url: "https://www.zhihu.com/question/20485547/answer/15259225"
            }],
            trianglePositionX: 2,
            x: 1.8,
            y: 2.2
        }, {
            id: 17,
            gId: 17,
            mileage: 500,
            name: "神器草甸",
            brightState: false,
            imgUsl: "landmark-17.png",
            describe: "最NBly的神器种草，欲善其是必利其器",
            imgSrc: "poster_17.jpg",
            problems: [{
                text: "有哪些值得科普的潮牌？ >",
                url: "https://www.zhihu.com/question/280681420/answer/794063451"
            }, {
                text: "日常生活中有哪些致命却易被忽视的安全隐患？ >",
                url: "http://www.zhihu.com/question/30166462"
            }, {
                text: "有哪些书看完后会让人很后悔没有早看到？ >",
                url: "https://www.zhihu.com/question/22794831/answer/575596930"
            }],
            trianglePositionX: 2,
            x: 3.4,
            y: 5
        }, {
            id: 18,
            gId: 4,
            mileage: 100,
            name: "故事巨鳄",
            brightState: false,
            imgUsl: "landmark-18.png",
            describe: "会讲故事会装X的不止「刚下飞机」的人",
            imgSrc: "poster_18.jpg",
            problems: [{
                text: "有哪些照片一张就是一个故事？ >",
                url: "https://www.zhihu.com/question/30062423/answer/203519619"
            }, {
                text: "有哪些机智的圆场故事？ >",
                url: "https://www.zhihu.com/question/27103265/answer/170055718"
            }, {
                text: "历史上有哪些硬核的人？ >",
                url: "https://www.zhihu.com/question/318496657/answer/733176721"
            }],
            trianglePositionX: 2,
            x: 3,
            y: 2
        }, {
            id: 19,
            gId: 5,
            mileage: 100,
            name: "体验洞穴",
            brightState: false,
            imgUsl: "landmark-19.png",
            describe: "在这里观望的人，都在等一个梭哈",
            imgSrc: "poster_19.jpg",
            problems: [{
                text: "作为演员，拍吻戏是种怎样的体验?",
                url: "https://www.zhihu.com/question/48959950/answer/124884212"
            }, {
                text: "你有过什么一般人体验不到的经历？ >",
                url: "https://www.zhihu.com/question/290765640/answer/472744445"
            }, {
                text: "你所经历过的最尴尬的事情是什么？ >",
                url: "https://www.zhihu.com/question/66624238/answer/288098253"
            }],
            trianglePositionX: 2,
            x: 1.4,
            y: 3.6
        }, {
            id: 20,
            gId: 6,
            mileage: 100,
            name: "万国竞技场",
            brightState: false,
            imgUsl: "landmark-20.png",
            describe: "百家争鸣，大国角逐，百姓吃瓜",
            imgSrc: "poster_20.jpg",
            problems: [{
                text: "当前有哪些被高估、低估的国家和地区？ >",
                url: "https://www.zhihu.com/question/38839722/answer/141097504"
            }, {
                text: "中国完成了哪些在外国人看来难以完成的事？ >",
                url: "https://www.zhihu.com/question/51296294/answer/125371595"
            }, {
                text: "历史上有没有一听就让人落泪的话？ >",
                url: "https://www.zhihu.com/question/422099214/answer/1507408800"
            }],
            trianglePositionX: 1,
            x: 0.6,
            y: 5.3
        }, {
            id: 21,
            gId: 7,
            mileage: 500,
            name: "邂邀峡谷",
            brightState: false,
            imgUsl: "landmark-21.png",
            describe: "想要财富自由必须突破（dollar）的关口",
            imgSrc: "poster_20.jpg",
            problems: [{
                text: "有哪些悖论一下子就吸引了你？ >",
                url: "https://www.zhihu.com/question/68018644/answer/269251676"
            }, {
                text: "有哪些读书学不来，却很重要的素质？ >",
                url: "https://www.zhihu.com/question/28626263/answer/41992632"
            }, {
                text: "哪部小说的结尾堪称神来之笔？ >",
                url: "https://www.zhihu.com/question/29775622/answer/223992339"
            }],
            trianglePositionX: 2,
            x: 3.8,
            y: 5.2
        }],
    },
    // 计算属性（监听改变）
    getters: {
        // 地标排序后输出
        filterLandmarkSort: (state) => {
            // 按照接口id排序，再按照是否点亮排序
            let ObjArr = Object.assign([], state.landmarkList);
            return (ObjArr.sort((a, b) => a.gId - b.gId)).sort((a, b) => {
                if (!a.brightState && b.brightState) return 1
                if (a.brightState && !b.brightState) return -1
            })
            // sort((a, b) => a.gId - b.gId)
        },
        // 返回某个地标数据
        filterLandmarkTisp: (state) => {
            return state.landmarkList.find(x => x.id == state.newLandmarkId) || state.landmarkList[0]
        },
        filterLandmarkTispGID(state) {
            return (gId) => {
                return state.landmarkList.find(x => x.gId == gId)
            }
        },
        // 返回某个岛屿数据
        filterIslandTisp: (state) => {
            return state.isLandsList.find(x => x.id == state.newIslandId) || state.isLandsList[0]
        },
        // 点亮的地标数量
        filterLandmarkNumber: (state) => {
            let number = 0
            state.landmarkList.forEach(tem => {
                if (tem.brightState) {
                    number++
                }
            })
            return number
        },
        // 根据本地id查询地标数据
        filterLandmark: (state) => {
            return (id) => {
                return state.landmarkList.find(x => x.id == id)
            }
        },
        changeI(state) {
            return (val) => {
                state.newIslandId = val
                let BS = state.isLandsList.find(x => x.id === val).brightState
                if (BS == 1) {
                    //进行中状态 可直接跳转
                    state.showIslandsTisp = false
                    return true
                } else if (BS == 2) {
                    //已经点亮，直接跳转
                    state.showIslandsTisp = false
                    return true
                } else {
                    // 未开始  点击出现弹窗
                    state.showIslandsTisp = true
                    return false
                }
            }
        },

    },
    // 暴露的静态方法
    mutations: {
        // 写入用户信息
        getUserInfo(state, obj) {
            state.userInfo = obj
        },
        getIndexData(state, obj) {
            state.indexData = obj
        },
        // 更新岛屿对应状态
        changeIslandsState(state, arr) {
            state.isLandsList.map(obj => {
                let findArr = arr.find(x => obj.gId === x.id)
                if (findArr != "undefined") {
                    obj.brightState = findArr.status
                }
            })
        },
        // 更新地标对应状态
        changeLandmarkState(state, arr) {
            state.landmarkList.map(obj => {
                let findArr = arr.find(x => obj.gId === x.id)
                if (findArr !== undefined) {
                    obj.brightState = findArr.status == 2 ? true : false
                    if (findArr.miles) {
                        obj.mileage = findArr.miles
                    }
                    return obj
                }
            })
        },
        // 宝箱层是否出现
        changeST(state, bl) {
            if (typeof bl === "boolean") {
                state.treasureList.showTreasure = bl
            } else {
                state.treasureList.showTreasure = !state.treasureList.showTreasure
            }
        },
        // 规则弹窗的显示状态修改
        changeSAR(state, bl) {
            if (typeof bl === "boolean") {
                state.showActivityRules = bl
            } else {
                state.showActivityRules = !state.showActivityRules
            }

            if (state.showActivityRules) {
                window.zap.trackEvent({
                    id: 9984,
                    action: "Click",
                }, {
                    button: {
                        text: '航海攻略'
                    }
                });
            }
        },
        // 签到
        changeA(state, bl) {
            if (typeof bl === "boolean") {
                state.showAttendance = bl
            } else {
                state.showAttendance = !state.showAttendance
            }
            if (state.showAttendance) {
                window.zap.trackEvent({
                    id: 9984,
                    action: "Click",
                }, {
                    button: {
                        text: '签到'
                    }
                });
            }
        },

        changCU(state, val) {
            state.can_unlock = val
        },
        // showReceiveTips
        changRT(state) {
            state.showReceiveTips = true
            setTimeout(() => {
                state.showReceiveTips = false
            }, 3000)
        },

        // 跳转进去岛屿
        changeGL(state, gId) {
            if (gId) {
                state.newIslandId = state.isLandsList.find(x => x.gId === gId).id
                state.showIslandsTisp = false
            } else {
                state.showIslandsTisp = false
            }
        },
        // 任务栏显示关闭
        changeT(state, bl) {
            if (typeof bl === 'boolean') {
                state.showTasks = bl
            } else {
                state.showTasks = !state.showTasks
            }
            state.showLandmarkTisp = false
        },
        // 岛屿提示窗显示关闭
        changeIT(state) {
            state.showIslandsTisp = false
            state.newIslandId = 0
        },
        // 地标提示窗显示关闭
        changeLT(state, bl) {
            if (typeof bl === "boolean") {
                state.showLandmarkTisp = bl
            } else {
                state.showLandmarkTisp = !state.showLandmarkTisp
            }
        },
        // 宝箱数据写入，并弹出
        changeTreasureList(state, data) {
            state.treasureList.list = data
        },
        // 点亮地标，修改状态, 传入当前地标id
        brightLandmark(state, id) {
            if (id) {
                state.newLandmarkId = id
                // 当前点击的坐标对象状态
                state.landmarkList.map(temp => {
                    if (temp.id === id) {
                        //这里处理坐标当前状态（
                        // 1:当前坐标可以解锁 
                        // 2:当前为轮次坐标提示公里 
                        state.showLandmarkTisp = true
                        //3:当前坐标还未轮到提示坐标不可以解锁

                    }
                    return temp
                })
            }
        },

    },
    // 异步方法
    actions: {
        getIndex(content) {
            index().then((res) => {
                if (res.code === 200) {
                    content.commit("getIndexData", res.data)
                }
            });
        },
    }
})


export default store