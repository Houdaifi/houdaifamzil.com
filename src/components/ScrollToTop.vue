<template>
  <div v-show="visible">
    <div class="relative cursor-pointer" @click="scrollToTop">
        <div class="fixed rounded-full h-12 w-12 2xl:h-16 2xl:w-16 flex items-center justify-center right-4 bottom-20 xl:bottom-24 bg-turquoise text-white">
            <i class="fas fa-chevron-up"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ScrollToTop',
    data(){
        return{visible:false}
    },
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0)
        },
        scrollListener: function () {
            this.visible = window.scrollY > 150
        }
    }
}
</script>