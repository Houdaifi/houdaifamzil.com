<template>
  <div id="app">
     <div class="container mx-auto px-12 p-4 pt-6">
        <nav class="flex justify-between items-center text-gray-700 text-lg">
          <div>
            <h1 style="font-family: 'Fuggles', cursive;" class="text-6xl tracking-wider">Amzil Houdaifa</h1>
          </div>
          <div>
            <router-link class="pr-8" to="/">Home</router-link>
            <router-link class="pr-8" to="/projects">Projects</router-link>
            <router-link class="pr-8" to="/cv">Resume</router-link>
            <button class="rounded bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white" to="/contact">Contact</button>
          </div>
        </nav>
        <hr class="border-gray-300 mt-6 pb-28">
        <router-view/>
    </div>
   
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fuggles&display=swap');
</style> 