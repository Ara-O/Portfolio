<template>
  <article class="flex gap-20 items-center">
    <article class="h-auto w-[35rem]">
      <img
        :src="getImg(props.image)"
        alt="Project image"
        class="hover:grayscale-0 duration-300 transition"
        :class="!store.coloredSite ? 'grayscale' : 'grayscale-0'"
      />
    </article>
    <article class="text-white h-auto">
      <h3 class="text-3xl">{{ props.name }}</h3>
      <h4 class="mt-4 w-[500px] font-['Poppins'] text-[15px] font-light leading-7">
        {{ props.description }}
      </h4>
      <br />
      <h4 class="font-['Poppins'] font-medium">Tools Used</h4>
      <br />
      <span
        class="mt-8 border mr-5 text-white px-6 py-2 rounded-full font-['Poppins'] text-[13px]"
        v-for="tool in toolsUsed"
        >{{ tool }}</span
      >
      <br />
      <span class="flex mt-12">
        <button
          :class="!store.coloredSite ? '' : 'relative colored-button-border border-black'"
          class="border border-white w-32 px-5 h-12 font-['Poppins'] z-10 text-sm duration-200 hover:bg-white hover:text-black transition"
        >
          View Demo
        </button>
        <button
          class="border border-white w-32 px-5 h-12 font-['Poppins'] text-sm duration-200 hover:bg-white hover:text-black transition"
        >
          View Github
        </button>
      </span>
    </article>
    <article>
      <button
        class="border w-32 px-5 h-12 font-['Poppins'] text-sm hover:bg-white hover:text-black transition"
        v-if="props.index === 1"
      >
        Previous Project
      </button>
      <button
        class="border w-32 px-5 h-12 font-['Poppins'] text-sm hover:bg-white hover:text-black transition"
      >
        Next Project
      </button>
    </article>
  </article>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

const store = useMainStore()
const props = defineProps<{
  index: number
  name: string
  image: string
  description: string
  toolsUsed: string[]
}>()

function getImg(source: string): string {
  return new URL(source, import.meta.url).href
}
</script>

<style scoped>
.colored-button-border {
  background-clip: padding-box;
  background: none;
  border: solid 1px transparent;
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
  margin: -1px;
  border-radius: inherit;
  animation: ColorRotate 25s linear infinite;
  background: linear-gradient(to right, rgb(0, 81, 255), rgb(120, 56, 162));
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
