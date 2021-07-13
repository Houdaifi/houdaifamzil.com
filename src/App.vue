<template>
  <div id="app" class="bg-gray-50">
    <div class="container mx-auto px-12 p-4 pt-6">
      <v-navbar />
      <router-view />
    </div>
  </div>
</template>


<script>
import VNavbar from "./components/Navbar.vue";

export default {
  components: { VNavbar},
  data() {
    return {
      
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
