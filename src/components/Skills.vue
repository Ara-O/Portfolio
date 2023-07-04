<template>
  <section class="px-10 py-10 text-white mt-32 border rounded-md skills-wrapper relative">
    <h3 class="text-5xl box-border">Skills</h3>

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
      <SkillsBox v-for="skill in deploymentSkills" :name="skill.name" :logo-src="skill.logoSrc" />
    </article>
  </section>
</template>

<script lang="ts" setup>
import SkillsBox from "./SkillsBox.vue"
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
    name: "Node js",
    logoSrc: "../assets/images/node-js-logo.png"
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
    logoSrc: "../assets/images/node-js-logo.png"
  },
  {
    name: "Github",
    logoSrc: "../assets/images/node-js-logo.png"
  },
  {
    name: "Trello",
    logoSrc: "../assets/images/node-js-logo.png"
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
