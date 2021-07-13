<template>
  <div>
    <h1 class="text-center text-gray-800 pb-20 text-5xl font-extrabold">
      {{$t('iwork')}}
    </h1>
    <carousel
      :per-page="4"
      :mouse-drag="false"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="1700"
      :mouseDrag="true"
    >
      <slide v-for="(skill, index) in skills" :key="index">
        <div @click="getDescription(index)" class="rounded-full flex flex-col items-center justify-center bg-white p-8 w-52 h-52 mx-6 cursor-pointer space-y-6">
          <img class="w-1/2" :src="skill.image" />
          <h1 class="text-base">{{ skill.name }}</h1>
        </div>
      </slide>
    </carousel>
    <div class="flex flex-col justify-center items-center bg-white rounded-lg xl:w-1/2 w-full mx-auto p-8 space-y-6 mt-6">
      <div>
        <h2 class="text-center text-turquoise font-bold text-2xl">
          {{ choosenSkill.name }}
        </h2>
        <hr class="mt-2 border-gray-200">
      </div>
      <div>
        <p style="max-width:500px" class="text-center text-xl text-gray-500 leading-loose">
          {{choosenSkill.description}}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name:'Skills',
    components: { Carousel, Slide },
    data(){
        return{
            choosenSkill: {name : 'Tailwind CSS', description: 'Tailwind CSS is basically a utility-first CSS framework for rapidlybuilding custom user interfaces. It is a highly customizable,low-level CSS framework that gives you all of the building blocks youneed to build bespoke designs without any annoying opinionated stylesyou have to fight to override.'},
            skills: [
                { name: "HTML", image: require("../assets/html.png"), description : 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior (JavaScript).' },
                { name: "CSS", image: require("../assets/css.png"), description: 'Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable. CSS handles the look and feel part of a web page.' },
                { name: "Tailwind CSS", image: require("../assets/tailwind.png"), description: 'Tailwind CSS is basically a utility-first CSS framework for rapidlybuilding custom user interfaces. It is a highly customizable,low-level CSS framework that gives you all of the building blocks youneed to build bespoke designs without any annoying opinionated stylesyou have to fight to override.'},
                { name: "Bootstrap", image: require("../assets/bootstrap.png"), description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.' },
                { name: "Vanilla Javascript", image: require("../assets/javascript.png"), description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' },
                { name: "JQuery", image: require("../assets/jquery.png"), description: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites.' },
                { name: "Vue JS", image: require("../assets/vue.png"), description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. ' },
                { name: "Laravel", image: require("../assets/laravel.png"), description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony' },
                { name: "MySQL", image: require("../assets/mysql.png"), description: 'MySQL is a relational database management system based on SQL – Structured Query Language. The application is used for a wide range of purposes, including data warehousing, e-commerce, and logging applications. The most common use for mySQL however, is for the purpose of a web database.' },
                { name: "Android Native", image: require("../assets/android.png"), description: 'A native mobile app is a smartphone application that is coded in a specific programming language, such as Objective C for iOS or Java for Android operating systems. Native mobile apps provide fast performance and a high degree of reliability. ... In addition, users can use some apps without an internet connection.' },
                { name: "Flutter", image: require("../assets/flutter.png"), description: 'Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename "Sky" and ran on the Android operating system.' },
                { name: "Git", image: require("../assets/git.png"), description: 'Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.' }    
            ],
        }
    },
    methods:{
      getDescription(skill_index){
        let skill = this.skills.filter((skill, key) => key == skill_index)
        this.choosenSkill = {name : skill[0].name, description: skill[0].description}
      }
    }
};
</script>
