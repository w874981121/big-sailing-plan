<template>
  <div
    class="islands-tisp"
    v-show="showIslandsTisp"
    :style="{
      top: filterIslandTisp.y + 'rem',
      left: filterIslandTisp.x + 'rem',
    }"
  >
    <div
      class="triangle-up"
      style="left: 2.4rem"
      :style="{ left: filterIslandTisp.trianglePositionX + 'rem' }"
    ></div>
    <div class="title">
      <div class="icon_bg" :style="styleIconPosition"></div>
      <div class="title_str">
        {{ filterIslandTisp.name }}
      </div>
    </div>
    <p class="dest">
      {{
        goState ? filterIslandTisp.describe : filterIslandTisp.describeTomorrow
      }}
    </p>

    <div
      class="go_landmark"
      v-show="filterIslandTisp.brightState || can_unlock"
      @click="postIsland"
    >
      <img src="~@/img/go_landmark.png" alt="" />
    </div>

    <div class="close" @click="changeIT">
      <img src="../assets/images/close.png" alt="" />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { postCollection } from "../api/api";

export default {
  name: "islands-tisp",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeIT", "changeGL"]),
    getTasks() {
      console.log("");
    },
    postIsland() {
      let { gId, id } = this.filterIslandTisp;
      if (this.can_unlock) {
        postCollection({ collection_id: gId }).then((res) => {
          if (res.code === 200) {
            this.changeIT();
            this.$router.push({
              path: "/pi",
              query: { islandId: id },
            });
          }
        });
      }
    },
  },
  computed: {
    ...mapState(["showIslandsTisp", "can_unlock", "isLandsList"]),
    ...mapGetters(["filterIslandTisp"]),
    goState() {
      let State = this.isLandsList.find((x) => x.brightState == 1);
      if (State == undefined) {
        if (this.can_unlock) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
    styleIconPosition: function () {
      return `background-position: ${this.filterIslandTisp.iconPosition.x}rem ${this.filterIslandTisp.iconPosition.y}rem`;
    },
  },
};
</script>
<style lang="sass" scoped>
.islands-tisp
  width: 4.66rem
  height: 2.6rem
  position: absolute
  background: url("~@/img/islands-tisp.png") no-repeat
  background-size: 4.66rem 2.6rem
  background-position: bottom
  .triangle-up
    width: 0
    height: 0
    border-left: 0.13rem solid transparent
    border-right: 0.13rem solid transparent
    border-bottom: 0.26rem solid rgba(255,255,255,0.8)
    position: absolute
    top: -0.26rem
    left: 1rem
  .title
    font-size: 0.3rem
    display: flex
    justify-content: center
    overflow: hidden
    margin: 0.14rem 0 0.1rem 0
    .icon_bg
      width: 0.37rem
      height: 0.4rem
      background: url("~@/img/icon_img.png") no-repeat
      background-position: 0 -0.8rem
      margin-right: 0.1rem
      .title_str
        line-height: 0.4rem
        font-weight: 600
  .dest
    width: 4rem
    font-size: 0.22rem
    text-align: left
    margin: 0 auto
    font-weight: 600
  .go_landmark
    width: 2.91rem
    height: 1.08rem
    position: absolute
    bottom: -0.54rem
    left: 0.87rem
  .close
    width: 0.31rem
    height: 0.31rem
    padding: 0.1rem
    position: absolute
    top: 0rem
    right: 0rem
</style>