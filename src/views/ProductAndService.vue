<template>
  <div class="flex flex-col">
    <div class="lg:w-[1920px] xl:w-full md:w-full w-full h-auto py-3">
      <div class="lg:w-[1420px] xl:w-[1420px] w-full md:w-full mx-auto">
        <div class="lg:mt-10 xl:mt-10 md:mt-32 mt-14 text-center">
          <div class="lg:mt-10 xl:mt-10 md:mt-32 mt-14 text-center py-4">
            <h1 class="font-NotoSansKhmer text-primery1">
              ផលិតផល និងសេវាកម្មយើង
            </h1>
            <h1 class="text-primery1 font-NotoSansKhmer">
              Our Product and Service
            </h1>
          </div>
          <div class="w-full">
            <div class="w-[80%] mx-auto py-4">
              <p
                class="text-body lg:text-heading4 xl:text-heading4 md:text-heading4 text-textbody text-center font-NotoSansKhmer"
              >
                ម៉ាស្ទ័រអាយធី ស៊ីស្ទីម ផ្ដល់ដំណោះស្រាយផ្នែកបច្ចេកវិទ្យា
                តាមរយៈការផ្គត់ផ្គង់ប្រព័ន្ធគ្រប់គ្រងសម្រាប់អាជីវកម្ម
                គ្រប់ប្រភេទរៀបចំ បង្កើតគេហទំព័រ និងប្រព័ន្ធគ្រប់គ្រងទិន្នន័យថ្មី
                តាមតម្រូវការ។
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="lg:w-[1420px] xl:w-[1420px] w-full md:w-full mx-auto grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4"
      >
        <!-- system -->
        <div
          v-for="cart in category"
          :key="cart"
          class="flex w-full items-center justify-center"
        >
          <div
            class="lg:w-[445px] xl:w-[445px] lg:h-[640px] xl:h-[640px] ms:w-[90%] w-[90%] rounded-md bg-white shadow-md hover:shadow-lg duration-300"
          >
            <div class="relative h-[400px] w-full rounded-md">
              <img
                class="h-[99%] w-full rounded-md object-cover"
                :src="cart.image"
              />
              <div class="absolute bottom-0 h-auto w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fill-opacity="1"
                    d="M0,128L60,149.3C120,171,240,213,360,197.3C480,181,600,107,720,64C840,21,960,11,1080,48C1200,85,1320,171,1380,213.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="p-3">
              <h1 class="text-2xl font-bold text-primery1 py-2">
                {{ cart.name }}
              </h1>
              <div class="w-full h-[100px] inline-block">
                <h1 class="text-lg font-semibold text-gray-500">
                  {{ cart.description }}
                </h1>
              </div>

              <div class="w-full h-[70px] flex items-center justify-start">
                <button
                  @click="handleGotoSystenDev"
                  class="mt-4 rounded-md border-2 px-[24px] py-[7px] text-xl text-gray-500 hover:bg-primery1 duration-300 hover:text-white"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const category = ref([]);
    const getData = async () => {
      try {
        await getCollectionQuery(
          "categories",
          [],
          (data) => {
            category.value = data;
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
    const router = useRouter();
    const handleGotoSystenDev = () => {
      router.push({ name: "systemdev" });
    };
    const handleGotoWebDev = () => {
      router.push({ name: "websitedev" });
    };
    const handleGotoCms = () => {
      router.push({ name: "BussinessManangerDevelopmentVue" });
    };
    return { handleGotoSystenDev, handleGotoWebDev, handleGotoCms, category };
  },
};
</script>
