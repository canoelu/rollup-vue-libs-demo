<template>
  <div class="test">
    <svg
      width="400"
      height="300"
      viewBox="0,0,40,30"
      style="border: 1px solid #cd0000"
    >
      <rect x="10" y="5" width="20" height="15" fill="#cd0000" />
    </svg>
    <svg
      width="500"
      height="200"
      viewBox="0 0 50 20"
      style="border: 1px solid red"
    >
      <rect
        x="20"
        y="10"
        width="10"
        height="5"
        stroke="#000"
        fill="none"
      ></rect>
    </svg>
    <svg width="500" height="200" style="border: 1px solid red">
      <line
        x1="10"
        y1="10"
        x2="80"
        y2="120"
        stroke="red"
        stroke-width="2"
      ></line>

      <rect
        x="20"
        y="10"
        width="10"
        height="5"
        stroke="#000"
        fill="none"
      ></rect>
    </svg>
    <svg
      width="400"
      height="200"
      viewBox="0 0 200 200"
      style="border: 1px solid #cd0000"
      preserveAspectRatio="xMinYMin meet"
    >
      <rect x="10" y="10" width="150" height="150" fill="#cd0000" />
    </svg>
    <div>preserveAspectRatio:xMinYMin meet-保持缩放比例</div>
    <svg
      width="400"
      height="200"
      viewBox="0 0 200 300"
      preserveAspectRatio="xMinYMin meet"
      style="border: 1px solid #cd0000"
    >
      <rect x="10" y="10" width="150" height="150" fill="#cd0000" />
    </svg>
    <div>preserveAspectRatio:xMinYMin slice-裁剪</div>
    <svg
      width="400"
      height="200"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMinYMin slice"
      style="border: 1px solid #cd0000"
    >
      <rect x="10" y="10" width="150" height="150" fill="#cd0000" />
    </svg>
    <div>preserveAspectRatio:none-铺满</div>
    <svg
      width="400"
      height="200"
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      style="border: 1px solid #cd0000"
    >
      <rect x="10" y="10" width="150" height="150" fill="#cd0000" />
    </svg>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "TestComponent",
  setup() {
    const message = "hello world";
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const add = () => {
      count.value++;
    };
    return {
      message,
      doubleCount,
      add,
    };
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: red;
}
</style>
