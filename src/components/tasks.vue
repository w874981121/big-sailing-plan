<template>
  <div class="tasks" v-if="showTasks">
    <div class="bg" @click="closeTask"></div>
    <!-- 任务 -->
    <div class="box" :class="scaleUpVerBottom">
      <h1 class="title"></h1>
      <div class="list-ul">
        <div class="li-box" v-for="data in tasks" :key="data.id">
          <!-- <div class="icon-img"></div> -->
          <div class="text">
            <h2 class="task-title">{{ data.title }}</h2>
            <p class="task-reward">{{ data.sub_title }}</p>
          </div>
          <div class="button">
            <div
              class="button-box"
              v-show="data.status == 2"
              @click="postTask(data)"
            >
              <!-- 领取 -->
            </div>
            <div
              class="button-box jump"
              v-show="data.status == 0"
              @click="postTask(data)"
            >
              <!-- 做任务 -->
            </div>
            <div
              class="button-box complete"
              v-show="data.status == 1"
              @click="postTask(data)"
            >
              <!-- 已完成 -->
            </div>
            <p class="tips" v-show="data.today_limit">
              {{ data.today_limit }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { taskList, postObserveRight } from "../api/api";

export default {
  name: "tasks",
  data() {
    return {
      tasks: [],
      animation: false,
    };
  },
  watch: {
    showTasks(val) {
      if (val) {
        window.zap.trackPageShow({
          id: 9990,
        });
        this.animation = true;
        this.getTasks();
      }
    },
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    ...mapMutations(["changeT", "changRT"]),
    ...mapActions(["getInfo"]),
    getTasks() {
      taskList().then((res) => {
        if (res.code === 200) {
          this.tasks = res.data.task_list;
          this.tasks.find((temp) => temp.status == 2) && this.changRT;
        }
      });
    },
    postTask(taskObj) {
      switch (taskObj.status) {
        case 1:
          window.zap.trackEvent(
            {
              id: 9991,
              action: "Click",
            },
            {
              button: { txet: "已完成" },
            }
          );
          break;
        case 2:
          window.zap.trackEvent(
            {
              id: 9991,
              action: "Click",
            },
            {
              button: { txet: "领取" },
            }
          );
          postObserveRight({
            task_id: taskObj.task_id,
          }).then((res) => {
            console.log(res);
            this.getTasks();
          });
          break;
        case 0:
          window.zap.trackEvent(
            {
              id: 9991,
              action: "Click",
            },
            {
              button: { txet: "做任务" },
            }
          );
          break;
      }
    },
    closeTask() {
      this.animation = false;
      setTimeout(() => {
        this.changeT();
      }, 400);
    },
  },
  computed: {
    ...mapState(["showIslands", "newIslandId", "showTasks"]),
    scaleUpVerBottom() {
      console.log(this.animation);
      return this.animation ? "scale-up-ver-bottom" : "scale-down-ver-bottom";
    },
  },
};
</script>

<style lang="sass" scoped>
.tasks
  overflow: hidden
  z-index: 999
  .bg
    width: 100%
    height: 100%
    background: rgba(0,0,0,0.5)
    position: fixed
    top: 0
    left: 0
  .box
    width: 100%
    height: auto
    background: url("~@/img/tasks_title_bg.png") no-repeat
    background-position: 0 0
    border-radius: .2rem .2rem 0 0
    position: fixed
    bottom: 0
    left: 0
    .title
      height: 1.7rem
    .list-ul
      padding: 0 0.4rem 0.5rem 0.4rem
      background: #f7f8f8
      max-height: 7rem
      overflow-y: auto
      .li-box
        width: 100%
        height: 0.84rem
        margin-top: 0.36rem
        padding-bottom: 0.24rem
        .icon-img
          width: 0.84rem
          height: 0.84rem
          background: #d1d2d2
          float: left
        .text
          width: 4.2rem
          height: 0.84rem
          margin-left: 0.2rem
          text-align: left
          line-height: 1
          float: left
          .task-title
            margin-top: 0.14rem
            font-size: 0.34rem
            color: #3da2ff
          .task-reward
            margin-top: 0.08rem
            font-size: 0.26rem
            color: #f79106
        .button
          width: 1.88rem
          height: 1.2rem
          float: right
          .button-box
            width: 1.88rem
            height: 0.82rem
            background: url("~@/img/button_2.png") no-repeat
            color: #f7f8f8
            font-size: 0.28rem
            line-height: 0.52rem
            border-radius: 0.52rem
          .jump
            background: url("~@/img/button_0.png") no-repeat
          .complete
            background: url("~@/img/button_1.png") no-repeat
          .tips
            width: 100%
            height: 0.32rem
            font-size: 0.2rem
            color: #8a8a8a
.scale-up-ver-bottom
  -webkit-animation: scale-up-ver-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
  animation: scale-up-ver-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both
.scale-down-ver-bottom
  -webkit-animation: scale-down-ver-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
  animation: scale-down-ver-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

@-webkit-keyframes scale-up-ver-bottom
  0%
  -webkit-transform: scaleY(0.4)
  transform: scaleY(0.4)
  -webkit-transform-origin: 0% 100%
  transform-origin: 0% 100%

  100%
  -webkit-transform: scaleY(1)
  transform: scaleY(1)
  -webkit-transform-origin: 0% 100%
  transform-origin: 0% 100%

@keyframes scale-up-ver-bottom
  0%
    -webkit-transform: scaleY(0.4)
    transform: scaleY(0.4)
    -webkit-transform-origin: 0% 100%
    transform-origin: 0% 100%

  100%
    -webkit-transform: scaleY(1)
    transform: scaleY(1)
    -webkit-transform-origin: 0% 100%
    transform-origin: 0% 100%

@-webkit-keyframes scale-down-ver-bottom
  0%
  -webkit-transform: scaleY(1)
  transform: scaleY(1)
  -webkit-transform-origin: 0% 100%
  transform-origin: 0% 100%

  100%
  -webkit-transform: scaleY(0)
  transform: scaleY(0)
  -webkit-transform-origin: 0% 100%
  transform-origin: 0% 100%

@keyframes scale-down-ver-bottom
  0%
    -webkit-transform: scaleY(1)
    transform: scaleY(1)
    -webkit-transform-origin: 0% 100%
    transform-origin: 0% 100%

  100%
    -webkit-transform: scaleY(0)
    transform: scaleY(0)
    -webkit-transform-origin: 0% 100%
    transform-origin: 0% 100%
</style> 