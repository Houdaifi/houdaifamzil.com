<template>
  <div>
    <section id="home" class="flex justify-center items-center space-x-44 p-12 mx-auto">
      <div class="flex-1 flex flex-col space-y-4 2xl:space-y-8">
        <div>
          <h2 class="2xl:text-4xl text-2xl focus-in-expand whitespace-nowrap">
            Hi 👋🏼! I'am
            <span class="text-yellow-600 2xl:text-5xl text-4xl tracking-normal font-extrabold focus-in-expand whitespace-nowrap">Amzil Houdaifa</span>
          </h2>
        </div>
        <div>
          <typical
            class="typicalWrapper 2xl:text-3xl text-2xl md:text-xl text-justify text-gray-500 leading-relaxed 2xl:leading-loose"
            :steps="[
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
              200,
            ]"
            :wrapper="'h6'"
          >
          </typical>
        </div>
        <div class="flex space-x-10 xl:text-6xl text-4xl slit-in-diagonal-1">
          <div>
            <a href="#" target="_blank"><i class="fab fa-linkedin hover:text-yellow-500"></i></a>
          </div>
          <div>
            <a href="https://github.com/Houdaifi" target="_blank"><i class="fab fa-github-square hover:text-yellow-500"></i></a>
          </div>
          <div>
            <a href="#" target="_blank"><i class="fab fa-instagram-square hover:text-yellow-500"></i></a>
          </div>
          <div>
            <a href="https://codepen.io/houdaifi" target="_blank"><i class="fab fa-codepen hover:text-yellow-500"></i></a>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <img class="w-full slit-in-diagonal-1 rounded" src="../assets/me.jpg" alt="Me"/>
      </div>
    </section>
    <div class="flex justify-center items-center animate-bounce text-2xl text-gray-500 py-4 2xl:pt-32">
      <div><a href="#skills"><i class="fas fa-arrow-down"></i></a></div>
    </div>

    <!-- Skills Section -->
    <section id="skills" class="py-32 2xl:py-64">
      <div>
        <h1 class="text-center pb-20 text-6xl font-extrabold">I like to work with...</h1>
          <carousel :per-page="4" :mouse-drag="false" :autoplay="true" :paginationSize="0" :loop="true" :speed="1500" :mouseDrag="true">
            <slide v-for="(skill, index) in skills" :key="index">
              <div class="rounded-full flex flex-col items-center justify-center bg-white p-8 w-52 h-52 space-y-6 cursor-pointer">
                <img class="w-1/2" :src="skill.image"/>
                <h1 class="text-base">{{ skill.name }}</h1>
              </div>
            </slide>
          </carousel>
          <div class="flex flex-col justify-center items-center bg-white rounded-lg w-1/2 mx-auto p-8 space-y-6 mt-6">
              <div>
                <h2 class="text-center text-yellow-500 font-bold text-2xl">{{ choosenSkill.name }}</h2>
              </div>
              <div>
                <p style="max-width:500px" class="text-center text-xl text-gray-500 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae laudantium consequatur earum, aliquam est ipsa nihil aperiam tenetur corrupti ullam aspernatur maiores magni!</p>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>


<script>
import typical from "vue-typical"
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: "Home",
  components: { typical, Carousel, Slide},
  data() {
    return {
      choosenSkill: {name : 'Tailwind CSS', 'description': ''},
      skills: [
        { name: "Tailwind CSS", image: require("../assets/tailwind.png") },
        { name: "Bootstrap", image: require("../assets/bootstrap.png") },
        { name: "Vanilla Javascript", image: require("../assets/javascript.png") },
        { name: "Vue JS", image: require("../assets/vue.png") },
        { name: "Laravel", image: require("../assets/laravel.png") },
        { name: "MySQL", image: require("../assets/mysql.png") },
        { name: "Android Native", image: require("../assets/android.png") },
        { name: "Flutter", image: require("../assets/flutter.png") },
        { name: "Git", image: require("../assets/git.png") },
      ],
    };
  },
};
</script>

<style scoped>
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes slit-in-diagonal-1 {
  0% {
    transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  54% {
    transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  100% {
    transform: translateZ(0) rotate3d(1, 1, 0, 0);
    animation-timing-function: ease-out;
  }
}

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.slit-in-diagonal-1 {
  -webkit-animation: slit-in-diagonal-1 0.45s ease-out both;
  animation: slit-in-diagonal-1 0.45s ease-out both;
}

.focus-in-expand {
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
</style>
