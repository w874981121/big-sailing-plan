<template>
  <div class="choose-island">
    <!-- 用户信息 -->
    <UserInfo></UserInfo>

    <div class="text-message">
      <p>{{ indexData.title }}</p>
      <p>{{ indexData.sub_title }}</p>
    </div>

    <div class="content_home">
      <!-- 任意选择岛屿主页 -->
      <div
        class="content_zhi_img"
        :style="{ 'margin-top': initState ? '1.6rem' : '2.6rem' }"
      >
        <svg
          id="svg-islands"
          data-name="岛屿群"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 688.09 799.13"
        >
          <g
            id="岛屿1"
            class="island-1"
            :class="{ st_bright: isLandsList[0].brightState }"
            @click="clickIslan(1)"
          >
            <path
              class="cls-1"
              d="M278.62,86.34h3c4.35-.68,14.68-2.65,18-3,35.4-.7,50.75-4.92,74,11,3.85,2.63,7.29,3.15,9,8,4.37,5.55,4.29,24.19,3.92,29.51-.29,4.07-2.48,8.4-1.37,12.91a4.86,4.86,0,0,0-3.49,1.71c-2.1,2.8-3.87,8.49-5.39,14.09-1.37,5,.52,8.56-1.67,12.78-2.52,4.87-9.06,9.66-12.85,13.5-2.52-.09-12.15-4.5-12.15-4.5-.33,1.33-2.4,5.59-2.73,6.93-2,1.57-10,.94-13.27.07-4.33-1.16-5.24-3.73-12-4l-4,5c-11.77-3-22.23-15.5-27-16-2.63-.28-21.53,3.94-32,3-.21.64.92,4.85-.45,6s-5.09-.67-6.23.76c-10.09,12.69-22.29,35.64-25.81,38.82-3.19,2.88-9.15-3.23-10.51,1.42-3,4.23-4,12.2-4,19-6.88,3.83-23.89,24.25-31.53,30.42-.34,4.33-2.13,7.25-2.47,11.58-5,1.24-9.19,4.83-14,6-12.1,3-12.67-8.89-25,4-6.92-1.78-12.64-4.7-22-5v1h2c2.8,2.83,7.14,4.24,11,6v1h-5c-3.86-3.29-18-2.44-23-3.56.34-.33.67-2.11,1-2.44,1.55-2.2,6-3.95,7-6v-33l3-3c-7.73-5-7.86-24.5-5.62-29.88,1.3-4.6,4.91-7,6.62-10.12.67-5.33,1.54-11.94,2.21-17.27,6.23-2,13.52-5.29,22.79-6.73.44-16.91,24.65-43.25,33.26-55.1,2.67-2.34,4.08-5.57,6.74-7.9v-42c-.66-9-.66-35.28,2.08-40.19C196.8,12.29,229.31-5.79,264.62.34c2.87,7,11.44,9.88,14,18Z"
              transform="translate(1.63 1.35)"
            />
            <polygon
              class="cls-9"
              points="318.28 196.58 326.06 207.08 362.67 201.83 360.77 197.72 363.82 194.1 369.51 203.26 378.69 194.1 376.6 188 368.2 191.62 354.47 192.58 351.8 195.44 338.26 195.44 319.95 194.48 318.28 196.58"
            />
            <path
              class="cls-9"
              d="M85,276.28c3.08,4.7.68,20.19,1,24H84c-6.05-5.34-21-5.93-25-13C66.67,285.73,79.44,281,85,276.28Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M96.56,252c2.46,1.29.68-.43,2,2-2.16,1.73-2.83,4.28-5,6-3.13,2.5-8.6,4-13,5v-2C85.77,261.46,93.7,256.16,96.56,252Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M101.89,270.78c2.07.37,1.92.24,3,1-2.87,4.78-.76,13.79-4,18-2.63-3.25-7.09-4-9-8A33.12,33.12,0,0,0,101.89,270.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M94.89,294.78h5c2.12,2.92,5.35,3.61,7,7h-3c-4.64-2.92-11.64-1.85-15-6C91.61,295.79,93.48,295.74,94.89,294.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M343.89,205.78c7.15-.29,21.35.54,24,5h-1c-2.35,2.58-5.39,5.74-9,7C354.12,213.07,346.57,211.43,343.89,205.78Z"
              transform="translate(1.63 1.35)"
            />
          </g>
          <g
            id="岛屿2"
            class="island-2"
            :class="{ st_bright: isLandsList[1].brightState }"
            @click="clickIslan(2)"
          >
            <path
              class="cls-3"
              d="M403.62,150.34l1-18c2.08-.37,1.93-.24,3-1,1.88-2.57,1.45-1.35,2.33-4.06,3.56-1.55,18.25-6.74,22.29-9.68,4.4-3.2,37.61-4.31,53.77-3,5.08.42,27.14-2.86,31.61.7,1.36,1.72,2.13,4.85,3,7,2.55-1.43,8.62-3.34,11-2,2.86,1.77,4.27,2.9,5,7-2.11,2-2.65,2.94-3,7,6.24,2.84,12.07,7.67,18,10,1.13,1.3,14.76,5.83,18.53,11.55,4,5-.17,17.86-.53,24.45-.64,11.89.41,30.94-.46,35.89-.48,2.75-6.07,21.25-9.54,25-8.2,6.17-33.39,14.6-44,18.08-7.73,2.54-15.73,3.72-20.93,8.57,1,1.3.85,1.94,1.93,3.43,1.2,1.64,4.92,2.31,6,4,5.19,8.06,3.17,16.93,6,28,2.61,10.18,6.38,22.57,9,32l1,18c.55,1.39,3.53,4,4,6l-5,31,4,4,1,5h18v1a13.64,13.64,0,0,1,4,8h-2c-3.69-4.56-13.46-6.54-20-8v33h2c-.26-4.9-1-12.09,2-14v2c3.54,5,10.47,19.68,12,26-5.7.06-13.06,1.69-16,4,7.23,1.5,8.47,6.63,8,16-4.68,2.33-8.11,5.61-13,8v-3c1.67-1.79,2.36-4.12,3-7h-2v2c-8.54,8.19-4.62,27.62-9,40-.9,2.57-5.85,9.91-8,12,0,0-1.74-3-4.05-3.31-3.51-.49-9.49,2.77-12.87,4.31-8.63,3.93-19.36,17.28-27.4,22.67,0,0-24.87-3.87-26.39-5.07-3-3.22-2.64-7.63-4.29-12.6-2.09-6.32-7-16.25-9.06-22.88-.66-11.67-1-22.78-1.7-34.44-1.3-6,1.23-33.45.47-37.95-1.3-7.73-.73-29.29-.71-35.73l-1-22c3.82-13,6-27.54,6-45-5.45-3.35-21.86-24.76-24-31l-1-23c-2.19-6.39-9.95-10.72-12-18v-21s-3.43-3-4-5c.34-8.33-.5-16.67-.17-25-.47-11.46-3.56-30.17-3.56-41.74,2.33-7,3.46-9.13,5.79-16.13,3.67-3.21,12.32-7,15.37-5.45.41,1.11-.25,3.47,0,5-.56.6,2.44.32,3,.87s-.39,4.08-.74,5.32C400.94,152.17,402,150.34,403.62,150.34Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M520.89,392.78c.54-8.67,2.82-15.41,3-25h2c.84,11.57,9.06,18,11,29h-1C532.65,394.25,526,393.11,520.89,392.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M529.89,421.78c5.09,1.55,16.51,1.64,19,6h-2a17.35,17.35,0,0,1-10,5C534.59,428.41,531,427.19,529.89,421.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M538.89,449.78a50.84,50.84,0,0,0,13-3v3c-5.49,2.73-8.73,7.19-15,9v-2C538.41,454.88,538.67,453.19,538.89,449.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M411.89,352.78l-1,12c-4.33-.44-10.38-2.68-12-6h1A21.74,21.74,0,0,1,411.89,352.78Z"
              transform="translate(1.63 1.35)"
            />
          </g>
          <g
            id="岛屿3"
            class="island-3"
            :class="{ st_bright: isLandsList[2].brightState }"
            @click="clickIslan(3)"
          >
            <path
              class="cls-4"
              d="M605.62,717.34c0,2-.82,6.17-.82,8.16-2.81,1.52-4.14-.12-9.18-.16-2.48-2.41-10.63-2.56-17-2-1.8,4.28-9.59,7.93-15,10-7.89,3-24.42,9.64-25.23,11.44-2.54,5.6-2.23,4.53-6.49,11.88-2.94-2.63-14.31-5-19.28-5.32-2.93,2.7-5,1.94-6,7,.76,1.07.61.94,1,3h-2c-3.25-2.64-8-3.07-14-3v-3c3.92-2.45,8.47-6.12,11-10-2.28-1.23-2.25-1.64-6-2-2.77-1.26-6.36,1.43-11,2,.14,9-4.17,20.73-11,23-3.42-4.11-11.42-4.11-17-6a10.7,10.7,0,0,0-2-3l8-8c0-.33-9.79-4.22-13.84-10.56-2.35-3.67-3.68-.13-7.41-2.44-8.2-5.07-16.33-14.24-22.75-21,1.42-3.14,4.55-7,6-10.14,2.36-5.34,2.68-10.63,4-16.86l-1-45c-.88-4.2-3.43-11.23-2-17,2.91-11.68,8-26.44,11.66-37.44,2-10.33,5.34-19.23,7.34-29.56a83.47,83.47,0,0,0,3.63-11.25c5.95-.84,28.36-26.2,32.74-28.4,12-6.06,16.7-8,19.63-2.35,2.2,6.39,12.23,14.62,17,19-3.65,14.38-8.74,30-9,49,9.52.86,27.33,3.23,34-2,4.59-4.46,7.7-9.86,11.37-15.37,5.83-8.77,14.09-17.7,17.63-28.63,3-9.37.79-17,3-27,1.29-5.84,3.17-18.45.58-26.56-3.85-12.06-15.56-29-19-41,0-3.33-.34-23-3.54-31.44a91.24,91.24,0,0,0-8-16c-2.57-3.8-8.41-7.35-10-12-2-6,1.15-14.3,2-18v-26c1.14-4.73,1.2-17.5,3.5-27.78,1.86-8.31,7.93-14.35,9.52-17,4.83-8.14,21.33-30.28,42.27-23.72,16.43,5.15,21.56,19.68,25.71,37.54v13c.69,2.37,3.08,6.06,2,11-2.77,12.72-8.3,32.49-4,48,6,21.47,13.12,45.84,19,67,5,18,4.5,37.05,10,54,7.26,22.36,18.62,40.92,25,65,3.3,12.43-.24,28.57-3,38l-1,34c-3,14-4.27,34.11-6,48-5.33,1.35-8.51,4.82-12,8v2h3c1.4-2,1.35-2.07,4-3v2c-3.18,2.19-4.09,5.67-7,8l3,6c1.76-.63,1-.19,2-1,2.39-1.45,9.4-4.5,14-2-.8,1-.35.27-1,2-7.3,3.63-12.78,8.52-21,12v-2a24.41,24.41,0,0,0,5-7h-2c-3.94,3.09-14,2.16-21,2v-1h1c2-2.34,5.38-2.33,7-5h-7C623.18,715.24,614.32,717.29,605.62,717.34Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M685.89,705.78c3.28,5.48-8.55,32.46-11,38l-1-1c-4.53-2.89-12.82-10-15-15C665.41,724.5,680.66,711.23,685.89,705.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M480.89,767.78c9.1-.1,28.07-6.13,33-4,5.24,3.32,14.2,11.59,15,19l-9,15c-9.18-3.11-34.9-8.06-41-13-.81-1-.36-.27-1-2C480.87,779,481.2,772,480.89,767.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M629.89,718.78c3.73,1.19,9.17,1.71,11,5h-2c-5.66,4-17.28,6-25,7v-2h1C619.07,724.64,625.78,723,629.89,718.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M438.89,745.78h3c2.89,3.59,7.9,4.58,10,9h-5c-3.86-2.55-13.5-2.83-19-3v-2C431.65,749.37,436.45,747.81,438.89,745.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M538.89,752.78h12v2c-9.72.68-15.78,6.42-25,8v-1h1C530,757.88,535.43,756.32,538.89,752.78Z"
              transform="translate(1.63 1.35)"
            />
            <polygon
              class="cls-9"
              points="657.22 711.59 661.55 700.6 666.88 693.71 668.88 693.71 668.88 702.15 657.22 711.59"
            />
            <path
              class="cls-9"
              d="M646.89,470.78c.6,3.75,4.14,8.5,3,10-1.72,1.68-3.7,2.67-5,2-3.57-2.68-3.87-6.45-3-11h2C645,471,644.83,471.18,646.89,470.78Z"
              transform="translate(1.63 1.35)"
            />
          </g>
          <g
            id="岛屿4"
            class="island-4"
            :class="{ st_bright: isLandsList[3].brightState }"
            @click="clickIslan(4)"
          >
            <path
              class="cls-9"
              d="M247.89,651.78c4.63,1,13.09,4.08,15,8-2.22,3.47-1.63,9.72-4,13l-1-1C254.77,665.16,249.25,659.68,247.89,651.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M389.89,698.78c.75,1.07.6,1,1,3-3.88,3.2-4.51,9.49-10,11-4.3-3.83-13.33-4.68-16-10C370,702.34,386.44,701.08,389.89,698.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M263.89,735.78v-3c3.69-1.77,3.09-4,8-5,1.66,6.28,6.16,9.77,8,16h-2C274.78,740.55,269,736.71,263.89,735.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-5"
              d="M401.62,622.34c-.56,6.62-.38,15.33-1.65,19.43-2.88,9.25-8.57,10.31-14.35,19.57-3.35,5.37-4.15,12.25-10,15-1,.59-1.91.11-5,0-.09,5.56-.12,5.44,0,11-8.74.92-19.48,6.13-25,11h2c2.92,3.95,7.74,4.34,9,10-4.74,1.45-7.77,4.81-12,7,2.49,4.87,6.46,7.17,9,12-10.67,4.23-22.52,10.45-37,11-3.3-7.9-4.88-17.3-17-17-4.88-3.31-14.73-3.85-20-6l-1-2c2.51-1.46,2.16-.59,3-4a68.75,68.75,0,0,0-14,1v-1h1c2.59-1.61,7.61-1.28,10-3-5.78.06-16.33-.28-20-3h2c8.42-5,25.59,1.64,33-4-1.54-1.13-.84-1.09-3-2-2.3-1.3-5-.37-7,0-7.92,1.44-15.23-4.94-17-10,3.12-4.3,2.14-12.5,4-18,2-5.84,6.27-10.66,9-16-2.53-.07-3.71-.12-5-1-4.29-4.17-6.71-12-7-20,4.34-2.65,10.26-7,12-12,2.05-5.9-1.1-8.43,0-14,1.7-8.54,4.13-18.52,6-26,2.05-8.13-.07-14.71,2-22,4.89-17.16,20.49-20,25-37,1.83-6.9-4.85-17.64-3.19-21.73,2.62-6.45,3.2-7.16,1.71-14.62-1.55-7.78-1.71-23.46-.87-27.65,2.86-14.08,11.79-31.76,22.35-58,1.79-4.43,10.26-17.74,18.36-22.28,3.38-1.9,16.16,9.05,20.64,10.28v-1a17.36,17.36,0,0,1-4-7l1-1c6.43-.46,11.43-3.61,17-5,6.48-1.62,12.68-.86,18-2v2c-6.33,4.8-5.25,14.39-16,15-3.34,2-10,.86-13,3h2c8,16,23.69,27,31,44,5.86,13.63,5.2,24,8.67,39.6,4.83,21.69-.67,55.2-.67,78.4,0,10-1.27,23,3,29l2-2c.15,11.32,5.44,13.92,6,24,0,3.44-6,4.38-9,7.64-2.35,2.51-3.06,10.88-5.05,13.6C410.85,624.24,404.48,622.7,401.62,622.34Z"
              transform="translate(1.63 1.35)"
            />
          </g>
          <g
            id="岛屿5"
            class="island-5"
            :class="{ st_bright: isLandsList[4].brightState }"
            @click="clickIslan(5)"
          >
            <polygon
              class="cls-9"
              points="370.23 376.35 381.68 360.58 396.95 366.13 370.23 376.35"
            />
            <path
              class="cls-7"
              d="M220.62,611.34c.39,23-2,41.18-9,57-5,11.28-13.43,16.28-14,33l-10,3-6,10c-1.52,4,0,7.75-2,11-2.08,3.43-6.58,5.72-8,10-1.63,4.92.41,8.09,1,10-1.5,3.75-4.18,8.38-6,12h-3v-4h-2v7c-.8,1.18-.77,1.68-1,4h2c1.77-3,7-7.61,10-6,2.07,1.18,1.89.68,3,3a11.36,11.36,0,0,0-6,3,18.31,18.31,0,0,1,3,5c3.59-4.05,2.69-8.27,10-9l1,1,1,8c-4.9,1.36-5.58,4.37-10,6v-1c2-1.74,1.87-2.15,2-6h-2c-2.5,6.18-9.53.17-11,2-2.9,2.24-1.88,3.42-7,4v3c4.62.13,5.58,1.09,9,2,.08,3,.76,2.74,0,4-4.43,3.56-8,1.88-13,2v-1a11.23,11.23,0,0,0,2-3h-3v3c-3.6,1.28-8.34,6.33-11,9-6.37.35-17,1.45-21-3h2c6.32-4.32,19-2.28,25-7-2.4-1.19-7.57-2.6-9-5,3.12-2.19,3.82-6.17,7-8,1.42-1,3.28-1,6-1v-6c-7.16,1.59-8.77,3.41-16,0l-1,10c-8.3,1-19.48,3.06-29,5v-5c-.06-.8.8-3.19,1-7-5.69-1.81-6.85-6.21-11-9-3.74-2.53-9.31-2.36-14-4-7.43-12.66-16.27-35.31-12-56,1.75-8.46-2.07-20.45,2-27,1.15-1.84,4.55-2.87,6-5-4.85-.3-5.24-.58-6-5,1.06-1.52,1.59-4.92,2-7-7.7-2.09-8.24-12.57-8-22l2-1c1.55-.71.14-.13,3,0-.15-8.63,3.18-10.42,12-10-.82-6.87.45-13.53,2-20l6-3c.5-5.34-2.21-13.79,0-20,2.56-7.16,16.57-16.88,20-23v-4l12-9c3.65-6.21,2.93-13.45,6-20,1.33-2.82,5.86-3.63,7-6,2.11-4.38-2.21-3.76,1-7,2.44-2,5.86-2.74,10-3,.51-11.62,4.74-36.66,10-44,2.34-1.67,4.67-5.33,7-7,8.82.07,11.84,5.74,19,7,3.08-4.73,8.94-8.2,12-13,3.26-5.11.94-10.55,7-13,4.23-2.56,12.59-1.1,17-3,10.26-4.42,17-13.39,22-20,2.5.68,1.86,2.36,3,1,17.77-17.23,25.44-61.67,26.64-95.56,5.16-8,12.16-23.88,22-32.35,5.51-4.74,20.82-5.41,26.51-7.33l6.82-.76c4.67-1.51,19.41-4.08,25.15-2.7,5.17,1.25,9.76,5.17,13.85,7.7,5.29,3.27,12.16,3.29,14,10,5.11,7.83,4.07,38.14,4,51h2a21.72,21.72,0,0,1,2-5c1.76.63,1,.19,2,1,1.34,2,1.11,6.51,1,10-1.64,2.3-2.36,6.89-3,10h-3c-.77-.68-2.23-1.31-3-2-.75-1.07-.6-.95-1-3l7-6v-1h-6c-1.25,5-2.51,11.34-4.93,14.5-4.77,6.22-9.71,7.67-15.8,13.67-.34,1.33-1.73,1-2.07,2.29-2.33,1.33-3.5-.58-5.83.75-9.7,3.81-17.23,16.09-18.37,20.79-1.32,5.48-13.55,5.69-17,10-8.42,10.52-2.21,23.72-6,39-2.92,11.79-10.74,18.37-14,28l-2,21c-3.88,10.37-12.36,12.41-22,17,.29,4.93,1.3,7.44-1,9-5,6.23-14.5,8-19,15l-9,31c-1.61,2.68-4.82,3.86-7,6-7.35,7.22-13.36,16.08-15,29h2c6.29-10.72,18.06-15.38,25-25,5.48-7.59,7.81-19.45,10-30,3.59-2.25,6.19-4.71,11-6v1c-3.48,2.15-7.11,5.17-8,10,2.17,2.15,9.63,14.39,8,16-3.26,3-7.76,5-11,8,1.26,2.19,2.18,3,3,6-2.81.94-14.42,8-16,10-2.08,2.66-1.93,8.5-5,10h-10C227.54,608.18,226.34,610.83,220.62,611.34Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M252.89,601.78c2.46,1.29.68-.43,2,2-6.86,5-9.69,16.89-18,20v-2c1.49-1.64.68-2.8,2-5C242.14,611.34,249.23,607.28,252.89,601.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M186.89,776.78v10c-7.93,2.86-6.63,6.05-20,6v-3c5.16-1.5,6.28-3.91,6-11C178,778.17,180.75,776.91,186.89,776.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M192.89,760.78c.73,1.71-1.11,7.65-3,10C189.81,764.82,190.87,764,192.89,760.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M174.89,745.78c3.24.83,1.52-.49,3,2-2.6,1.89-3,4.51-6,6l-1,1v-3c.8-1.18.77-1.68,1-4C174.27,746.94,173.53,747.38,174.89,745.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M92.89,762.78c2.53,1.5,3.16,1.51,4,5h-2v-1C93.62,765.42,93.52,765,92.89,762.78Z"
              transform="translate(1.63 1.35)"
            />
          </g>
          <g
            id="岛屿6"
            class="island-6"
            :class="{ st_bright: isLandsList[5].brightState }"
            @click="clickIslan(6)"
          >
            <path
              class="cls-8"
              d="M316.62,246.34c0-26.33-7.43-43.54-16-61-8.63-1.94-14.69-6.07-21.94-6.25-6.4-.16-13.86,3.45-22.92,4.61-5.19-1.55-25.87,33.39-36.94,51.6-4.41,7.25-.56,20.51-5.2,28-1.8,4.35-6,4.09-9,7-8.19,7.84-14.71,17.22-26,22-6.32,2.68-15.63,2.38-20,7h-3l1-1c1.49-2.47.42-1.58,4-2v-1c-2.74-1.25-6.45-2.68-9-4-3.9,3.78-9.76,5.56-14,9-.66,1.33-1.33,2.67-2,4-3.62,2.1-8,.81-11,3-3.05-1.38-8.1-5.26-10-8h-1v5c-9.33.65-12.58,8.64-16,15-4.1-1.4-7.18-5.32-9-9-19.93,3.19-17.57,44.18-42,45-1.65,3.34-3.43,5.54-4,10a18,18,0,0,1-2-4h-5c0,2.73,0,4.58-1,6-2,2.87-2,.27-5,2-3.18,1.89-6.38,17-9,21-5.06,7.76-13.54,15.14-17,24-6.92,17.74-6,64.27-3,87,13.05-4.7,25.86-1.91,32,8,4.52-.61,7-2,9-5h2l-2,2v2c8.45-3.33,19.23-7.48,29-8-2.23-1.71-6.61-2.69-10-3v-1c16.71-3.78,29.41-16.88,36-31,6.57.48,16,2.9,21,6l2,3c8.62,4.14,23.74-4.55,28-9l1-1c-4.64-1.32-5.59-3.93-10-5v-2a49.86,49.86,0,0,0,15,3c2.31-2.31,5.44-2.87,7-6h2v-1h-14v-1c2.41-.8,8.88.4,12-1s6.75-6.89,10-9v-1c-3.18.79-6.88,2-9,4h-2l1-1c4.7-6.08,8.29-2.23,17-5s35.09-14.67,41-20c.92-1.92.4-.74,0-3,20.33-4.92,30.07-11.62,37-30,1.44-3.81,4.48-10.76,3-17-1.67-7.09-5-18.65-6-26-1-7,8.1-9.56,6-15v-15c3.34-1,9.74-1.24,13.07-2.24,7.18-7.51,9.68-18.47,19.6-25.67,3.92-2.85,17.34-3.43,20.33-7.09C317.33,271.35,316.63,259.06,316.62,246.34Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M-.11,504.78c13.49-.83,29.93-.43,35,10h-1c-3.11,3.18-7.89,5.94-12,8l-8-16c-.81,1-.36.27-1,2l-8,16c-1.76-.63-1-.19-2-1C-.66,520-.29,512.33-.11,504.78Z"
              transform="translate(1.63 1.35)"
            />
            <path
              class="cls-9"
              d="M25.89,522.78c6.87-1.16,10.15-6.62,16-8l18,3v2c-10.65.5-24.88,2.49-34,6Z"
              transform="translate(1.63 1.35)"
            />
          </g>
        </svg>
      </div>

      <!-- 大标题 -->
      <div class="big_title" v-show="initState">
        <img src="~@/img/bottom_title.png" alt="" />
      </div>
    </div>

    <!-- 进度条 -->
    <div class="process-box" ref="dateScroll" v-show="!initState">
      <div class="process">
        <div class="process_show">
          <div class="process_hidden" :style="process_width">
            <div class="process_show_img">
              <img src="~@/img/process_show.png" alt="" />
            </div>
          </div>
        </div>

        <div class="process_node">
          <div class="box1" :class="{ box_img: process_box_mark(0.001) }"></div>
          <div class="box2" :class="{ box_img: process_box_mark(0.05) }"></div>
          <div class="box3"></div>
          <div class="box4" :class="{ box_img: process_box_mark(0.15) }"></div>
          <div class="box5" :class="{ box_img: process_box_mark(0.2) }"></div>
          <div class="box6"></div>
          <div class="box7" :class="{ box_img: process_box_mark(0.3) }"></div>
          <div class="box8" :class="{ box_img: process_box_mark(0.35) }"></div>
          <div class="box9"></div>
          <div class="box10" :class="{ box_img: process_box_mark(0.45) }"></div>
          <div class="box11" :class="{ box_img: process_box_mark(0.5) }"></div>
          <div class="box12"></div>
          <div class="box13" :class="{ box_img: process_box_mark(0.6) }"></div>
          <div class="box14" :class="{ box_img: process_box_mark(0.65) }"></div>
          <div class="box15"></div>
          <div class="box16" :class="{ box_img: process_box_mark(0.75) }"></div>
          <div class="box17" :class="{ box_img: process_box_mark(0.8) }"></div>
          <div class="box18"></div>
          <div class="box19" :class="{ box_img: process_box_mark(0.9) }"></div>
          <div class="box20" :class="{ box_img: process_box_mark(0.95) }"></div>
          <div class="box21"></div>
        </div>
        <div class="process_mark_position">
          <div class="process_mark" :style="process_left">
            <img src="~@/img/process_mark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <p
      style="
        margin-top: 0.2rem;
        color: #ffffff;
        font-size: 0.24rem;
        font-weight: 600;
      "
      v-show="initState"
    >
      任意选择岛屿开启探索之旅
    </p>
    <p
      style="
        margin-top: 1.2rem;
        color: #ffffff;
        font-size: 0.24rem;
        font-weight: 600;
      "
      v-show="!initState"
    >
      每解锁3个地标 可得最高88元现金
    </p>
    <!-- 六座岛屿模块 -->
    <!-- <Islands></Islands> -->
    <!-- 导航信息 -->
    <div class="nav">
      <div class="linkbox" @click="changeSAR"></div>
      <div class="linkbox" @click="changeA"></div>
      <router-link
        class="linkbox"
        to="/ml"
        @click="
          window.zap.trackEvent(
            {
              id: 9984,
              action: 'Click',
            },
            {
              button: { text: '历史航程' },
            }
          )
        "
      ></router-link>
      <router-link
        class="linkbox"
        to="/mr"
        @click="
          window.zap.trackEvent(
            {
              id: 9984,
              action: 'Click',
            },
            {
              button: { text: '探岛收获' },
            }
          )
        "
      ></router-link>
    </div>
    <!-- 弹窗模块 -->
    <!-- 0 - 岛屿提示 -->
    <IslandsTisp></IslandsTisp>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import IslandsTisp from "../components/islands-tisp";
