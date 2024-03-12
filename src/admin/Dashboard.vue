<template>
  <div class="w-[1920px] h-screen bg-background">
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
  </div>
  <div>
    <div
      class="w-full bg-background h-8 flex items-center fixed bottom-2 border-t-2 border-primery1 z-50"
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
import { useRouter } from "vue-router";
import NavbarVue from "./Navbar.vue";
import FooterVue from "../admin/Footer.vue";
export default {
  components: { NavbarVue, FooterVue },
  setup() {
    const router = useRouter();
    const handleGotoService = () => {
      router.push({ name: "services" });
    };

    return {
      handleGotoService,
    };
  },
};
</script>
