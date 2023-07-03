<template>
  <section class="mt-12 flex gap-56 items-center justify-center text-white">
    <img
      src="@/assets/images/chess-image.png"
      ref="chessImage"
      alt="Chess image"
      class="w-40 hidden transition-transform ease-linear duration-75 sm:block"
    />
    <article>
      <h3 class="text-7xl">Eyiara Oladipo</h3>
      <h5 class="text-sm font-['Poppins'] mt-7 w-[400px] leading-7">
        Hi There! I am a Junior at the University of Detroit Mercy studying Computer Science
      </h5>
      <button
        :class="!store.coloredSite ? 'border-white' : 'relative colored-button-border'"
        class="hover:bg-white border hover:text-black font-[Poppins] text-[13px] px-6 py-3 font-medium mt-7 rounded-full bg-black text-white transition-colors"
      >
        View Projects
      </button>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
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

<style scoped>
.colored-button-border {
  background-clip: padding-box; /* !importanté */
  border: solid 2px transparent;
}

.colored-button-border:hover {
  background: none;
  color: white;
}

.colored-button-border::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -1px; /* !importanté */
  border-radius: inherit; /* !importanté */
  animation: ColorRotate 15s linear infinite;
  background: linear-gradient(to right, red, orange);
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
