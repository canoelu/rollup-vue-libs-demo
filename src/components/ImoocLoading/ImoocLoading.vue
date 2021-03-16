<!--loading-->
<template>
  <div class="imooc-loading">
    <svg :width="width" :height="height" viewBox="0 0 50 50" preset>
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        :stroke="outSideColor"
        stroke-width="3"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          begin="0s"
          :dur="`${duration}s`"
          from="0 25 25 "
          to="360 25 25"
        />
        <animate
          attributeName="stroke"
          :values="outsideAnimate"
          dur="4s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        :stroke="innerColor"
        stroke-dasharray="19"
        stroke-width="3"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          begin="0s"
          :dur="`${duration}s`"
          values="360 25 25;0 25 25"
        />
        <animate
          attributeName="stroke"
          :values="innerAnimate"
          dur="4s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
    <div class="loading-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  name: "ImoocLoading",
  props: {
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
    outSideColor: {
      type: String,
      default: "#3be6cb",
    },
    innerColor: {
      type: String,
      default: "#02bcfe",
    },
    duration: {
      type: Number,
      default: 2,
    },
  },
  setup(ctx) {
    const outsideAnimate = computed(
      () => `${ctx.outSideColor};${ctx.innerColor};${ctx.outSideColor}`
    );
    const innerAnimate = computed(
      () => `${ctx.innerColor};${ctx.outSideColor};${ctx.innerColor}`
    );
    return {
      outsideAnimate,
      innerAnimate,
    };
  },
};
</script>