import UserInfo from "../components/userInfo";
import { index, collection } from "../api/api";

// import ActivityRules from "../components/activity-rules";
// import Attendance from "../components/attendance";
// import Treasure from "../components/treasure";
//
export default {
  name: "choose-island",
  data() {
    return {
      // // 首页活动信息
      // indexData: {
      //   element_prize_count: 0,
      //   miles: 0,
      //   title: "",
      // },
      // 进度条
      process: 0,
      process_width: "0",
      process_left: "0",
      //岛屿参数
      showIslandsId: 0, //当前显示的岛屿，0为主岛屿，1、2、3、4、5、6为分岛屿
      unlockNumber: 0, //已解锁的岛屿数量
      styleMarginTop: "",
      //弹窗参数
      showActivityRules: false, //规则弹窗
      processScrollLeft: 0,
    };
  },
  components: {
    // ActivityRules,
    // Attendance,
    IslandsTisp,
    UserInfo,
    // Treasure,
  },
  watch: {
    process(val) {
      let num = val == 0 ? 0 : val * 100;
      this.$nextTick(() => {
        this.process_width = `width:${num}%`;
        this.process_left = `left:${num}%`;
        this.$refs.dateScroll.scrollLeft = num * 27.97 - 250; // -250 为了定位后居中
        this.processScrollLeft = num * 27.97 - 250;
      });
    },
    "indexData.element_prize_count"(val) {
      this.unlockNumber = val;
      this.coundt(val);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(from.path);
      if (from.path === "/pi") {
        vm.getIndex();
        vm.getCollection();
      }
    });
  },
  created() {},
  activated() {
    this.$refs.dateScroll.scrollLeft = this.processScrollLeft; // -250 为了定位后居中
  },
  computed: {
    ...mapGetters(["filterLandmarkNumber", "changeI"]),
    ...mapState(["indexData", "isLandsList", "can_unlock"]),
    process_box_mark: () => {
      return function (x) {
        return this.process >= x ? false : true;
      };
    },
    initState() {
      if (this.can_unlock && this.unlockNumber == 0) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.getCollection();
  },
  methods: {
    ...mapMutations([
      "changeSAR",
      "changeA",
      "changeGL",
      "changCU",
      "changeIslandsState",
      "brightLandmark",
      "getIndexData",
    ]),
    clickIslan(id) {
      window.zap.trackEvent(
        {
          id: 9984,
          action: "Click",
        },
        {
          button: { text: this.isLandsList.find((x) => x.id == id).name },
        }
      );
      if (this.changeI(id)) {
        this.$router.push({ path: "/pi", query: { islandId: id } });
      }
    },
    getIndex() {
      index().then((res) => {
        if (res.code === 200) {
          this.getIndexData(res.data);
          this.unlockNumber = res.data.element_prize_count;
          this.coundt(this.unlockNumber);
        }
      });
    },
    getCollection() {
      // 地图列表6个岛的状态
      collection().then((res) => {
        if (res.code === 200) {
          this.changeIslandsState(res.data.collections);
          this.changCU(res.data.can_unlock);

          // 判断返回的岛屿状态，是否有开启的岛屿，若有开启的岛屿则直接进入
          if (!res.data.can_unlock) {
            let obj = res.data.collections.find((x) => x.status === 1);
            if (obj !== undefined) {
              // this.changeGL(obj.id);
              this.$router.push({ path: "/pi", query: { islandId: obj.id } });
            }
          }
          return res;
        }
      });
    },

    // 计算进度条位置
    // @num  进度条进度数字共21
    coundt(num) {
      let coefficient = 100;
      if (10 >= num && num > 5) {
        coefficient = 200;
      } else if (15 >= num && num > 10) {
        coefficient = 300;
      } else if (20 >= num && num > 15) {
        coefficient = 400;
      }
      if (num == 1) {
        this.process = 0.001;
        return;
      }
      num = (1 / 20) * (num - 1);
      let numberP = this.process + num;
      numberP >= 1 ? 1 : numberP;
      const Inter = setInterval(() => {
        if (numberP >= this.process && this.process < 1) {
          if (this.process >= 1) {
            this.process = 1;
          } else {
            this.process = this.process + num / coefficient;
          }
        } else {
          clearInterval(Inter);
        }
      }, 10);
    },
  },
};
</script>

