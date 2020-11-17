<template>
  <div class="activity-rules" v-show="showActivityRules">
    <!-- 活动规则 -->
    <div class="box-bg">
      <div class="close" @click="changeSAR">
        <img src="../assets/images/close.png" alt="" />
      </div>
      <div class="text">
        <h1>航海攻略</h1>
        <h3>活动时间</h3>
        <p>2020/11/20 11:00:00 - 2020/12/11 23:59:59</p>
        <h3>游戏玩法与奖励</h3>
        <ol>
          <li>
            （1）解锁地标 赢惊喜现金奖励
            「知乎大航海」活动是通过做任务积累「里程」来解锁地图上的地标，进而解锁完整地图，并在解锁过程中获得相应奖励。每解锁
            3 个地标，可兑换一个原石宝盒，一共 7
            个宝盒，每个宝盒内含价值不等的现金红包；
          </li>
          <li>
            （2）解锁完整大陆 赢超级彩蛋大奖 当用户连续完成活动任务
            ，并解锁完所有大陆上的地标后，第
            8，88，188...位解锁完整地图的用户可获得彩蛋奖励，最低 88 元，最高
            888 元。
          </li>
        </ol>
        <h3>活动详细规则</h3>
        <p>
          参与本次活动前，请详细阅读活动规则及相关条款。凡参与本次活动，则视为你已阅读、理解并同意活动详细规则与免责声明全部内容。
        </p>
        <ol>
          <li>
            <h4>1. 参与条件：</h4>
            <p>知乎 App 注册用户，请升级至知乎最新版本参与。</p>
          </li>
          <li>
            <h4>2. 活动元素说明：</h4>
            <p>里程——用户解锁地标所需的代币道具，通过做任务可获得</p>
            <p>地标——用户需要解锁的关卡，每个「地标」对应不同的里程值</p>
            <p>
              地图——活动完整地图是由 6 个板块组成，包含
              21个地标，每个大陆有里程不同的地标
            </p>
            <p>宝盒——用户解锁 3 个地标可获得的奖励道具，内含最高 88 元现金</p>
            <p>
              彩蛋——用户在规定次序下解锁完整地图时可获得的奖励，最低 88 元，最高
              888 元现金
            </p>
          </li>
          <li>
            <h4>3. 赚里程与地标解锁规则说明：</h4>
            <h5>如何赚里程？</h5>
            <p>每日完成活动任务即可获得相应里程；</p>
            <h5>如何解锁地标？</h5>
            <p>所获里程达到地标对应的里程值即可解锁地标；</p>
            <h5>如何去解锁其他板块的地标？</h5>
            <p>
              用户开始可以任选一个板块（岛屿）开始，但选定板块后，必须按顺序先解锁该板块上的所有地标，才能再选择新的板块继续解锁；
            </p>

            <p>
              如果当日所有任务都已完成，且已解锁完一个板块，若还有剩余里程，想选择新的板块开始解锁新地标，只能在第二天（自然日）进行选择；
            </p>
          </li>

          <li>
            <h4>4. 活动奖励说明</h4>
            <h5>（1）奖励明细查看</h5>
            <p>
              ●
              你可在活动主页「我的奖励」中查看个人活动期间的奖励明细和可提现的现金额度。
            </p>
            <h5>（2）奖励明细查看</h5>
            <p>
              ● 红包提现时间为 2020/12/11 12:00:00 - 2020/12/18 11:59:59（7
              天）。
            </p>
            <p>● 逾期则无法再提现。</p>
            <p>
              ● 红包提现门槛为 10
              元。达到提现门槛的用户可在提现期内前往「我的奖励」，点击「去提现」按钮，将所得红包提现至知乎钱包内。活动仅支持
              16-80 周岁的用户提现。
            </p>
          </li>
          <li>
            <h4>活动反馈通道</h4>
            <p>如你对本次活动有任何疑问，请私信@知乎小管家。</p>
          </li>
        </ol>
        <h3>免责声明</h3>
        <ol>
          <li>
            ●
            每个用户仅限使用一个帐号参加活动，同一知乎帐号、手机号、移动设备等均视为同一帐号。
          </li>
          <li>
            ●
            若你的帐号处于异常状态，则无法参加本次活动。帐号异常状态包括但不限于：禁言，未激活等状态。有关帐号异常状态的详细信息请咨询@知乎小管家
            了解。
          </li>
          <li>
            ●
            本次活动仅支持以中国电信，联通，移动手机号注册的知乎帐号。以虚拟运营商手机号注册的知乎帐号，无法参与本次活动。
          </li>
          <li>
            ●
            任何参与活动的用户不得修改页面参数，或以任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件或任何非人工方式参与活动，一经发现，立即取消活动参与资格与领奖资格，且该用户于活动中获得的奖励全部收回。
          </li>
          <li>
            ●
            禁止任何用户以不正当手段及舞弊行为等方式参与本次活动，一经发现，知乎有权取消该用户参与活动的资格，并有权撤销违规交易，收回奖励，必要时追究法律责任。
          </li>
          <li>
            ●
            活动期间，因用户操作不当或用户所在地区网络故障、电信运营商故障等非知乎所能控制的原因导致用户无法参与活动或参与失败，请你联系当地电信运营商解决。
          </li>
          <li>● 参与本活动用户需保证身份真实有效。</li>
          <li>● 本次活动与 Apple Inc. 无关。</li>
        </ol>

        <h2>其他 FAQ</h2>
        <ol>
          <li>
            <h4>● 哪些用户可以参加活动？</h4>
            <p>
              本次活动支持所有以中国电信、联通、移动手机号注册的非异常状态知乎帐号，请升级至知乎
              App V6.59.1 及以上版本参与。
            </p>
          </li>
          <li>
            <h4>● 如何提现？</h4>
            <p>
              用户在 12 月 11 日 12:00:00
              之后点击活动页面的「去提现」按钮，即可提现至知乎钱包，前往知乎钱包可进一步将现金提现至个人外部账户，具体请根据相关指引操作。
            </p>
          </li>
          <li>
            <h4>● 反作弊用户反馈</h4>
            <p>
              本次活动受公司反作弊机制全程监控，如果用户账号存在任何异常操作，被判定为具备作弊风险，知乎有权不予发放奖励，取消该用户参与活动的资格，并有权撤销违规交易，收回奖励，必要时追究法律责任。
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "activity-rules",
  props: {},
  data() {
    return {};
  },
  watch: {},
  methods: {
    ...mapMutations(["changeSAR"]),
  },
  computed: {
    ...mapState(["showActivityRules"]),
  },
};
</script>

<style lang="sass" scoped>
.activity-rules
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  background: rgba(0,0,0,0.6)
  overflow: hidden
  .box-bg
    width: 7.04rem
    height: 10.74rem
    margin: 1rem auto 0 auto
    position: relative
    overflow: hidden
    background: url("~@/img/activity_rules_bg.png") no-repeat
    .close
      width: 0.31rem
      height: 0.31rem
      padding: 0.2rem
      position: absolute
      top: 0.46rem
      right: 0.2rem
    .text
      width: 5.84rem
      height: 8.4rem
      overflow-y: auto
      color: #ffffff
      margin: 1rem auto
      text-align: left
      line-height: 1.6
      h1
        text-align: center
        font-size: 0.4rem
      h2
        font-size: 0.28rem
      h3
        font-size: 0.28rem
      p
        font-size: 0.24rem
      ol
        width: 100%
        font-size: 0.26rem
        margin: 0 auto
        display: block
        li
          list-style-type: decimal
          text-align: justify
          padding-bottom: 0.4rem
          h4
            font-size: 0.26rem
</style>
