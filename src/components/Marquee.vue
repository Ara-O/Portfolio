<template>
  <div class="marquee-text mt-32 flex items-center justify-center w-max gap-10 overflow-hidden">
    <h3 class="outlined-border text-black text-8xl w-[935px]">Full-Stack Developer</h3>
    <div class="h-5 w-10 rounded-full bg-black outlined-border-circle"></div>
    <h3 class="text-black text-8xl w-[2415px] outlined-border">Full-Stack Developer</h3>
    <div class="h-5 w-10 rounded-full bg-black outlined-border-circle"></div>
    <h3 class="text-black text-8xl w-[2415px] outlined-border">Full-Stack Developer</h3>
  </div>
  <!-- <marquee behavior="right" direction="right" class="text-white">BOB</marquee> -->
</template>

<style scoped>
.marquee-text {
  min-width: 100vw;
}

.outlined-border {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.outlined-border-circle {
  box-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}
</style>
