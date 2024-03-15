<template>
  <div class="flex flex-col">
    <div>
      <div
        class="w-full md:w-full xl:w-[1420px] lg:w-[1420px] mx-auto space-y-4"
      >
        <div class="lg:mt-10 xl:mt-10 md:mt-32 mt-14 text-start py-4">
          <h1 class="font-NotoSansKhmer text-primery1">
            ប្រព័ន្ធគ្រប់គ្រងអាជីវកម្ម (Business Management System)
          </h1>
        </div>
        <div class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3">
          <p class="text-textbody font-semibold text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
            arcu bibendum at varius vel pharetra. Sit amet consectetur
            adipiscing elit. Odio euismod lacinia at quis.
          </p>
        </div>
        <div class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3 p">
          <div
            class="w-full lg:columns-3 xl:columns-3 md:columns-2 columns-1 space-y-4 py-4"
          >
            <div
              v-for="products in dataitem"
              :key="products"
              class="group relative w-full"
            >
              <div
                class="absolute lg:block xl:block md:block hidden h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
              >
                <div
                  class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
                ></div>

                <div class="flex justify-center items-end w-full h-[80%]">
                  <div
                    class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                  >
                    <p
                      class="translate-y-10 group-hover:translate-y-0 duration-300"
                    >
                      {{ products.name }}
                    </p>
                  </div>
                </div>
                <router-link
                  v-if="products && products.id"
                  :to="{
                    name: 'systemdetails',
                    params: { id: products.id },
                  }"
                  class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </router-link>
              </div>
              <div
                class="absolute lg:hidden xl:hidden md:hidden group py-3 group-active:bg-primery1/80 cursor-pointer bg-primery1 bottom-0 w-full bg-opacity-50 rounded-bl-[6px] rounded-br-[6px] flex items-center justify-end"
              >
                <div class="w-full relative">
                  <h2 class="text-body text-center text-background">
                    {{ products.name }}
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-white absolute top-0 right-3 group-hover:translate-x-2 duration-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="w-full h-full">
                <img class="w-full rounded-md" :src="products.image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const dataitem = ref([]);
    const getData = async () => {
      try {
        await getCollectionQuery(
          "products",
          [],
          (data) => {
            dataitem.value = data.filter((item) => item.type === "BMS");
          },
          true
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    onMounted(() => {
      getData();
    });
    return { dataitem };
  },
};
</script>
