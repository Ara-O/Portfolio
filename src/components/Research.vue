<template>
  <section class="mt-20 text-white" id="research-section">
    <h2 class="text-5xl">Research</h2>
    <br /><br />
    <div v-for="(project, index) in allProjects">
      <Project
        v-show="index < 3 * projectIndex"
        :index="index"
        :class="project.type === 'Research' ? '' : 'mb-20'"
        :project="project"
        :projects-length="allProjects.length"
      />
    </div>
    <article class="flex flex-col items-center">
      <button
        v-if="projectIndex < Math.ceil(allProjects.length / 3)"
        class="border rounded-full w-48 px-5 h-12 font-['Poppins'] text-sm hover:bg-white hover:text-black relative z-10 transition"
        @click="viewNextProject"
      >
        View More Projects
      </button>
    </article>
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
  type?: "Research" | "Project"
}

let projectIndex = ref<number>(1)
let allProjects: Project[] = [
  {
    name: "Using Machine Learning and Google Earth Engine to Understand Land Use and Land Cover Classifications and NO2 Levels in California",
    imageSrc: "",
    description: `B. Yacoob, E. Scheys, E. Oladipo, A. Price and S. Banitaan, "Using Machine Learning and Google Earth Engine to Understand Land Use and Land Cover Classifications and NO2 Levels in California," 2024 IEEE International Conference on Electro Information Technology (eIT), Eau Claire, WI, USA, 2024, pp. 410-417, doi: 10.1109/eIT60633.2024.10609851.`,
    toolsUsed: [],
    demoLink: "https://ieeexplore.ieee.org/document/10609851",
    githubLink: "",
    type: "Research"
  },
  {
    name: "Navigating Complexity: Hierarchical FSMs for SImulated Robot Control",
    imageSrc: "",
    description: `
   This research seeks to improve the planning efficiency and scalability of Multi-robot systems (MRS) by expanding on Supervisory Control Theory (SCT) to introduce abstraction and hierarchy. <br/> <br/>
Juliana Nogueira Vilela, Eyiara Oladipo, Department of Electrical and Computer Engineering. Advisor: Dr. Richard Hill`,
    toolsUsed: [],
    demoLink: "",
    githubLink: "",
    type: "Research"
  },
  {
    name: "Enhancing the University of Detroit Mercy Faculty Reimbursement Management System",
    imageSrc: "",
    description: `
    The reimbursement system project at Detroit Mercy’s College of Engineering and Science seeks to simplify and improve the reimbursement process for faculty members within the college. <br/> <br/>
    Students: Eyiara Oladipo, Andre Price, Ethan Scheys, Benyamain Yacoob. Advisor: Dr. Mina Maleki. College of Engineering and Science, University of Detroit Mercy.`,
    toolsUsed: [],
    demoLink: "",
    githubLink: "",
    type: "Research"
  }
]
function viewNextProject() {
  if (projectIndex.value < allProjects.length - 1) {
    projectIndex.value++
  }
}

function viewPreviousProject() {
  if (projectIndex.value > 0) {
    projectIndex.value--
  }
}
</script>
