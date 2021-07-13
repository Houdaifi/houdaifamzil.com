<template>
  <div id="app" class="bg-gray-50">
     <div class="container mx-auto px-12 p-4 pt-6">
        <nav class="flex justify-between items-center text-gray-700 xl:text-xl text-base pb-8 xl:pb-12">
          <div>
            <h1 style="font-family: 'Fuggles', cursive;" class="text-6xl tracking-wider font-extralight">Amzil Houdaifa</h1>
          </div>
          <div>
            <router-link class="pr-8 font-light hover:text-gray-500" to="/">Home</router-link>
            <a href="#skills" class="pr-8 font-light hover:text-gray-500">Skills</a>
            <router-link class="pr-8 font-light hover:text-gray-500" to="/projects">Projects</router-link>
            <router-link class="pr-8 font-light hover:text-gray-500" to="/cv">Resume</router-link>
            <button class="rounded-lg bg-yellow-600 hover:bg-blue-600 px-6 py-2 text-base text-white font-semibold" to="/contact">Contact</button>
          </div>
        </nav>
        <router-view/>
    </div>
   
  </div>
</template>

<style>
  html {
    scroll-behavior: smooth;
  }
  @import url('https://fonts.googleapis.com/css2?family=Fuggles&display=swap');
</style>