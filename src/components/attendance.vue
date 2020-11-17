
<template>
  <!-- 签到 -->
  <div class="attendance" v-show="showAttendance">
    <div class="box-bg">
      <p class="text">{{ textDat }}</p>
      <div class="content_days">
        <div
          class="attendance_bg"
          :class="attendanceState(i)"
          v-for="(day, i) in rewardList"
          :key="i"
        >
          <p class="p1">{{ i !== 6 ? "+" + day : "" }}</p>
          <p class="p2">
            {{ todayAttendance(i) ? "今天" : i - 1 + 2 + "天" }}
          </p>
        </div>
      </div>

      <div class="close" @click="changeA">
        <img src="../assets/images/close.png" alt="" />
      </div>

      <div class="attendance_button" @click="goAttendance" v-show="!todayState">
        <img src="~@/img/attendance_button.png" alt="" />
      </div>
      <div class="attendance_button_x" v-show="todayState">已记录</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { signProgress, postUserTaskCore } from "../api/api";

export default {
  name: "attendance",
  data() {
    return {
      //每天奖励
      rewardList: [],
      todayState: false,
      // 当前签到天数
      attendanceDay: 1,
    };
  },
  watch: {
    showAttendance(val) {
      if (val) {
        window.zap.trackCardShow({ id: 9995, name: "记录航海日志" });
      }
    },
  },

  mounted() {
    this.getSignStateList();
  },
  methods: {
    ...mapMutations(["changeA"]),
    getSignStateList() {
      return signProgress().then((res) => {
        if (res.code === 200) {
          this.rewardList = res.data.reward;
          this.todayState = res.data.today_has_signed_in;
          if (!res.data.today_index) {
            this.attendanceDay = res.data.today_index;
          } else {
            this.attendanceDay = res.data.today_index - 1;
          }

          if (!this.todayState) {
            this.changeA(true);
          }
          return res;
        }
      });
    },
    // 点击去签到
    goAttendance() {
      window.zap.trackEvent(
        {
          id: 9996,
          action: "Click",
          name: "记录日志",
        },
        {
          button: { text: "记录日志" },
        }
      );
      if (!this.todayState) {
        postUserTaskCore({
          extra: {
            key: "navigation_sign",
          },
        }).then((res) => {
          if (res.success) {
            this.todayState = true;
            // this.getSignStateList().then(() => {
            setTimeout(() => {
              this.changeA();
            }, 1000);
            // });
          }
        });
      } else {
        this.changeA();
      }
    },
    todayAttendance(i) {
      return this.attendanceDay === i;
    },
  },
  computed: {
    ...mapState(["showAttendance"]),
    // 签到天数样式
    attendanceState: function () {
      return (i) => {
        if (i == 6) {
          if (this.todayState && this.attendanceDay === i) {
            return "styleBag_";
          } else {
            return "styleBag";
          }
        }

        if (this.attendanceDay > i) {
          return "attendance_bg_x";
        }
        if (this.todayState && this.attendanceDay === i) {
          return "attendance_bg_x";
        }
        return "";
      };
    },
    //
    textDat() {
      return this.attendanceDay != 7
        ? "记日志领里程 连签有奖励"
        : "恭喜连续记录日志7天，获得额外奖励";
    },
  },
};
</script>

<style lang="sass" scoped>
.attendance
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background: rgba(0,0,0,0.6)
  overflow: hidden
  z-index: 9999
  .box-bg
    width: 5.91rem
    height: 6.18rem
    margin: 3rem auto 0 auto
    position: relative
    overflow: hidden
    background: url("~@/img/alert_box_bg.png") no-repeat
    .text
      font-size: 0.28rem
      color: #ffffff
      text-shadow: 2px 2px 2px #02509e
      margin-top: 1.1rem
      font-weight: 600
    .content_days
      width: 5.91rem
      margin-top: 1rem
      display: flex
      justify-content: space-around
      .attendance_bg
        width: 0.76rem
        height: 1.2rem
        background: url("~@/img/attendance_bg.png") no-repeat
        .p1
          height: 0.74rem
          line-height: 0.74rem
          font-size: 0.32rem
          color: #723f0f
          font-weight: 600
        .p2
          margin-top: 0.26rem
          height: 0.4rem
          line-height: 0.4rem
          font-size: 0.28rem
          color: #808080
          font-weight: 600
      .styleBag
        width: 0.8rem
        height: 1.2rem
        background: url("~@/img/bag.png") no-repeat
      .styleBag_
        width: 0.8rem
        height: 1.2rem
        background: url("~@/img/bag_.png") no-repeat
      .attendance_bg_x
        background: url("~@/img/attendance_bg_x.png") no-repeat
        .p1
          color: #e47d1e
        .p2
          color: #ffffff
    .close
      width: 0.31rem
      height: 0.31rem
      padding: 0.2rem
      position: absolute
      top: 0rem
      right: 0rem
    .attendance_button
      width: 3.57rem
      height: 1.32rem
      margin: .7rem auto 0 auto
    .attendance_button_x
      width: 3.57rem
      height: 1.32rem
      line-height: 1.22rem
      font-weight: 600
      margin: .7rem auto 0 auto
      color: #632f08
      font-size: 0.46rem
      background: url("~@/img/huise_button.png") no-repeat
      background-size: 100% 100%
      img
        width: 100%
</style>