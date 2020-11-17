<template>
  <!-- 岛屿 -->
  <div class="islands scale-down-top">
    <!-- 岛屿1号-波塞冬岛 -->
    <div class="box islands-1" v-if="newIslandId == 1">
      <div
        class="landmark-1 highlight-color"
        :class="{ st_bright: landmarkList[0].brightState }"
        @click="postUnlock(landmarkList[0])"
      >
        <svg
          id="图层_1"
          data-name="雾思迷宫"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 233.09 204.07"
        >
          <polygon
            class="cls-1"
            points="39.23 57.76 42.24 39.67 44.76 37.16 48.78 0.54 232.5 15.55 222.65 72.33 145.26 66.8 145.26 72.33 135.86 72.33 135.86 118.56 148.27 102.04 161.84 118.56 164.35 116.55 187.47 150.72 182.44 157.76 193.5 184.89 135.86 203.54 116.5 194.44 96.52 191.93 90.48 198.46 53.8 199.47 51.79 192.94 0.5 194.44 0.5 190.42 17.12 185.4 22.65 180.37 5.06 175.35 5.56 168.81 19.63 160.77 9.58 155.75 20.64 141.18 17.12 137.66 37.22 113.03 45.26 131.63 72.9 115.05 74.41 106.5 67.87 102.04 58.32 102.04 52.29 110.02 49.78 116.55 44.76 118.56 33.2 111.03 18.63 104.49 15.61 89.42 39.23 57.76"
          />
        </svg>
      </div>
      <div
        class="landmark-2 highlight-color"
        :class="{ st_bright: landmarkList[1].brightState }"
        @click="postUnlock(landmarkList[1])"
      >
        <svg
          id="图层_1"
          data-name="社畜丛林"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 236.9 208.48"
        >
          <polygon
            class="cls-1"
            points="56.49 12.73 97.42 3.37 161.71 28.88 165.79 10 160.69 3.37 172.94 3.37 176.51 0.61 185.69 6.43 185.69 14.74 189.26 22.75 189.26 30.41 189.26 34.49 191.81 29.89 203.04 39.59 200.49 44.69 236.36 61.53 229.06 131.43 173.44 107.11 168.85 118.67 187.22 147.24 182.12 149.79 195.89 170.71 186.71 170.71 205.08 188.57 186.71 188.57 197.43 200.81 171.4 203.88 161.71 207.96 146.74 204.38 141.81 200.81 131.61 202.34 127.02 204.9 83.65 199.28 61.2 203.88 42.32 200.81 1.36 148.26 24.98 155.41 4.57 109.49 33.65 131.94 19.87 82.96 42.83 110 58.65 62.55 62.22 115.1 69.36 107.11 70.89 98.26 78.04 92.65 89.77 95.71 96.91 91.12 111.2 100.81 115.79 95.2 127.53 107.11 132.12 97.24 138.24 93.16 71.4 63.57 56.49 12.73"
          />
        </svg>
      </div>
      <div
        class="landmark-3 highlight-color"
        :class="{ st_bright: landmarkList[2].brightState }"
        @click="postUnlock(landmarkList[2])"
      >
        <svg
          id="图层_1"
          data-name="摘星栈道"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 248.43 226.3"
        >
          <polygon
            class="cls-1"
            points="3.71 34.18 8.52 22.95 32.58 12.79 84.99 15.99 84.99 7.44 95.15 0.79 99.96 0.79 99.96 17.48 167.34 17.48 167.34 12.25 178.57 10.11 184.99 0.79 192.47 8.51 204.24 17.48 193.01 21.34 183.92 40.59 176.97 20.69 175.9 40.59 170.01 64.66 155.04 77.49 132.05 77.49 137.93 82.84 178.04 82.84 184.99 92.47 190.87 92.47 199.96 132.04 204.24 133.64 209.05 144.34 204.24 149.15 204.24 152.36 211.73 152.36 216.54 164.12 216.54 171.61 210.12 173.75 211.73 178.03 222.96 171.61 235.25 175.35 242.74 184.98 242.74 188.72 247.54 196.74 217.07 196.74 218.14 211.72 183.38 217.06 173.22 214.39 158.25 219.74 141.67 225.79 111.73 223.48 94.61 225.79 86.59 222.95 59.32 222.95 45.42 216 11.73 213.86 47.02 179.63 55.58 176.96 57.72 162.52 17.07 161.45 11.73 158.24 24.56 150.22 30.44 140.06 51.83 135.25 57.18 143.8 57.18 143.8 59.85 145.41 63.6 133.64 56.11 128.29 66.27 116.53 69.48 97.81 80.71 97.28 87.66 88.19 87.66 71.61 21.89 70 0.54 50.22 3.71 34.18"
          />
          <polygon
            class="cls-1"
            points="189.27 67.33 197.29 53.43 200.5 69.47 216 75.89 202.63 80.17 191.94 90.33 189.27 76.42 178.04 67.87 189.27 67.33"
          />
          <polygon
            class="cls-1"
            points="38.46 104.77 40.6 92.47 46.48 104.77 58.25 104.77 48.36 111.18 50.76 123.48 41.14 116 30.98 113.29 38.46 104.77"
          />
        </svg>
      </div>
    </div>
    <!-- 岛屿2号-阿波罗岛-->
    <div class="box islands-2" v-if="newIslandId == 2">
      <div
        class="landmark-4 highlight-color"
        :class="{ st_bright: landmarkList[3].brightState }"
        @click="postUnlock(landmarkList[3])"
      >
        <svg
          id="图层_1"
          data-name="机甲墓地"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 229 168.52"
        >
          <path
            class="cls-1"
            d="M0,14C0,12.67,12.33,3.67,12.33,3.67H54.67l7.66,11.66-1.66,3h4.66L68.67,35,78,40l4-1.67,8.33,4,5-4.33L137,44.67l42,14,36-13,9.33,3L228,50.33V56L200,71.67,202.67,77l4-2L214,80.67,206.67,84l-1.34,3.67L199.67,94h-3.34l2,9.33-7.66,7.34.33,6.66,3,5.67-.33,6.67-2,1.66h7l2,2.34-10.34,3,16,3.66.34,2.67L190,145h8l13.67,23h-4L195,151.33l-7.67,2.34,2.34,5.33-.67,3-4.67,2.67L164,163l-3.33,2.33-14-4.66-44.34,5-42-7.67L52,162l-6.67-3.33L38,168H16.67L12,165l-5.67,3H3l1-12.67,10.67-5.66Z"
            transform="translate(0.5 0.02)"
          />
          <polygon
            class="cls-1"
            points="94.97 2.4 99.17 9.02 103.5 10.69 103.5 15.02 111.83 17.02 117.17 21.69 133.17 12.69 135.17 5.69 140.17 1.69 139.24 0.58 129.02 3.97 124.35 7.64 120.83 6.36 117.67 6.36 114.5 6.36 112.17 7.36 96.88 0.77 94.97 2.4 94.97 2.4"
          />
          <polygon
            class="cls-1"
            points="161.17 37.69 167.17 33.69 174.17 32.36 178.17 32.36 178.17 26.69 181.17 25.02 181.17 21.69 179.5 15.69 177.17 15.69 159.17 34.69 161.17 37.69"
          />
        </svg>
      </div>
      <div
        class="landmark-5 highlight-color"
        :class="{ st_bright: landmarkList[4].brightState }"
        @click="postUnlock(landmarkList[4])"
      >
        <svg
          id="图层_1"
          data-name="灵药之舟"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 251.5 188.08"
        >
          <path
            class="cls-1"
            d="M6.33,17.33l15.67-2V20l46.33-4.67v-13H76l2.33,11s58-5.33,59-7,2-6.33,2-6.33h17.34l2,14.67-3.34,1,.34,21.66,8-4.33,21.66,4.33,5,4h4.34V37.67l-5.34-2L191,25.33l7.33,2.34,10.34-7L212,26l-5,5,.33,14.33L204,49.67l6.33,18H212L215,72l10,1.33L234.67,79,240,87.33V97l-2,3.67,2,8.33,11,4.33v7L240,117l11,5.67L246.67,130l-12.34-7-3.66-17L214,105l-7-7.33-1.67-4.17h-2L203,95.67l-10,5a46.8,46.8,0,0,1,19,16.66L223,126l10.33,1.33,4,2.67L233,141.33l-11.33,5.34-8.34,8,3,9.66,4.73,4.66,20.47,5.68H166l-2.67,4.66-24,3L133.67,187,117,182.67,106,187,92.33,175l-31-8.67-7.33-21H43.33s-5.33-10-7.66-9.66c0,0-1.67-1.67-10.67-3.67l-2.67-5.33s-2-3.34,13.34-16L46.27,93.5h4.5l4.33-2S61,84.67,68.33,74.33L74.67,71V65L27.33,71.67V75l-21,2.33L4.67,65.67,7,63.33l-2.33-24L1,35.88.71,23Z"
            transform="translate(-0.2 0.5)"
          />
        </svg>
      </div>
      <div
        class="landmark-6 highlight-color"
        :class="{ st_bright: landmarkList[5].brightState }"
        @click="postUnlock(landmarkList[5])"
      >
        <svg
          id="图层_1"
          data-name="斯高易塔"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 212.21 243.03"
        >
          <polygon
            class="cls-1"
            points="74.14 53.24 106.19 32.69 140.35 24.02 142.17 22.19 142.17 0.5 147.2 0.5 147.2 22.65 181.44 20.36 209.3 30.41 211.69 53.24 196.05 69.68 180.53 76.98 153.13 76.98 152.68 87.94 155.42 91.14 154.04 101.19 180.07 101.19 191.49 110.77 188.75 125.39 175.05 131.32 173.68 138.17 170.03 143.19 185.55 157.35 188.29 162.83 196.05 167.4 200.16 178.35 191.49 186.57 191.94 201.19 183.73 210.77 168.2 210.77 166.37 215.34 140.35 233.6 87.38 233.6 66.83 242.5 20.25 231.32 20.25 219.91 10.21 215.8 0.69 202.1 11.58 193.88 5.64 192.51 7.47 178.81 24.36 173.79 35.32 161 29.84 159.18 46.74 131.32 8.84 132.69 0.69 127.67 0.69 93.42 9.3 86.57 121.17 86.12 120.71 83.38 135.32 74.7 133.95 62.83 121.63 65.11 113.86 73.33 86.92 82.92 74.14 53.24"
          />
        </svg>
      </div>
    </div>
    <!-- 岛屿3号-赫尔墨斯岛 -->
    <div class="box islands-3" v-if="newIslandId == 3">
      <div
        class="landmark-7 highlight-color"
        :class="{ st_bright: landmarkList[6].brightState }"
        @click="postUnlock(landmarkList[6])"
      >
        <svg
          id="图层_1"
          data-name="高赞岛"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 180.14 188.31"
        >
          <path
            class="cls-1"
            d="M7.67,12.67l20.66-3,2.67,3,1.67-3,82-9.67L131,10.67l5.67,9-7,15,7-3.67V9.33l10-3.66,9,8.66,2.33,7-1.67,4,11.34-1.66,7,7.66V36L179,41.33,176.67,49,179,54.33l-4,3.34L177,62l-7,9.33-6,2.34-12.67,32h12L175,115.33l.67,5.34L171,124.33l.67,2,2.33,3,5,9.67v6.67S161.67,152,160,155H149.67l-8,11.33L135,167.67l-5.33,4.66L109,176.67l-5.33,2V187L86,178.67l-.33-3s-12-4.67-28.67-18l-11,4-24-10-9.33-24.34,13-33.83L35,90.33,42,80H56l.67-19L46,63.67l.33-4.34L12,65V62L7.67,58,0,41Z"
            transform="translate(0.53 0.52)"
          />
        </svg>
      </div>
      <div
        class="landmark-8 highlight-color"
        :class="{ st_bright: landmarkList[7].brightState }"
        @click="postUnlock(landmarkList[7])"
      >
        <svg
          id="图层_1"
          data-name="预言神庙"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 186"
        >
          <path
            class="cls-1"
            d="M35.62,35.42,38.21,12,49.37,2.05H83.26l22.31-2,76,2.46L191,12V31.39l-4.44,16.53-7,5H131.19l-4.13,7,4.54,6.61,2.07,4.13,2.07-4.54,8.67-2.48,12.81,17.77-.82,2.89h-5.79l-1.24,16.94h9.51l8.26,19.84v14.05H153.92l.41,5.37-4.54,9.92-11.16,1.65s-5.37,17.77-12.81,23.55H113.57L106.81,181l-1.65,4H89.45l-8.26-5.68S56,183.87,42.35,183v2H27.47L22.1,168.58H13.83L11.36,150.4l-8.68-1.66L0,127.67V113.21l13.42-.83-.41-9.5,6.2-7.44.41-21.08L4.74,69.82v-7l2.07-2.48-.41-7L23.34,44.2l4.13.41,12.36-6.36Z"
            transform="translate(0.5 0.5)"
          />
        </svg>
      </div>
      <div
        class="landmark-9 highlight-color"
        :class="{ st_bright: landmarkList[8].brightState }"
        @click="postUnlock(landmarkList[8])"
      >
        <svg
          id="图层_1"
          data-name="潘多拉古堡"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 190.19 216.01"
        >
          <path
            class="cls-1"
            d="M0,45.33l6.33-18L0,4.67,43,3.33,78.33,0l31.34,6.67L142.33,0l31.34,4V0h2.66V45.33l9.34,32v4A6.33,6.33,0,0,1,189,86.67V98.33l-5,6.34L185,152l.33,1.33L189,174l-7.67,8.67-11,2L169,187l-10,7.33v3l-15,8.34L135.33,203l-1.66,2.67L128,215H105l-12-8.67L84,209l-31-9.33L40.33,186.33l.34-58.66L35,125V114.33l2-2.66L38.33,103l-6-5.67.34-9,2-.66L40,62l1.67.33L46,74,78.33,60,82,61.67l2,3,3.67-17L83,46,39.67,53.33,0,45.33"
            transform="translate(0.65 0.51)"
          />
        </svg>
      </div>
      <div
        class="landmark-10 highlight-color"
        :class="{ st_bright: landmarkList[9].brightState }"
        @click="postUnlock(landmarkList[9])"
      >
        <svg
          id="图层_1"
          data-name="985无人区"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 205.12 156.75"
        >
          <path
            class="cls-1"
            d="M24,10.33,57,8l1.33-6.67h10v4.5H88.67l1.66,2.5,7.34,6.34v5.66l-6,12.34,10.33,4S123.67,27.33,127,24l6.67,4s12.33.67,14,2c0,0,20.66,28,32.66,30.33v6L204,77V88.33L192.67,97H197l1.67,5-16,10.33-9.34,14.34-17,6.33L163,144.67l.33,2.33h-2l.34,5.67L155,157s-14-7.67-21.33-7c0,0-12.34-3-19.67,2l-46.33-5-1-1.67-6.67-2H56.67l1,6-2.34,2.34L31,152l-2.67-2.67v-5.66l9.67-2-1.33-5-26.34-8.34L0,108,21,88.33,14.33,78.5S43,56.33,49.33,50.67l-15.66,2-3-7.34-2.67-1-5.67-10,2.34-12-3.67-7Z"
            transform="translate(0.62 -0.83)"
          />
        </svg>
      </div>
    </div>
    <!-- 岛屿4号-赫拉岛 -->
    <div class="box islands-4" v-if="newIslandId == 4">
      <div
        class="landmark-11 highlight-color"
        :class="{ st_bright: landmarkList[10].brightState }"
        @click="postUnlock(landmarkList[10])"
      >
        <svg
          id="图层_1"
          data-name="破晓之城"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 171 207.13"
        >
          <polygon
            class="cls-1"
            points="13.15 27.39 39.25 13.79 120.5 9.38 120.5 2.39 122.71 0.63 130.8 6.44 130.8 8.64 153.96 7.91 170.5 22.25 170.5 47.61 148.81 64.16 133.37 64.16 136.68 123.72 140.72 123.72 156.16 147.25 156.53 165.63 146.24 168.94 126.39 188.79 112.42 191.73 102.12 199.08 87.05 199.08 80.43 206.63 52.49 206.63 52.12 200.92 7.63 165.63 0.5 165.63 0.5 153.13 10.21 127.76 9.47 120.41 19.77 119.67 15.36 98.72 21.97 82.91 31.16 74.08 53.22 68.94 66.46 73.35 70.5 67.83 27.49 68.2 5.43 52.02 13.15 27.39"
          />
        </svg>
      </div>
      <div
        class="landmark-12 highlight-color"
        :class="{ st_bright: landmarkList[11].brightState }"
        @click="postUnlock(landmarkList[11])"
      >
        <svg
          id="图层_1"
          data-name="日落峡谷"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 222 214.21"
        >
          <polygon
            class="cls-1"
            points="6.46 23.88 29.91 11.44 63.4 8.09 65.31 0.71 75.84 5.7 75.84 9.05 148.09 3.79 164.84 20.06 164.84 41.11 183.02 41.11 187.32 54.51 190.67 57.38 196.41 84.65 198.81 84.65 200.72 92.3 207.42 92.3 221.5 145.89 221.5 169.82 216.03 169.82 214.6 174.6 180.15 192.31 142.82 195.18 141.39 199.96 108.38 211.44 103.11 213.71 69.62 213.71 63.88 205.7 46.17 193.26 38.04 193.74 23.69 182.26 22.25 159.77 33.26 153.07 39.95 150.68 42.83 146.37 46.17 127.71 60.05 118.14 63.4 96.13 68.19 91.35 68.19 65.03 22.25 66.47 0.5 49.24 0.5 43.5 6.46 23.88"
          />
        </svg>
      </div>
      <div
        class="landmark-13 highlight-color"
        :class="{ st_bright: landmarkList[12].brightState }"
        @click="postUnlock(landmarkList[12])"
      >
        <svg
          id="图层_1"
          data-name="夜幕之港"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 194.23 205.32"
        >
          <polygon
            class="cls-1"
            points="8.2 28.62 31.18 15.43 72.03 12.45 72.03 0.77 83.94 6.07 83.94 12.45 147.35 7.77 165.22 23.51 166.92 46.07 172.88 53.3 172.88 57.98 175.43 66.92 175.43 78.41 170.75 85.22 173.73 116.71 180.54 125.22 186.92 127.34 189.05 131.6 189.05 144.37 189.05 146.49 193.73 152.45 193.73 168.62 181.39 181.81 166.92 181.81 166.07 185.64 157.13 200.53 145.65 204.79 137.99 202.24 117.56 204.79 112.88 197.98 100.97 197.98 89.9 196.71 76.71 200.11 46.92 191.17 45.22 186.92 30.75 185.22 24.37 191.17 20.11 188.62 22.67 185.64 13.3 186.07 5.65 167.77 16.28 166.49 15.86 148.19 13.3 140.96 20.96 129.05 32.03 126.49 36.28 128.19 39.26 128.62 40.97 116.71 35.01 113.73 46.07 94.15 61.39 89.9 59.69 79.26 70.33 76.28 75.43 80.54 75.86 67.77 23.09 69.9 0.58 54.15 8.2 28.62"
          />
        </svg>
      </div>
    </div>
    <!-- 岛屿5号-赫菲斯托斯岛 -->
    <div class="box islands-5" v-if="newIslandId == 5">
      <div
        class="landmark-14 highlight-color"
        :class="{ st_bright: landmarkList[13].brightState }"
        @click="postUnlock(landmarkList[13])"
      >
        <img src="~@/img/andmark-14_bg.png" alt="" />
        <!-- <svg
          id="图层_1"
          data-name="答主岛"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 207 167.06"
        >
          <path
            class="cls-1"
            d="M0,40l22.5-8L26,36V32L112,0l21,8.5,8,6v3L155.5,30V58.5l-8.5,13L191,58l10,2.5s5,30.5,5,32-9.5,6.5-9.5,6.5L164,106.5l11,10,3,20-5.5,7H169L157.5,149l-11-3.5,5,6.5v8l-8.5,6-30-4.5-2-5.5-5.5,2.5-13-1-11-5-3,1-16-4.5L46,146l-9-9-16,.5L33.5,121,22,122l15.5-19.5-7.5-1L43.5,83l-24,11-10-5.5L0,73Z"
            transform="translate(0.5 0.54)"
          />
        </svg> -->
      </div>
      <div
        class="landmark-15 highlight-color"
        :class="{ st_bright: landmarkList[14].brightState }"
        @click="postUnlock(landmarkList[14])"
      >
        <img src="~@/img/andmark-15_bg.png" alt="" />
      </div>
      <div
        class="landmark-16 highlight-color"
        :class="{ st_bright: landmarkList[15].brightState }"
        @click="postUnlock(landmarkList[15])"
      >
        <img src="~@/img/andmark-16_bg.png" alt="" />
      </div>

      <div
        class="landmark-17 highlight-color"
        :class="{ st_bright: landmarkList[16].brightState }"
        @click="postUnlock(landmarkList[16])"
      >
        <img src="~@/img/andmark-17_bg.png" alt="" />
      </div>
    </div>
    <!-- 岛屿6号-波塞冬岛 -->
    <div class="box islands-6" v-if="newIslandId == 6">
      <div
        class="landmark-18 highlight-color"
        :class="{ st_bright: landmarkList[17].brightState }"
        @click="postUnlock(landmarkList[17])"
      >
        <svg
          id="图层_1"
          data-name="故事巨鳄"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 215.45 187.3"
        >
          <polygon
            class="cls-1"
            points="2.41 30.11 34.41 11.11 118.41 11.11 120.08 0.77 129.41 5.77 129.41 11.77 194.74 11.11 214.74 68.11 129.41 68.11 128.41 108.11 141.74 111.44 139.07 124.44 153.41 131.44 156.41 144.77 150.74 156.44 159.07 155.1 165.74 163.1 161.41 176.1 172.41 180.77 166.07 186.77 154.41 186.77 148.41 180.77 139.74 183.77 129.07 183.44 126.74 181.1 110.74 186.77 93.08 181.44 92.74 178.1 85.74 179.77 86.08 183.44 74.41 184.77 34.41 182.44 35.08 177.44 23.08 174.44 16.41 170.77 17.08 166.44 12.08 135.77 2.41 131.1 0.74 128.77 10.41 123.77 23.41 125.44 28.74 136.1 28.41 123.11 33.08 121.11 34.08 111.77 46.74 97.11 53.74 97.77 60.08 103.11 66.41 103.44 50.74 87.11 50.74 76.44 45.41 76.44 41.74 72.44 50.08 67.11 33.74 67.44 0.74 34.1 2.41 30.11"
          />
        </svg>
      </div>
      <div
        class="landmark-19 highlight-color"
        :class="{ st_bright: landmarkList[18].brightState }"
        @click="postUnlock(landmarkList[18])"
      >
        <svg
          id="图层_1"
          data-name="体验洞穴"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 195.58 185.06"
        >
          <polygon
            class="cls-1"
            points="8.96 0.5 141.59 0.5 144.13 7.23 155.57 7.23 155.57 43.25 144.13 45.36 142.86 51.3 123.79 51.3 155.57 85.19 153.45 101.72 166.59 117.82 169.13 125.45 180.99 114.86 185.23 115.28 177.6 125.45 185.23 125.45 187.35 130.96 172.52 142.4 171.25 148.33 180.99 148.33 183.96 152.15 187.35 152.15 194.55 165.7 186.93 163.16 184.81 165.7 194.55 171.64 194.55 178.84 179.3 178.84 180.57 182.23 168.28 184.5 161.08 181.81 159.38 177.99 146.25 184.5 134.81 178.41 111.92 180.11 105.99 184.5 43.7 184.5 17.43 162.31 0.55 152.99 3.03 138.59 16.16 133.08 29.3 116.55 35.23 114.86 42.86 83.5 59.38 79.26 58.96 53.41 3.01 52.6 8.96 0.5"
          />
        </svg>
      </div>
      <div
        class="landmark-20 highlight-color"
        :class="{ st_bright: landmarkList[19].brightState }"
        @click="postUnlock(landmarkList[19])"
      >
        <svg
          id="图层_1"
          data-name="万国竞技场"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 216.04"
        >
          <polygon
            class="cls-1"
            points="125.05 212.5 139.5 211.03 159.5 198.03 169.5 198.03 181.5 189.03 192.5 189.03 192.5 171.03 181 153.53 177.5 153.53 177 114.03 172.5 100.53 168 98.03 192.5 80.03 192.5 54.03 175.5 38.53 140 35.53 140 18.53 133.5 3.53 120 0.53 99 14.03 93 14.03 85.5 19.03 85.5 26.53 78.5 32.53 78.5 38.03 39 38.03 9.5 51.03 0.5 70.53 0.5 77.03 25 93.03 29.5 93.03 29.5 97.03 14 108.03 11.5 170.03 17 174.53 17 184.03 39.5 203.03 63 212.53 96.5 215.53 125.05 212.5"
          />
        </svg>
      </div>
      <div
        class="landmark-21 highlight-color"
        :class="{ st_bright: landmarkList[20].brightState }"
        @click="postUnlock(landmarkList[20])"
      >
        <svg
          id="图层_1"
          data-name="邂邀峡谷"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 224.53 213"
        >
          <polygon
            class="cls-1"
            points="6.59 0.5 176.64 0.5 176.64 51.93 179.06 55.31 179.06 60.63 179.06 67.87 193.07 79.47 190.65 92.03 196.93 103.62 206.59 106.5 210.46 117.63 208.04 123.91 207.56 130.19 213.84 138.4 224.03 142.75 224.03 152.41 220.12 157.24 218.67 164.97 195.97 179.47 172.29 190.58 154.9 186.71 157.8 192.99 157.8 196.37 150.56 199.27 143.79 206.04 97.42 212.5 86.79 212.5 45.73 207 36.55 195.41 47.17 186.23 29.3 180.91 11.91 183.33 1.03 177.53 19.64 166.91 40.41 119.56 44.28 117.63 59.73 109.42 76.16 81.4 75.68 52.41 6.91 52.25 6.59 0.5"
          />
        </svg>
      </div>
    </div>

    <!-- 2 - 岛屿提示 -->
    <LandmarkTisp :enum="enums"></LandmarkTisp>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
