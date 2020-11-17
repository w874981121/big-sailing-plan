<template>
  <div class="my-reward">
    <div class="box-bg">
      <div class="draw_money" v-show="list.length > 0">
        ￥ {{ money }} 活动结束后可提现
        <span
          v-if="isPayState"
          @click="
            window.zhihuHybrid.dispatch('base/openURL', {
              url: 'zhihu://my_wallet',
            })
          "
          >可提现 ></span
        >
        <span style="color: #999999" v-else>可提现 ></span>
      </div>
      <div class="no_bg" v-show="list.length <= 0">
        <img src="~@/img/my-reward_no.png" alt="" />
        <p>当前暂无奖励</p>
        <p>快去完成任务赢取奖励吧</p>
        <p>最高 888 元哦～</p>
      </div>
      <div class="content_list" v-show="list.length > 0">
        <div class="li_box" v-for="(item, i) in list" :key="i">
          <div class="left">
            <h3>{{ menu_list(item.component_type) }}</h3>
            <p>{{ item.draw_time }}</p>
          </div>
          <div class="right">+{{ item.prize_num }}里程</div>
        </div>
      </div>
    </div>
    <div class="button-return" @click="goBack">返回</div>
  </div>
</template>

<script>
import { prizes, profile } from "../api/api";
export default {
  name: "my-reward",
  data() {
    return {
      money: 24,
      isPayState: false,
      list: [],
    };
  },
  mounted() {
    // this.getList();
    // this.getProfile();
  },
  activated() {
    this.getList();
    this.getProfile();
  },
  computed: {
    menu_list() {
      return (str) => {
        let menu = {
          sign: "签到",
          read_rec_content: "刷推荐内容15s",
          read_hot_content: "刷热榜内容15s",
          search: "搜一搜",
          share_answer: "分享回答",
          push_on: "开启PUSH权限",
          complete_profile: " 完善个人信息",
        };
        return menu[str];
      };
    },
  },
  methods: {
    getList() {
      prizes().then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.list = res.data.coin;
          this.list.map((item) => {
            item.draw_time = this.getMyDate(item.draw_time * 1000);
          });
        }
      });
    },
    getProfile() {
      profile().then((res) => {
        if (res.code === 200) {
          this.money = res.data.balance;
          this.isPayState = res.data.is_pay;
        }
      });
    },
    getMyDate(str) {
      function addZero(num) {
        if (parseInt(num) < 10) {
          num = "0" + num;
        }
        return num;
      }
      var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oHour = oDate.getHours(),
        oMin = oDate.getMinutes(),
        oSen = oDate.getSeconds(),
        oTime =
          oYear +
          "-" +
          addZero(oMonth) +
          "-" +
          addZero(oDay) +
          " " +
          addZero(oHour) +
          ":" +
          addZero(oMin) +
          ":" +
          addZero(oSen);
      return oTime;
    },
    goBack() {
      this.$router.back(-1);
    },
  },
};
</script>

<style lang="sass" scoped>
.my-reward
  .title
    color: #ffffff
    font-size: 0.4rem
    margin-top: 1.4rem
    img
      vertical-align: middle
      margin: 0 0.2rem 0.4rem 0
  .box-bg
    width: 6.34rem
    height: 7.59rem
    margin: 2.2rem auto 0 auto
    overflow: hidden
    position: relative
    background: url("~@/img/my-reward-bg.png") no-repeat
    .draw_money
      padding: 0 0.3rem
      height: 0.8rem
      line-height: 0.8rem
      background: #f6f6f6
      margin-top: 1.7rem
      color: #9c9c9c
      font-size: 0.24rem
      text-align: left
      span
        float: right
        color: #0082ff
        display: block
        margin-right: 0.1rem
    .no_bg
      margin-top: 2.1rem
      img
        margin-bottom: 0.2rem
      p
        color: #9c949f
        font-size: 0.24rem
        font-weight: 600
        line-height: 1.5
    .content_list
      width: 100%
      height: 4.4rem
      overflow-y: auto
      .li_box
        padding: 0 0.3rem
        height: 1.15rem
        display: flex
        justify-content: space-between
        .left
          text-align: left
          margin-top: 0.22rem
          h3
            font-size: 0.3rem
            color: #000000
            line-height: 0.5rem
          p
            font-size: 0.24rem
            color: #8a9799
            line-height: 0.3rem

        .right
          line-height: 1.15rem
          font-size: 0.4rem

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
</style>

