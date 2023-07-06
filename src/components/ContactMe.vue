<template>
  <section class="mt-12 flex items-center flex-col mb-20" id="contact-me-section">
    <h3 class="text-5xl">Contact Me</h3>
    <br /><br />
    <div class="flex items-center gap-16 mt-10">
      <BusinessCard />
      <div class="flex flex-col gap-3">
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&to=oladipoeyiara@gmail.com&su=Subject&body=Body&tf=cm"
          target="_blank"
        >
          <button
            class="border border-white w-48 px-5 h-12 font-['Poppins'] text-sm duration-200 hover:bg-white hover:text-black transition"
          >
            Send Me an Email
          </button>
        </a>
        <a href="https://github.com/Ara-O" target="_blank">
          <button
            class="border border-white w-48 px-5 h-12 font-['Poppins'] text-sm duration-200 hover:bg-white hover:text-black transition"
          >
            View My Github
          </button>
        </a>
        <button
          class="border border-white w-48 px-5 h-12 font-['Poppins'] text-sm duration-200 hover:bg-white hover:text-black transition"
          @click="colorizeSite"
        >
          Colorize Website :)
        </button>
      </div>
    </div>
    <br /><br />
  </section>
</template>

<script lang="ts" setup>
import BusinessCard from "./BusinessCard.vue"
import useMainStore from "@/stores/main"

const store = useMainStore()

function colorizeSite() {
  store.coloredSite = true
}
</script>
