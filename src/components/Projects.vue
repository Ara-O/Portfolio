<template>
  <section class="mt-20 text-white px-[11%]">
    <h2 class="text-5xl">Projects</h2>
    <br /><br />
    <Project
      :index="currentProject"
      :project="allProjects[currentProject]"
      :projects-length="allProjects.length"
      @viewNextProject="viewNextProject"
      @viewPreviousProject="viewPreviousProject"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import Project from "./Project.vue"

type Project = {
  name: string
  imageSrc: string
  description: string
  toolsUsed: string[]
  demoLink: string
  githubLink: string
}

let currentProject = ref<number>(0)
let allProjects: Project[] = [
  {
    name: "UDM Reimbursement Manager",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "I collaborated with three classmates on a project to enhance the reimbursement system for the College of Engineering at the University of Detroit Mercy. Our goal was to create a more efficient and user-friendly system for generating reimbursement documents for faculty purchases.",
    toolsUsed: ["Vue.js", "Typescript", "Node.js", "Express", "Mongo DB"],
    demoLink: "https://udm-reimbursement-project.vercel.app",
    githubLink: "https://github.com/Ara-O/UDM-Reimbursement-Project"
  },
  {
    name: "Children Association Tests",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "Collaborated with the assistant professor of psychology at the University of Detroit Mercy to develop a website that includes several tests to measure and gather data on implicit gender and racial biases in children.",
    toolsUsed: ["Vue.js", "Firebase"],
    demoLink: "https://children-association-tests.netlify.app",
    githubLink: "https://github.com/Ara-O/Association-Tests"
  },
  {
    name: "Budgeting Site",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "I created a website that can be used to track user expenses, income, bills, and money/spending goals. The website uses firebase's realtime database and authentication to keep track of user data.",
    toolsUsed: ["Nuxt.js", "Firebase"],
    demoLink: "https://budgeting-site.netlify.app",
    githubLink: "https://github.com/Ara-O/Budget-App"
  },
  {
    name: "Windows 10 Clone",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "Created in memory of my use of windows 10. This is a clone of the basic Windows 10 layout; From the lock screen and password page, to the home screen with moveable icons.",
    toolsUsed: ["Vue.js"],
    demoLink: "https://windows10clone.netlify.app",
    githubLink: "https://github.com/Ara-O/Windows10-mock"
  },
  {
    name: "Anime finder",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "A side project to help users serch for, read more about, and find different animes of different genres",
    toolsUsed: ["Vue.js", "Firebase"],
    demoLink: "https://animesfinder.netlify.app",
    githubLink: "https://github.com/Ara-O/Anime_Finder"
  },
  {
    name: "Project Fit",
    imageSrc: "../assets/images/magic-donut-image.png",
    description:
      "Project Fit is a website that can be used to generate random exercises with sets and repetitions. The advanced variation provides the user to provide an option of selecting their rest time, number of exercises, and difficulty.",
    toolsUsed: ["Vue.js"],
    demoLink: "https://project-fit.netlify.app",
    githubLink: "https://github.com/Ara-O/Project_Fit"
  },
  {
    name: "This portfolio :D",
    imageSrc: "../assets/images/magic-donut-image.png",
    description: "My personal portfolio.",
    toolsUsed: ["Vue.js", "Three.js"],
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    githubLink: "https://github.com/Ara-O/Portfolio"
  }
]

function viewNextProject() {
  if (currentProject.value < allProjects.length - 1) {
    currentProject.value++
  }
}

function viewPreviousProject() {
  if (currentProject.value > 0) {
    currentProject.value--
  }
}
</script>
