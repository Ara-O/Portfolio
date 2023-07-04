<template>
  <section class="px-10 py-10 text-white mt-32 border rounded-md skills-wrapper relative">
    <section class="flex flex-wrap gap-60 mt-20 justify-center">
      <!-- Left section -->
      <section>
        <canvas height="300" width="300" ref="modelCanvas" v-if="false"></canvas>
        <h3 class="text-5xl">About Me</h3>
        <h5 class="w-[30rem] font-['Poppins'] leading-7 text-[14.5px] font-light mt-7">
          I am a junior studying Computer Science at the University of Detroit Mercy. I am
          passionate about Front-end development and UX/UI design. I have worked as a teaching
          assistant and have software development experience through various internships I have had
          with JOURNi, Accenture, Google, and the Kapor Center.I have experience with HTML, CSS (
          and a little bit of SASS ), Javascript and Vue.js. Along with experience in back-end
          technologies like Node.js, Express and Mongo DB.
        </h5>
        <br /><br />
        <h3 class="text-3xl">TL; DR</h3>
        <ul class="list-disc pl-5 leading-8 font-['Poppins'] text-sm mt-4">
          <li>Name: Eyiara "Ara" Oladipo</li>
          <li>Education Level: Junior</li>
          <li>Interests: UX/UI design, Full stack development</li>
          <li>Hobbies: Chess, Reading</li>
          <li>Favorite Language: Javascript</li>
        </ul>
      </section>
      <!-- Right section -->
      <section>
        <h3 class="text-5xl">Skills</h3>
        <h3 class="text-2xl mt-7">Front-End</h3>
        <br />
        <article class="flex items-start gap-10">
          <SkillsBox v-for="skill in frontEndSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>

        <h3 class="text-2xl mt-10">Back-End</h3>
        <br />
        <article class="flex items-start gap-10">
          <SkillsBox v-for="skill in backEndSkills" :name="skill.name" :logo-src="skill.logoSrc" />
        </article>

        <h3 class="text-2xl mt-10">Miscellaneous</h3>
        <br />
        <article class="flex items-start gap-10">
          <SkillsBox
            v-for="skill in deploymentSkills"
            :name="skill.name"
            :logo-src="skill.logoSrc"
          />
        </article>
      </section>
    </section>
    <br /><br />
  </section>
</template>

<script lang="ts" setup>
import SkillsBox from "./SkillsBox.vue"
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
    logoSrc: "../assets/images/html-logo.png"
  },
  {
    name: "CSS",
    logoSrc: "../assets/images/css-logo.png"
  },
  {
    name: "Javascript",
    logoSrc: "../assets/images/javascript-logo.png"
  },
  {
    name: "Typescript",
    logoSrc: "../assets/images/typescript-logo.png"
  },
  {
    name: "Vue.js",
    logoSrc: "../assets/images/vue-logo.png"
  },
  {
    name: "Tailwind",
    logoSrc: "../assets/images/tailwind-logo.png"
  }
]

let backEndSkills = [
  {
    name: "Node.js",
    logoSrc: "../assets/images/node-js-logo.png"
  },
  {
    name: "Express.js",
    logoSrc: "../assets/images/express-logo.png"
  },
  {
    name: "Mongo DB",
    logoSrc: "../assets/images/mongo-db-logo.png"
  },
  {
    name: "Firebase",
    logoSrc: "../assets/images/firebase-logo.png"
  },
  {
    name: "MySQL",
    logoSrc: "../assets/images/mysql-logo.png"
  }
]

let deploymentSkills = [
  {
    name: "Vercel",
    logoSrc: "../assets/images/vercel-logo.png"
  },
  {
    name: "Github",
    logoSrc: "../assets/images/github-logo.png"
  },
  {
    name: "Trello",
    logoSrc: "../assets/images/trello-logo.png"
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
