<template>
  <section class="mt-20 text-white" id="projects-section">
    <h2 class="text-5xl">Projects</h2>
    <br />
    <div class="flex gap-5 my-3">
      <p class="text-xl font-medium cursor-pointer"
        :class="selectedProjectType == 'Full Stack Development' ? 'underline' : ''"
        @click="selectedProjectType = 'Full Stack Development'">
        Full Stack Development Projects</p>
      <p class="text-xl font-medium cursor-pointer"
        :class="selectedProjectType == 'Game Development' ? 'underline' : ''"
        @click="selectedProjectType = 'Game Development'">Game Development
        Projects</p>
      <p class="text-xl font-medium cursor-pointer" :class="selectedProjectType == 'Research' ? 'underline' : ''"
        @click="selectedProjectType = 'Research'">Research Projects</p>
    </div>
    <br />
    <div v-for="(project, index) in allProjects">
      <Project v-show="index < 3 * projectIndex" :index="index" class="mb-20" :project="project" />
    </div>
    <article class="flex flex-col items-center">
      <button v-if="projectIndex < Math.ceil(allProjects.length / 3)"
        class="border rounded-full w-48 px-5 h-12 font-['Poppins'] text-sm hover:bg-white hover:text-black relative z-10 transition"
        @click="viewNextProject">
        View More Projects
      </button>
    </article>
  </section>
</template>

<script lang="ts" setup>
import useMainStore from "@/stores/main"
import { computed, ref } from "vue"
import Project from "./Project.vue"

const store = useMainStore()
type ProjectTypes = "Full Stack Development" | "Game Development" | "Research"

const selectedProjectType = ref<ProjectTypes>("Full Stack Development")
type Project = {
  name: string
  imageSrc?: string
  videoSrc?: string
  description: string
  toolsUsed: string[]
  demoLink: string
  githubLink: string
  tag: ProjectTypes
}

const allProjects = computed<Project[]>(() => {
  const filtered_projects = projectsList.filter((proj) => proj.tag === selectedProjectType.value)
  return filtered_projects
})

let projectIndex = ref<number>(1)

