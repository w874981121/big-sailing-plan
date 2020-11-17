<template>
  <div class="loading">
    <div class="big_title">
      <img src="~@/img/loding-big-title.png" alt="" />
      <h1>解锁知乎新大陆，赢 888 元现金</h1>
    </div>
    <div class="content">
      <div class="progress_bar">
        <div class="progress_bar_" :style="positionLetf"></div>
        <img class="icon" src="../assets/svg/loading_icon.svg" />
      </div>
      <p>{{ percent }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Loading",
  data() {
    return {
      count: 1,
      percent: "加载中···",
      positionLetf: 0,
      imgLength: 100,
    };
  },
  created() {
    let Oimg = new Image();
    Oimg.onload = () => {
      this.$nextTick(() => {
        this.preload();
      });
    };
    Oimg.src = require("@/img/loading_bg.jpg");
  },
  mounted() {},
  watch: {
    count: function (val) {
      this.positionLetf = `width:${
        ((this.count / this.imgLength) * 439) / 100
      }rem`;
      if (val === this.imgLength) {
        // 图片加载完成后跳转页面
        this.$router.replace("/ci");
      }
    },
  },
  methods: {
    ...mapMutations([
      "changCU",
      "changeIslandsState",
      "getUserInfo",
    ]),
    preload() {
      let images = [
        "currency_bg.jpg",
        "alert_box_bg.png",
        "nav_bg.png",
        "zhi.png",
        "bottom_title.png",
        "attendance_bg_x.png",
        "attendance_bg.png",
        "attendance_button.png",
        "process_bg.png",
        "process_node_.png",
        "process_node.png",
        "process_mark.png",
        "process_show.png",
        "process_treasure_key.png",
        "process_treasure.png",
        "landmark-1.png",
        "landmark-2.png",
        "landmark-3.png",
        "landmark-4.png",
        "landmark-5.png",
        "landmark-6.png",
        "landmark-7.png",
        "landmark-8.png",
        "landmark-9.png",
        "landmark-10.png",
        "landmark-11.png",
        "landmark-12.png",
        "landmark-13.png",
        "landmark-14.png",
        "landmark-15.png",
        "landmark-16.png",
        "landmark-17.png",
        "landmark-18.png",
        "landmark-19.png",
        "landmark-20.png",
        "landmark-21.png",
      ];
      this.imgLength = images.length + 1;
      let index = 0;
      let image = [];
      images.forEach((src) => {
        index++;
        image[index] = new Image();
        image[index].onerror = (err) => {
          console.log(err);
        };
        image[index].onload = () => {
          this.count++;
        };
        image[index].src = require("@/img/" + src);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.loading
  overflow: hidden
  .big_title
    margin-top: 1.6rem
    h1
      color: #ffffff
      font-size: 0.36rem
  .content
    margin: 1rem auto 0 auto
    width: 5.07rem
    display: block
  .progress_bar
    width: 100%
    min-height: 0.6rem
    background: url("../assets/images/progress_bar.png") no-repeat center
    background-size: 4.47rem 0.33rem
    position: relative
    .progress_bar_
      width: 0rem
      height: 0.22rem
      background: url("../assets/images/progress_bar_.png") no-repeat
      background-size: 4.39rem 0.22rem
      margin-top: 0.19rem
      position: absolute
      left: 50%
      margin-left: -2.19rem

    .icon
      width: 0.6rem
      height: 0.6rem
      position: absolute
      left: 0
      top: 0
      animation: rotate 6s linear infinite
  p
    color: #ffffff
    font-size: 0.24rem

@keyframes rotate
  0%
    transform: rotateZ(0deg)

  100%
    transform: rotateZ(360deg)
</style>