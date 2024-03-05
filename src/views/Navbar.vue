<template>
  <div
    class="w-full bg-white flex lg:h-[192px] shadow-md xl:h-[192px] md:h-[192px] h-[70px] fixed top-0 z-50"
  >
    <div
      class="w-full bg-background duration-300 fixed top-16 h-screen p-5 z-50 right-0"
      :class="{ '-translate-x-[100%] duration-300': isOpenMenuMobile }"
    >
      <ul class="w-36 flex flex-col font-NotoSansKhmer">
        <router-link
          to="/"
          class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
        >
          Home
        </router-link>
        <router-link
          to="/aboutUs"
          class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
        >
          About Us
        </router-link>
        <router-link
          to="/productsandservices"
          class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
        >
          Services
        </router-link>
        <router-link
          to="/contact"
          class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
        >
          Contact
        </router-link>
      </ul>
    </div>
    <div
      class="w-full max-w-[1420px] flex items-center justify-between mx-auto"
    >
      <div class="lg:hidden xl:hidden md:flex flex w-full items-center">
        <div class="flex h-full w-full gap-2 items-center justify-center">
          <img
            class="lg:w-[90px] lg:h-[90px] xl:w-[90px] md:w-[90px] md:h-[90px] w-[40px] lg:block"
            src="../assets/image/image 5.png"
            alt=""
          />
          <h1 class="text-heading3 text-primery1">Master-IT System</h1>
        </div>
        <div
          @click.prevent="handleOpenMenuMobile"
          class="flex items-center justify-center cursor-pointer"
        >
          <svg
            v-if="isOpenMenuMobile == true"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            viewBox="0 0 24 24"
          >
            <path fill="#500192" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-8 h-8 text-primery1"
          >
            <path
              d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
            />
          </svg>
        </div>
      </div>
      <div
        class="flex transition-all duration-300 items-center lg:justify-start xl:justify-start md:justify-center justify-center gap-2 ml-4"
      >
        <img
          class="lg:w-[90px] lg:h-[90px] xl:w-[90px] md:w-[90px] md:h-[90px] w-[40px] lg:block xl:block md:hidden hidden"
          src="../assets/image/image 5.png"
          alt=""
        />
        <!-- <h1 class="text-primery1">Master-IT System</h1> -->
      </div>
      <div
        class="lg:flex xl:flex md:hidden hidden items-center gap-[42px] mr-4 justify-end font-NotoSansKhmer"
      >
        <router-link class="text-menu" to="/">Home</router-link>
        <router-link class="text-menu" to="/aboutUs">About Us</router-link>
        <router-link class="text-menu" to="/productsandservices"
          >Services</router-link
        >
        <router-link class="text-menu" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const isOpenMenuMobile = ref(true);
    const handleOpenMenuMobile = () => {
      isOpenMenuMobile.value = !isOpenMenuMobile.value;
    };
    return { handleOpenMenuMobile, isOpenMenuMobile };
  },
};
</script>

<style>
.router-link-active {
  border-bottom: 3px #500192 solid;
  display: inline-block;
}
</style>
