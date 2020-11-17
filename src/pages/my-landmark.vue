<template>
  <div class="my-landmark">
    <div class="box-bg">
      <div class="box-list">
        <div
          class="landmark-box"
          ref="landmark-box"
          v-for="obj in filterLandmarkSort"
          :key="obj.id"
          :style="landmarkStyle(obj)"
          @click="getDom($event, obj)"
        ></div>
      </div>
    </div>
    <div tag="div" class="button-return" @click="goBack">返回</div>
    <div class="tisp_go" v-show="showTispGo">
      <div class="bg"></div>
      <div class="landmark-tisp" :style="styleTispGo">
        <div class="triangle-up" :style="{ left: newClickDom.z + 'rem' }"></div>
        <p>该地标尚未解锁，赚够里程即可解锁哦～</p>
        <div class="go_landmark" @click="goLandmark">获取里程</div>
        <div class="close" @click="showTispGo = false">
          <img src="../assets/images/close.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 1 - 小岛任务栏 -->
    <!-- <Tasks></Tasks> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import { elementAll } from "../api/api";
export default {
  name: "my-landmark",
  data() {
    return {
      showTispGo: false,
      newClickDom: {
        x: 0,
        y: 0,
        z: 1,
      },
      newObjeck: {},
    };
  },
  components: {
    // Tasks,
  },
  created() {
    this.getElementAll();
  },
  mounted() {},
  activated() {
    this.showTispGo = false;
    this.getElementAll();
  },
  methods: {
    ...mapMutations(["changeT", "changeLandmarkState"]),
    getDom(dom, obj) {
      this.newObjeck = obj;
      if (obj.brightState) {
        this.$router.push({ path: "/poster", query: { landmarkId: obj.id } });
      } else {
        this.newClickDom.z = 1;
        this.newClickDom.x = dom.currentTarget.getBoundingClientRect().left;
        this.newClickDom.y = dom.currentTarget.getBoundingClientRect().top;
        console.log(this.newClickDom.x, this.newClickDom.y);
        if (this.newClickDom.x > 450) {
          this.newClickDom.z = 3;
          this.newClickDom.x = this.newClickDom.x - 235;
        } else if (this.newClickDom.x > 150) {
          this.newClickDom.x = this.newClickDom.x - 35;
        }
        this.newClickDom.y = this.newClickDom.y + 120;
        this.showTispGo = true;
      }
    },
    getElementAll() {
      // 全部岛屿信息
      elementAll().then((res) => {
        if (res.code === 200) {
          this.changeLandmarkState(res.data.elements);
        }
      });
    },
    goBack() {
      this.$router.back(-1);
    },
    goLandmark() {
      this.changeT();
      this.showTispGo = false;
    },
  },
  computed: {
    ...mapGetters(["filterLandmarkSort"]),
    ...mapState(["landmarkList", "isLandsList"]),
    landmarkStyle: () => {
      return (obj) => {
        if (obj.brightState) {
          return `background: url(${require("@/img/" +
            obj.imgUsl)}) no-repeat center;background-size: contain`;
        }
        return "";
      };
    },
    styleTispGo() {
      return `top: ${this.newClickDom.y / 100}rem; left: ${
        this.newClickDom.x / 100
      }rem`;
    },
  },
};
</script>

<style lang="sass" scoped>
.my-landmark
  .title
    color: #ffffff
    font-size: 0.4rem
    margin-top: 1.4rem
    text-shadow: 0px 6px 1px #000000
    img
      vertical-align: middle
      margin: 0 0.2rem 0.4rem 0
  .box-bg
    width: 6.35rem
    height: 8.01rem
    margin: 2.2rem auto 0 auto
    position: relative
    overflow: hidden
    background: url("~@/img/my-landmark-bg.png") no-repeat
    .box-list
      width: 6rem
      height: 5.4rem
      margin: 1.8rem auto 0 auto
      overflow-y: auto
      display: flex
      justify-content: space-between
      align-content: flex-start
      flex-wrap: wrap
      .landmark-box
        width: 1.5rem
        height: 1.5rem
        margin: 0.2rem
        border-radius: 0.2rem
        background: #83a3db url("~@/img/lock.png") no-repeat center
  .button-return
    display: block
    width: 3.57rem
    height: 1.32rem
    margin: 0.2rem auto
    line-height: 1.2rem
    font-size: 0.42rem
    font-weight: 600
    color: #c65d10
    background: url("~@/img/button-return.png") no-repeat
  .tisp_go
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    .bg
      width: 100%
      height: 100%
      background: rgba(0,0,0,0.5)
      position: absolute
      top: 0
      z-index: -1
    .go_landmark
      width: 2.91rem
      height: 1.08rem
      line-height: 1rem
      font-size: 0.34rem
      font-weight: 600
      color: #c65d10
      background: url("~@/img/obtain-mileage.png") no-repeat
      margin-left: 0.87rem
      margin-top: 0.2rem
    .close
      width: 0.31rem
      height: 0.31rem
      padding: 0.1rem
      position: absolute
      top: 0rem
      right: 0rem
    .landmark-tisp
      width: 4.66rem
      height: 2.08rem
      position: absolute
      background: url("~@/img/islands-tisp.png") no-repeat
      .triangle-up
        width: 0
        height: 0
        border-left: 0.12rem solid transparent
        border-right: 0.12rem solid transparent
        border-bottom: 0.24rem solid rgba(255,255,255,0.8)
        position: absolute
        top: -0.24rem
        left: 2rem
      p
        font-size: 0.3rem
        margin-top: 0.4rem
        text-align: left
        padding: 0 0.5rem
</style>
