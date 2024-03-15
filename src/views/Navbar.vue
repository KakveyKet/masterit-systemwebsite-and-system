<template>
  <div
    :class="{
      'w-full  duration-300 shadow-md bg-white  flex lg:h-[110px] items-center justify-center  xl:h-[100px] md:h-[100px] h-[70px] sticky top-0 z-[80]':
        isScrolled,

      'w-full bg-white flex lg:h-[192px] duration-300 items-center justify-center shadow-md xl:h-[192px] md:h-[192px] h-[70px] sticky top-0 z-[80]':
        !isScrolled,
    }"
  >
    <div
      :class="{
        'duration-300 w-full bg-transparent max-w-[1420px] flex items-center justify-between mx-auto z-[90]':
          isScrolled,
        'w-full duration-300 bg-transparent max-w-[1420px] flex items-center justify-between mx-auto z-[90]':
          !isScrolled,
      }"
    >
      <div class="lg:hidden xl:hidden md:flex flex w-full items-center">
        <div class="flex h-full w-full gap-2 items-center justify-center">
          <img
            class="lg:w-[90px] lg:h-[90px] xl:w-[90px] md:w-[90px] md:h-[90px] w-[40px] lg:block"
            src="../assets/image/image 5.png"
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
        <router-link class="text-menu py-2" to="/mainpage"
          >ទំព័រដើម</router-link
        >
        <router-link class="text-menu py-2" to="/aboutUs"
          >អំពីពួកយើង</router-link
        >
        <router-link class="text-menu py-2" to="/productsandservices"
          >សេវាកម្ម</router-link
        >
        <router-link class="text-menu py-2" to="/contact"
          >ទំនាក់ទំនង
        </router-link>
      </div>
    </div>
  </div>
  <div
    :class="{
      '-translate-x-[100%] duration-300 sticky w-full bg-background h-0 flex justify-end  z-[100] ':
        isOpenMenuMobile,
      ' w-full bg-background duration-300 sticky top-16 h-screen p-5 z-[100] flex justify-end right-0 ':
        !isOpenMenuMobile,
    }"
  >
    <ul class="w-[180px] text-end flex flex-col font-NotoSansKhmer">
      <router-link
        to="/mainpage"
        @click.prevent="handleOpenMenuMobile"
        class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
      >
        Home
      </router-link>
      <router-link
        to="/aboutUs"
        @click.prevent="handleOpenMenuMobile"
        class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
      >
        About Us
      </router-link>
      <router-link
        @click.prevent="handleOpenMenuMobile"
        to="/productsandservices"
        class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
      >
        Our Services
      </router-link>
      <router-link
        @click.prevent="handleOpenMenuMobile"
        to="/contact"
        class="text-heading4 text-primery1 font-bold hover:text-primery1/70 duration-300 px-[24px] py-[12px]"
      >
        Contact
      </router-link>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = scrollY;
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
    return { handleOpenMenuMobile, isOpenMenuMobile, isScrolled, handleScroll };
  },
};
</script>

<style>
.router-link-active {
  border-bottom: 3px #500192 solid;
  display: inline-block;
}
</style>
