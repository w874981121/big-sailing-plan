<template>
  <div id="app" class="content-bg" :style="bgStyleUrl">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 1 - 规则 -->
    <ActivityRules></ActivityRules>
    <!-- 2 - 签到 -->
    <Attendance></Attendance>
    <!-- 3 - 宝箱 -->
    <Treasure></Treasure>
    <!-- 4 - 小岛任务栏 -->
    <Tasks></Tasks>
  </div>
</template>

<script>
// 端下载海报
// window.zhihuHybrid.dispatch("base/downloadImage", {
//   url: imgSrc,
// });

// 签到
// POST www.zhihu.com/api/v4/usertask-core/action/come_in
// {
// "action_time": 123354756, // 单位 秒
// "extra": {
//     "key": "navigation_sign"
// }
// }

// 获取用户信息
// https://www.zhihu.com/api/v4/me

// zap.trackEvent({
// id: , //埋点id
// action: , // 事件
// exet: {
//   bnottub: {
//     artxe: "";
//   }
// }
// })

// PosterShare: {imageURL: imgSrc},
import ActivityRules from "./components/activity-rules";
import Attendance from "./components/attendance";
import Treasure from "./components/treasure";
import Tasks from "./components/tasks";
import { mapMutations } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.name);
  },
  watch: {
    $route() {
      this.changeT(false);
      this.changeA(false);
      this.changeST(false);
      this.changeSAR(false);
    },
  },
  methods: {
    ...mapMutations(["changeT", "changeA", "changeST", "changeSAR"]),
  },
  computed: {
    bgStyleUrl: function () {
      console.log();
      if (this.$route.name === "loading") {
        return `background: url(${require("@/img/loading_bg.jpg")}) no-repeat center;background-size: cover;`;
      } else {
        return `background: url(${require("@/img/currency_bg.jpg")}) no-repeat center;background-size: cover;`;
      }
    },
  },
  components: {
    ActivityRules,
    Attendance,
    Treasure,
    Tasks,
  },
};
</script>

<style>
html {
  font-size: 100px;
  height: 100%;
}
body {
  font-size: 0.14rem;
  margin: 0;
  padding: 0;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.content-bg {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