<style lang="sass" scoped>
.choose-island
  display: inline
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
  .text-message
    position: absolute
    top: 2rem
    left: 0.3rem
    color: #ffffff
    font-size: 0.26rem
    text-align: left
    font-weight: 600
    p
      line-height: 0.4
      height: 0.4rem

  .content_home
    overflow: hidden
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

  .content_zhi_img
    width: 6.87rem
    height: 8.07rem
    margin: 1.6rem auto 0 auto
    background: url("~@/img/zhi.png") no-repeat
    .island-1,.island-2,.island-3,.island-4,.island-5,.island-6
      stroke: #000
      fill: #000000
      stroke-miterlimit: 10
      stroke-width: 0
      opacity: 0.4
      .cls-9
        opacity: 0.3

    .st_bright
      opacity: 0

  .big_title
    margin-top: -0.8rem
  .process-box
    width: 100%
    overflow-x: auto
    position: absolute
    top: 10.67rem
    left: 0
    scrollbar-width: none
    -ms-overflow-style: none
    &::-webkit-scrollbar
      display: none
    .process
      width: 27.97rem
      height: 1.02rem
      margin-left: 1rem
      position: relative
      background: url("~@/img/process_bg.png") no-repeat
      background-position: 0 0.1rem
      .process_show
        width: 27.36rem
        height: 1.02rem
        margin: 0 auto 0 auto
        .process_hidden
          width: 0
          height: 100%
          overflow: hidden
          .process_show_img
            width: 27.36rem
            height: 0.32rem
            margin: 0.35rem 0
            overflow: hidden
            border-radius: 0 0.16rem 0.16rem 0
      .process_mark_position
        width: 27.36rem
        height: 1.02rem
        margin: -1.02rem auto 0 auto
        position: relative
        .process_mark
          width: 0.4rem
          height: 0.5rem
          position: absolute
          margin-left: -0.2rem
          top: 0
          left: 0
          img
            width: 100%
            height: 100%
            display: block
      .process_node
        width: 29rem
        height: 0.76rem
        position: absolute
        top: 0.13rem
        .box1,.box2,.box4,.box5,.box7,.box8,.box10,.box11,.box13,.box14,.box16,.box17,.box19,.box20
          width: 0.37rem
          height: 0.45rem
          float: left
          background: url("~@/img/process_node.png") no-repeat
        .box1
          margin: 0.15rem 0 0 0.15rem
        .box2,.box5,.box8,.box11,.box14,.box17,.box20
          margin: 0.15rem 0 0 1rem
        .box4,.box7,.box10,.box13,.box16,.box19
          margin: 0.15rem 0 0 0.87rem
        .box_img
          background: url("~@/img/process_node_.png") no-repeat
        .box3,.box6,.box9,.box12,.box15,.box18,.box21
          width: 0.65rem
          height: 0.53rem
          margin: 0.12rem 0 0 0.84rem
          float: left
        .box3
          background: url("~@/img/process_treasure_1.png") no-repeat
        .box6
          background: url("~@/img/process_treasure_2.png") no-repeat
        .box9
          background: url("~@/img/process_treasure_3.png") no-repeat
        .box12
          background: url("~@/img/process_treasure_4.png") no-repeat
        .box15
          background: url("~@/img/process_treasure_5.png") no-repeat
        .box18
          background: url("~@/img/process_treasure_6.png") no-repeat
        .box21
          background: url("~@/img/process_treasure_7.png") no-repeat

.cc:after,
.cc:before
  content: ""
  display: block
  clear: both
</style>

