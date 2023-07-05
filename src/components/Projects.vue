<template>
  <section class="mt-20 text-white px-[11%]">
    <h2 class="text-5xl">Projects</h2>
    <br /><br />
    <Project
      v-for="(project, index) in allProjects"
      :name="project.name"
      :index="index"
      :image="project.imageSrc"
      :description="project.description"
      :tools-used="project.toolsUsed"
    />
  </section>
</template>

<script lang="ts" setup>
import Project from "./Project.vue"
let allProjects = [
  {
    name: "Magic Donut Of Fate",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "Fun side-project using OpenAI's GPT text completion models with THREE.js to simulate a magic 8-ball experience.",
    toolsUsed: ["Vue.js", "Three.js", "OpenAI"]
  }
]
</script>
