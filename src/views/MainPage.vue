<template>
  <div
    class="w-full lg:w-[1920px] xl:w-full md:full bg-primery1 h-screen relative p-2 lg:flex xl:flex md:hidden hidden overflow-hidden"
  >
    <div class="w-[50%] h-full flex flex-col items-center justify-center">
      <div class="w-[70%] ml-[12rem]">
        <p class="text-menu text-white text-[25px] font-NotoSansKhmer">
          ពួកយើងជួយអ្នកឱ្យ
        </p>
        <div class="py-2 font-NotoSansKhmer">
          <h1 class="text-white text-[65px] tracking-wider">
            គ្រប់គ្រងអាជីវកម្ម
          </h1>
          <br />
          <h1 class="text-white text-[65px] tracking-wider">
            របស់អ្នកងាយស្រួល
          </h1>
          <p
            class="text-menu text-[#FFD74A] text-[25px] py-3 font-NotoSansKhmer"
          >
            ប្រឹក្សា និងដោះស្រាយ ដើម្បីរីកចម្រើនជាមួយគ្នា
          </p>
          <button
            class="px-[24px] font-NotoSansKhmer active:bg-accent/70 py-[12px] duration-300 hover:bg-opacity-50 bg-[#FFD74A] text-black font-semibold text-xl rounded-full"
          >
            ទាក់ទងមកពួកយើង
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-[1260px] h-[1183px] rounded-[100%] overflow-hidden border-[14px] border-white absolute -top-10 -right-64"
    >
      <img
        class="w-full h-full object-cover rounded-[100%] overflow-auto hover:scale-105 hover:rotate-[2deg] duration-300"
        src="https://i.pinimg.com/564x/ed/96/84/ed968462bd64101a0c0b4837880fe457.jpg"
        alt=""
      />
    </div>
  </div>

  <div
    class="w-full flex flex-col justify-end lg:hidden xl:hidden md:flex h-[836px] bg-primery1 relative overflow-hidden"
  >
    <div
      class="h-[703px] w-[764px] absolute rounded-[100%] left-4 overflow-hidden border-[14px] border-white -top-32"
    >
      <img
        class="w-full h-full object-cover rounded-[100%] overflow-auto hover:scale-105 duration-300"
        src="https://i.pinimg.com/564x/ed/96/84/ed968462bd64101a0c0b4837880fe457.jpg"
        alt=""
      />
    </div>
    <div class="h-full flex flex-col justify-end ml-8 font-NotoSansKhmer">
      <div class="mb-24">
        <p class="text-menu text-white text-body">ពួកយើងជួយអ្នកឱ្យ</p>
        <div class="py-2">
          <h1 class="text-white text-heading2 tracking-wider">
            គ្រប់គ្រងអាជីវកម្ម
          </h1>
          <br />
          <h1 class="text-white text-heading2 tracking-wider">
            របស់អ្នកងាយស្រួល
          </h1>
          <p class="text-menu text-[#FFD74A] text-body py-1">
            ប្រឹក្សា និងដោះស្រាយ ដើម្បីរីកចម្រើនជាមួយគ្នា
          </p>
          <button
            class="px-[18px] py-[10px] duration-300 hover:bg-opacity-50 bg-[#FFD74A] text-black font-semibold text-xl rounded-full"
          >
            ទាក់ទងមកពួកយើង
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- out standing -->
  <div
    class="lg:w-full bg-background lg:h-[95vh] xl:h-auto md:h-auto h-auto py-6"
  >
    <div class="lg:w-[1500px] xl:w-[1500px] md:w-full w-full mx-auto py-4">
      <p
        class="lg:text-heading2 xl:text-heading2 md:text-heading2 text-heading4 font-NotoSansKhmer lg:ml-0 xl:ml-0 md:ml-4 ml-4"
      >
        Out Standing Product
      </p>
    </div>
    <div
      class="lg:w-[1500px] xl:w-[1500px] md:w-full w-full mx-auto scrollbar-hide overflow-auto gap-6 flex lg:p-0 xl:p-0 md:p-3 p-3"
    >
      <div
        v-for="cart in products"
        :key="cart"
        class="lg:w-[400px] xl:w-[400px] lg:h-[600px] xl:h-[600px] w-[364px] h-[450px] rounded-[6px] overflow-hidden flex-none relative group"
      >
        <div
          class="w-full lg:h-[70%] xl:h-[70%] md:h-[313.27px] h-[313.27px] shadow-md group"
        >
          <img
            :src="cart.image"
            class="rounded-[6px] w-full h-full object-cover"
          />
        </div>
        <div
          class="w-[90%] h-[35%] lg:p-3 xl:p-3 md:p-5 p-5 text-body bottom-20 right-5 group-hover:bottom-24 absolute bg-background/60 group-hover:bg-background/90 duration-300 backdrop-blur-md shadow-md rounded-md"
        >
          <h2 class="text-heading4 py-2 font-semibold">{{ cart.name }}</h2>
          <p
            class="lg:text-[16px] xl:text-[16px] text-sm font-semibold font-NotoSansKhmer"
          >
            {{ cart.descritpts }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- partner -->
  <div
    class="lg:w-[1920px] xl:w-full md:w-full w-full lg:h-[80vh] xl:h-[80vh] md:h-auto bg-primery1 bg-opacity-50 h-auto py-4 relative"
  >
    <div class="w-full mt-4">
      <h1
        class="text-center text-white lg:text-Heading1 xl:text-Heading1 md:text-heading4 text-heading3"
      >
        Meet our partner
      </h1>
    </div>
    <div
      class="lg:w-[70%] xl:w-[70%] w-[90%] h-[100%] xl:p-0 lg:p-0 md:p-0 p-2 mx-auto grid grid-cols-3 items-center justify-center gap-3 lg:mt-10 xl:mt-10 md:mt-10 mt-8 bg-background bg-opacity-50 backdrop-blur-md shadow-md rounded-[6px]"
    >
      <div
        class="w-full flex item-center justify-center lg:grayscale xl:grayscale lg:opacity-45 xl:opacity-45 lg:hover:opacity-100 lg:hover:grayscale-0 xl:hover:opacity-100 xl:hover:grayscale-0 duration-300"
      >
        <img
          class="lg:w-[170px] rounded-full lg:h-[170px] xl:w-[170px] xl:h-[170px] md:w-32 md:h-32 w-16 h-16 object-cover"
          src="../assets/image/master-it 1.png"
          alt=""
        />
      </div>
      <div
        class="w-full flex item-center justify-center lg:grayscale xl:grayscale lg:opacity-45 xl:opacity-45 lg:hover:opacity-100 lg:hover:grayscale-0 xl:hover:opacity-100 xl:hover:grayscale-0 duration-300"
      >
        <img
          class="lg:w-[170px] lg:h-[170px] xl:w-[170px] xl:h-[170px] md:w-32 md:h-32 w-16 h-16 object-cover"
          src="../assets/image/master-it 2.png"
          alt=""
        />
      </div>
      <div
        class="w-full flex item-center justify-center lg:grayscale xl:grayscale lg:opacity-45 xl:opacity-45 lg:hover:opacity-100 lg:hover:grayscale-0 xl:hover:opacity-100 xl:hover:grayscale-0 duration-300"
      >
        <img
          class="lg:w-[170px] lg:h-[170px] xl:w-[170px] xl:h-[170px] md:w-32 md:h-32 w-16 h-16 object-cover"
          src="../assets/image/master-it 3.png"
          alt=""
        />
      </div>
      <div
        class="w-full flex item-center justify-center lg:grayscale xl:grayscale lg:opacity-45 xl:opacity-45 lg:hover:opacity-100 lg:hover:grayscale-0 xl:hover:opacity-100 xl:hover:grayscale-0 duration-300"
      >
        <img class="w-[170px]" src="../assets/partner/p4.png" alt="" />
      </div>
      <div
        class="w-full flex item-center justify-center lg:grayscale xl:grayscale lg:opacity-45 xl:opacity-45 lg:hover:opacity-100 lg:hover:grayscale-0 xl:hover:opacity-100 xl:hover:grayscale-0 duration-300"
      >
        <img
          class="lg:w-[170px] lg:h-[170px] xl:w-[170px] xl:h-[170px] md:w-32 md:h-32 w-16 h-16 object-cover"
          src="../assets/partner/p5.png"
          alt=""
        />
      </div>
      <div
        class="w-full flex item-center justify-center lg:grayscale xl:grayscale lg:opacity-45 xl:opacity-45 lg:hover:opacity-100 lg:hover:grayscale-0 xl:hover:opacity-100 xl:hover:grayscale-0 duration-300"
      >
        <img
          class="lg:w-[170px] lg:h-[170px] xl:w-[170px] xl:h-[170px] md:w-32 md:h-32 w-16 h-16 object-cover"
          src="../assets/partner/p7.png"
          alt=""
        />
      </div>
    </div>
  </div>

  <!-- FAQS -->
  <div
    class="lg:w-[1920px] h-screen xl:w-full md:w-full w-full lg:py-16 xl:py-16 md:py-2 py-2 flex items-center justify-center"
  >
    <div
      class="lg:w-[70%] xl:w-[70%] md:w-full w-full p-5 mx-auto animation-duration-300 animation-ease-in-out"
    >
      <div
        class="w-full lg:flex xl:flex md:block block items-center justify-between py-4"
      >
        <img src="../assets/webiste/faq.png" alt="" />
        <div class="grid grid-cols-1 gap-y-4 font-NotoSansKhmer">
          <div
            v-for="qanda in dataitem"
            :key="qanda"
            class="lg:w-[400px] lg:h-[250px] xl:w-[400px] xl:h-auto md:w-[400px] md:h-[250px] w-full rounded-[6px] duration-300 shadow-md text-heading3"
          >
            <Accordion>
              <AccordionTab :header="qanda.question">
                <p
                  class="m-0 font-NotoSansKhmer text-textbody font-semibold text-body"
                >
                  {{ qanda.answer }}
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getCollectionQuery } from "@/composible/getCollection";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
export default {
  components: {
    Accordion,
    AccordionTab,
  },
  setup() {
    const dataitem = ref([]);
    const products = ref([]);
    const getData = async () => {
      try {
        await getCollectionQuery(
          "FAQ",
          [],
          (data) => {
            dataitem.value = data;
          },
          true
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    onMounted(() => {
      getData();
      getDataProduct();
    });
    const getDataProduct = async () => {
      try {
        await getCollectionQuery(
          "products",
          [],
          (data) => {
            products.value = data;
          },
          true
        );
      } catch (error) {
        console.error(error.message);
      }
    };

    return { dataitem, products };
  },
};
</script>

<style>
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
