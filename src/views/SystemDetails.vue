<template>
  <div class="flex flex-col">
    <div v-if="product">
      <div
        class="w-full md:w-full xl:w-[1420px] lg:w-[1420px] mx-auto space-y-4"
      >
        <div
          v-motion-slide-left
          class="lg:mt-52 xl:mt-52 md:mt-32 mt-20 text-start lg:p-0 xl:p-0 p-3 md:p-3"
        >
          <h1 class="font-NotoSansKhmer text-primery1">
            {{ product.name }}
          </h1>
        </div>

        <div
          v-motion-slide-left
          class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3"
        >
          <p class="text-textbody font-semibold text-body">
            {{ product.descritpts }}
          </p>
        </div>

        <!-- taiils -->
        <div
          v-for="(productfeatures, index) in product.feature"
          :key="index"
          class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3 space-y-4"
        >
          <!-- details1 -->

          <div
            v-motion-slide-left
            :class="{
              'w-full lg:flex lg:flex-row  xl:flex xl:flex-row md:flex md:flex-col-reverse  flex flex-col-reverse items-start justify-center  space-y-4 gap-12 py-3':
                index % 2 === 0,
              'w-full lg:flex lg:flex-row-reverse xl:flex-row-reverse xl:flex md:flex md:flex-col-reverse flex flex-col-reverse items-start justify-center space-y-4 gap-12 py-3':
                index % 2 !== 0,
            }"
          >
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <h2
                class="text-textbody font-NotoSansKhmer text-heading3 font-semibold"
              >
                {{ productfeatures.title }}
              </h2>
              <div class="flex flex-col items-center justify-center w-[90%]">
                <p class="text-body font-NotoSansKhmer">
                  {{ productfeatures.details }}
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <img class="w-full rounded-[6px]" :src="productfeatures.image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterVue from "./Footer.vue";
import NavbarVue from "./Navbar.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { projectFirestore } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
export default {
  props: {
    id: String,
  },
  components: {
    FooterVue,
    NavbarVue,
  },
  setup(props) {
    const product = ref(null);

    const fetchProduct = async () => {
      try {
        const productRef = doc(projectFirestore, "products", props.id);
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          product.value = docSnap.data();
        } else {
          console.error(`Product with ID ${props.id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    onMounted(() => {
      fetchProduct();
    });

    return { product };
  },
};
</script>
