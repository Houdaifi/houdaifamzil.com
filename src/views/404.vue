<template>
  <div class="flex justify-center items-center py-36">
      
    <div class="flex flex-col items-center space-y-11">
        <h1 class="text-9xl  font-extrabold dark:text-gray-300">404</h1>

        <p class="text-xl xl:text-3xl dark:text-gray-300 text-center font-extralight"> {{ $t('NotFound') }} </p>

        <button class="rounded-lg w-80 bg-fakhti hover:bg-turquoise py-4 px-8 text-base text-white font-normal" @click="goHome">
            {{$t('Back')}} <i class="fas fa-arrow-right ml-2"></i>
        </button>
    </div>

  </div>
</template>

<script>
export default {
    methods:{
        goHome(){
            this.$router.push({ name: 'Home' })
        },
    }
}
</script>
