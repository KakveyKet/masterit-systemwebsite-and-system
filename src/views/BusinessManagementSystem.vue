<template>
  <div class="flex flex-col">
    <div><NavbarVue /></div>
    <div>this is</div>
    <div><FooterVue /></div>
  </div>
</template>

<script>
import FooterVue from "./Footer.vue";
import NavbarVue from "./Navbar.vue";
export default {
  components: {
    FooterVue,
    NavbarVue,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
