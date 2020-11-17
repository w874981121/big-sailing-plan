<template>
  <!-- 用户信息 -->
  <div class="title">
    <img class="head-portrait" :src="userInfo.avatar_url" alt="" />
    <div class="box">
      <div class="name">{{ userInfo.name }}</div>
      <div class="mileage">{{ indexData.miles }}里程</div>
    </div>
  </div>
</template>
<script>
import { getMe } from "../api/api";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "userInfo",
  data() {
    return {
      titleImgUrl: "",
      nameText: "",
      milesNumber: "",
    };
  },
  created() {
    if (Object.keys(this.userInfo).length <= 0) {
      this.getData();
    }
    if (Object.keys(this.indexData).length <= 0) {
      this.getIndex();
    }
  },
  methods: {
    ...mapMutations(["getUserInfo", "getIndexData"]),
    ...mapActions(["getIndex"]),
    getData() {
      // 获取用户信息
      getMe().then((res) => {
        if (res.id) {
          this.getUserInfo(res);
        } else {
          try {
            window.zhihuHybrid
              .dispatch("account/showLoginDialog", {
                next: "https://event-preview.zhihu.com/navigation/index.html",
              })
              .then((res) => alert(JSON.stringify(res) + "用户未登录"));
          } catch (err) {
            console.log("未加载完成触发");
          }
        }
      });
    },
  },
  computed: {
    ...mapState(["userInfo", "indexData"]),
  },
};
</script>
<style lang="sass" scoped>
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
</style>