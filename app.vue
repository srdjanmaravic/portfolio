<template>
  <div :class="darkMode ? 'dark' : ''">
    <Head>
      <Title>Srdjan Maravic Potfolio</Title>
      <Meta name="description" content="Srdjan Maravic Portfolio" />
    </Head>
    <main class='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
       <section class=" min-h-screen">
          <nav class='py-10 mb-12 flex justify-between'>
            <h1 class='text-xl font-burtons dark:text-gray-600'>Srdjan Schmidt</h1>
            <ul class='flex items-center'>
              <li ><font-awesome-icon  :icon="darkMode ? 'sun' : 'moon'" class='cursor-pointer text-xl dark:text-white' @click="setDarkMode"/></li>
              <li><a class='bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-md ml-8' href='/srdjan_maravic_CV.pdf' download>Resume</a></li>
            </ul>
          </nav>
          <div class='text-center p-10'>
            <h2 class='text-5xl py-2 text-violet-600 font-medium md:text-6xl'>Srdjan Maravic</h2>
            <h3 class='text-2xl py-2 md:text-3xl dark:text-gray-600'>Developer and IT Professional</h3>
            <p class='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'> Freelancer providing services for programming and IT consultancy . Join me down below and let's get cracking!</p>
          </div>
          <div class='text-5xl flex justify-center gap-16 py-3 text-gray-600 '>
            <a href="https://twitter.com/srdjanschmidt" target="_blank" class="hover:text-violet-600"><font-awesome-icon icon="fa-brands fa-twitter" /></a> 
            <a href="https://www.linkedin.com/in/srdjanmaravic/" target="_blank" class="hover:text-violet-600"><font-awesome-icon icon="fa-brands fa-linkedin" /></a> 
            <a href="https://github.com/srdjanmaravic" target="_blank" class="hover:text-violet-600"><font-awesome-icon icon="fa-brands fa-github" /></a>
          </div>
          <div class='relative mx-auto bg-gradient-to-b from-violet-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <NuxtImg src="/img/schmidt-ok.png"></NuxtImg>
          </div>
       </section>
      </main>
  </div>
</template>
<script setup>
import { ref } from "vue";

let darkMode = ref(false)

let setDarkMode = () => {
  darkMode.value = !darkMode.value
}


</script>