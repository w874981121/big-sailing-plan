<template>
  <div class="pageislands">
    <!-- 用户信息 -->
    <UserInfo></UserInfo>
    <!-- 六座岛屿模块 -->
    <Islands></Islands>

    <!-- 导航 -->
    <div class="nav">
      <div class="linkbox" @click="changeSAR"></div>
      <div class="linkbox" @click="changeA"></div>
      <router-link class="linkbox" to="/ml"></router-link>
      <router-link class="linkbox" to="/mr"></router-link>
    </div>

    <!-- 赚里程 -->
    <div class="button_box">
      <div class="return" @click="goBack">返回</div>
      <div class="earn_mileage" @click="changeT">获取里程</div>
      <div class="receive_bg" v-show="showReceiveTips">
        <img src="~@/img/receive_bg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Islands from "../components/islands";
import UserInfo from "../components/userInfo";
export default {
  name: "pageislands",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {
    ...mapMutations(["changeSAR", "changeA", "changeT"]),
    goBack() {
      this.$router.back(-1);
    },
  },
  computed: {
    ...mapState([
      "showIslands",
      "isLandsList",
      "userInfo",
      "indexData",
      "unlockNumber",
      "showReceiveTips",
    ]),
  },
  components: {
    Islands,
    UserInfo,
  },
};
</script>

<style lang="sass" scoped>
.nav
  width: 1.85rem
  height: 3.16rem
  position: absolute
  right: 0.25rem
  top: 0.1rem
  background: url("~@/img/nav_bg2.png") no-repeat
  background-size: 100%
  .linkbox
    width: 1.4rem
    height: 0.62rem
    margin-top: 0.18rem
    margin-left: 0.46rem
    display: block
.button_box
  width: 100%
  height: 1.19rem
  position: relative
  .return,.earn_mileage
    width: 3.21rem
    height: 1.19rem
    margin: 0.1rem auto
    line-height: 1.1rem
    font-size: 0.42rem
    font-weight: 600
    color: #c65d10
    background: url("~@/img/button_return_2.png") no-repeat
  .return
    float: left
    margin-left: 0.4rem
  .earn_mileage
    float: right
    margin-right: 0.4rem
  .receive_bg
    width: 2.14rem
    position: absolute
    top: -0.8rem
    right: 0.5rem
    img
      width: 100%
</style>