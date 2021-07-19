<template>
  <div id="app" class="bg-gray-50 text-gray-800">
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
html {
  scroll-behavior: smooth;
}
</style>
