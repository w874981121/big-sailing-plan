<template>
  <div
    class="landmark-tisp"
    v-show="showLandmarkTisp"
    :style="{
      top: filterLandmarkTisp.y + 'rem',
      left: filterLandmarkTisp.x + 'rem',
    }"
  >
    <div
      class="triangle-up"
      style="left: 2.4rem"
      :style="{ left: filterLandmarkTisp.trianglePositionX + 'rem' }"
    ></div>
    <p>{{ tips }}</p>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "landmark-tisp",
  props: ["enum"],
  data() {
    return {
      setTi: false,
    };
  },
  watch: {
    newLandmarkId: function () {
      if (this.setTi) {
        clearTimeout(this.setTi);
      }
      this.setTi = setTimeout(() => {
        this.changeLT(false);
      }, 2000);
    },
  },
  methods: {
    ...mapMutations(["changeLT"]),
  },
  computed: {
    ...mapState(["showLandmarkTisp", "newLandmarkId"]),
    ...mapGetters(["filterLandmarkTisp"]),
    tips: function () {
      let tiptext;
      switch (this.enum) {
        case 1:
          tiptext = `地标已解锁，点击前往探索~`;
          break;
        case 2:
          tiptext = `解锁地标需要 ${this.filterLandmarkTisp.mileage} 里程`;
          break;
        case 3:
          tiptext = `请按顺序解锁~`;
          break;
      }
      return tiptext;
    },
  },
};
</script>
<style lang="sass" scoped>
.landmark-tisp
  width: 2.87rem
  height: 0.92rem
  position: fixed
  background: url("~@/img/landmark-tips.png") no-repeat
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
    font-size: 0.22rem
    margin-top: 0.14rem
</style>