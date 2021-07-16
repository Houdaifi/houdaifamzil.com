<template>
  <nav class="flex flex-nowrap justify-between items-center text-gray-700 xl:text-xl text-base pb-8 xl:pb-12 flex-col lg:flex-row lg:space-y-0 space-y-5">
    <div>
      <h1 @click="goToRouter('Home')" style="font-family: 'Fuggles', cursive;" class="text-6xl tracking-wider font-extralight cursor-pointer">
        Amzil Houdaifa
      </h1>
    </div>
    <div>
      <router-link class="pr-8 font-light hover:text-gray-500" to="/">{{$t('Home')}}</router-link>
      <a href="" v-show="IamNotInHome" @click.prevent="goTo('skills')" class="pr-8 font-light hover:text-gray-500">{{$t('Skills')}}</a>
      <router-link class="pr-8 font-light hover:text-gray-500" to="projects">{{$t('Projects')}}</router-link>
      <router-link class="pr-8 font-light hover:text-gray-500" to="/resume">{{$t('Resume')}}</router-link>
      <button class="rounded-lg bg-turquoise hover:bg-fakhti py-2 px-4 text-base text-white font-semibold" @click="goToRouter('Contact')">
        {{$t('Contact')}}
      </button>
      <v-drop-down ref="dropDown" class="pl-12">
          <div slot="trigger">
            <flag class="text-xl" :iso="choosenLanguage" />
          </div>
          <div slot="menu">
            <div class="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 px-6 py-2"
              v-for="(language, index) in languages"
              :key="index"
              @click="changeLocale(index)">
              <div>
                <flag class="text-lg" :iso="language.flag" />
              </div>
              <div class="text-sm">{{ language.title }}</div>
            </div>
          </div>
        </v-drop-down>
    </div>
  </nav>
</template>


<script>
import i18n from "../i18n.js"
import VDropDown from "./DropDown.vue";

export default {
    name:'VNavbar',
    components:{VDropDown},
    data(){
      return{
        IamNotInHome: true,
        choosenLanguage: "",
        languages: [
          // { flag: 'ma', language: 'ma', title: 'Tifinagh' },
          { id: 0, flag: "gb", language: "en", title: "English" },
          { id: 1, flag: "sa", language: "ar", title: "Arabic" },
          { id: 2, flag: "fr", language: "fr", title: "French" },
          { id: 3, flag: "es", language: "es", title: "Spanish" },
        ],
      }
    },
    watch:{
        $route (to){
            if(to.path != "/"){
              this.IamNotInHome = false
            }else{
              this.IamNotInHome = true
            }
        }
    },
    methods: {
      changeLocale(index) {
        i18n.locale = this.languages[index].language
        this.choosenLanguage = this.languages[index].flag
        this.$store.commit('ToggleIsTranslated')
        this.$refs.dropDown.hide()
      },
      goTo(destination){
        var elementPosition = document.getElementById(destination).offsetTop
        window.scrollTo(0, elementPosition)
      },
      goToRouter(destination){
        this.$router.push({ name: destination })
      }
    },
    mounted() {
      this.choosenLanguage = 'gb'
    }
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fuggles&display=swap");
</style>