let projectsList: Project[] = [
  {
    name: "OEE Manager",
    imageSrc: "/oee-manager.png",
    description:
      "Developed the front-end for a software application that tracks Overall Equipment Effectiveness (OEE) to measure machine productivity in an Allen Bradley PLC controller. The software is updated in real-time and displays multiple data points in a user-friendly layout",
    toolsUsed: ["Vue.js", "Golang", "SQLite"],
    demoLink: "",
    githubLink: "",
    tag: "Full Stack Development"
  },
  {
    name: "UDM Reimbursement Manager",
    imageSrc: "/udm-reimbursement-project-image.webp",
    description:
      "I collaborated with three classmates on a project to enhance the reimbursement system for the College of Engineering at the University of Detroit Mercy. Our goal was to create a more efficient and user-friendly system for generating reimbursement documents for faculty purchases.",
    toolsUsed: ["Vue.js", "Node.js", "Express", "Mongo DB"],
    demoLink: "https://udm-reimbursement-project.vercel.app",
    githubLink: "https://github.com/Ara-O/UDM-Reimbursement-Project",
    tag: "Full Stack Development"
  },
  {
    name: "Children Association Tests",
    imageSrc: "/implicit-association-tests-image.webp",
    description:
      "Collaborated with the assistant professor of psychology at the University of Detroit Mercy to develop a website that includes several tests to measure and gather data on implicit gender and racial biases in children.",
    toolsUsed: ["Vue.js", "Firebase"],
    demoLink: "https://children-association-tests.netlify.app",
    githubLink: "https://github.com/Ara-O/Association-Tests",
    tag: "Research"
  },
  {
    name: "Minim",
    imageSrc: "/minim-image.webp",
    description:
      "A minimalist note-taking site with AI features like note summarization, text to speech, and rich text formatting.",
    toolsUsed: ["React", "Node.js", "Express", "OpenAI"],
    demoLink: "",
    githubLink: "https://github.com/Ara-O/Minim-React",
    tag: "Full Stack Development"
  },
  {
    name: "Budgeting Site",
    imageSrc: "/budgeting-site-image.webp",
    description:
      "I created a website that can be used to track user expenses, income, bills, and money/spending goals. The website uses firebase's realtime database and authentication to keep track of user data.",
    toolsUsed: ["Nuxt.js", "Firebase"],
    demoLink: "https://budgeting-site.netlify.app",
    githubLink: "https://github.com/Ara-O/Budget-App",
    tag: "Full Stack Development"
  },
  {
    name: "Windows 10 Clone",
    imageSrc: "/windows-clone-image.webp",
    description:
      "Created in memory of my use of windows 10. This is a clone of the basic Windows 10 layout; From the lock screen and password page, to the home screen with moveable icons.",
    toolsUsed: ["Vue.js"],
    demoLink: "https://windows10clone.netlify.app",
    githubLink: "https://github.com/Ara-O/Windows10-mock",
    tag: "Full Stack Development"
  },
  {
    name: "Project Fit",
    imageSrc: "/project-fit-image.webp",
    description:
      "Project Fit is a website that can be used to generate random exercises with sets and repetitions. The advanced variation provides the user to provide an option of selecting their rest time, number of exercises, and difficulty.",
    toolsUsed: ["Vue.js"],
    demoLink: "https://project-fit.netlify.app",
    githubLink: "https://github.com/Ara-O/Project_Fit",
    tag: "Full Stack Development"
  },
  {
    name: "This portfolio :D",
    imageSrc: "/portfolio-image.webp",
    description: "My personal portfolio.",
    toolsUsed: ["Vue.js", "Three.js"],
    demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    githubLink: "https://github.com/Ara-O/Portfolio",
    tag: "Full Stack Development"
  },
  {
    name: "Reedemed",
    videoSrc: "https://www.youtube.com/embed/Tg0F_4GEOZc?si=oqHWGcNbqcUIEkNy",
    description: `A multiplayer game, where players find themselves in a strange world, tasked with surviving different trials in order 
    to be redeemed for their criminal actions while they were alive.`,
    toolsUsed: ["Unity", "C#"],
    demoLink: "https://www.youtube.com/embed/Tg0F_4GEOZc?si=oqHWGcNbqcUIEkNy",
    githubLink: "",
    tag: "Game Development"
  },
  {
    name: "Wizarding Adventures",
    videoSrc: "https://www.youtube.com/embed/imZrNU47Tcs?si=7Sqpo8M4rzY1l6JW",
    description: `An exploration game , where the player plays as a wizard exploring a forest in search of a lost pyramid. 
    The player can destroy rocks in their path through raycasting, and can be crushed by falling rocks.`,
    toolsUsed: ["Unity", "C#"],
    demoLink: "https://www.youtube.com/embed/imZrNU47Tcs?si=7Sqpo8M4rzY1l6JW",
    githubLink: "",
    tag: "Game Development"
  },
  {
    name: "Roomba vs Robots",
    videoSrc: "https://www.youtube.com/embed/wPbNgJZrUo4?si=_CcbZbigAIN1Meov",
    description: `You play as a Roomba, trying to escape a herd of drones trying to stop you. The map is filled with multiple obstacles,
    teleportation and healing zones, and the goal is to survive for as long as possible.`,
    toolsUsed: ["Unity", "C#"],
    demoLink: "https://www.youtube.com/embed/wPbNgJZrUo4?si=_CcbZbigAIN1Meov",
    githubLink: "",
    tag: "Game Development"
  }
]

function viewNextProject() {
  if (projectIndex.value < allProjects.value.length - 1) {
    projectIndex.value++
  }
}

function viewPreviousProject() {
  if (projectIndex.value > 0) {
    projectIndex.value--
  }
}
</script>
