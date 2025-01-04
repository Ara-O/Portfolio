<template>
  <article class="flex gap-20 items-start project">
    <article class="h-auto w-[38rem]" v-if="project.imageSrc || project.videoSrc">
      <img v-if="props.project.imageSrc" :src="getImg(props.project.imageSrc)" alt="Project image" loading="lazy"
        class="hover:grayscale-0 duration-300 rounded-lg h-auto w-[600px] object-contain transition"
        :class="!store.coloredSite ? 'grayscale' : 'grayscale-0'" />
      <iframe v-if="props.project.videoSrc" width="560" height="315" :src="props.project.videoSrc"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <!-- <video :src="props.project.videoSrc" v-if="props.project.videoSrc"></video> -->
      <span class="flex mt-12 demo-github-link">
        <a :href="props.project.demoLink" target="_blank" v-if="project.demoLink">
          <button
            class="border border-white w-32 px-5 h-12 font-['Poppins'] z-10 text-sm duration-200 hover:bg-white hover:text-black transition">
            View Demo
          </button>
        </a>
        <a :href="props.project.githubLink" target="_blank" v-if="project.githubLink">
          <button
            class="border border-white w-32 px-5 h-12 font-['Poppins'] text-sm duration-200 hover:bg-white hover:text-black transition">
            View Github
          </button>
        </a>
      </span>
    </article>
    <article class="text-white h-auto" :class="project.type === 'Research' ? 'w-full' : ''">
      <h3 class="text-3xl max-w-2xl leading-10"
        :class="project.type === 'Research' ? 'max-w-none leading-relaxed' : ''">
        {{ props.project.name }}
      </h3>
      <h4 class="mt-4 w-auto max-w-[500px] font-['Poppins'] text-[15px] font-light leading-7"
        :class="project.type === 'Research' ? 'max-w-none leading-8' : ''" v-html="props.project.description"></h4>
      <br />
      <h4 class="font-['Poppins'] font-medium" v-if="project.type != 'Research'">Tools Used</h4>
      <div class="flex w-auto max-w-[500px] tools flex-wrap mt-8 gap-y-5">
        <div v-if="project.type != 'Research'"
          class="border flex items-center w-auto justify-center h-10 mr-5 text-white px-6 py-2 rounded-full font-['Poppins'] text-[13px]"
          v-for="tool in props.project.toolsUsed">
          {{ tool }}
        </div>
        <a :href="props.project.demoLink" target="_blank" v-if="project.demoLink">
          <button v-if="project.type === 'Research' && project.demoLink"
            class="border border-white w-auto mt-[-25px] mb-20 px-5 h-12 font-['Poppins'] z-10 text-sm duration-200 hover:bg-white hover:text-black transition">
            View Publication
          </button>
        </a>
      </div>
    </article>
  </article>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"

type Project = {
  name: string
  imageSrc?: string
  videoSrc?: string
  description: string
  toolsUsed: string[]
  demoLink: string
  githubLink: string
  type?: "Research" | "Project"
}

const store = useMainStore()

const props = defineProps<{
  index: number
  project: Project
}>()

function getImg(source: string): string {
  return new URL(source, import.meta.url).href
}
</script>

<style scoped>
.colored-button-border {
  background-clip: padding-box;
  background: none;
  border: solid 2px black;
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
