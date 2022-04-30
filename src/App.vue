<template class="dark font-sans">
  <div id="app" class="bg-gray-50 text-gray-800 dark:bg-coolGray-800">
    <div class="container mx-auto px-12 p-4 pt-6">
      <v-navbar />
      <router-view />
    </div>
    <v-footer/>
  </div>
</template>

<script>
import VNavbar from "./components/Navbar.vue";
import VFooter from "./components/Footer.vue"
export default {
  components: { VNavbar, VFooter}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}
</style>
