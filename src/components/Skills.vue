<template>
  <div>
    <h1 class="text-center text-gray-800 dark:text-gray-300 pb-20 text-5xl font-extrabold">
      {{$t('iwork')}}
    </h1>
    <carousel
      :perPageCustom="[[320, 2], [1199, 4]]"
      :mouse-drag="true"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="2000"
      :mouseDrag="true"
    >
      <slide v-for="(skill, index) in skills" :key="index">
        <div @click="getDescription(index)" class="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-52 h-52 mx-6 space-y-6">
          <img class="w-1/2" :src="skill.image" />
          <h1 class="text-base dark:text-gray-300">{{ skill.name }}</h1>
        </div>
      </slide>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'Skills',
    components: { Carousel, Slide },
    data(){
        return{
            skills: [
                { name: "HTML", image: require("../assets/html.png")},
                { name: "CSS", image: require("../assets/css.png")},
                { name: "Tailwind CSS", image: require("../assets/tailwind.png")},
                { name: "Bootstrap", image: require("../assets/bootstrap.png")},
                { name: "Vanilla Javascript", image: require("../assets/javascript.png")},
                { name: "JQuery", image: require("../assets/jquery.png")},
                { name: "Vue JS", image: require("../assets/vue.png")},
                { name: "Laravel", image: require("../assets/laravel.png")},
                { name: "MySQL", image: require("../assets/mysql.png")},
                { name: "Android Native", image: require("../assets/android.png")},
                { name: "Flutter", image: require("../assets/flutter.png")},
                { name: "Git", image: require("../assets/git.png")}    
            ],
        }
    }
};
</script>
