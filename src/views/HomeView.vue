<template>
  <div class="w-full flex flex-col">
    <div>
      <NavbarVue />
    </div>
    <div class="mb-auot my-2">
      <MainPageVue />
    </div>
    <div><Footer /></div>
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
