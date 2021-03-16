<!--loading,需要对每一个ID都定义唯一值-->
<template>
  <div class="fly-box" :ref="refName">
    <svg class="fly-box-svg" :width="width" :height="height">
      <defs>
        <path :id="pathId" :d="path"></path>
        <!--高光-->
        <radialGradient
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
          :id="gradientId"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask :id="maskId">
          <!--流星的长度-->
          <circle cx="0" cy="0" :r="starLength" :fill="`url(#${gradientId})`">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <!--边框-->
      <use
        :href="`#${pathId}`"
        stroke-width="1"
        :stroke="lineColor"
        fill="transparent"
      ></use>
      <!--通过蒙版来实现流星color-->
      <use
        :href="`#${pathId}`"
        stroke-width="2"
        :stroke="starColor"
        fill="transparent"
        :mask="`url(#${maskId})`"
      ></use>
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, getCurrentInstance } from "vue";
export default {
  name: "ImoocFlybox",
  props: {
    lineColor: {
      type: String,
      default: "#235fa7",
    },
    starColor: {
      type: String,
      default: "#4fd2dd",
    },
    starLength: {
      type: Number,
      default: 50,
    },
    duration: {
      type: Number,
      default: 3,
    },
  },
  setup(ctx) {
    const uuid = "uuid" + Date.now();
    const width = ref(0);
    const height = ref(0);
    const refName = "imoocFlyRef";
    const pathId = `${refName}-path-${uuid}`;
    const gradientId = `${refName}-gradient-${uuid}`;
    const maskId = `${refName}-mask-${uuid}`;
    onMounted(() => {
      const instance = getCurrentInstance();
      const dom = instance.ctx.$refs[refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    });
    const path = computed(
      () =>
        `M5 5 L${width.value - 5} 5 L${width.value - 5} ${
          height.value - 5
        }  L5 ${height.value - 5} Z`
    );
    return {
      width,
      height,
      refName,
      path,
      pathId,
      gradientId,
      maskId,
    };
  },
};
</script>
<style lang="scss" scoped>
.fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .fly-box-content {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
