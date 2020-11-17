<template>
  <!-- 海报页 -->
  <div class="poster">
    <div class="poster-img">
      <img :src="urlImg" alt="" />
    </div>

    <!-- 用户信息 -->
    <UserInfo></UserInfo>

    <p class="numberPeople">
      有
      <span style="color: #f1a94c; font-size: 0.5rem">{{ visit_order }}</span>
      人来过这里
    </p>

    <div class="problems_list">
      <div
        class="problems_jump vibrate-1"
        @click="jumpGo(infoData.problems[0])"
      >
        {{ infoData.problems[0].text }}
      </div>
      <div
        class="problems_jump vibrate-2"
        @click="jumpGo(infoData.problems[1])"
      >
        {{ infoData.problems[1].text }}
      </div>
      <div
        class="problems_jump vibrate-3"
        @click="jumpGo(infoData.problems[2])"
      >
        {{ infoData.problems[2].text }}
      </div>
    </div>

    <div class="button_conserve" @click="upload">
      <img src="@/img/conserve.png" alt="" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { elementInfo } from "../api/api";
import UserInfo from "../components/userInfo";
export default {
  name: "poster",
  data() {
    return {
      visit_order: 0,
      landmarkId: 1,
      urlImg: "",
      downloadUrlImg: "",
      infoData: "",
    };
  },
  created() {
    this.landmarkId = this.$route.query.landmarkId;
    this.infoData = this.landmarkList.find(
      (x) => x.id === Number(this.landmarkId)
    );
    let imgSrc = this.infoData.imgSrc;
    this.urlImg = require("@/img/" + imgSrc);
    this.downloadUrlImg = require("@/img/download_" + imgSrc);
    console.log(this.infoData.problems[0].text);
  },
  mounted() {
    if (window.zap.trackPageShow) {
      window.zap.trackPageShow({
        id: 9992,
      });
    }
    elementInfo({
      element_id: this.landmarkId,
    }).then((res) => {
      if (res.code == 200) {
        this.visit_order = res.data.visit_order;
      }
    });
  },
  activated() {
    this.landmarkId = this.$route.query.landmarkId;
    this.infoData = this.landmarkList.find(
      (x) => x.id === Number(this.landmarkId)
    );
    let imgSrc = this.infoData.imgSrc;
    this.urlImg = require("@/img/" + imgSrc);
    this.downloadUrlImg = require("@/img/download_" + imgSrc);
  },
  methods: {
    upload() {
      window.zap.trackEvent({
        id: 9993,
        action: "Click",
      });

      window.zhihuHybrid
        .dispatch("base/downloadImage", {
          url: this.downloadUrlImg,
        })
        .then((res) => alert(JSON.stringify(res) + "下载海报"));
    },
    jumpGo(obj) {
      window.zap.trackEvent(
        {
          id: 9994,
          action: "Click",
        },
        { button: { text: obj.text } }
      );
      //   console.log(url);
      window.zhihuHybrid.dispatch("base/openURL", { url: obj.url });
    },
  },
  computed: {
    ...mapState(["landmarkList"]),
  },
  components: {
    UserInfo,
  },
};
</script>
<style lang="sass" scoped>
.poster
  position: relative
  .title
    width: 3.12rem
    height: 1.22rem
    position: absolute
    left: 0.25rem
    top: 0.05rem
    background: url("~@/img/title_bg2.png") no-repeat
    background-size: 100%
    .head-portrait
      display: block
      float: left
      width: 1rem
      height: 1rem
      margin: 0.06rem
      border-radius: 50%
      .box
        width: 1.6rem
        margin-top: 0.26rem
        margin-left: 0.12rem
        text-align: left
        float: left
        color: #c65d10
        .name
          width: 100%
          font-size: 0.26rem
          line-height: 0.34rem
        .mileage
          margin-top: 0rem
          width: 100%
          font-size: 0.24rem
  .numberPeople
    position: absolute
    top: 1.4rem
    font-size: 0.3rem
    color: #ffffff
    left: 0.6rem
    font-weight: 600
  .poster-img
    width: 100%
    height: auto
  img
    width: 100%
    height: 100%
  .button_conserve
    width: 4.7rem
    height: 1.32rem
    position: fixed
    bottom: 1rem
    left: 50%
    margin-left: -2.35rem
  .problems_list
    position: absolute
    top: 3rem
    width: 90%
    left: 5%
    .problems_jump
      color: #ffffff
      height: 0.6rem
      padding: 0 0.3rem
      line-height: 0.6rem
      font-size: 0.24rem
      border-radius: 0.6rem
      background: rgba(0,0,0,0.5)
      position: absolute
  .vibrate-1
    top: 0.4rem
    left: 0
    -webkit-animation: vibrate-2 5s linear infinite both
    animation: vibrate-2 5s linear infinite both
  .vibrate-2
    top: 2.6rem
    right: 0
    -webkit-animation: vibrate-2 6s linear infinite both
    animation: vibrate-2 6s linear infinite both
  .vibrate-3
    top: 5.6rem
    -webkit-animation: vibrate-2 7s linear infinite both
    animation: vibrate-2 7s linear infinite both

@-webkit-keyframes vibrate-2
  0%
  -webkit-transform: translate(0)
  transform: translate(0)

  20%
  -webkit-transform: translate(4px, -4px)
  transform: translate(4px, -4px)

  40%
  -webkit-transform: translate(4px, 4px)
  transform: translate(4px, 4px)

  60%
  -webkit-transform: translate(-4px, 4px)
  transform: translate(-4px, 4px)

  80%
  -webkit-transform: translate(-2px, -4px)
  transform: translate(-4px, -4px)

  100%
  -webkit-transform: translate(0)
  transform: translate(0)

@keyframes vibrate-2
  0%
    -webkit-transform: translate(0)
    transform: translate(0)

  20%
    -webkit-transform: translate(4px, -4px)
    transform: translate(4px, -4px)

  40%
    -webkit-transform: translate(4px, 4px)
    transform: translate(4px, 4px)

  60%
    -webkit-transform: translate(-4px, 4px)
    transform: translate(-4px, 4px)

  80%
    -webkit-transform: translate(-4px, -4px)
    transform: translate(-4px, -4px)

  100%
    -webkit-transform: translate(0)
    transform: translate(0)
</style> 