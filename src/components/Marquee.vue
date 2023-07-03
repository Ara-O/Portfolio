<template>
  <div class="marquee-text mt-32 flex items-center justify-center w-max gap-10 overflow-hidden">
    <h3
      :class="store.coloredSite ? 'colored-text' : ''"
      class="outlined-border relative bg-clip-text text-black text-8xl w-[935px]"
    >
      Full-Stack Developer
    </h3>
    <div class="h-5 w-10 rounded-full bg-black border border-white"></div>
    <h3 class="text-black text-8xl w-[2415px] outlined-border">Full-Stack Developer</h3>
  </div>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

const store = useMainStore()
</script>

<style scoped>
.marquee-text {
  min-width: 100vw;
}

.outlined-border {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.colored-text {
  font-size: 72px;
  animation: ColorRotate 15s linear infinite;
  background: -webkit-linear-gradient(45deg, red, orange);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
}
@keyframes ColorRotate {
  0% {
    filter: hue-rotate(0deg);
  }

  70% {
    filter: hue-rotate(360deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
}
</style>
