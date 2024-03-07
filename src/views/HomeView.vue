<template>
  <div>
    <NavbarVue />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavbarVue from "@/views/Navbar.vue";
import Footer from "./Footer.vue";
import MainPageVue from "./MainPage.vue";
export default {
  components: {
    NavbarVue,
    MainPageVue,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>
