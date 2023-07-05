<template>
  <nav class="flex justify-between items-center">
    <span>
      <img src="@/assets/icons/my-logo.png" class="w-10" alt="My logo" />
    </span>
    <span class="text-white text-sm font-['Poppins'] flex items-center gap-x-20">
      <h4 class="cursor-pointer">Projects</h4>
      <h4 class="cursor-pointer">About me</h4>
      <h4 class="cursor-pointer">Contact</h4>
      <h4 class="cursor-pointer">Resume</h4>
      <div
        @click="toggleColoredSite"
        :class="
          !store.coloredSite
            ? 'color-changer bg-gradient-to-r from-violet-500 to-fuchsia-500 '
            : 'bg-gradient-to-tr  from-white to-black'
        "
        class="h-7 w-7 cursor-pointer rounded-full transition-all 1s"
      ></div>
    </span>
  </nav>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

const store = useMainStore()

function toggleColoredSite() {
  store.coloredSite = !store.coloredSite
}
</script>

<style scoped>
@import url("../assets/styles/navbar.css");
</style>
