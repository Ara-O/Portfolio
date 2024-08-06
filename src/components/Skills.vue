<template>
  <section
    id="about-me-section"
    class="px-[12%] py-10 text-white mt-32 border rounded-md skills-wrapper relative"
  >
    <section class="flex flex-wrap justify-between mt-20">
      <!-- Left section -->
      <section>
        <canvas height="300" width="300" ref="modelCanvas" v-if="false"></canvas>
        <h3 class="text-5xl">About Me</h3>
        <h5 class="w-auto max-w-[30rem] font-['Poppins'] leading-7 text-md font-light mt-7">
          I am a senior at the University of Detroit Mercy, studying Computer Science with a minor
          in Leadership. I am fascinated by how technology can enhance people's lives, and have
          worked on front-end, back-end, and mobile development projects. I've also gotten the
          chance to dive into research and be a part of some interesting projects
        </h5>
        <br /><br />
        <h3 class="text-3xl">TL;DR</h3>
        <ul class="list-disc pl-5 leading-8 font-['Poppins'] text-md font-light mt-4">
          <li>Name: Eyiara "Ara" Oladipo</li>
          <li>Education Level: Senior</li>
          <li>Interests: UX/UI design, Full stack development</li>
          <li>Hobbies: Chess, Reading</li>
        </ul>
        <a href="/Resume.pdf" download>
          <button
            class="hover:bg-white border hover:text-black font-[Poppins] text-[13px] px-6 py-3 font-medium mt-10 rounded-full bg-black text-white transition-colors"
          >
            Download My Resume
          </button>
        </a>
      </section>
      <!-- Right section -->
      <section>
        <h3 class="text-5xl">Skills</h3>
        <h3 class="text-2xl mt-7">Front-End</h3>
        <br />
        <article class="flex items-start gap-10 skills">
          <SkillsBox v-for="skill in frontEndSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>

        <h3 class="text-2xl mt-10">Back-End</h3>
        <br />
        <article class="flex items-start gap-10 skills">
          <SkillsBox v-for="skill in backEndSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>

        <h3 class="text-2xl mt-10">Miscellaneous</h3>
        <br />
        <article class="flex items-start gap-10 skills">
          <SkillsBox
            v-for="skill in deploymentSkills"
            :name="skill.name"
            :logo-src="skill.logoSrc"
          />
        </article>
      </section>
    </section>
    <br /><br />
    <Projects />
    <br /><br />
    <Research />
  </section>
</template>

<script lang="ts" setup>
import Projects from "./Projects.vue"
import SkillsBox from "./SkillsBox.vue"
import Research from "./Research.vue"
import { ref, watchEffect } from "vue"
import renderModel from "@/animations/helmet"
let modelCanvas = ref<null | HTMLElement>()

watchEffect(() => {
  if (modelCanvas.value) {
    renderModel(modelCanvas.value, 300, 300)
  }
})

let frontEndSkills = [
  {
    name: "HTML",
    logoSrc: "/html-logo.png"
  },
  {
    name: "CSS",
    logoSrc: "/css-logo.png"
  },
  {
    name: "Javascript",
    logoSrc: "/javascript-logo.png"
  },
  {
    name: "Typescript",
    logoSrc: "/typescript-logo.png"
  },
  {
    name: "Vue.js",
    logoSrc: "/vue-logo.png"
  },
  {
    name: "Tailwind",
    logoSrc: "/tailwind-logo.png"
  }
]

let backEndSkills = [
  {
    name: "Node.js",
    logoSrc: "/node-js-logo.png"
  },
  {
    name: "Express.js",
    logoSrc: "/express-logo.png"
  },
  {
    name: "Mongo DB",
    logoSrc: "/mongo-db-logo.png"
  },
  {
    name: "Firebase",
    logoSrc: "/firebase-logo.png"
  },
  {
    name: "MySQL",
    logoSrc: "/mysql-logo.png"
  }
]

let deploymentSkills = [
  {
    name: "Vercel",
    logoSrc: "/vercel-logo.png"
  },
  {
    name: "Github",
    logoSrc: "/github-logo.png"
  },
  {
    name: "Trello",
    logoSrc: "/trello-logo.png"
  }
]
</script>

<style scoped>
.skills-wrapper {
  border-radius: 2px;
  background-color: black;
  background-clip: padding-box; /* !importanté */
  border: solid 2px transparent; /* !importanté */
}
.skills-wrapper::before {
  border-radius: 2px;
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: -2px; /* !importanté */
  background: linear-gradient(rgb(176, 176, 176), black);
}
</style>
