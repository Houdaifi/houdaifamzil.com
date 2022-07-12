<template>
  <div>
    <h1 class="text-center text-gray-800 dark:text-gray-300 pb-20 text-5xl font-extrabold">
      {{$t('iwork')}}
    </h1>
    <carousel
      :perPageCustom="[[320, 1],[900, 3], [1199, 4]]"
      :mouse-drag="true"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="800"
      :autoplayTimeout="3000"
      :autoplayHoverPause="false"
    >
      <slide v-for="(skill, index) in skills" :key="index">
        <div class="rounded-full flex flex-col items-center justify-center bg-white dark:bg-gray-700 p-8 w-48 h-48 lg:w-52 lg:h-52 mx-6 space-y-6">
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
                { name: "Vanilla JavaScript", image: require("../assets/javascript.png")},
                { name: "TypeScript", image: require("../assets/typescript.png")},
                { name: "JQuery", image: require("../assets/jquery.png")},
                { name: "Vue JS", image: require("../assets/vue.png")},
                { name: "React JS", image: require("../assets/reactjs.png")},
                { name: "Redux", image: require("../assets/redux.png")},
                { name: "Laravel", image: require("../assets/laravel.png")},
                { name: "Node JS", image: require("../assets/nodejs.png")},
                { name: "Express JS", image: require("../assets/express.png")},
                { name: "Java", image: require("../assets/java.png")},
                { name: "MySQL", image: require("../assets/mysql.png")},
                { name: "Mongo DB", image: require("../assets/mongo_db.png")},
                { name: "Squelize", image: require("../assets/sequelize.png")},
                { name: "Redis", image: require("../assets/redis.png")},
                { name: "NPM", image: require("../assets/npm.png")},
                { name: "Webpack", image: require("../assets/webpack.png")},
                { name: "Git", image: require("../assets/git.png")},
            ],
        }
    }
};
</script>
