<template>
  <!-- 宝箱 -->
  <div class="treasure" v-show="treasureList.showTreasure">
    <div class="bg"></div>
    <div class="treasure-box">
      <div class="treasure-img">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="text" v-if="num == 7">
        <p style="font-size: 0.36rem">恭喜解锁终极大奖！</p>
        <p>您是 {{ order }} 位</p>
        <p>送你 {{ count }} 元航海基金</p>
      </div>
      <div class="text" v-else>
        <p style="font-size: 0.36rem">
          恭喜开启 <span style="color: #e6cd71">宝盒</span>
        </p>
        <p>内含 {{ count }} 元现金</p>
        <p>（解锁全部地标，领取终极大奖）</p>
      </div>
      <div class="button-accept" @click="closeBUtton">收下奖励</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "treasure",
  data() {
    return {
      imgData: [
        "treasure-1.png",
        "treasure-2.png",
        "treasure-3.png",
        "treasure-4.png",
        "treasure-5.png",
        "treasure-6.png",
        "treasure-7.png",
        "treasure-8.png",
      ],
      num: 0,
      stateTwoState: false, //大奖宝箱是否触发
      count: 0,
      order: 0,
    };
  },
  mounted() {
    // this.
  },
  watch: {
    "treasureList.list": function (val) {
      console.log(999999);
      //一级宝箱
      if (val.treasure_box.has) {
        this.changeST(true);
        this.count = val.treasure_box.prize[0].count;
      }
      //   终极宝箱
      if (val.final_prize.has) {
        if (!val.treasure_box.has) {
          this.num = 7;
          this.changeST(true);
          this.count = val.final_prize.prize[0].count;
          this.order = val.final_prize.prize[0].order;
        } else {
          this.stateTwoState = true;
        }
      }
    },
    filterLandmarkNumber(val) {
      try {
        if (
          !this.treasureList.list.treasure_box.has &&
          this.treasureList.list.final_prize.has
        ) {
          this.num = 7;
        } else {
          this.num = Math.floor(val / 3) - 1;
        }
      } catch (err) {
        // console.log("this.treasureList.list可能没有赋值");
      }
    },
  },
  methods: {
    ...mapMutations(["changeST"]),
    closeBUtton() {
      if (this.stateTwoState) {
        this.changeST(false);
        setTimeout(() => {
          this.stateTwoState = false;
          this.num = 7;
          this.count = this.treasureList.list.final_prize.prize[0].count;
          this.changeST();
        }, 1000);
      } else {
        this.changeST(false);
      }
    },
  },
  computed: {
    ...mapGetters(["filterLandmarkNumber"]),
    ...mapState(["treasureList"]),
    imgSrc: function () {
      return require("@/img/" + this.imgData[this.num]);
    },
  },
};
</script>
<style lang="sass" scoped>
.treasure
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    .bg
        width: 100%
        height: 100%
        background: rgba(0,0,0,0.2)
        position: absolute
        top: 0
        z-index: -1
    .treasure-box
        width: 100%
        height: 100%
        background: rgba(0,0,0,0.5)
        position: absolute
        top: 0
        .treasure-img
            margin-top: 1rem
        .text
            margin-top: -1rem
            font-size: 0.28rem
            font-weight: 600
            color: #ffffff

.button-accept
    display: block
    width: 3.57rem
    height: 1.32rem
    margin: 1rem auto
    line-height: 1.2rem
    font-size: 0.42rem
    font-weight: 600
    color: #c65d10
    background: url("~@/img/button-return.png") no-repeat
</style>