// import Tasks from "../components/tasks";
import LandmarkTisp from "../components/landmark-tisp";
import { element, postElement } from "../api/api";

export default {
  name: "islands",
  data() {
    return {
      /**
       * @can_unlock   当前模块是否可以解锁
       * @miles    地标里程
       * @status    地标当前状态   0：未解锁   2解锁
       * **/
      islandLandmarks: [],
      enums: 1,
      nextLandmarksGid: 0,
      newIslandId: 0,
      setTime: 0,
    };
  },
  created() {},
  watch: {},
  mounted() {},
  activated() {
    this.newIslandId = this.$route.query.islandId;
    this.$nextTick(() => {
      if (window.zap && window.zap.trackPageShow) {
        window.zap.trackPageShow({
          id: 9988,
          name: this.isLandsList.find((x) => x.id == this.newIslandId).name,
        });
      }
    });

    this.getList(this.getFilterIslandId(this.$route.query.islandId).gId);
  },
  methods: {
    ...mapMutations([
      "brightLandmark",
      "changeLandmarkState",
      "changeTreasureList",
      "changeLT",
    ]),

    // 根据本地id查询岛屿数据
    getFilterIslandId(id) {
      return this.isLandsList.find((x) => x.id == id);
    },
    getList(gid) {
      return element({ collection_id: gid }).then((res) => {
        this.changeLandmarkState(res.data.elements);
        this.islandLandmarks = res.data.elements;
        // 获取到可以解锁的地标，触发解锁, 若解锁成功，则弹出提示窗口
        let GID =
          this.islandLandmarks.find((x) => x.can_unlock) &&
          this.islandLandmarks.find((x) => x.can_unlock).id;
        if (GID != undefined) {
          setTimeout(() => {
            this.automaticPostElement(GID);
            this.setTime = 2000;
          }, this.setTime);
        } else {
          try {
            // 下一个可以解锁的地标
            this.nextLandmarksGid = this.islandLandmarks.find(
              (x) => x.status == 0 && !x.can_unlock
            ).id;
            // if (this.nextLandmarksGid) {
            //   this.automaticPostElement(this.nextLandmarksGid);
            // }
          } catch (err) {
            this.nextLandmarksGid = 0;
            // console.log("nextLandmarksGid没有满足条件，异常抛出并赋值");
          }
        }
        return true;
      });
    },

    /**
     * 解锁地标
     * id: 岛屿id
     * gId: 地标
     *
     *
     */
    postUnlock({ id, gId, name }) {
      window.zap.trackEvent(
        {
          id: 9989,
          action: "Click",
        },
        {
          button: { text: name },
        }
      );
      // 显示哪些提示窗
      this.brightLandmark(id);
      let template = this.islandLandmarks.find((obj) => obj.id === gId);
      if (template !== undefined) {
        if (!template.can_unlock) {
          if (template.status) {
            this.$router.push({ path: "/poster", query: { landmarkId: id } });
          } else {
            if (this.nextLandmarksGid === gId) {
              this.enums = 2;
            } else {
              this.enums = 3;
            }
          }
        }
      }
    },
    // 自动点亮地标
    automaticPostElement(gId) {
      let collection_id = this.getFilterIslandId(this.newIslandId).gId;
      return postElement({
        element_id: gId,
        collection_id: collection_id,
      }).then((res) => {
        if (res.code == 200) {
          this.getList(this.getFilterIslandId(this.$route.query.islandId).gId);
          this.enums = 1; //提示类型
          this.brightLandmark(this.filterLandmarkTispGID(gId)); // 显示
          this.changeLT(true); // 显示几秒
          // 若触发奖励，则弹出宝箱
          if (
            res.data.surprise.final_prize.has ||
            res.data.surprise.treasure_box.has
          ) {
            this.changeTreasureList(res.data.surprise);
          }
          return false;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["filterLandmarkTispGID"]),
    ...mapState(["showIslands", "landmarkList", "isLandsList"]),
  },
  components: {
    // Tasks,
    LandmarkTisp,
  },
};
</script>

<style lang="sass" scoped>
.islands
  width: 100%
  margin-top: 2.8rem
  .box
    width: 100%
    height: 8.34rem
    position: relative
  .islands-1
    background: url("~@/img/island1.png") no-repeat
    .landmark-1
      position: absolute
      width: 2.32rem
      height: 2.03rem
      top: 0rem
      left: 2.44rem
    .landmark-2
      position: absolute
      width: 2.35rem
      height: 2.13rem
      top: 1.6rem
      left: 4.4rem
    .landmark-3
      position: absolute
      width: 2.47rem
      height: 2.25rem
      top: 3.24rem
      left: 0.7rem
  .islands-2
    background: url("~@/img/island2.png") no-repeat
    background-position: 1.8rem 0rem
    .landmark-4
      position: absolute
      width: 2.28rem
      height: 1.68rem
      top: 0rem
      left: 2.68rem
    .landmark-5
      position: absolute
      width: 2.51rem
      height: 1.78rem
      top: 2.34rem
      left: 4.32rem
    .landmark-6
      position: absolute
      width: 2.11rem
      height: 2.42rem
      top: 3.75rem
      left: 2.48rem
  .islands-3
    background: url("~@/img/island3.png") no-repeat
    background-position: 0.7rem 0rem
    .landmark-7
      position: absolute
      width: 1.79rem
      height: 1.87rem
      top: 0rem
      left: 3.07rem
    .landmark-8
      position: absolute
      width: 1.91rem
      height: 1.85rem
      top: 1.55rem
      left: 4.2rem
    .landmark-9
      position: absolute
      width: 1.89rem
      height: 2.15rem
      top: 4.22rem
      left: 2.88rem
    .landmark-10
      position: absolute
      width: 2.04rem
      height: 1.57rem
      top: 2.76rem
      left: 0.7rem
  .islands-4
    background: url("~@/img/island4.png") no-repeat
    background-position: 1.4rem 0rem
    .landmark-11
      position: absolute
      width: 1.70rem
      height: 2.06rem
      top: 0.18rem
      left: 3.12rem
    .landmark-12
      position: absolute
      width: 2.21rem
      height: 2.13rem
      top: 2.3rem
      left: 3.42rem
    .landmark-13
      position: absolute
      width: 1.97rem
      height: 2.12rem
      top: 5.1rem
      left: 2.46rem
  .islands-5
    background: url("~@/img/island5.png") no-repeat
    background-position: 0.5rem 0rem
    .landmark-14
      position: absolute
      width: 1.89rem
      height: 1.86rem
      top: 5.15rem
      left: 0.72rem
      opacity: 0.6
    .landmark-15
      position: absolute
      width: 2.03rem
      height: 2.23rem
      top: 3.19rem
      left: 0.56rem
      opacity: 0.6
    .landmark-16
      position: absolute
      width: 1.80rem
      height: 1.64rem
      top: 0.64rem
      left: 2.5rem
      opacity: 0.6
    .landmark-17
      position: absolute
      width: 3.13rem
      height: 5.57rem
      top: 0.96rem
      left: 3.92rem
      opacity: 0.6
  .islands-6
    background: url("~@/img/island6.png") no-repeat
    background-position: 0.5rem 0.4rem
    .landmark-18
      position: absolute
      width: 2.14rem
      height: 1.86rem
      top: 0.4rem
      left: 4.27rem
    .landmark-19
      position: absolute
      width: 1.96rem
      height: 1.84rem
      top: 1.9rem
      left: 2.62rem
    .landmark-20
      position: absolute
      width: 1.92rem
      height: 2.15rem
      top: 3.38rem
      left: 0.62rem
    .landmark-21
      position: absolute
      width: 2.23rem
      height: 2.12rem
      top: 3.49rem
      left: 4.96rem
  .cls-1
    fill: #000000
    stroke: #fff
    stroke-width: 0
    opacity: 0.4
  .st_bright
    opacity: 0 !important
.highlight-color
  -webkit-tap-highlight-color: transparent
.scale-down-top
  -webkit-animation: scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
  animation: scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both

@-webkit-keyframes scale-down-top
  0%
  -webkit-transform: scale(5)
  transform: scale(5)
  -webkit-transform-origin: 50% 50%
  transform-origin: 50% 50%

  100%
  -webkit-transform: scale(1)
  transform: scale(1)
  -webkit-transform-origin: 50% 50%
  transform-origin: 50% 50%

@keyframes scale-down-top
  0%
    -webkit-transform: scale(5)
    transform: scale(5)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%

  100%
    -webkit-transform: scale(1)
    transform: scale(1)
    -webkit-transform-origin: 50% 50%
    transform-origin: 50% 50%
</style> 

