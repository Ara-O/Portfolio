<template>
  <Stars />
  <section class="mt-12 flex gap-56 items-center justify-center text-white">
    <img
      src="/chess-image.webp"
      ref="chessImage"
      alt="Chess image"
      class="w-40 chess-image transition-transform ease-linear duration-75"
    />
    <article class="hero-article">
      <h3 class="text-7xl">Eyiara Oladipo</h3>
      <h5 class="text-sm font-['Poppins'] mt-7 w-[490px] leading-8">
        Hi There! I'm Ara and I am a senior at the University of Detroit Mercy studying Computer
        Science with a minor in Leadership
      </h5>
      <a href="#projects-section">
        <button
          :class="
            !store.coloredSite
              ? 'border-white'
              : 'relative colored-button-border hover:text-white hover'
          "
          class="hover:bg-white border hover:text-black font-[Poppins] text-[13px] px-6 py-3 font-medium mt-7 rounded-full bg-black text-white transition-colors"
        >
          View Projects
        </button>
      </a>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Stars from "./Stars.vue"
import useMainStore from "@/stores/main"

const store = useMainStore()

const chessImage = ref<HTMLElement | null>(null)
window.addEventListener("mousemove", (e) => {
  let normalizedX = e.pageX / window.innerWidth
  let normalizedY = e.pageY / window.innerHeight
  if (chessImage.value) {
    chessImage.value.style.transform = `translate3d(${normalizedX * 30}px, ${
      normalizedY * 30
    }px, 0px)`
  }
})
</script>
