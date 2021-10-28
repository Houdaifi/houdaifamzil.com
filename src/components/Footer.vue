<template>
  <div class="bg-white dark:bg-gray-700 w-full h-52 shadow flex flex-col lg:flex-row justify-between items-center py-4 px-0 sm:px-52 mt-12">
    <div class="flex flex-col">
        <div><h4 class="text-xl mb-2 dark:text-gray-300">Contact me:</h4></div>
        <hr class="mb-4">
        <div class="md:text-xl mb-1 text-gray-500 dark:text-gray-400 xl:leading-loose xl:tracking-tight">
            <h6>{{$t('Phone')}}: <a class="hover:text-turquoise" href="tel:0634896998">{{$t('PhoneNumber')}}</a></h6>
        </div>
        <div class="md:text-xl text-gray-500 dark:text-gray-400 xl:leading-loose xl:tracking-tight">
            <h6>{{$t('Email')}}: <a class="hover:text-turquoise" href="mailto:houdaifaamzil@gmail.com">houdaifaamzil@gmail.com</a></h6>
        </div>
    </div>
    <div>
        <v-links/>
    </div>
  </div>
</template>


<script>
import VLinks from "./links.vue"

export default {
    name: 'VFooter',
    components:{VLinks}
}
</script>