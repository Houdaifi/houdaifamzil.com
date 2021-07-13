<template>
  <div>
    <section id="home" class="flex justify-center items-center space-x-44 p-12 mx-auto">
      <div class="flex-1 flex flex-col space-y-4">
        <div>
          <h2 class="2xl:text-2xl text-2xl focus-in-expand whitespace-nowrap">
            {{$t('Hello')}}
            <span class="text-fakhti 2xl:text-4xl text-3xl tracking-normal font-extrabold focus-in-expand whitespace-nowrap hover:text-turquoise">{{$t('myName')}}</span>
          </h2>
        </div>
        <div>
          <typical v-if="isTranslated"
            class="typicalWrapper md:text-2xl text-justify text-gray-500 xl:leading-loose"
            :steps="[$t('Aboutme'),200]"
            :wrapper="'h6'"
          >
          </typical>
          <p v-else class="md:text-2xl text-justify text-gray-500 xl:leading-loose">{{$t('Aboutme')}}</p>
        </div>
        <div>
          <h3 class="text-gray-500 md:text-2xl">{{ $t('Based') }} <span>{{ $t('city') }} <flag class="text-xl" iso="ma" /></span></h3>
        </div>
        <!-- Social media icons -->
        <v-links/>
        
      </div>
      <div class="flex-1">
        <img class="2xl:w-5/6 w-full slit-in-diagonal-1 rounded" src="../assets/me.jpg" alt="Me"/>
      </div>
    </section>
    <div class="flex justify-center items-center animate-bounce text-2xl text-gray-500 py-4">
      <div><a href="#skills"><i class="fas fa-arrow-down"></i></a></div>
    </div>

    <!-- Skills Section -->
    <section id="skills" class="py-24">
      <skills/>
    </section>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import typical from "vue-typical"
import skills from "../components/Skills.vue"
import VLinks from '../components/links.vue'

export default {
  name: "Home",
  components: {typical, skills, VLinks},
  data() {
    return {};
  },
  computed:{
    ...mapGetters({isTranslated: 'isTranslated'})
  }
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
