<template>
  <div class="w-[1920px] h-screen bg-background relative">
    <div
      v-if="isLogout == true"
      class="fixed top-0 bg-black/35 w-full h-screen z-[30] flex items-center justify-center"
    >
      <div
        v-motion-slide-top
        class="w-[350px] bg-background font-NotoSansKhmer rounded-md shadow-md p-3"
      >
        <h2 class="text-heading4 font-semibold text-primery1">
          Are you sure to logout ?
        </h2>
        <div class="flex items-center gap-3">
          <button
            class="btndynamic border-primery1 border-2 mt-2 px-4 py-2 duration-200"
            @click="handleLogout"
          >
            No
          </button>
          <button
            @click="handleSignOut"
            class="btndynamic bg-red-500 text-white border-red-500 border-2 mt-2 px-4 py-2 duration-200"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
    <div class="w-full">
      <NavbarVue />
    </div>
    <div class="w-full flex h-[80%] flex-col items-center justify-center">
      <div v-motion-slide-top class="w-[60%] h-[60%] columns-3">
        <router-link to="/services" class="m-2">
          <button class="btn bg-primery1">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-[45px]"
              >
                <path
                  d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"
                />
                <path
                  d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"
                />
              </svg>
            </span>
            <h2 class="text-heading2 font-semibold">Service</h2>
          </button>
        </router-link>
        <router-link to="/" class="m-2">
          <button class="btn bg-primery1">
            <font-awesome-icon icon="circle-info" class="w-[45px] h-[45px]" />
            <h2 class="text-heading2 font-semibold">Company Infor</h2>
          </button>
        </router-link>
        <router-link to="/qanda" class="m-2">
          <button class="btn bg-primery1">
            <font-awesome-icon
              icon="circle-question"
              class="w-[45px] h-[45px]"
            />
            <h2 class="text-heading2 font-semibold">FAQ</h2>
          </button>
        </router-link>
        <router-link to="/" class="m-2">
          <button class="btn bg-primery1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-[45px] h-[45px]"
            >
              <path
                d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
              />
            </svg>
            <h2 class="text-heading2 font-semibold">Team Member</h2>
          </button>
        </router-link>
        <router-link to="/partner" class="m-2">
          <button class="btn bg-primery1">
            <font-awesome-icon
              class="w-[45px] h-[45px]"
              icon="handshake-simple"
            />
            <h2 class="text-heading2 font-semibold">Partner</h2>
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="flex absolute bottom-12 right-2 px-4 py-3 items-center justify-center gap-3 bg-primery1 p-2 rounded-full cursor-pointer"
    >
      <button @click="handleLogout" class="px-3 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            d="M23.992 6H6v36h18m9-9l9-9l-9-9m-17 8.992h26"
          />
        </svg>
      </button>
    </div>
  </div>
  <div>
    <div
      class="w-full bg-background h-8 flex items-center fixed bottom-2 border-t-2 border-primery1 z-[20]"
    >
      <h2
        class="text-body uppercase font-bold ml-4 text-primery1 font-NotoSansKhmer"
      >
        Master IT Systen
      </h2>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import NavbarVue from "./Navbar.vue";
import FooterVue from "../admin/Footer.vue";
import { projectAuth } from "@/firebase/config";

export default {
  components: { NavbarVue, FooterVue },
  setup() {
    const router = useRouter();
    const handleGotoService = () => {
      router.push({ name: "services" });
    };
    const handleSignOut = async () => {
      try {
        await projectAuth.signOut();
        console.log("Sign-out successful");
        router.push({ name: "login" });
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };
    const isLogout = ref(false);
    const handleLogout = () => {
      isLogout.value = !isLogout.value;
    };
    return {
      handleGotoService,
      handleSignOut,
      isLogout,
      handleLogout,
    };
  },
};
</script>
